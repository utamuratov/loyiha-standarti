# D06 · Baho va srok

> - **Standart:** [D06 — Baholash va srok](https://utamuratov.github.io/loyiha-standarti/D06-baholash-va-srok.html) (baho va srok farqi, uch nuqtali baho, bufer, kechikishdagi variantlar).
> - **Kim to'ldiradi:** baholarni bajaruvchilar beradi, tech lead ko'rib chiqadi; hisob va srok xatini PM yozadi. **Tasdiqlaydi:** srokni PO.
> - **Qachon:** 4-bosqichda, 4-darvozagacha. 1–2-bosqichlarda faqat dastlabki oraliq aytiladi.
> - **Tayyor:** pastdagi checklist to'liq, srok qarorlar jurnalida.

## 1. Release bahosi

Release: R__ · Scope: TZ v____, US-__ … US-__ · Sana: ____ · Tuzdi: ____ (PM)
Birlik: soat · Kunlik fokus soati: ____ soat/odam (standartda boshlang'ich qiymat 6)

| Story | Tasklar (fe / be / design) | O | E | P | Reja (O+4E+P)/6 | Baholadi |
| --- | --- | --- | --- | --- | --- | --- |
| US-01 | | | | | | |

O — hammasi yaxshi ketsa; E — odatdagidek; P — ma'lum risklar yuz bersa. P E'dan ikki baravardan ko'p bo'lsa, noaniqlik katta: avval savol yoki spike.

| | |
| --- | --- |
| Jami reja | ____ soat |
| Bufer | ____ soat · usul: ____ (masalan, Σ(P − reja) / 2) |
| Jami | ____ soat |
| Odamlar | ism — rol — bandlik %, ta'til kunlari ([Modullar taqsimoti](D07-modullar-taqsimoti.md)) |
| Bog'liqliklar | kontrakt, maket, mijoz javobi — kimdan, qachongacha |
| Hisob | jami ÷ (odamlar × fokus soati) = ____ ish kuni → srok: ____ |
| Spike kerak | yo'q / qaysi story, necha soat |

## 2. Srok xati (mijozga)

```
Mavzu: ____ — R__ srok

Scope: TZ v____, quyidagi story'lar: US-__, …
Srok: ____ (oraliq: eng erta ____ — eng kech ____)
Farazlar (bajarilmasa, srok qayta ko'riladi):
  1. ____ (masalan, API kontrakti ____ gacha kelishiladi)
  2. ____
Kirmaydi: ____ (keyingi release'ga qolganlar)
Holat haqida xabar: har ____, haftalik sync'dan keyin
Qarorlar jurnali: Q-__
Tasdiqlash: PO — ____, ____
```

## 3. Srok surilishi (kerak bo'lganda)

```
Nima: R__ / US-__ — rejadan __ ish kuniga kechikmoqda
Sabab: ____ (qaysi faraz buzildi yoki qaysi baho oshdi va nega)
Variantlar:
  A) ____ keyingi release'ga — sana saqlanadi
  B) sana ____ ga suriladi — scope saqlanadi
  C) ____
Tavsiyamiz: ____
Qaror kerak: ____ gacha, PO — ____
Qaror: ____, ____ → Q-__
```

Test va review'ni qisqartirish variant emas.

## Checklist: srok asoslimi

- [ ] Release'dagi har task soatda baholangan va bahoni bajaruvchi bergan
- [ ] Har story'ning O, E, P bahosi bor; P > 2E bo'lganlari uchun spike yoki savol ochilgan
- [ ] Bufer alohida qatorda turibdi, hisoblash usuli yozilgan
- [ ] Srok hisobi ochiq: odamlar, bandlik, fokus soati va bog'liqliklar ko'rsatilgan
- [ ] Mijozga srok xati yuborilgan: scope, sana, farazlar; PO tasdiqlagan; jurnalda Q-raqami bor
