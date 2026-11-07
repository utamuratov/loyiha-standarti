# D06 — Baholash va srok belgilash

## 1. Maqsad

Srok ishni bajaradigan odamlar bahosiga tayanib, ochiq hisob bilan belgilansin, mijozga esa scope va shartlari bilan birga yozma aytilsin. Kechikish oxirgi kuni emas, birinchi belgisi ko'ringanda aytilsin va qaror (scope, sana yoki resurs) mijoz bilan birga qabul qilinsin.

## 2. Kim uchun va qachon

- **Egalari:** PM (release rejasi va srok) va tech lead (task bahosi). RACI — [D01](D01-rollar-va-raci.md).
- **Kim nima qiladi:**

| Rol | Vazifasi |
| --- | --- |
| Dasturchi, dizayner | O'z tasklarini baholaydi; bahodan oshib ketsa, darhol aytadi |
| Tech lead | Baholarni ko'rib chiqadi: unutilgan ish, juda katta noaniqlik; bajaruvchisiz o'zgartirmaydi |
| PM | Baholardan release rejasi va srokni hisoblaydi; mijozga yozma aytadi; haftalik kuzatadi |
| PO (mijoz) | Srokni tasdiqlaydi; kechikishda variantlardan birini tanlaydi |

- **Qachon:**
  - 1–2-bosqich: **dastlabki baho** — oraliq bilan, TZ hali tasdiqlanmagan (6-qoida).
  - 4-bosqich (Planlash): **reja bahosi** va srok — 4-darvozaga ([D02](D02-loyiha-hayot-sikli.md)).
  - 5-bosqich: yangi task Ready'ga o'tganda baholanadi ([D08](D08-kanban-dor-dod.md) DoR); reja har hafta haqiqat bilan solishtiriladi.
  - Scope o'zgarganda: o'zgargan qism qayta baholanadi (D10).

