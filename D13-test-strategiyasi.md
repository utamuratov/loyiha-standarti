# D13 — Test strategiyasi (unit, integration, e2e)

*`[b.q.]` — boshlang'ich qiymat: bu raqam manbadan olinmagan, standart yozilganda taklif sifatida qo'yilgan; pilotda tekshiriladi va retroda ([D17](D17-retro-va-standartni-yangilash.md)) tuzatiladi. Barcha bunday qiymatlar va manbalar — [Manbalar](manbalar.md).*

## 1. Maqsad

Testlar ish davomida, kod bilan birga yozilsin va har o'zgarishda avtomatik ishlasin. Shunda release oldidan qo'lda tekshirishga bog'liqlik kamayadi, bir marta tuzatilgan xato esa qaytib kelmaydi.

## 2. Kim uchun va qachon

- **Egalari:**
  - tech lead avtomatik testlar va CI uchun javob beradi;
  - QA test rejasi, qo'lda test va regressiya uchun javob beradi.

  Kichik jamoada QA rolini analitik yoki muallif bo'lmagan dasturchi bajaradi ([D08](D08-kanban-dor-dod.md)).
- **Kim nima qiladi:**

| Rol | Vazifasi |
| --- | --- |
| Dasturchi | O'z taskiga unit va integration test yozadi; e2e'ni o'zgargan oqim uchun yangilaydi |
| QA / tekshiruvchi | [D03](D03-loyiha-boshlangich-hujjati.md) qabul mezonlaridan test ssenariylari tuzadi; Testing ustunida tekshiradi; release oldidan regressiya o'tkazadi |
| Tech lead | Testlar pipeline'da ishlashini va qizil pipeline merge'ni bloklashini ta'minlaydi; beqaror (flaky) testlarni kuzatadi |
| Analitik | Qabul mezonlari tekshirsa bo'ladigan bo'lishini ta'minlaydi ([D03](D03-loyiha-boshlangich-hujjati.md)) |

- **Qachon:**
  - 4-bosqichda (Planlash) test vositalari va CI tayyorlanadi.
  - 5-bosqichda testlar har bir task bilan birga yoziladi.
  - 5-darvozada (Ishlab chiqish → Release) regressiya o'tkaziladi va QA sign-off beriladi.

**Atamalar.**
- *Unit test* — bitta funksiya, servis yoki komponentni tashqi tizimlarsiz tekshiradi.
- *Integration test* — bir nechta qism birga ishlashini tekshiradi: masalan, backend'da API va ma'lumotlar bazasi.
- *E2E test* (end-to-end) — foydalanuvchi oqimini brauzerda boshidan oxirigacha tekshiradi.
- *Mock* — haqiqiy tizim (backend, tashqi servis) o'rniga oldindan belgilangan javob beradigan soxta qism.
- *Flaky test* — kod o'zgarmasa ham goh o'tib, goh yiqiladigan test.
- *Regressiya* — avval ishlagan narsaning yangi o'zgarishdan keyin buzilishi.

**Bu doc va [D08](D08-kanban-dor-dod.md).** [D08](D08-kanban-dor-dod.md) DoD'da minimal talab bor: biznes logikaga unit test yoziladi va qizil test bilan merge qilinmaydi. Bu doc o'sha talabni kengaytiradi: qaysi testlar, qayerda va qancha yozilishini belgilaydi.

## 3. Test darajalari

