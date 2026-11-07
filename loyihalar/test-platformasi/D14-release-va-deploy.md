# D14 · Release va deploy

Standart: [D14 — Release va deploy tartibi](../../D14-release-va-deploy.md). Misol loyiha: [Test Platformasi](index.md).

Frontend misollari real repozitoriydan (`test-uzedu-user`). Backend deploy, migratsiyalar va backup — `[TO'LDIRILSIN: backend]`.

## Real frontend pipeline qanday ishlaydi

Manba: `.gitlab-ci.yml`, `Dockerfile`, `nginx.conf`, `angular.json`.

- **`dev` branch:**
  1. `npm run staging-uzinfocom` bilan build;
  2. nginx image yig'iladi va Harbor registry'ga yuboriladi;
  3. `deploy` job GitOps repozitoriysidagi `kustomization.yaml` da image tegini yangilaydi — staging avtomatik yangilanadi.
- **`main` branch:**
  1. `npm run production-uzinfocom` bilan build;
  2. alohida image (`Dockerfile.prod` bilan) yig'iladi;
  3. `deploy_prod` — qo'lda tasdiqlanadigan job (`when: manual`): SSH orqali prod serverga kirib `docker compose pull` va `up` qiladi.
- **Mijozlar:** har mijozning API manzili build vaqtida kiritiladi (`angular.json` dagi `fileReplacements`, `src/environments/<mijoz>/`). Pipeline faqat uzinfocom konfiguratsiyasini yig'adi, `nginx.conf` ham `index.uzinfocom.html` ni beradi.

## Standart bilan solishtirganda