**Atamalar.**
- *Baho* — ishga ketadigan vaqt, **soat**da. Bir odamning toza ish vaqti, uzilishlarsiz.
- *Srok* — kalendar sana. Baholar, bufer, odamlar soni, ularning bandligi va bog'liqliklardan hisoblanadi.
- *Kunlik fokus soati* — bir odam kuniga taskka sarflay oladigan toza vaqt (meetinglar, review, savollardan tashqari).
- *Uch nuqtali baho* — bitta ish uchun uchta raqam: O (optimistik — hammasi yaxshi ketsa), E (ehtimoliy — odatdagidek), P (pessimistik — ma'lum risklar yuz bersa).
- *Bufer* — noaniqlik uchun ochiq qo'shilgan vaqt.
- *Spike* — javob topish uchun qisqa, vaqti cheklangan o'rganish taski (masalan, "kutubxona bu formatni qo'llaydimi").

## 3. Qoidalar

1. **Baho va srok — boshqa-boshqa narsa.** Baho soatda beriladi; srok PM tomonidan hisoblanadi: (baholar + bufer) ÷ (odamlar × kunlik fokus soati), ustiga bog'liqliklar, ta'tillar va bayramlar. Kunlik fokus soati loyiha boshida kelishiladi (boshlang'ich qiymat — 6 soat) va retroda haqiqiy raqam bilan tuzatiladi. *Nega:* "3 kunlik ish" — "3 kundan keyin tayyor" degani emas: odam boshqa ishlar, review va meetinglarda ham band.
2. **Bahoni bajaruvchi beradi.** Bu DoR sharti ([D08](D08-kanban-dor-dod.md)). Bajaruvchi hali aniq bo'lmasa, shu yo'nalishdagi dasturchi baholaydi, task boshqa odamga o'tsa, u bahoni qayta tasdiqlaydi. Tech lead bahoni muhokama qiladi, lekin bajaruvchisiz o'zgartirmaydi; PM esa umuman o'zgartirmaydi — srok sig'masa, 9-qoida. *Nega:* ishni bilmaydigan odam qo'ygan baho — xohish, baho emas; bajaruvchi esa o'zi bermagan srokka javob bermaydi.
3. **Avval bo'lish, keyin baholash.** Story 1–3 kunlik tasklarga bo'linadi ([D08](D08-kanban-dor-dod.md)). Bahoga DoD bo'yicha hamma ish kiradi: kod, testlar, MR va review izohlarini tuzatish, staging'da tekshirish. *Nega:* katta ishni bitta raqam bilan baholash taxmin bo'ladi; faqat "kod"ni baholash esa test va review'ni har safar "kutilmagan" qiladi.
4. **Story va release — uch nuqtali baho.** Har story uchun O, E, P beriladi; rejada (O + 4E + P) / 6 ishlatiladi. P E'dan ikki baravardan ko'p katta bo'lsa — noaniqlik juda katta: savol [D03](D03-loyiha-boshlangich-hujjati.md) ga qaytariladi yoki avval spike qilinadi. *Nega:* bitta raqam noaniqlikni yashiradi; oraliq esa qayerda risk borligini ko'rsatadi.
5. **Bufer ochiq va bitta joyda.** Bufer task bahosiga yashirilmaydi — release darajasida alohida qator bo'lib turadi. Miqdori uch nuqtali bahodan hisoblanadi (masalan, P va reja bahosi farqlari yig'indisining yarmi); usul rejada yoziladi. *Nega:* har kim o'z bahosiga yashirin zaxira qo'shsa, zaxira ko'rinmaydi, baribir sarflanadi va keyingi baholar ishonchsiz bo'lib qoladi.
6. **Dastlabki baho — oraliq, majburiyat emas.** TZ tasdiqlanmasidan oldin mijozga faqat oraliq aytiladi ("6–10 hafta") va "dastlabki" deb yoziladi. Majburiyat bo'ladigan srok faqat 4-darvozada, bajaruvchilar bahosi bilan paydo bo'ladi. *Nega:* scope aniq bo'lmagan paytdagi raqam keyin "va'da qilgandingiz" degan bahsga aylanadi.
7. **Srok mijozga yozma: sana, scope va farazlar bilan** (6.2-shablon). Farazlar — srok qaysi shartlarga bog'liq (masalan, "API kontrakti 1-dekabrgacha"). Srok qarorlar jurnaliga yoziladi ([D02](D02-loyiha-hayot-sikli.md)) va PO tasdiqlaydi ([D01](D01-rollar-va-raci.md)). *Nega:* scope'siz sana — bo'sh va'da; farazsiz sana esa kechikish sababini keyin tushuntirib bo'lmaydi.
8. **Kechikish signali erta.** Task bahosidan yarmidan ko'proq oshib ketsa, bajaruvchi shu kuni daily'da aytadi. Haftalik sync'da (D09) PM qolgan ishni (soat) qolgan vaqt bilan solishtiradi. Faraz buzilsa (kontrakt kech keldi), PM shu hafta mijozga yozadi. *Nega:* kechikish birinchi haftada ko'rinsa, uni scope yoki tartib bilan yopish mumkin; oxirgi kuni esa faqat uzr qoladi.
9. **Srok sig'masa — variantni PO tanlaydi, sifat kesilmaydi.** Variantlar: scope'dan nimadir keyingi release'ga o'tadi; sana suriladi; odam qo'shiladi (kichik jamoada va oxirgi haftalarda kam yordam beradi — yangi odamni ulash ham vaqt oladi). Test va review'ni qisqartirish variant emas — bu DoD'ni buzish ([D08](D08-kanban-dor-dod.md)). Qaror jurnalga yoziladi (6.3-shablon). *Nega:* yashirin yechim (sifatni kesish, kechasi ishlash) srokni bir marta saqlaydi, keyin bug va charchoq bilan qaytadi.
10. **Baho va haqiqat solishtiriladi.** Task yopilganda bajaruvchi haqiqiy vaqtni yozadi (Jira'da). Release oxirida PM baho va haqiqat farqini va kunlik fokus soatini hisoblaydi; natija retroga (D17) va keyingi baholarga boradi. *Nega:* solishtirilmagan baho hech qachon aniqlashmaydi; root docdagi "srok aniqligi" metrikasi aynan shu raqam.

**Kichik loyihada (3–5 kishi).** Uch nuqtali baho story darajasida yetarli; tasklar bitta raqam (soat) bilan. Bufer, yozma srok va 9-qoida — majburiy.

## 4. Shablonlar

### 4.1. Release bahosi

```
Release: R<N>   Scope: D03 v<X.Y>, US-<NN>…US-<NN>   Sana: <sana>   Tuzdi: <PM>
Birlik: soat   Kunlik fokus soati: <6> soat/odam

| Story  | Tasklar (fe/be/design) | O | E | P | Reja (O+4E+P)/6 | Baholadi |
| ------ | ---------------------- | - | - | - | --------------- | -------- |
| US-01  |                        |   |   |   |                 |          |

Jami reja:      <soat>
Bufer:          <soat>   Usul: <masalan, Σ(P − reja) / 2>
Jami:           <soat>

Odamlar:        <ism — rol — bandlik %, ta'til kunlari>
Bog'liqliklar:  <kontrakt, maket, mijoz javobi — kimdan, qachongacha>
Hisob:          <jami> ÷ (<odamlar> × <fokus soati>) = <ish kuni> → srok: <sana>
Spike kerak:    <yo'q / qaysi story, necha soat>
```

### 4.2. Srok xati (mijozga)

```
Mavzu: <loyiha> — R<N> srok

Scope: D03 v<X.Y>, quyidagi story'lar: US-<NN>, …
Srok: <sana> (oraliq: <eng erta> — <eng kech>)
Farazlar (bajarilmasa, srok qayta ko'riladi):
  1. <masalan, API kontrakti <sana>gacha kelishiladi>
  2. <masalan, D03 dagi S-02 savoliga javob <sana>gacha>
Kirmaydi: <keyingi release'ga qolganlar>
Holat haqida xabar: har <hafta kuni>, haftalik sync'dan keyin
Qarorlar jurnali: Q-<NN>
Tasdiqlash: PO — <ism>, <sana>
```

### 4.3. Srok surilishi

```
Nima: R<N> / US-<NN> — rejadan <N> ish kuniga kechikmoqda
Sabab: <fakt: qaysi faraz buzildi yoki qaysi baho oshdi va nega>
Variantlar:
  A) <story> keyingi release'ga — sana saqlanadi
  B) sana <sana>ga suriladi — scope saqlanadi
  C) <boshqa, masalan bog'liqlikni mock bilan yopish>
Tavsiyamiz: <variant va nega>
Qaror kerak: <sana>gacha, PO — <ism>
Qaror: <variant>, <sana> → Q-<NN>
```

## 5. Misol

Misol loyihada hali yozilmagan: Test Platformasi uchun release bahosi va srok — [loyiha kartasidagi "Hujjatlar" jadvalida](loyihalar/test-platformasi/index.md) "rejada".

## 6. Checklist: srok asoslimi

- [ ] Release'dagi har task soatda baholangan va bahoni bajaruvchi bergan ([D08](D08-kanban-dor-dod.md) DoR)
- [ ] Har story'ning O, E, P bahosi bor; P > 2E bo'lganlari uchun spike yoki savol ochilgan
- [ ] Bufer alohida qatorda, hisoblash usuli yozilgan
- [ ] Srok hisobi ochiq: odamlar, bandlik, fokus soati, bog'liqliklar
- [ ] Mijozga srok xati yuborilgan: scope, sana, farazlar; PO tasdiqlagan; jurnalda Q-raqami bor
- [ ] Oxirgi haftalik sync'da reja va haqiqat solishtirilgan
- [ ] Har kechikish 4.3-shablon bo'yicha PO'ga borgan va qarori jurnalda
- [ ] Release oxirida baho va haqiqat farqi hisoblangan va retroga berilgan

## 7. Tez-tez uchraydigan xatolar

1. **Srokni rahbar yoki mijoz aytadi, jamoa "sig'diradi".** To'g'risi: avval bajaruvchilar bahosi, keyin srok; sig'masa — 9-qoida bo'yicha variantlar.
2. **Faqat kod baholanadi.** Test, review va staging tekshiruvi "kutilmagan" bo'lib chiqadi. To'g'risi: bahoga DoD bo'yicha hamma ish kiradi (3-qoida).
3. **Yashirin zaxira.** Har kim bahosini "har ehtimolga" ikki baravar qiladi — reja shishadi va baribir kechikadi. To'g'risi: halol baho va bitta ochiq bufer.
4. **Dastlabki raqam va'daga aylanadi.** Birinchi suhbatdagi "taxminan 2 oy" shartnomaga tushadi. To'g'risi: dastlabki baho faqat oraliq va "dastlabki" belgisi bilan.
5. **"Ulguramiz" oxirgi kungacha.** Kechikish release kuni ma'lum bo'ladi. To'g'risi: bahodan yarmidan ko'p oshganda — shu kuni daily'da; haftalik reja va haqiqat solishtiruvi.

---

Egasi: PM + tech lead · Oxirgi yangilangan: 2026-11-07 · Keyingi ko'rib chiqish: pilot loyiha retrosidan keyin (D17)