| Daraja | Nimani tekshiradi | Kim yozadi | Qayerda ishlaydi | Tezligi |
| --- | --- | --- | --- | --- |
| Unit | Biznes logika: hisob-kitob, holat o'zgarishi, validatsiya, ruxsat tekshiruvi | Dasturchi | Har MR pipeline'ida | Soniyalar |
| Integration (backend) | API + ma'lumotlar bazasi + tranzaksiyalar; endpoint kontraktga mos javob beradi | Backend dasturchi | Har MR pipeline'ida | Daqiqalar |
| E2E (frontend, mock backend) | Foydalanuvchi oqimlari, ekran holatlari, xato holatlari | Frontend dasturchi | Har MR pipeline'ida (yoki 6-qoida bo'yicha) | Daqiqalar |
| Smoke (to'liq tizim) | Staging/prod'da asosiy oqim haqiqiy backend bilan ishlaydi | QA / tekshiruvchi | Har deploy'dan keyin | Daqiqalar |
| Qo'lda va regressiya | Avtomatlashtirilmagan holatlar, qurilma va brauzerlar, UX | QA / tekshiruvchi | Testing ustuni; release oldidan staging | Soatlar |
| Yuklama | [D03](D03-loyiha-boshlangich-hujjati.md) dagi yuklama talabi bajariladi | Backend + DevOps | Release oldidan, agar [D03](D03-loyiha-boshlangich-hujjati.md) da raqam bo'lsa | Soatlar |

**Nisbat.** Unit testlar eng ko'p bo'ladi, e2e esa faqat asosiy oqimlar uchun yoziladi. Har bir xato holatini e2e bilan tekshirish qimmat va sekin; mantiq unit testda, oqim esa e2e'da tekshiriladi.

## 4. Qoidalar

### A. Nima majburiy

1. **Biznes logikaga har bir taskda unit test yoziladi** ([D08](D08-kanban-dor-dod.md) DoD). Biznes logika deganda natijaga, pulga, vaqtga, ruxsatga yoki ma'lumot saqlanishiga ta'sir qiladigan kod tushuniladi. Faqat ko'rinish (layout, stil) uchun unit test shart emas. *Nega:* eng qimmat xatolar mantiqda bo'ladi, ularni esa unit test eng arzon usulda ushlaydi.
2. **Har bir bug tuzatishi yiqiladigan testdan boshlanadi.** Tuzatishdan oldin xatoni qaytaradigan test yoziladi, keyin kod tuzatiladi va test o'tadi. Bu kichik jamoa uchun ham majburiy. *Nega:* bir marta tuzatilgan xato qaytib kelsa, bu rework va ishonchni yo'qotish demakdir.
3. **[D03](D03-loyiha-boshlangich-hujjati.md) dagi har asosiy oqim e2e bilan qoplanadi.** Loyiha uchun eng muhim 5 ta oqim [b.q.] 2-darvozada test rejasida nomi bilan yoziladi. E2E'da baxtli yo'l bilan birga kamida bitta xato holati ham tekshiriladi. *Nega:* foydalanuvchi aynan oqimni ko'radi; unit testlar o'tsa ham oqim buzilgan bo'lishi mumkin.
4. **API kontrakti testlanadi.** Backend integration testi endpoint javobi kontraktga ([D11](D11-dasturchilar-qoidalari.md)) mosligini tekshiradi. Frontend mock'lari ham shu kontraktdan olinadi. *Nega:* mock bilan o'tgan frontend testi faqat mock to'g'ri bo'lsagina foyda beradi.

### B. Qamrov

5. **Qamrov o'lchanadi, lekin u maqsad emas.** Pipeline unit testlar qamrovini (coverage) ko'rsatadi. Boshlang'ich chegaralar:
   - biznes logika papkalarida (servislar, util'lar) satr qamrovi ≥ 80% [b.q.];
   - MR umumiy qamrovni pasaytirmaydi.

   Chegaralar pilotdan keyin [D17](D17-retro-va-standartni-yangilash.md) retroda qayta ko'riladi. *Nega:* raqamsiz "test yozing" tekshirilmaydi; raqamning o'zi esa ma'nosiz testlarga olib kelmasligi uchun faqat logika papkalariga qo'yiladi.

### C. CI va merge

6. **Har bir MR pipeline'ida formatter, linter, tip tekshiruvi, unit va integration testlar ishlaydi.** To'liq suite 10 daqiqadan oshmasa [b.q.], e2e ham MR'da ishlaydi. Oshsa:
   - MR'da faqat o'zgargan modul spec'lari ishlaydi;
   - to'liq suite `dev` ga har merge'dan keyin ishlaydi;
   - `dev` → `main` release'idan oldin to'liq suite majburiy.

   *Nega:* sekin pipeline'ni odamlar chetlab o'ta boshlaydi; tez pipeline esa haqiqatan ishlatiladi.
7. **Qizil pipeline merge'ni bloklaydi.** Bu GitLab sozlamasida yoqiladi ("Pipelines must succeed"). Lokal git hook faqat qulaylik uchun: u xatoni push'dan oldin ko'rsatadi, lekin tekshiruv o'rnini bosmaydi. *Nega:* hook'ni `--no-verify` bilan chetlab o'tsa bo'ladi, pipeline'ni esa yo'q.

### D. Ishonchli testlar

8. **Selektor sifatida maxsus test atributi ishlatiladi** (`data-cy` yoki `data-testid`), matn yoki CSS klass emas. *Nega:* tarjima yoki dizayn o'zgarganda, xato bo'lmasa, test bekordan yiqilmaydi.
9. **Test ma'lumotlari soxta bo'ladi va kodda turadi.** Factory'lar orqali yaratiladi; real login, parol, JShShIR yoki yuz tasviri ishlatilmaydi. *Nega:* shaxsiy ma'lumot repoga tushmaydi ([D11](D11-dasturchilar-qoidalari.md)); testlar har kimda bir xil ishlaydi.
10. **E2E'da mock qat'iy (strict) rejimda ishlaydi.** Mock qilinmagan so'rov testni yiqitadi. *Nega:* test haqiqiy backend'ga jimgina borib, uning holatiga bog'lanib qolmaydi.
11. **Flaky test darhol hal qilinadi.** Bir kun ichida tuzatiladi [b.q.] yoki karantinga olinadi: test o'tkazib yuboriladi (`skip`), kodda sababi yoziladi, Jira'da egasi va muddati bilan task ochiladi. Karantindagi testlar soni haftalik sync'da ko'riladi. Yangi test 3 marta ketma-ket [b.q.] yuritib tekshiriladi. *Nega:* "goh yiqiladi, qayta yuritamiz" odati odamlarni qizil natijaga e'tibor bermaslikka o'rgatadi.
12. **Testlar "bo'sh o'tmasligi" tekshiriladi.** Yangi test yozilgach, tekshirilayotgan kod vaqtincha buziladi va test yiqilishi kerak. *Nega:* hech narsani tekshirmaydigan test yashil bo'ladi va noto'g'ri ishonch beradi.

### E. Qo'lda test, regressiya va bug'lar

13. **Testing ustunida task qabul mezonlari bo'yicha tekshiriladi;** buni muallif bo'lmagan odam qiladi ([D08](D08-kanban-dor-dod.md)). *Nega:* avtomatik testlar dasturchi o'ylagan holatlarni tekshiradi, tekshiruvchi esa foydalanuvchi haqiqatan qiladigan narsani tekshiradi.
14. **Release oldidan staging'da regressiya checklisti o'tkaziladi** (5.3). Natija QA sign-off sifatida 5-darvoza yozuviga tushadi ([D02](D02-loyiha-hayot-sikli.md)). *Nega:* mock bilan o'tgan testlar haqiqiy backend bilan integratsiyani tekshirmaydi.
15. **Bug hayot sikli boardda kuzatiladi:** bug [D08](D08-kanban-dor-dod.md) shabloni bo'yicha ochiladi va Backlog → … → Done yo'lini o'tadi. Bug Done'ga faqat regressiya testi bilan o'tadi (2-qoida). Qayta ochilgan bug'lar soni sanaladi ([D17](D17-retro-va-standartni-yangilash.md)). *Nega:* alohida "bug ro'yxati" boardni ikkiga bo'ladi.
16. **Test hujjati repoda turadi:** unda testlarni qanday ishga tushirish, mock strategiyasi va ma'lum tuzoqlar yoziladi. Yangi tuzoq topilsa, shu hujjatga qator qo'shiladi. *Nega:* bir marta yarim kun yo'qotilgan muammo keyingi odamga yana yarim kun olmaydi.

**Kichik loyihada.** Minimal talab: [D08](D08-kanban-dor-dod.md) DoD (unit test, yashil tekshiruvlar), 1–3- va 7-qoidalar. E2E 5 ta asosiy oqim uchun yoziladi; yuklama testi faqat [D03](D03-loyiha-boshlangich-hujjati.md) da raqam bo'lsa o'tkaziladi.

## 5. Shablonlar

### 5.1. Release test rejasi

```markdown
# Test rejasi — <release>
Egasi: <QA / tekshiruvchi> · D03 versiyasi: v<X.Y>

## Scope
Release'ga kiradigan story'lar: US-…
Kirmaydi: …

## Eng muhim oqimlar (e2e majburiy)
| # | Oqim | Story | E2E spec | Xato holatlari |

## Avtomatlashtirilmagan holatlar (qo'lda)
| Holat | Nega avtomatlashtirilmagan | Kim tekshiradi |

## Muhit
Staging, mijoz build'i, brauzerlar va qurilmalar: …

## Kirish va chiqish mezoni
Kirish: release scope'idagi tasklar Done.
Chiqish: regressiya checklisti o'tgan; ochiq kritik bug yo'q; yuklama testi (agar talab bo'lsa) o'tgan.

## Risklar
D02 risklar reestriga havola.
```

### 5.2. E2E ssenariy yozuvi

```
ID: E2E-<NN> · Story: US-<NN> · Spec: <fayl yo'li>
Oldingi holat: <kim, qaysi sahifada, qanday ma'lumot bilan>
Qadamlar: 1. … 2. …
Kutilgan natija: …
Xato holatlari: …
```

### 5.3. Staging regressiya checklisti

```
Release: <nomi> · Muhit: staging · Sana: … · Tekshiruvchi: …
- [ ] Eng muhim 5 oqim haqiqiy backend bilan oxirigacha o'tdi
- [ ] Release'dagi har story qabul mezonlari bo'yicha
- [ ] Xato holatlari: tarmoq uzilishi, backend xatosi, ruxsat yo'q
- [ ] Qo'llab-quvvatlanadigan brauzerlar/qurilmalarda asosiy oqim
- [ ] Konsolda ushlanmagan xato yo'q
Natija: o'tdi / o'tmadi (bug'lar: …)
```

### 5.4. Karantin yozuvi (kodda)

```ts
// KARANTIN(UZ-789): sekin mashinada toast redirect'dan oldin yo'qoladi.
// Egasi: <ism>, muddat: <sana>.
it.skip('…', () => { … });
```

## 6. Misol

Shu doc bo'yicha to'ldirilgan variantni misol loyihada ko'ring: [Test Platformasi · Test rejasi va testlar](loyihalar/test-platformasi/D13-test-rejasi.md).

## 7. Checklist: test strategiyasi ishlayaptimi

Tech lead har release oldidan tekshiradi:

- [ ] Release test rejasi bor; 5 ta eng muhim oqim nomi bilan yozilgan va spec'ga bog'langan
- [ ] Pipeline har bir MR'da unit va (6-qoida bo'yicha) e2e testlarni ishlatadi
- [ ] "Pipelines must succeed" yoqilgan: qizil pipeline bilan merge qilib bo'lmaydi
- [ ] Biznes logika papkalarida qamrov chegarasi bajarilgan
- [ ] Release davomida yopilgan har bir bug'ning regressiya testi bor (tasodifiy 3 tasi tekshiriladi)
- [ ] Karantindagi testlarning har biri Jira'da egasi va muddati bilan yozilgan
- [ ] Staging regressiya checklisti to'ldirilgan va 5-darvoza yozuviga kiritilgan

**Tayyor mezoni.** Qizil test bilan merge'ni GitLab o'zi bloklaydi (bir marta ataylab qizil MR bilan sinab ko'riladi). 5 ta eng muhim oqim e2e bilan qoplangan.

## 8. Tez-tez uchraydigan xatolar

1. **"Testni keyin yozamiz".** Release oldidan vaqt bo'lmaydi va testlar umuman yozilmaydi. To'g'risi: test taskning bir qismi hisoblanadi ([D08](D08-kanban-dor-dod.md) DoD).
2. **Hamma narsa e2e bilan tekshiriladi.** Har bir chegaraviy holat uchun e2e yozilsa, suite sekinlashadi va beqaror bo'lib qoladi. To'g'risi: mantiq unit testda, oqim e2e'da tekshiriladi.
3. **Mock'ga ko'r-ko'rona ishonish.** Mock bilan hammasi yashil, staging'da esa backend boshqa format qaytaradi. To'g'risi: mock kontraktdan olinadi (4-qoida), release oldidan esa staging regressiyasi o'tkaziladi (14-qoida).
4. **Flaky testni "qayta yuritib" o'tkazib yuborish.** Bir oydan keyin hech kim qizil natijaga ishonmay qo'yadi. To'g'risi: testni bir kun ichida tuzatish yoki karantinga olish (11-qoida).
5. **Testlar faqat dasturchining kompyuterida ishlaydi.** Hook chetlab o'tiladi, yangi dasturchida esa hook umuman o'rnatilmagan. To'g'risi: testlar pipeline'da ishlaydi (7-qoida).

---

Egasi: tech lead + QA · Oxirgi yangilangan: 2026-11-07 · Keyingi ko'rib chiqish: pilot loyiha retrosidan keyin ([D17](D17-retro-va-standartni-yangilash.md))
