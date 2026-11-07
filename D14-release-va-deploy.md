# D14 — Release va deploy tartibi

## 1. Maqsad

Release oldindan aytiladigan, takrorlanadigan va xavfsiz bo'lsin: nima chiqayotgani, qachon va kim chiqarayotgani ma'lum bo'lsin. Muammo chiqsa, 15 daqiqa ichida oldingi versiyaga qaytish mumkin bo'lsin. Foydalanuvchilarning shaxsiy ma'lumotlari esa hech bir muhitda sizib chiqmasin.

## 2. Kim uchun va qachon

- **Egasi:** DevOps. Kichik jamoada DevOps alohida bo'lmasa, bu rol D01 da tech lead yoki backend dasturchiga biriktiriladi.
- **Kim nima qiladi:**

| Rol | Vazifasi |
| --- | --- |
| DevOps | Muhitlar, CI/CD, monitoring, backup; prod deploy'ni bajaradi |
| Tech lead | Release tarkibini tasdiqlaydi; rollback qarorini qabul qiladi |
| QA / tekshiruvchi | Staging regressiyasi (D13) va deploy'dan keyingi smoke test |
| PM | Release sanasini mijoz bilan kelishadi, e'lon qiladi |
| Support | Release notes'ni oladi, foydalanuvchi savollariga tayyorlanadi (D16) |

- **Qachon:**
  - 4-bosqichda (Planlash) muhitlar va pipeline tayyorlanadi.
  - 6-bosqichda (Release) har release shu tartib bilan chiqadi.
  - Hotfix — kerak bo'lganda.

**Atamalar.**
- *Muhit* (environment) — ilovaning alohida nusxasi: local, staging, prod.
- *Artefakt* — build natijasi (masalan, Docker image), ya'ni deploy qilinadigan narsa.
- *Release* — foydalanuvchiga yetkaziladigan versiya.
- *Deploy* — versiyani muhitga o'rnatish.
- *Rollback* — oldingi versiyaga qaytish.
- *Smoke test* — deploy'dan keyin asosiy oqim ishlayotganini tez tekshirish.
- *Hotfix* — prod'dagi shoshilinch xatoni navbatdan tashqari tuzatish.
- *SemVer* — `MAJOR.MINOR.PATCH` ko'rinishidagi versiya raqamlash.

## 3. Muhitlar

| Muhit | Maqsad | Qaysi branch | Deploy | Ma'lumot |
| --- | --- | --- | --- | --- |
| Local | Dasturchining kompyuteri | istalgan | Dasturchi | Soxta yoki staging backend |
| Staging | Release'dan oldin tekshirish; prod'ga imkon qadar o'xshash | `dev` | Avtomatik, har merge'dan keyin | Soxta yoki anonimlashtirilgan |
| Prod | Foydalanuvchilar | `main` (git tag) | Qo'lda tasdiq bilan | Haqiqiy |

Bir nechta mijozga yetkaziladigan loyihada har mijozning staging va prod muhitlari bo'ladi. Ular ham shu jadval bo'yicha yuritiladi.

## 4. Qoidalar

### A. Muhitlar va artefakt

1. **Staging prod'ga o'xshash.** Infratuzilma turi bir xil (masalan, ikkalasi ham konteynerda), farq faqat konfiguratsiyada. *Nega:* staging'da o'tib prod'da yiqilgan xato — muhitlar farqining natijasi.
2. **Bitta artefakt yuqoriga ko'tariladi.** Staging'da tekshirilgan image o'zgarmasdan prod'ga chiqadi; muhitga xos sozlamalar (API manzili va boshqalar) image'ga emas, ishga tushishda beriladi. Buning iloji bo'lmasa (sozlama build vaqtida kiritilsa), prod build aynan staging'da tekshirilgan commit'dan olinadi va bu D02 risklar reestriga yoziladi. *Nega:* prod uchun alohida build — tekshirilmagan artefakt.
3. **Infratuzilma va deploy konfiguratsiyasi kodda** (pipeline fayli, GitOps repo, docker-compose). Serverda qo'lda o'zgartirish qilinmaydi; shoshilinch qilingan bo'lsa, 1 ish kuni ichida kodga qaytariladi. *Nega:* qo'lda o'zgartirilgan server keyingi deploy'da yoki yangi serverda takrorlanmaydi.

### B. Versiyalash va release notes

