# D05 · Kickoff va doc review

> - **Standart:** [D05 — Kickoff va doc review](https://utamuratov.github.io/loyiha-standarti/D05-kickoff-va-doc-review.html); umumiy meeting qoidalari — [D09](https://utamuratov.github.io/loyiha-standarti/D09-meetinglar-ritmi.html).
> - **Kim to'ldiradi:** PM; doc review'da javoblarni analitik TZ'ga yozadi.
> - **Qachon:** kickoff — 1-bosqichda, Brief tayyor bo'lgach, 1-darvozadan oldin. Doc review — 2-bosqichda, TZ qoralamasi tayyor bo'lgach, 2-darvozadan oldin.
> - **Tayyor:** protokol 1 ish kuni ichida yuborilgan, qarorlar jurnalda, savollar TZ'da.

## 1. Kickoff

### Agenda (60 daqiqa; kichik loyihada 30–45)

Loyiha: ____ · Sana: ____ · Olib boradi: ____ (PM)
Oldindan o'qish: [TZ](D03-tz.md), Brief qismi — ____ gacha (kamida 1 ish kuni oldin)

1. **Muammo va maqsad** — PO o'zi aytadi (10 daq): kim uchun, nega hozir, muvaffaqiyat qanday o'lchanadi.
2. **Scope chegarasi** — analitik (10 daq): nima kiradi va nima kirmaydi; release'larga dastlabki bo'linish.
3. **Jamoa va rollar** — PM (10 daq): [rollar jadvali](D01-jamoa-va-raci.md), zaxiralar, PO kim.
4. **Qanday ishlaymiz** — PM (10 daq): bosqichlar va darvozalar, hujjatlar joyi, Jira, qarorlar jurnali, [meetinglar ritmi](D09-meetinglar-ritmi.md), kanallar.
5. **Savollar va birinchi risklar** — hamma (15 daq).
6. **Keyingi qadamlar** — PM (5 daq): TZ qoralamasi kim va qachongacha; doc review sanasi.

Kickoff'da srok va'da qilinmaydi. Oraliq aytilsa, u "dastlabki" deb yoziladi.

### Kickoff protokoli

```
Meeting: Kickoff   Sana: ____
Qatnashdi: ____   Qatnashmadi: ____

Qarorlar (→ qarorlar jurnali):
  Q-__: ____
Ochiq savollar (→ TZ, 17-bo'lim):
  S-__: ____ — egasi: ____, muddat: ____, bloklovchi: ha/yo'q
Risklar (→ risklar reestri):
  R-__: ____ — egasi: ____
Keyingi qadamlar:
  - ____ — ____ — ____
```

### Checklist: kickoff o'tdi

- [ ] Brief va agenda 1 ish kuni oldin yuborilgan
- [ ] Maqsad va muvaffaqiyat mezonlarini PO o'zi aytgan
- [ ] Scope chegarasi ("kirmaydi" ro'yxati bilan) va rollar jadvali ko'rsatilgan
- [ ] Hujjatlar joyi, Jira, qarorlar jurnali va risklar reestri ochilgan
- [ ] Srok va'da qilinmagan; dastlabki oraliq aytilgan bo'lsa, u "dastlabki" deb yozilgan
- [ ] Protokol 1 ish kuni ichida yuborilgan

## 2. Doc review taklifi

```
Mavzu: ____ — TZ v____ doc review, ____ (sana, vaqt)

TZ: ____ (havola)   Qism: butun TZ / R__ / modul
Izohlar: ____ gacha, to'g'ridan-to'g'ri TZ'ga, belgilar bilan:
  [bloklovchi] — javobisiz ishni boshlab yoki baholab bo'lmaydi (sababi bilan)
  [savol]      — tushuntirish kerak
  [taklif]     — yaxshilash g'oyasi, analitik qaror qiladi
Har rol nimaga qaraydi:
  Dizayner  — ekranlar va holatlar to'liqmi
  Dasturchi — ruxsatlar, API, nofunksional talablarni baholasa bo'ladimi
  QA        — qabul mezonlarini tekshirsa bo'ladimi
Meeting: ____, 60 daqiqa, faqat ochiq qolgan izohlar
```

Meetingdan 2 soat oldin PM izohlarni ko'radi. Majburiy rollardan biri izoh qoldirmagan bo'lsa, review 1 ish kuniga suriladi.

## 3. Doc review protokoli

```
Meeting: Doc review TZ v____   Sana: ____
Qatnashdi: ____   Qatnashmadi: ____

Qarorlar (→ qarorlar jurnali):
  Q-__: ____
Ochiq savollar (→ TZ, 17-bo'lim):
  S-__: ____ — egasi: ____, muddat: ____, bloklovchi: ha/yo'q
Risklar (→ risklar reestri):
  R-__: ____ — egasi: ____
Keyingi qadamlar:
  - ____ — ____ — ____
Bloklovchi savollar soni: __   2-darvozaga tayyor: ha / yo'q (qachon: ____)
```

### Checklist: doc review o'tdi

- [ ] TZ 1 ish kuni oldin yuborilgan; majburiy rollarning hammasi izoh qoldirgan
- [ ] Har izoh yopilgan: javob TZ'da, qaror jurnalda yoki ochiq savol egasi va muddati bilan
- [ ] Bloklovchi savollar soni sanalgan; 0 bo'lmasa, har birining muddati 2-darvozadan oldinga qo'yilgan
- [ ] TZ yangi versiya raqamini olgan, protokol yuborilgan
