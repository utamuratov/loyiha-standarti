# D14 — Release va deploy tartibi

## 1. Maqsad

Release oldindan aytiladigan, takrorlanadigan va xavfsiz bo'lsin: nima chiqayotgani, qachon va kim chiqarayotgani ma'lum bo'lsin. Muammo chiqsa, 15 daqiqa ichida oldingi versiyaga qaytish mumkin bo'lsin. Foydalanuvchilarning shaxsiy ma'lumotlari esa hech bir muhitda sizib chiqmasin.

## 2. Kim uchun va qachon

- **Egasi:** DevOps. Kichik jamoada DevOps alohida bo'lmasa, bu rol [D01](D01-rollar-va-raci.md) da tech lead yoki backend dasturchiga biriktiriladi.
- **Kim nima qiladi:**

| Rol | Vazifasi |
| --- | --- |
| DevOps | Muhitlar, CI/CD, monitoring, backup; prod deploy'ni bajaradi |
| Tech lead | Release tarkibini tasdiqlaydi; rollback qarorini qabul qiladi |
| QA / tekshiruvchi | Staging regressiyasi ([D13](D13-test-strategiyasi.md)) va deploy'dan keyingi smoke test |
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
2. **Bitta artefakt yuqoriga ko'tariladi.** Staging'da tekshirilgan image o'zgarmasdan prod'ga chiqadi; muhitga xos sozlamalar (API manzili va boshqalar) image'ga emas, ishga tushishda beriladi. Buning iloji bo'lmasa (sozlama build vaqtida kiritilsa), prod build aynan staging'da tekshirilgan commit'dan olinadi va bu [D02](D02-loyiha-hayot-sikli.md) risklar reestriga yoziladi. *Nega:* prod uchun alohida build — tekshirilmagan artefakt.
3. **Infratuzilma va deploy konfiguratsiyasi kodda** (pipeline fayli, GitOps repo, docker-compose). Serverda qo'lda o'zgartirish qilinmaydi; shoshilinch qilingan bo'lsa, 1 ish kuni ichida kodga qaytariladi. *Nega:* qo'lda o'zgartirilgan server keyingi deploy'da yoki yangi serverda takrorlanmaydi.

### B. Versiyalash va release notes

4. **SemVer va git tag.** Har prod release'i `main` dagi git tag: `v1.4.0`. Qaysi raqam oshadi:
   - PATCH — xato tuzatish;
   - MINOR — yangi funksiya;
   - MAJOR — mos kelmaydigan o'zgarish.

   Image tegi — versiya va commit SHA (`1.4.0-a1b2c3d`). *Nega:* "prod'da hozir nima turibdi?" savoliga bir qarashda javob topiladi; rollback uchun oldingi versiya aniq.
5. **Har release'ning release notes'i bor** (6.2). U Conventional Commits ([D11](D11-dasturchilar-qoidalari.md)) va Jira'dagi Done tasklardan yig'iladi, ikki qismdan iborat:
   - jamoa uchun — texnik;
   - support va mijoz uchun — oddiy tilda.

   *Nega:* support yangilikni foydalanuvchidan eshitmasligi kerak (D16); "qachon o'zgargandi?" savoliga javob bo'ladi.

### C. Release jarayoni

6. **Release = `dev` → `main` MR.** MR tavsifida release checklisti (6.1) bo'ladi; uni tech lead tasdiqlaydi. [D02](D02-loyiha-hayot-sikli.md) ning 5-darvozasi (testlar, QA sign-off) shu MR'da yopiladi. *Nega:* release ham boshqa o'zgarishlar kabi ko'rinadigan va tasdiqlanadigan bo'ladi.
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
    - Smoke test o'tmasa yoki kritik bug chiqsa ([D08](D08-kanban-dor-dod.md)), tech lead rollback qaroriga keladi.
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

Qaysi ma'lumot yig'ilishi va nima uchun — [D03](D03-loyiha-boshlangich-hujjati.md) da. Bu bo'lim muhitlar va jarayon qoidalarini beradi.

18. **Prod ma'lumoti staging yoki local'ga faqat anonimlashtirilib o'tadi.** JShShIR, ism, telefon, yuz tasviri almashtiriladi yoki o'chiriladi. *Nega:* staging himoyasi prod'dagidek emas, unga kirish huquqi ham kengroq.
19. **Loglarda, xato hisobotlarida va monitoringda shaxsiy ma'lumot yo'q.** JShShIR, token va yuz tasviri o'rniga ichki ID yoziladi. *Nega:* loglar ko'p odamga ochiq va uzoq saqlanadi.
20. **Prod'ga kirish — nomli akkauntlar bilan, minimal huquq bilan.** Kirish huquqi borlar ro'yxati yuritiladi; jamoadan chiqqan odamning huquqi o'sha kuni olinadi. *Nega:* umumiy akkaunt bilan kim nima qilgani aniqlanmaydi.
21. **Prod kalitlari faqat himoyalangan branchlar pipeline'iga ochiq** (CI'da protected va masked o'zgaruvchilar, [D11](D11-dasturchilar-qoidalari.md)). *Nega:* istalgan feature branch'dan prod kalitini o'qib bo'lmasligi kerak.

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

## 7. Misol

Shu doc bo'yicha to'ldirilgan variant — misol loyihada: [Test Platformasi · Release va deploy](loyihalar/test-platformasi/D14-release-va-deploy.md).

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
