# D04 · Dizayn brief va handoff

> - **Standart:** [D04 — Dizayn brief va jarayon](https://utamuratov.github.io/loyiha-standarti/D04-dizayn-brief-va-jarayon.html) (ish tartibi: brief → wireframe → UI → handoff; Figma tuzilmasi).
> - **Kim to'ldiradi:** brief'ni analitik va dizayner birga; handoff checklistini dizayner, qabul qiladi frontend va QA.
> - **Qachon:** 3-bosqichda, TZ 2-darvozadan o'tgach. Har release yoki modul uchun alohida.
> - **Kichik loyihada:** brief alohida yozilmasa, TZ'dagi ekranlar ro'yxatiga maket havolasi qo'shiladi. Handoff checklisti baribir majburiy.

## 1. Dizayn brief

| | |
| --- | --- |
| Release / modul | ____ |
| TZ versiyasi | v____ |
| Tuzdi | ____ (analitik), ____ (dizayner) |
| Maqsad: bu ekranlar foydalanuvchiga nima beradi | ____ |
| Foydalanuvchilar, qurilma va sharoit | ____ |
| Story'lar | US-__, … |
| Ekranlar | E-__ ____ — rol, … |
| Oqim | birinchi ekran → … → oxirgi ekran; muqobil yo'llar va xatolar |
| Kontent: qaysi ma'lumot, matnlar manbasi | ____ |
| Qurilmalar va ekran o'lchamlari | desktop / planshet / telefon |
| Design system: mavjud komponentlar, yangisi kerakmi | ____ |
| Cheklovlar: texnik, huquqiy, brend | ____ |
| Kirmaydi | ____ |
| Ochiq savollar | S-__ (TZ'dagi ro'yxatga yoziladi) |
| Muddatlar | wireframe review — ____; UI review — ____; handoff — ____ |

Brief'da TZ'da yo'q talab paydo bo'lmaydi. Paydo bo'lsa, u TZ'ga ochiq savol bo'lib qaytadi.

## 2. Handoff checklist

Release / modul: ____ · Handoff v____ · Sana: ____

- [ ] Har ekran TZ'dagi ekranlar ro'yxatida, frame nomida ID va holat bor
- [ ] Har ekranning holatlari chizilgan ([D12](https://utamuratov.github.io/loyiha-standarti/D12-ui-ux-standartlari.html), B bo'limi) va story'dagi xato holatlari bor
- [ ] Maket tekshiruvi o'tgan (D12, 5.1)
- [ ] Ko'p qadamli oqimlar uchun prototip bor
- [ ] Matnlar lug'atdan; har tilda uzun matn sig'ishi tekshirilgan
- [ ] Qo'llab-quvvatlanadigan har ekran o'lchami uchun maket bor
- [ ] Ikonka va rasmlar eksportga tayyor
- [ ] Yangi komponentlar kartochkasi bilan (D12, 6.1)
- [ ] Ochiq savollar yo'q yoki egasi va muddati bilan TZ'da

Qabul qildi: frontend — ____, QA — ____, sana ____

## Checklist: dizayn bosqichi tayyormi

- [ ] Release yoki modul uchun brief bor va TZ versiyasiga bog'langan
- [ ] Ko'p qadamli oqimlar wireframe review'dan o'tgan: analitik, frontend yoki tech lead va PO izohlari yopilgan
- [ ] Figma'dagi har frame nomida ekran ID'si va holati bor
- [ ] Handoff checklisti to'ldirilgan, frontend va QA qabul qilgan
- [ ] Mijoz maketni yoki prototipni ko'rgan; scope'ni o'zgartiradigan izohlari [change request](D10-ozgarishlar.md) bo'lgan
