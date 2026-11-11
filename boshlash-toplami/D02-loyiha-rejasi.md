# D02 · Loyiha rejasi, qarorlar jurnali va risklar reestri

> - **Standart:** [D02 — Loyiha hayot sikli](https://utamuratov.github.io/loyiha-standarti/D02-loyiha-hayot-sikli.html) (bosqichlar, darvozalar va qoidalar shu yerda).
> - **Kim to'ldiradi:** PM. **Qachon:** 1-bosqichda ochiladi va loyiha oxirigacha yuritiladi.
> - **Tayyor:** har darvozadan oldin uning checklisti to'liq; jurnal va reestr haftalik sync'da ko'rilmoqda.

## 1. Bosqichlar va release'lar rejasi

| # | Bosqich | Rejadagi boshlanish | Rejadagi tugash | Darvozani tasdiqlaydi |
| --- | --- | --- | --- | --- |
| 1 | Boshlash | | | PO |
| 2 | Talablar | | | PO — scope; analitik — to'liqlik |
| 3 | Dizayn | | | PM |
| 4 | Planlash | | | PM; srokni PO |
| 5–7 | Ishlab chiqish, release, topshirish | har release uchun pastdagi jadvalda | | |

| Release | Asosiy maqsad (1 gap) | Story'lar (TZ'dan) | Taxminiy davr |
| --- | --- | --- | --- |
| R1 | | | |
| R2 | | | |

4-darvozagacha sanalar dastlabki hisoblanadi. Majburiyat bo'ladigan srok faqat 4-darvozada paydo bo'ladi ([Baho va srok](D06-baho-va-srok.md)).

## 2. Darvozalar

⛔ — bloklovchi punkt: u bajarilmasa, darvozadan o'tilmaydi (shartli ham).

### 1-darvoza: Boshlash → Talablar

- [ ] ⛔ Muammo va biznes maqsad yozilgan ([TZ](D03-tz.md), Brief)
- [ ] O'lchanadigan muvaffaqiyat mezonlari bor
- [ ] ⛔ Scope chegarasi: nima kiradi va nima kirmaydi
- [ ] Mijoz tomondan qaror qiluvchi (PO) belgilangan
- [ ] Jamoa va rollar belgilangan ([Jamoa va RACI](D01-jamoa-va-raci.md))
- [ ] Hujjatlar joyi (ichki tizimda), Jira loyihasi, qarorlar jurnali va risklar reestri ochilgan

```
Sana: ____   Tasdiqlovchi: ____ (PO)
Checklist: __/6; bloklovchilar — hammasi bajarilgan
Shartli o'tilgan punktlar: ____ → R-__ (egasi, muddat)
Qaror: o'tildi / o'tilmadi (sababi)
Havola: Brief versiyasi, kickoff protokoli
```

### 2-darvoza: Talablar → Dizayn

- [ ] ⛔ TZ to'liq; har bir story'da qabul mezoni bor
- [ ] ⛔ Doc review o'tgan; bloklovchi savollar soni 0 ([Kickoff va doc review](D05-kickoff-va-doc-review.md))
- [ ] Qolgan ochiq savollarning egasi va muddati bor
- [ ] Rollar va ruxsatlar matritsasi bor
- [ ] API kontrakti qoralamasi (asosiy endpointlar) bor
- [ ] Shaxsiy ma'lumotlar bo'limi to'ldirilgan (loyiha shaxsiy ma'lumot bilan ishlasa — ⛔)
- [ ] Mijoz TZ versiyasini yozma tasdiqlagan

```
Sana: ____   Tasdiqlovchi: ____ (PO — scope), ____ (analitik — to'liqlik)
Checklist: __/7; bloklovchilar — hammasi bajarilgan
Shartli o'tilgan punktlar: ____ → R-__ (egasi, muddat)
Qaror: o'tildi / o'tilmadi (sababi)
Havola: TZ v____, doc review protokoli
```

### 3-darvoza: Dizayn → Planlash

- [ ] ⛔ TZ'dagi har bir ekran chizilgan
- [ ] Har ekranning holatlari bor: bo'sh, yuklanmoqda, xato, ruxsat yo'q ([D12](https://utamuratov.github.io/loyiha-standarti/D12-ui-ux-standartlari.html), B bo'limi)
- [ ] Komponentlar D12 ro'yxatidan; yangi komponent bo'lsa, u kelishilgan
- [ ] Dasturchilar maketni ko'rib, handoff checklistini qabul qilgan ([Dizayn brief](D04-dizayn-brief.md), 2-bo'lim)
- [ ] Mijoz maketni ko'rgan, izohlari yopilgan yoki jurnalga yozilgan

```
Sana: ____   Tasdiqlovchi: ____ (PM)
Checklist: __/5; bloklovchilar — hammasi bajarilgan
Shartli o'tilgan punktlar: ____ → R-__ (egasi, muddat)
Qaror: o'tildi / o'tilmadi (sababi)
Havola: Figma Handoff v____, handoff checklisti
```

### 4-darvoza: Planlash → Ishlab chiqish

- [ ] ⛔ Birinchi release scope'idagi tasklar Jira'da, DoR bo'yicha ([D08](https://utamuratov.github.io/loyiha-standarti/D08-kanban-dor-dod.html))
- [ ] ⛔ Har bahoni bajaruvchining o'zi bergan ([Baho va srok](D06-baho-va-srok.md))
- [ ] Loyiha release'larga bo'lingan; har release'ning scope'i va sanasi bor
- [ ] Srok mijoz bilan kelishilgan va jurnalga yozilgan
- [ ] Muhitlar (dev, staging) va CI tayyor yoki task sifatida rejada ([D14](https://utamuratov.github.io/loyiha-standarti/D14-release-va-deploy.html))
- [ ] Risklar reestri ko'rib chiqilgan

```
Sana: ____   Tasdiqlovchi: ____ (PM); srok — ____ (PO)
Checklist: __/6; bloklovchilar — hammasi bajarilgan
Shartli o'tilgan punktlar: ____ → R-__ (egasi, muddat)
Qaror: o'tildi / o'tilmadi (sababi)
Havola: release bahosi, srok xati, Jira
```

## 3. Qarorlar jurnali

Muhim qaror (scope, srok, arxitektura, UX oqimi, integratsiya, mijoz bilan kelishuv) qabul qilingan kanalidan qat'i nazar shu yerga yoziladi. Qaror o'zgarsa, eski qator o'chirilmaydi: holati "bekor qilingan" bo'ladi va yangi qarorga havola qo'yiladi.

| ID | Sana | Qaror | Sabab va ko'rilgan variantlar | Kim qaror qildi | Ta'siri | Manba | Holat |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Q-01 | | | | | scope / srok / kod / UX | protokol, Jira, kanal havolasi | amalda |

## 4. Risklar reestri

Risk aniqlangan kuni yoziladi va haftalik sync'da ko'riladi.

| ID | Risk | Ehtimollik | Ta'sir | Egasi | Chora | Muddat | Holat |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R-01 | | past / o'rta / yuqori | past / o'rta / yuqori | | | | ochiq |
