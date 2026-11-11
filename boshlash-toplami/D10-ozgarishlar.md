# D10 · O'zgarishlar (change request)

> - **Standart:** [D10 — O'zgarishlarni boshqarish](https://utamuratov.github.io/loyiha-standarti/D10-ozgarishlarni-boshqarish.html) (o'zgarish turlari, kim tasdiqlaydi, qoidalar).
> - **Kim to'ldiradi:** PM ochadi va qarorni yozadi; analitik TZ'ga ta'sirini yozadi; bajaruvchilar baholaydi. **Tasdiqlaydi:** PO.
> - **Qachon:** TZ 2-darvozada tasdiqlangandan keyin, loyiha oxirigacha. So'rov qayerdan kelishidan qat'i nazar (demo, dizayn review, kanal, qo'ng'iroq).

Har so'rov 1 ish kuni ichida Backlog'ga `change-request` labeli bilan yoziladi. Jamoa a'zosi mijozga o'zi "ha, qilamiz" demaydi.

## 1. O'zgarishlar ro'yxati

| CR | Sana | Nima (qisqa) | Kim so'radi | Tur | Baho (soat) | Qaror | Jurnal | TZ versiyasi |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CR-01 | | | | aniqlashtirish / kichik / katta | | qabul / keyingi release / rad | Q-__ | v____ |

Rad etilgan CR ham sababi bilan yoziladi.

## 2. Change request formasi

Har kichik va katta CR uchun nusxa olinadi.

```
CR-__   Sana: ____   Kim so'radi: ____ (rol)   Qayerdan: demo / kanal / murojaat / jamoa
Tur: aniqlashtirish / kichik / katta

1. Nima: ____ (so'rovchining so'zi bilan)
2. Nega: ____ (qaysi muammoni yechadi, kim uchun)
3. TZ'ga ta'siri: story US-__ (yangi / o'zgaradi), ekran E-__, qabul mezonlari
4. Baho: ____ soat — kim baholadi (fe / be / design / test)
--- katta CR uchun ---
5. Boshqa ishlarga ta'siri: maket (handoff v__), API kontrakti, testlar, qo'llanma
6. Srok va release'ga ta'siri: R__ sanasi ____ → ____ yoki ____ R__ ga
7. Risklar: R-__
8. Variantlar:
   A) ____
   B) ____
   Tavsiyamiz: ____

Qaror: qabul qilindi (variant __) / keyingi release'ga / rad etildi — sabab: ____
Tasdiqladi: PO — ____, ____   Jurnal: Q-__   TZ: v____
```

Qabul qilingan CR avval hujjatlarda aks etadi: jurnal, TZ versiyalar tarixi, kerak bo'lsa maket va srok xati. Shundan keyingina task Ready'ga o'tadi.

## Checklist

- [ ] Mijozdan kelgan har so'rov Backlog'da `change-request` labeli bilan bor
- [ ] Har CR'ning turi va bahosi bor; katta CR'larda variantlar va PO qarori bor
- [ ] Qabul qilingan har CR uchun TZ versiyalar tarixida CR raqami va jurnalda yozuv bor
- [ ] Rad etilgan CR'lar sababi bilan yozilgan