4. **SemVer va git tag.** Har prod release'i `main` dagi git tag: `v1.4.0`. Qaysi raqam oshadi:
   - PATCH — xato tuzatish;
   - MINOR — yangi funksiya;
   - MAJOR — mos kelmaydigan o'zgarish.

   Image tegi — versiya va commit SHA (`1.4.0-a1b2c3d`). *Nega:* "prod'da hozir nima turibdi?" savoliga bir qarashda javob topiladi; rollback uchun oldingi versiya aniq.
5. **Har release'ning release notes'i bor** (6.2). U Conventional Commits (D11) va Jira'dagi Done tasklardan yig'iladi, ikki qismdan iborat:
   - jamoa uchun — texnik;
   - support va mijoz uchun — oddiy tilda.

   *Nega:* support yangilikni foydalanuvchidan eshitmasligi kerak (D16); "qachon o'zgargandi?" savoliga javob bo'ladi.

### C. Release jarayoni

6. **Release = `dev` → `main` MR.** MR tavsifida release checklisti (6.1) bo'ladi; uni tech lead tasdiqlaydi. D02 ning 5-darvozasi (testlar, QA sign-off) shu MR'da yopiladi. *Nega:* release ham boshqa o'zgarishlar kabi ko'rinadigan va tasdiqlanadigan bo'ladi.
7. **Release vaqti oldindan belgilanadi.**
   - Foydalanuvchilar eng kam bo'lgan vaqt tanlanadi, muhim tadbirlar paytida emas.
   - Juma kechqurun yoki bayram oldidan release qilinmaydi.
   - Muhim tadbir (masalan, imtihon kuni) oldidan "freeze" muddati e'lon qilinadi — shu muddatda faqat hotfix chiqadi.

   *Nega:* release'dan keyin muammo chiqsa, jamoa joyida bo'lishi va foydalanuvchiga ta'siri kam bo'lishi kerak.
8. **Release e'lon qilinadi** (6.3): jamoa, support va mijozga, oldindan va keyin. *Nega:* kutilmagan o'zgarish — support'ga murojaatlar to'lqini.
9. **Prod deploy — qo'lda tasdiqlanadigan pipeline qadami.** Uni ruxsati bor nomli odam ishga tushiradi; serverga qo'lda kirib deploy qilinmaydi. *Nega:* kim, qachon, qaysi versiyani chiqargani pipeline tarixida qoladi.
10. **Deploy'dan keyin 15 daqiqa ichida smoke test.** Tekshiruvchi asosiy oqimni prod'da o'tadi va natija deploy yozuviga (6.5) tushadi. *Nega:* muammoni foydalanuvchidan oldin jamoa ko'rishi kerak.

### D. Rollback va migratsiyalar

11. **Har release'ning rollback rejasi bor** (6.4): oldingi versiya tegi, qaytish qadamlari, kim qaror qiladi.
    - Smoke test o'tmasa yoki kritik bug chiqsa (D08), tech lead rollback qaroriga keladi.
    - Prod'da 15 daqiqadan ortiq "tezda tuzatib qo'yamiz" deb urinilmaydi — avval rollback, keyin tinch tuzatish.

    *Nega:* bosim ostida prod'da tuzatish yangi xatolarni keltiradi.
12. **Rollback sinab ko'riladi.** Loyiha boshida va deploy jarayoni o'zgarganda rollback staging'da haqiqatan bajariladi. *Nega:* sinalmagan rollback rejasi — reja emas, umid.
13. **Ma'lumotlar bazasi migratsiyasi orqaga mos bo'ladi.** Avval yangi maydon qo'shiladi, eski maydon keyingi release'da o'chiriladi. Migratsiyadan oldin backup olinadi. Kodni oldingi versiyaga qaytarish bazani qaytarmaydi — rollback rejasida shu hisobga olinadi. *Nega:* orqaga mos bo'lmagan migratsiya rollback'ni imkonsiz qiladi.

### E. Hotfix

14. **Hotfix `main` dan ochiladi:** `hotfix/<JIRA-KEY>-...` branch → `main` ga MR → PATCH tag → keyin `dev` ga ham merge. Review, testlar va smoke test qisqartirilmaydi; release checklistining faqat "e'lon" qismi qisqa bo'lishi mumkin. *Nega:* hotfix ham kod, shoshilinchlik xatoni kamaytirmaydi. `dev` ga qaytarilmasa, keyingi release tuzatishni yo'qotadi.

