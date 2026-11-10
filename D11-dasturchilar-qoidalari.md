# D11 — Dasturchilar qoidalari va code review

## 1. Maqsad

Kod bir xil uslubda yozilsin, kamida bitta boshqa odam tomonidan tekshirilsin va asosiy branchga faqat ishlaydigan, xavfsiz holda tushsin. Muhim texnik qarorlar sababi bilan yozilib, "nega unday qilgandik?" savoliga javob kodning yonida tursin.

## 2. Kim uchun va qachon

- **Egasi:** tech lead. Kichik jamoada tech lead alohida bo'lmasa, bu rol [D01](D01-rollar-va-raci.md) da biriktiriladi.
- **Kim ishlatadi:** barcha dasturchilar (frontend, backend, mobile) har kuni ishlatadi; reviewer esa har bir merge request'da foydalanadi.
- **Qachon:**
  - 4-bosqichda (Planlash) repozitoriy, branchlar, formatter, linter va MR shabloni sozlanadi.
  - 5-bosqichda (Ishlab chiqish) har task shu qoidalar bo'yicha bajariladi.

**Atamalar.**
- *MR* (merge request; GitHub'da PR, pull request deyiladi) — branchdagi o'zgarishni asosiy branchga qo'shish so'rovi; review shu yerda bo'ladi.
- *Code review* — kodni muallifdan boshqa odam o'qib tekshirishi.
- *Linter* — kod xatolari va uslub qoidalarini avtomatik tekshiruvchi vosita.
- *Formatter* — kodni bir xil ko'rinishga avtomatik keltiruvchi vosita.
- *ADR* (architecture decision record) — muhim texnik qarorning qisqa yozuvi: kontekst, qaror, rad etilgan variantlar.
- *Pipeline* — CI'da har push'da ishlaydigan avtomatik qadamlar (build, test).

## 3. Qoidalar

### A. Branchlar

1. **Doimiy branchlar faqat ikkita:**
   - `main` — prod'dagi kod;
   - `dev` — staging'dagi, keyingi release'ga yig'ilayotgan kod.

   Mijozlar yoki versiyalar orasidagi farq branch bilan emas, konfiguratsiya bilan qilinadi. *Nega:* har qo'shimcha doimiy branch tuzatishni bir necha joyga ko'chirishni talab qiladi va ular tez orada ajralib ketadi.
2. **Har task uchun `dev` dan vaqtinchalik branch ochiladi:** `<tur>/<JIRA-KEY>-qisqa-tavsif`, masalan `feat/UZ-123-test-timer-pause`. Turlari: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`. Branch merge qilingach o'chiriladi. *Nega:* branch nomidan task topiladi, keraksiz branchlar esa yig'ilib qolmaydi.
3. **`dev` va `main` himoyalangan (protected).** Ularga to'g'ridan-to'g'ri push qilinmaydi, o'zgarish faqat MR orqali kiradi. `dev` → `main` merge faqat release jarayonida qilinadi ([D14](D14-release-va-deploy.md)). *Nega:* review va testsiz kod asosiy branchga faqat to'g'ridan-to'g'ri push orqali tushishi mumkin.

### B. Commitlar

4. **Commit formati — Conventional Commits:** `<tur>(<scope>): <nima qilindi>`. Masalan, `fix(application-details): show EXE error when proctor start fails`. Commit xabarlari tili jamoada bitta bo'ladi. *Nega:* tarixni o'qish va release notes yig'ish oson bo'ladi ([D14](D14-release-va-deploy.md)).
5. **Bitta commit bitta mantiqiy o'zgarishni o'z ichiga oladi.** Ilova tuzatishi va test o'zgarishi, refaktoring va yangi funksiya alohida commitlarda bo'ladi. *Nega:* xato commitni orqaga qaytarish boshqa o'zgarishni buzmaydi; review'da nima nima uchun o'zgargani ko'rinadi.

### C. Merge request

6. **MR kichik bo'ladi:** bitta task, iloji boricha 400 qatordan kam o'zgarish (avtomatik yaratilgan fayllar hisobga olinmaydi). Katta ish bir nechta MR'ga bo'linadi. *Nega:* katta MR yuzaki review qilinadi va xatolar o'tib ketadi.
7. **MR shablon bo'yicha to'ldiriladi** (4.1-bo'lim): task havolasi, nima va nega o'zgardi, qanday tekshirildi. Muallif review so'rashdan oldin o'z diff'ini bir marta o'qib chiqadi. *Nega:* reviewer kontekstni qidirishga vaqt sarflamaydi; aniq xatolarni muallifning o'zi topadi.
8. **Ish tugamagan bo'lsa, Draft MR ochiladi.** Erta fikr kerak bo'lsa, Draft holatida ochiladi; review faqat Draft olib tashlangach boshlanadi. *Nega:* noto'g'ri yo'nalish 3 kun emas, yarim kun ichida aniqlanadi.

### D. Code review

9. **Har MR'ni muallifdan boshqa kamida 1 kishi tasdiqlaydi.** Yo'nalishda bitta mutaxassis bo'lsa (masalan, bitta frontendchi), review'ni boshqa yo'nalish dasturchisi yoki tech lead qiladi: checklistning mantiq, xavfsizlik va test qismlari uchun bu yetarli. *Nega:* ikkinchi ko'z xatoni topadi; qolaversa, kodni ikkinchi odam ham biladigan bo'ladi ("bus factor", [D07](D07-taqsimot-va-resurs.md)).
10. **Review muddati 1 ish kuni.** Review navbati yangi taskdan ustun turadi ([D08](D08-kanban-dor-dod.md) WIP limiti). *Nega:* review kutayotgan MR tugamagan ish hisoblanadi; muallif esa boshqa ishga o'tib, kontekstni yo'qotadi.
11. **Reviewer checklist (4.2) bo'yicha tekshiradi va izohga belgi qo'yadi:**
    - `[bloklovchi]` — tuzatilmaguncha merge qilinmaydi;
    - `[taklif]` — qabul qilish-qilmaslikni muallif hal qiladi;
    - `[savol]` — tushuntirish kerak.

    *Nega:* muallif nimani albatta tuzatishi kerakligini biladi; uslub bo'yicha bahslar merge'ni to'xtatmaydi.
12. **Muallif har bir izohga javob beradi:** kodni tuzatadi yoki nega tuzatmaganini yozadi. Izohni uni yozgan odam yopadi (resolve). Bahs 2 aylanishdan oshsa, og'zaki hal qilinadi va natija MR'ga yoziladi. *Nega:* yozishmada cho'zilgan bahs "muhokamalar cho'zilib ketadi" og'rig'ining koddagi ko'rinishi.
13. **Uslub haqida izoh yozilmaydi.** Formatter va linter qila oladigan narsani odam tekshirmaydi. *Nega:* review vaqti mantiq va xavfsizlikni tekshirishga ketishi kerak.

### E. Merge sharti

14. **Merge faqat quyidagilar bajarilganda qilinadi:**
    - [D08](D08-kanban-dor-dod.md) dagi DoD bajarilgan;
    - pipeline yashil;
    - kamida 1 tasdiq bor;
    - ochiq `[bloklovchi]` izoh yo'q.

    Qizil pipeline bilan merge GitLab sozlamasida taqiqlanadi. *Nega:* qoida odamning intizomiga emas, tizimga bog'lanadi.

### F. Kod uslubi va avtomatik tekshiruvlar

15. **Har repozitoriyda formatter, linter va qat'iy tip tekshiruvi bor.** Ular pipeline'da ishlaydi; qo'shimcha ravishda lokal git hook'da ham ishlashi mumkin. Lekin hook tekshiruv emas, faqat qulaylik: hook'ni `--no-verify` bilan chetlab o'tsa bo'ladi. *Nega:* lokal hook'ni chetlab o'tish mumkin, pipeline'ni esa yo'q.
16. **Kod izohlari jamoaning bitta tilida yoziladi;** ularda "nima" emas, "nega" tushuntiriladi. *Nega:* "nima"ni kodning o'zi aytadi; "nega" yo'qolsa, keyingi dasturchi himoya kodini ortiqcha deb o'chiradi.

### G. FE–BE API kontrakti

17. **Kontrakt biznes logikadan oldin kelishiladi.** Endpoint, so'rov va javob formati, xato kodlari bitta kontrakt faylida (masalan, OpenAPI) bo'ladi. Fayl backend repozitoriysida turadi, uning egasi backend. Kontrakt ikki usulda tayyorlanadi: faylni qo'lda yozish (*design-first*) yoki logikasiz endpoint skeletlarini yozib, fayldan generatsiya qilish (*code-first*). Loyiha qaysi usulni tanlagani ADR bilan yoziladi (24-qoida). Talablar [D03](D03-loyiha-boshlangich-hujjati.md) da yozilgan; kontrakt 3-darvozagacha kelishilgan bo'lishi kerak ([D02](D02-loyiha-hayot-sikli.md)). *Nega:* shunda frontend va backend bir vaqtda ishlay oladi, integratsiya esa oxirida "kutilmagan" muammoga aylanmaydi. Usul emas, natija muhim: frontend kontrakt bo'yicha ishlay boshlaganda backend logikasi hali yozilmagan bo'ladi.
18. **Frontend mock'lari kontraktdan olinadi.** Backend tayyor bo'lmasa, frontend kontrakt bo'yicha mock bilan ishlaydi va testlaydi. *Nega:* bog'liqlik taskni bloklamaydi ([D08](D08-kanban-dor-dod.md) DoR).
19. **Kontrakt o'zgarishi e'lon qilinadi.** Mavjud maydonni o'chiradigan yoki ma'nosini o'zgartiradigan o'zgarish (breaking change) faqat ikkala tomon kelishgandan keyin merge qilinadi. Bunday o'zgarish kontrakt versiyasida va MR tavsifida belgilanadi. *Nega:* backend'dagi "kichik" o'zgarish prod'da frontend'ni jimgina buzadi.

### H. Maxfiy ma'lumotlar

20. **Kalit, parol va token repozitoriyga tushmaydi:** na kodda, na konfiguratsiyada, na tarixda. Ular CI o'zgaruvchilarida (masked, protected) turadi; repoda faqat namuna fayl bo'ladi (`.env.example`). *Nega:* repoga kirish huquqi bor har kim, shuningdek repo nusxasini olgan har kim kalitni ham qo'lga kiritadi.
21. **Kalit sizib chiqsa, u darhol almashtiriladi.** Faqat git tarixidan o'chirish yetarli emas. Holat [D02](D02-loyiha-hayot-sikli.md) qarorlar jurnaliga yoziladi. *Nega:* tarixdan o'chirilgan kalitning nusxalari allaqachon boshqa joyda bo'lishi mumkin.
22. **Shaxsiy ma'lumotlar (JShShIR, yuz tasviri) logga, xato xabariga va test fixture'lariga real holda tushmaydi.** Talablar [D03](D03-loyiha-boshlangich-hujjati.md) da, muhitlar bo'yicha qoidalar [D14](D14-release-va-deploy.md) da. *Nega:* log va fixture'lar himoyalanmagan joylarga ko'chadi.

### I. Texnik qarz va qarorlar

23. **Texnik qarz Jira'da `tech-debt` labeli bilan qayd etiladi.** Kodda `TODO` faqat task kaliti bilan yoziladi (`// TODO(UZ-456): ...`). *Nega:* kalitsiz TODO hech qachon rejaga kirmaydi.
24. **ADR muhim qarorlar uchun yoziladi:** qaror bir nechta modulga ta'sir qilsa, uni o'zgartirish qimmat bo'lsa yoki jiddiy muqobil variantlar ko'rilgan bo'lsa. Masalan: kutubxona yoki framework tanlash, ma'lumot saqlash usuli, autentifikatsiya, integratsiya usuli, API kontraktini tayyorlash usuli. ADR repoda `docs/adr/NNNN-qisqa-nom.md` faylida turadi; [D02](D02-loyiha-hayot-sikli.md) qarorlar jurnaliga unga havola qo'yiladi. *Nega:* bir yildan keyin "nega unday qilgandik?" savoliga javob kod yonida bo'ladi.
25. **Repozitoriy hujjatlari kod bilan birga yangilanadi.** Har bir repoda `README` (qanday ishga tushirish), ish qoidalari fayli (`AGENTS.md` yoki `CLAUDE.md`) va murakkab qismlar uchun `docs/` bo'ladi. Oqim yoki arxitektura o'zgarsa, hujjat shu MR'ning o'zida yangilanadi. *Nega:* "keyin alohida yozamiz" degan hujjat hech qachon yozilmaydi.

**Kichik loyihada.** Hamma qoidalar majburiy (D11 yadro doc). Faqat review'ni boshqa yo'nalish dasturchisi qilishi mumkin (9-qoida), ADR esa haqiqatan katta qarorlar uchun yoziladi.

## 4. Shablonlar

### 4.1. MR shabloni

GitLab'da `.gitlab/merge_request_templates/Default.md` faylida turadi va har yangi MR'da avtomatik chiqadi.

```markdown
## Task
<Jira havolasi> · Story: US-<NN>

## Nima o'zgardi va nega
- …

## Qanday tekshirildi
- [ ] Unit testlar qo'shildi/yangilandi
- [ ] Qo'lda tekshirilgan holatlar: …
- [ ] Skrinshot yoki video (UI o'zgargan bo'lsa)

## Reviewer uchun
- E'tibor berish kerak bo'lgan joy: …
- Kontrakt o'zgarishi: yo'q / bor (breaking: ha/yo'q)
- Yangi sozlama, migratsiya yoki tarjima kaliti: yo'q / bor
```

### 4.2. Code review checklist

- [ ] **Mantiq:** qabul mezonlari bajariladi; xato va chegaraviy holatlar (bo'sh ro'yxat, tarmoq xatosi, takroriy bosish) ko'rilgan
- [ ] **Nomlash va tuzilma:** nomlar ma'noni aytadi; kod mavjud tuzilma va uslubga mos; takrorlanish yo'q
- [ ] **Xatolar:** xato yutib yuborilmaydi; foydalanuvchiga tushunarli xabar chiqadi; loglarda maxfiy yoki shaxsiy ma'lumot yo'q
- [ ] **Xavfsizlik:** ruxsatlar [D03](D03-loyiha-boshlangich-hujjati.md) matritsasiga mos; kiruvchi ma'lumot tekshiriladi; maxfiy kalit kodda yo'q
- [ ] **Testlar:** biznes logikaga unit test bor va u haqiqatan xatoni ushlaydi ([D13](D13-test-strategiyasi.md))
- [ ] **Performance:** keraksiz so'rovlar, sikl ichida so'rov, katta ro'yxatni to'liq yuklash yo'q
- [ ] **Kontrakt:** API o'zgarishi kontraktda aks etgan
- [ ] **Hujjat:** oqim o'zgargan bo'lsa, `docs/` yangilangan; ADR kerakmi?

### 4.3. ADR shabloni

```markdown
# ADR-<NNNN>: <qaror qisqacha>
Sana: <YYYY-MM-DD> · Holat: taklif / qabul qilingan / almashtirilgan (→ ADR-<NNNN>)
Muallif: <ism> · Tasdiqlagan: <tech lead>

## Kontekst
Qanday muammo yoki talab qaror qabul qilishni talab qildi.

## Qaror
Nima tanlandi.

## Ko'rib chiqilgan variantlar
| Variant | Nega tanlanmadi |
| --- | --- |

## Oqibatlari
Nima osonlashadi, nima qiyinlashadi, nimani kuzatish kerak.
```

## 5. Misol

Shu doc bo'yicha to'ldirilgan variantni misol loyihada ko'ring: [Test Platformasi · Repozitoriy, merge request va ADR](loyihalar/test-platformasi/D11-repozitoriy-va-review.md).

## 6. Checklist: repozitoriy va jarayon standartga mosmi

Tech lead loyiha boshida va har release oldidan tekshiradi:

- [ ] Doimiy branchlar faqat `main` va `dev`; ikkalasi himoyalangan
- [ ] MR shabloni repoda bor
- [ ] Pipeline'da formatter tekshiruvi, linter, tip tekshiruvi va unit testlar ishlaydi
- [ ] Qizil pipeline bilan merge GitLab sozlamasida taqiqlangan; kamida 1 tasdiq talab qilinadi
- [ ] Repoda maxfiy kalit yo'q; CI o'zgaruvchilari masked/protected
- [ ] API kontrakti fayli bor va frontend unga havola qiladi
- [ ] `README`, ish qoidalari fayli va `docs/` dolzarb
- [ ] So'nggi 10 ta MR'ning har biri shablon bo'yicha to'ldirilgan, 1 ish kuni ichida review qilingan va kamida 1 tasdiq olgan (o'rtacha review vaqti va MR hajmi [D17](D17-retro-va-standartni-yangilash.md) retroda ko'riladi)

## 7. Tez-tez uchraydigan xatolar

1. **"Tez bo'lsin" deb review'siz merge qilish.** Bu ayniqsa release oldidan bo'ladi va aynan shu MR'lar prod'dagi bug'ga aylanadi. To'g'risi: shoshilinch bo'lsa ham kamida 1 tasdiq olinadi; review'ni MR'ni kichraytirish orqali tezlashtirish mumkin.
2. **2000 qatorli MR.** Reviewer "LGTM" deb yozadi, chunki uni o'qib chiqib bo'lmaydi. To'g'risi: task bo'linadi, Draft MR orqali erta fikr olinadi.
3. **Testlar faqat lokal hook'da ishlaydi.** Hook `--no-verify` bilan bir marta chetlab o'tilsa, qizil kod `main` ga tushadi. To'g'risi: asosiy tekshiruv pipeline'da bo'ladi, hook esa faqat qulaylik uchun.
4. **Kontrakt og'zaki kelishiladi.** "Javobda `id` keladi" degan gap Telegram'da qoladi. To'g'risi: kontrakt faylda yoziladi, o'zgarishi esa MR orqali kiritiladi.
5. **Qaror faqat MR izohida qoladi.** Muhim qaror review muhokamasida qabul qilinadi va MR yopilgach yo'qoladi. To'g'risi: ADR yoziladi va [D02](D02-loyiha-hayot-sikli.md) jurnaliga unga havola qo'yiladi.

---

Egasi: tech lead · Oxirgi yangilangan: 2026-11-07 · Keyingi ko'rib chiqish: pilot loyiha retrosidan keyin ([D17](D17-retro-va-standartni-yangilash.md))
