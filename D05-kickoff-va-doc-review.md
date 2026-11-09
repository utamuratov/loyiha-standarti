# D05 — Kickoff va doc review meeting

## 1. Maqsad

Loyiha boshida ikki meeting ish boshlanishidan oldin tushunmovchiliklarni ushlaydi. **Kickoff** — butun jamoa va mijoz bitta maqsad, scope chegarasi va o'yin qoidalarini eshitadi. **Doc review** — TZ'ni har bir rol o'z ko'zi bilan o'qib chiqadi va savollar kod yozilishidan oldin yopiladi. Ikkalasi ham qisqa, oldindan o'qilgan materialga tayanadi va yozma natija bilan tugaydi — "muhokamalar cho'zilib ketadi" og'rig'iga javob.

## 2. Kim uchun va qachon

- **Egasi:** PM. Meetinglarni chaqiradi, olib boradi, protokolni yuboradi.
- **Qatnashchilar** ([D01](D01-rollar-va-raci.md) bo'yicha):

| | Kickoff | Doc review |
| --- | --- | --- |
| Majburiy | PO (mijoz), PM, analitik, dizayner, tech lead, dasturchilar | PM, analitik, dizayner, tech lead, dasturchilar, QA |
| Ixtiyoriy | QA, DevOps, support | PO — bloklovchi savollar ko'p bo'lsa; DevOps |
| Protokolni oladi | Hamma | Hamma, PO |

- **Qachon:**
  - **Kickoff** — 1-bosqichda (Boshlash), Brief ([D03](D03-loyiha-boshlangich-hujjati.md)) tayyor bo'lgach, 1-darvozadan oldin.
  - **Doc review** — 2-bosqichda (Talablar), to'liq TZ qoralamasi tayyor bo'lgach, 2-darvozadan oldin ([D02](D02-loyiha-hayot-sikli.md)). TZ katta bo'lsa, release yoki modul bo'yicha bo'lib o'tkaziladi.
  - Change request ([D10](D10-ozgarishlarni-boshqarish.md)) TZ'ning katta qismini o'zgartirsa, o'sha qism uchun qisqa doc review takrorlanadi.

Har qanday meetingning umumiy qoidalari (avval yozma, agenda, timebox, har masala natija bilan, protokol) — [D09](D09-meetinglar-ritmi.md). Bu yerda faqat kickoff va doc review'ga xos qoidalar.

**Atamalar.**
- *Kickoff* — loyihani boshlash meetingi: nima, nega, kim va qanday ishlaymiz.
- *Doc review* — hujjatni (bu yerda TZ) jamoa tomonidan ko'rib chiqish: avval har kim alohida izoh yozadi, keyin meetingda faqat ochiq qolganlari muhokama qilinadi.
- *Timebox* — muhokamaga oldindan berilgan qat'iy vaqt.
- *Bloklovchi savol* — ta'rifi [D03](D03-loyiha-boshlangich-hujjati.md) da (11-qoida): javobisiz ishni boshlab yoki baholab bo'lmaydi.

## 3. Qoidalar

1. **Material 1 ish kuni oldin.** Brief (kickoff uchun) yoki TZ (doc review uchun) va agenda meetingdan kamida 1 ish kuni oldin yuboriladi. *Nega:* birinchi marta meetingda ko'rilgan hujjat haqida faqat yuzaki fikr aytiladi; meeting "birga o'qish"ga aylanadi.
2. **Doc review — avval yozma izohlar.** Har majburiy qatnashchi meetingdan oldin TZ'ning o'ziga izoh qoldiradi, belgilar bilan ([D11](D11-dasturchilar-qoidalari.md) dagi kabi): `[bloklovchi]`, `[savol]`, `[taklif]`. Analitik meetinggacha javob berishi mumkin bo'lganlarini yopadi. *Nega:* ko'p savolning javobi bir gap — ularga meeting vaqti sarflanmaydi; meetingda faqat haqiqiy kelishmovchilik qoladi.
3. **O'qilmagan bo'lsa — ko'chiriladi.** Meetingdan 2 soat oldin PM izohlarni ko'radi: majburiy rollardan biri (dizayner, tech lead yoki dasturchi, QA) izoh qoldirmagan bo'lsa, doc review 1 ish kuniga suriladi. *Nega:* o'qimagan odam bilan o'tgan review keyin "men buni ko'rmagandim" bo'lib qaytadi — bu rework.
4. **Timebox.** Kickoff — 60 daqiqa, doc review — 60 daqiqa (kichik loyihada 30–45). Bitta savolga — 10 daqiqa; vaqt tugasa, savol 5-qoida bo'yicha yopiladi. *Nega:* TZ'da savol ko'p — bittasiga ketgan yarim soat qolganlarini muhokamasiz qoldiradi.
5. **Har izoh TZ'da yopiladi.** Umumiy qoida — har masala natija bilan ([D09](D09-meetinglar-ritmi.md)). Doc review'da: javob — analitik TZ'ga yozadi; qaror — qarorlar jurnaliga ([D02](D02-loyiha-hayot-sikli.md)); ochiq savol — TZ'dagi ochiq savollar ro'yxatiga egasi, muddati va "bloklovchi: ha/yo'q" bilan ([D03](D03-loyiha-boshlangich-hujjati.md)). *Nega:* TZ izohlarida qolgan javob keyingi versiyada yo'qoladi; javob TZ matniga tushishi kerak.
6. **Bloklovchini meeting belgilaydi, keyin u darvozani to'xtatadi.** Bloklovchi savol ochiq ekan, 2-darvoza o'tmaydi ([D02](D02-loyiha-hayot-sikli.md)); bloklovchi bo'lmaganlari bilan ish davom etadi. Hamma savolni "bloklovchi" qilish mumkin emas: belgilash sababi bir gap bilan aytiladi ("javobisiz API'ni baholab bo'lmaydi"). *Nega:* bloklovchi bo'lmasa — xavfli savol ish ichida "kutilmaganda" chiqadi; hammasi bloklovchi bo'lsa — loyiha boshlanmaydi.
7. **Protokolda bloklovchilar soni.** Protokol [D09](D09-meetinglar-ritmi.md) qoidasi bo'yicha 1 ish kuni ichida, lekin 4.3-shablonda: bloklovchi savollar soni va 2-darvozaga tayyorlik alohida qator. *Nega:* PO va jamoa bitta raqamdan TZ darvozaga qachon tayyor bo'lishini ko'radi.
8. **Kickoff'da srok va'da qilinmaydi.** Kickoff'da faqat dastlabki oraliq aytilishi mumkin ([D06](D06-baholash-va-srok.md), 6-qoida); srok 4-darvozada, bajaruvchilar bahosidan keyin. *Nega:* Brief bosqichida aytilgan sana jamoa TZ'ni ko'rmasdan berilgan va'da bo'ladi.
9. **Kickoff'da maqsadni PO o'zi aytadi.** Muammo, kim uchun va muvaffaqiyat qanday o'lchanishini mijoz jamoaga birinchi qo'ldan tushuntiradi; jamoa savol beradi. *Nega:* ikkinchi qo'ldan eshitilgan maqsad har kimda boshqacha bo'ladi — dizayner bir narsani, dasturchi boshqasini qiladi.

**Kichik loyihada (3–5 kishi).** Kickoff va doc review qisqaradi (30–45 daqiqa), lekin 1-, 2- va 5-qoidalar hamda [D09](D09-meetinglar-ritmi.md) dagi protokol qoidasi saqlanadi: yozma izoh va protokolsiz meeting kichik jamoada ham og'zaki kelishuvga aylanadi.

## 4. Shablonlar

### 4.1. Kickoff agendasi (60 daqiqa)

```
Loyiha: <nomi>   Sana: <sana>   Olib boradi: <PM>
Oldindan o'qish: Brief (D03), <havola> — <sana>gacha

1. Muammo va maqsad — PO (10 daq)
   Kim uchun, nega hozir, muvaffaqiyat qanday o'lchanadi
2. Scope chegarasi — analitik (10 daq)
   Nima kiradi va nima KIRMAYDI; release'larga dastlabki bo'linish
3. Jamoa va rollar — PM (10 daq)
   D01 rollar jadvali: kim nima qiladi, zaxiralar, PO kim
4. Qanday ishlaymiz — PM (10 daq)
   Bosqichlar va darvozalar (D02), hujjatlar joyi, Jira, qarorlar jurnali,
   kanallar (Telegram — tezkor aloqa, kelishuv — jurnalda)
5. Savollar va birinchi risklar — hamma (15 daq)
6. Keyingi qadamlar — PM (5 daq)
   TZ qoralamasi kim va qachongacha; doc review sanasi
```

### 4.2. Doc review taklifi

```
Mavzu: <loyiha> — TZ v<X.Y> doc review, <sana> <vaqt>

TZ: <havola>   Qism: <butun TZ / R<N> / modul>
Izohlar: <sana, vaqt>gacha, to'g'ridan-to'g'ri TZ'ga, belgilar bilan:
  [bloklovchi] — javobisiz ishni boshlab yoki baholab bo'lmaydi (sababi bilan)
  [savol]      — tushuntirish kerak
  [taklif]     — yaxshilash g'oyasi, analitik qaror qiladi
Har rol nimaga qaraydi:
  Dizayner  — ekranlar va holatlar to'liqmi (D04, D12)
  Dasturchi — ruxsatlar, API, nofunksional talablar baholasa bo'ladimi (D06)
  QA        — qabul mezonlari tekshirsa bo'ladimi (D13)
Meeting: <sana>, 60 daqiqa, faqat ochiq qolgan izohlar
```

### 4.3. Protokol

```
Meeting: Kickoff / Doc review TZ v<X.Y>   Sana: <sana>
Qatnashdi: <ismlar>   Qatnashmadi: <ismlar>

Qarorlar (→ qarorlar jurnali):
  Q-<NN>: <qaror>
Ochiq savollar (→ TZ, ochiq savollar ro'yxati):
  S-<NN>: <savol> — egasi: <ism>, muddat: <sana>, bloklovchi: ha/yo'q
Risklar (→ risklar reestri):
  R-<NN>: <risk> — egasi: <ism>
Keyingi qadamlar:
  - <nima> — <kim> — <sana>
Bloklovchi savollar soni: <N>   2-darvozaga tayyor: ha / yo'q (<qachon>)
```

## 5. Misol

Misol loyihada hali yozilmagan: Test Platformasi uchun kickoff protokoli — [loyiha kartasidagi "Hujjatlar" jadvalida](loyihalar/test-platformasi/index.md) "rejada".

## 6. Checklist

**Kickoff o'tdi:**
- [ ] Brief va agenda 1 ish kuni oldin yuborilgan
- [ ] Maqsad va muvaffaqiyat mezonlarini PO o'zi aytgan
- [ ] Scope chegarasi ("kirmaydi" ro'yxati bilan) va rollar jadvali ([D01](D01-rollar-va-raci.md)) ko'rsatilgan
- [ ] Hujjatlar joyi, Jira, qarorlar jurnali va risklar reestri ochilgan ([D02](D02-loyiha-hayot-sikli.md) 1-darvoza)
- [ ] Srok va'da qilinmagan; dastlabki oraliq aytilgan bo'lsa — "dastlabki" deb yozilgan
- [ ] Protokol 1 ish kuni ichida yuborilgan

**Doc review o'tdi:**
- [ ] TZ 1 ish kuni oldin yuborilgan; majburiy rollarning hammasi izoh qoldirgan
- [ ] Har izoh yopilgan: javob TZ'da, qaror jurnalda yoki ochiq savol egasi va muddati bilan
- [ ] Bloklovchi savollar soni sanalgan; 0 bo'lmasa — har birining muddati 2-darvozadan oldin
- [ ] TZ yangi versiya raqamini olgan, protokol yuborilgan

## 7. Tez-tez uchraydigan xatolar

1. **Meetingda hujjatni birga o'qish.** 2 soat ekranda TZ varaqlanadi, savollar yuzaki. To'g'risi: avval yozma izohlar, meetingda faqat ochiq qolganlari.
2. **"Keyin gaplashamiz".** Savol egasiz qoladi va ishlab chiqish o'rtasida chiqadi. To'g'risi: har savol — javob, qaror yoki egasi va muddati bor ochiq savol.
3. **Hamma narsa "bloklovchi".** Loyiha boshlanolmaydi yoki belgining ma'nosi yo'qoladi. To'g'risi: bloklovchi — sababi bilan, faqat ishni boshlab yoki baholab bo'lmasa.
4. **Mijozsiz kickoff.** Maqsadni PM o'z so'zi bilan aytib beradi, jamoa savolini beradigan odam yo'q. To'g'risi: maqsadni PO aytadi.
5. **Protokolsiz meeting.** Bir haftadan keyin har kim boshqacha eslaydi. To'g'risi: 1 ish kuni ichida protokol, qarorlar — jurnalda.

---

Egasi: PM · Oxirgi yangilangan: 2026-11-07 · Keyingi ko'rib chiqish: pilot loyiha retrosidan keyin ([D17](D17-retro-va-standartni-yangilash.md))