### F. Monitoring, loglar, backup

15. **Monitoring va alertlar.** Kamida quyidagilar kuzatiladi:
    - prod ishlayaptimi (availability);
    - xatolar soni, frontend xatolari ham;
    - javob vaqti.

    Har alertning egasi va javob vaqti bor (D16). *Nega:* muammoni foydalanuvchi emas, monitoring birinchi ko'rishi kerak.
16. **Loglar bitta joyda yig'iladi** va saqlash muddati bilan yuritiladi. *Nega:* xato tahlili serverma-server qidirishga aylanmaydi.
17. **Backup jadval bo'yicha olinadi va tiklash sinab ko'riladi** — kamida chorakda bir marta staging'ga tiklab. *Nega:* tiklab ko'rilmagan backup ishlamasligi mumkin.

### G. Shaxsiy ma'lumotlarni himoyalash

Qaysi ma'lumot yig'ilishi va nima uchun — D03 da. Bu bo'lim muhitlar va jarayon qoidalarini beradi.

18. **Prod ma'lumoti staging yoki local'ga faqat anonimlashtirilib o'tadi.** JShShIR, ism, telefon, yuz tasviri almashtiriladi yoki o'chiriladi. *Nega:* staging himoyasi prod'dagidek emas, unga kirish huquqi ham kengroq.
19. **Loglarda, xato hisobotlarida va monitoringda shaxsiy ma'lumot yo'q.** JShShIR, token va yuz tasviri o'rniga ichki ID yoziladi. *Nega:* loglar ko'p odamga ochiq va uzoq saqlanadi.
20. **Prod'ga kirish — nomli akkauntlar bilan, minimal huquq bilan.** Kirish huquqi borlar ro'yxati yuritiladi; jamoadan chiqqan odamning huquqi o'sha kuni olinadi. *Nega:* umumiy akkaunt bilan kim nima qilgani aniqlanmaydi.
21. **Prod kalitlari faqat himoyalangan branchlar pipeline'iga ochiq** (CI'da protected va masked o'zgaruvchilar, D11). *Nega:* istalgan feature branch'dan prod kalitini o'qib bo'lmasligi kerak.

**Kichik loyihada.** Release checklisti, rollback rejasi va 18–21-qoidalar majburiy. Monitoring minimum: availability va xatolar.

## 5. Release oqimi qisqacha

```
feature branch → MR → dev ──(avto)──▶ staging ── regressiya (D13)
                                         │
             release MR: dev → main + checklist + tag vX.Y.Z
                                         │
                prod deploy (qo'lda tasdiq) ──▶ smoke test ──▶ e'lon
                                         │
                       muammo bo'lsa: rollback (oldingi teg)
```

## 6. Shablonlar

### 6.1. Release checklisti (release MR tavsifida)

```markdown
## Release v<X.Y.Z> — <mijoz/muhit>
Sana va vaqt: … · Deploy qiladi: … · Rollback qaroriga mas'ul: …

### Oldin
- [ ] Release tarkibi: Jira'da "Fix version = vX.Y.Z", hammasi Done
- [ ] Pipeline yashil (D13), staging regressiyasi o'tgan, QA sign-off
- [ ] Release notes tayyor (6.2)
- [ ] Rollback rejasi to'ldirilgan (6.4); oldingi teg: …
- [ ] Migratsiya bor/yo'q; bor bo'lsa — orqaga mos, backup olinadi
- [ ] Yangi sozlama yoki maxfiy kalit bor/yo'q; bor bo'lsa — prod'da qo'shilgan
- [ ] Release vaqti freeze muddatiga to'g'ri kelmaydi
- [ ] E'lon jamoa, support va mijozga yuborilgan

### Keyin
- [ ] Smoke test o'tdi (15 daqiqa ichida)
- [ ] Monitoring: xatolar soni odatdagidan oshmagan (1 soat)
- [ ] Deploy yozuvi to'ldirildi, "release bo'ldi" e'loni yuborildi
```

### 6.2. Release notes

```markdown
# v<X.Y.Z> — <sana>

## Foydalanuvchilar uchun (support va mijoz)
- Yangi: …
- Tuzatildi: …
- O'zgardi (foydalanuvchi boshqacha ishlashi kerak bo'lgan joylar): …

## Jamoa uchun
- feat: … (UZ-…)
- fix: … (UZ-…)
- Migratsiyalar, yangi sozlamalar, kontrakt o'zgarishlari: …
```