| Qoida | Real repoda | Standart bo'yicha nima qo'shilardi |
| --- | --- | --- |
| Muhitlar ajratilgan (3-bo'lim) | `dev` → staging, `main` → prod | — (mos) |
| Staging'ga avtomatik deploy | Ha, GitOps orqali | — (mos) |
| Konfiguratsiya kodda (3) | Staging — GitOps repoda; prod — SSH va serverdagi `docker compose` | Prod'ni ham GitOps'ga o'tkazish yoki compose faylini repoda yuritish |
| Prod deploy qo'lda tasdiq bilan (9) | `deploy_prod` — `when: manual` | — (mos); job'ni kim ishga tushira olishini protected environment bilan cheklash |
| Bitta artefakt (2) | Staging va prod uchun alohida build; API manzili build vaqtida kiritiladi | Muhit sozlamasini ishga tushishda yuklash (masalan, image ichidagi `config.json` ni deploy paytida almashtirish). Shunda staging'da tekshirilgan image prod'ga chiqadi. Hozircha — prod build staging'da tekshirilgan commit'dan, risk reestrga |
| Versiyalash (4) | `package.json` da `0.0.0`; git teglar yo'q; image tegi — build sanasi (`BUILD_DATE`) | SemVer teg, image tegi = versiya + SHA |
| Rollback (11–12) | Avtomatik rollback yo'q. Image tegi `tag.txt` artefaktida, u 10 daqiqada o'chadi (`expire_in: 10 minutes`) — oldingi tegni keyin topish qiyin | Teglarni release notes va deploy yozuvida saqlash; `deploy_prod` ga oldingi tegni qo'lda berish imkoniyati (`ROLLBACK_TAG` o'zgaruvchisi); staging'da sinash |
| Testlar deploy'dan oldin | Pipeline'da test bosqichi yo'q ([D13](../../D13-test-strategiyasi.md)) | `build_job` faqat test job'laridan keyin ([test rejasi](D13-test-rejasi.md), CI job namunasi) |
| `Dockerfile.prod` | Pipeline unga murojaat qiladi, lekin repoda (lokal nusxadagi hech bir branch tarixida) bunday fayl yo'q | [TO'LDIRILSIN: prod image qayerdan yig'iladi — fayl boshqa joydami yoki prod pipeline boshqacha ishlaydimi] |
| Boshqa mijozlar (argos, olymp, control, ssv) | `package.json` da build skriptlari bor, `.gitlab-ci.yml` da yo'q | [TO'LDIRILSIN: ular qanday deploy qilinadi]. Har mijoz uchun pipeline'da alohida job yoki parametr |
| Maxfiy kalitlar (21) | CI o'zgaruvchilari orqali | Protected/masked ekanini tekshirish |
| Monitoring va loglar (15–16) | [TO'LDIRILSIN] | Frontend xatolarini yig'ish (D16) |
| Backup va migratsiyalar (13, 17) | [TO'LDIRILSIN: backend] | |

## Release vaqti: Test Platformasi uchun

Test Platformasida asosiy xavf — test sessiyasi o'rtasidagi release:

- Imtihon kunlarida minglab ishtirokchi bir vaqtda test topshiradi (`docs/test-entry-flow.md`).
- Yangi frontend versiyasi deploy qilinganda, sahifani oldin ochgan foydalanuvchilarning brauzerida eski versiya ishlab turadi. Eski versiya so'raydigan fayllar yangi deploy'dan keyin serverda bo'lmasligi mumkin.

Shuning uchun:

- Release faqat test sessiyalari rejalashtirilmagan vaqtda chiqadi. Jadval: [TO'LDIRILSIN: test sessiyalari jadvali kimda va qayerda].
- Har imtihon kunidan 2 ish kuni oldin freeze boshlanadi (boshlang'ich qiymat, pilotda tekshiriladi).
- Sozlama o'zgarishlari release talab qilmaydi. Ular admin orqali o'zgartiriladi va keyingi ishtirokchidan kuchga kiradi ([TZ](D03-tz.md), US-06). Shoshilinch o'zgarishni ko'pincha release'siz, sozlama bilan qilish mumkin.

## Release notes (real commitlardan namuna)

Real `main` tarixidagi commitlar (`git log`) release notes'ga shunday aylanadi:

```markdown
# v1.3.0 — <sana>

## Foydalanuvchilar uchun
- O'zgardi: admin kirish sozlamalarini o'zgartirsa, u nazoratchi qayta kirmasdan
  keyingi ishtirokchidan kuchga kiradi.
- Tuzatildi: desktop agent ishga tushmasa, «Kirish» bosilganda xato xabari ko'rsatiladi.

## Jamoa uchun
- feat(auth): refresh entering test settings on pinfl page
- fix(application-details): show EXE error when proctor start fails
- refactor(application-details): don't re-register device on EXE proctor start
- feat(ssv): add new environment configurations and index.html for SSV
```

Versiya raqami va sana — namuna; real repoda teg yo'q.

## Rollback (namunaviy reja)

```markdown
Joriy versiya: v1.3.0 (teg: 1.3.0-6dabeb6) · Oldingi: v1.2.1 (teg: 1.2.1-…)
Rollback qachon: smoke test o'tmasa; testga kirish yoki javob saqlash ishlamasa
Qaror qiladi: tech lead; u bo'lmasa: backend dasturchi
Qadamlar:
  1. GitLab → deploy_prod job'ini ROLLBACK_TAG=1.2.1-… bilan qayta ishga tushirish
  2. Prod'da nazoratchi login → ishtirokchini topish → testga kirish (smoke)
  3. Support va mijozga xabar
Migratsiya: frontend release — baza o'zgarmaydi
```

`ROLLBACK_TAG` — standart bo'yicha qo'shiladigan o'zgaruvchi, real pipeline'da hozir yo'q.

## Og'riqqa bog'liqlik

"Aytilgan narsalar esdan chiqadi" va "Nega unday qilgandik?" — release notes va deploy yozuvi (standart: 5-qoida, 6.5) "qachon nima o'zgardi va kim chiqardi" savoliga yozma javob beradi. Bu javob Telegram'dagi xabarlar orasidan qidirilmaydi.

---

Egasi: DevOps · Oxirgi yangilangan: 2026-11-07 · Keyingi ko'rib chiqish: standartdagi D14 o'zgarganda