### 6.3. Release e'loni

```
<Mijoz/tizim> uchun yangi versiya v<X.Y.Z>: <sana, vaqt>.
Kutilayotgan uzilish: yo'q / <N> daqiqa.
Asosiy o'zgarishlar: <2–3 punkt>. To'liq ro'yxat: <release notes havolasi>.
Savollar: <support kanali>.
```

### 6.4. Rollback rejasi

```markdown
Joriy versiya: v<X.Y.Z> (teg: …) · Oldingi versiya: v<…> (teg: …)
Rollback qachon: smoke test o'tmasa; kritik bug; xatolar soni N dan oshsa
Qaror qiladi: <tech lead>; u bo'lmasa: <zaxira>
Qadamlar: 1. … 2. … 3. Smoke test.
Migratsiya bo'lsa: baza qaytariladimi? yo'q — kod orqaga mos / ha — backup'dan (vaqti: …)
Kimni xabardor qilish: …
```

### 6.5. Deploy yozuvi

```
Versiya: v<X.Y.Z> · Muhit: prod/<mijoz> · Sana: … · Deploy qildi: …
Pipeline: <havola> · Smoke test: o'tdi/o'tmadi (kim) · Rollback: yo'q/ha (sababi)
```

## 7. uzedu misoli

Ssenariy: uzedu'ni noldan quryapmiz. Frontend misollari real repozitoriydan (`test-uzedu-user`). Backend deploy, migratsiyalar va backup — `[TO'LDIRILSIN: backend]`.

### 7.1. Real frontend pipeline qanday ishlaydi

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

### 7.2. Standart bilan solishtirganda

| Qoida | Real repoda | Standart bo'yicha nima qo'shilardi |
| --- | --- | --- |
| Muhitlar ajratilgan (3-bo'lim) | `dev` → staging, `main` → prod | — (mos) |
| Staging'ga avtomatik deploy | Ha, GitOps orqali | — (mos) |
| Konfiguratsiya kodda (3) | Staging — GitOps repoda; prod — SSH va serverdagi `docker compose` | Prod'ni ham GitOps'ga o'tkazish yoki compose faylini repoda yuritish |
| Prod deploy qo'lda tasdiq bilan (9) | `deploy_prod` — `when: manual` | — (mos); job'ni kim ishga tushira olishini protected environment bilan cheklash |
| Bitta artefakt (2) | Staging va prod uchun alohida build; API manzili build vaqtida kiritiladi | Muhit sozlamasini ishga tushishda yuklash (masalan, image ichidagi `config.json` ni deploy paytida almashtirish). Shunda staging'da tekshirilgan image prod'ga chiqadi. Hozircha — prod build staging'da tekshirilgan commit'dan, risk reestrga |
| Versiyalash (4) | `package.json` da `0.0.0`; git teglar yo'q; image tegi — build sanasi (`BUILD_DATE`) | SemVer teg, image tegi = versiya + SHA |
| Rollback (11–12) | Avtomatik rollback yo'q. Image tegi `tag.txt` artefaktida, u 10 daqiqada o'chadi (`expire_in: 10 minutes`) — oldingi tegni keyin topish qiyin | Teglarni release notes va deploy yozuvida saqlash; `deploy_prod` ga oldingi tegni qo'lda berish imkoniyati (`ROLLBACK_TAG` o'zgaruvchisi); staging'da sinash |
| Testlar deploy'dan oldin | Pipeline'da test bosqichi yo'q (D13) | `build_job` faqat test job'laridan keyin (D13, 6.3) |
| `Dockerfile.prod` | Pipeline unga murojaat qiladi, lekin repoda (lokal nusxadagi hech bir branch tarixida) bunday fayl yo'q | [TO'LDIRILSIN: prod image qayerdan yig'iladi — fayl boshqa joydami yoki prod pipeline boshqacha ishlaydimi] |
| Boshqa mijozlar (argos, olymp, control, ssv) | `package.json` da build skriptlari bor, `.gitlab-ci.yml` da yo'q | [TO'LDIRILSIN: ular qanday deploy qilinadi]. Har mijoz uchun pipeline'da alohida job yoki parametr |
| Maxfiy kalitlar (21) | CI o'zgaruvchilari orqali | Protected/masked ekanini tekshirish |
| Monitoring va loglar (15–16) | [TO'LDIRILSIN] | Frontend xatolarini yig'ish (D16) |
| Backup va migratsiyalar (13, 17) | [TO'LDIRILSIN: backend] | |

### 7.3. Release vaqti: uzedu uchun

uzedu'da asosiy xavf — test sessiyasi o'rtasidagi release:

- Imtihon kunlarida minglab ishtirokchi bir vaqtda test topshiradi (`docs/test-entry-flow.md`).
- Yangi frontend versiyasi deploy qilinganda, sahifani oldin ochgan foydalanuvchilarning brauzerida eski versiya ishlab turadi. Eski versiya so'raydigan fayllar yangi deploy'dan keyin serverda bo'lmasligi mumkin.

Shuning uchun:

- Release faqat test sessiyalari rejalashtirilmagan vaqtda chiqadi. Jadval: [TO'LDIRILSIN: test sessiyalari jadvali kimda va qayerda].
- Har imtihon kunidan 2 ish kuni oldin freeze boshlanadi (boshlang'ich qiymat, pilotda tekshiriladi).
- Sozlama o'zgarishlari release talab qilmaydi. Ular admin orqali o'zgartiriladi va keyingi ishtirokchidan kuchga kiradi (D03, US-06). Shoshilinch o'zgarishni ko'pincha release'siz, sozlama bilan qilish mumkin.

### 7.4. Release notes (real commitlardan namuna)

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

### 7.5. Rollback (namunaviy reja)

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

### Og'riqqa bog'liqlik

"Aytilgan narsalar esdan chiqadi" va "Nega unday qilgandik?" — release notes va deploy yozuvi (5-qoida, 6.5) "qachon nima o'zgardi va kim chiqardi" savoliga yozma javob beradi. Bu javob Telegram'dagi xabarlar orasidan qidirilmaydi.

## 8. Checklist: release jarayoni standartga mosmi

DevOps loyiha boshida va har chorakda tekshiradi:

- [ ] Har muhit (va har mijoz) uchun staging va prod bor, staging avtomatik yangilanadi
- [ ] Prod deploy — pipeline'dagi qo'lda tasdiqlanadigan qadam, uni faqat ruxsati borlar ishga tushiradi
- [ ] Prod'dagi versiya git teg va image tegi orqali aniqlanadi
- [ ] So'nggi 3 release'ning release notes'i, checklisti va deploy yozuvi bor
- [ ] Rollback staging'da sinab ko'rilgan; sana: …
- [ ] Backup'dan tiklash sinab ko'rilgan; sana: …
- [ ] Monitoring alertlarining egasi bor
- [ ] Staging'da haqiqiy shaxsiy ma'lumot yo'q; loglarda JShShIR va tokenlar yo'q
- [ ] Prod'ga kirish huquqi borlar ro'yxati dolzarb

**Tayyor mezoni.** Rollback kamida bir marta staging'da sinab ko'rilgan (sana deploy yozuvida). Tekshiradi — tech lead.

## 9. Tez-tez uchraydigan xatolar

1. **"Faqat frontend, tez chiqaramiz".** Checklistsiz release, foydalanuvchilar sessiya o'rtasida — va test topshirayotganlar sahifasi buziladi. To'g'risi: har release checklist bilan va rejalashtirilgan vaqtda.
2. **Prod'da tuzatish.** Serverga kirib faylni o'zgartirish yoki 40 daqiqa davomida "tezda tuzatish". To'g'risi: rollback, keyin hotfix (11, 14-qoidalar).
3. **Prod uchun alohida build.** Staging'da sinalgan narsa emas, boshqa artefakt chiqadi. To'g'risi: bitta artefakt (2-qoida).
4. **Versiyasiz release.** "Prod'da qaysi versiya?" savoliga hech kim aniq javob bermaydi. To'g'risi: SemVer teg (4-qoida).
5. **Staging'da prod nusxasi.** Test uchun prod bazasi to'liq ko'chiriladi — shaxsiy ma'lumotlar himoyasiz muhitda. To'g'risi: anonimlashtirish (18-qoida).

---

Egasi: DevOps · Oxirgi yangilangan: 2026-11-07 · Keyingi ko'rib chiqish: pilot loyiha retrosidan keyin (D17)
