# D17 — Retrospektiva va standartni yangilash

*`[b.q.]` — boshlang'ich qiymat: bu raqam manbadan olinmagan, standart yozilganda taklif sifatida qo'yilgan; pilotda tekshiriladi va retroda tuzatiladi. Barcha bunday qiymatlar va manbalar — [Manbalar](manbalar.md).*

## 1. Maqsad

Jamoa har release'dan keyin raqamlar va o'z tajribasiga qarab ish jarayonini tuzatsin, bu standart esa loyihalardan o'rganib, tirik qolsin. Retro shikoyat yoki ayblash uchun emas: u 1–3 ta aniq o'zgarish bilan tugaydigan qisqa meeting. Standartga tegishli takliflar esa yozma tartib bilan standartga qaytadi.

## 2. Kim uchun va qachon

- **Egasi:** PM; u retroni o'tkazadi va metrikalarni yig'adi. Standart doclari o'sha docning egasi orqali o'zgartiriladi ([D01](D01-rollar-va-raci.md)).
- **Qatnashchilar:** loyiha jamoasi. Jamoa ochiq gapira olishi uchun PO (mijoz) odatda qatnashmaydi; mijoz bilan ishlash bo'yicha xulosalar PO bilan alohida muhokama qilinadi.
- **Qachon:**

| Retro | Qachon | Vaqt | Majburiy |
| --- | --- | --- | --- |
| Release retrosi | Har release'dan keyin, 1 hafta ichida ( [b.q.][D02](D02-loyiha-hayot-sikli.md), 8-bosqich) | 45–60 daq [b.q.] | Har loyihada, kichigida ham |
| Boshlash retrosi | 4-darvozadan keyin: TZ, dizayn va baho qanday o'tdi | 45 daq [b.q.] | O'rta va katta loyihada |
| Loyiha retrosi | Loyiha oxirida; uzoq loyihada yilda kamida bir marta | 60–90 daq [b.q.] | Har loyihada |

Meetingning umumiy qoidalari (agenda, timebox, protokol) [D09](D09-meetinglar-ritmi.md) da yozilgan.

**Atamalar.**
- *Retro* (retrospektiva) — o'tgan davrdagi ish jarayonini jamoa bo'lib ko'rib chiqish.
- *Harakat* — retro natijasida qabul qilingan aniq o'zgarish: nima, kim, qachongacha.
- *Lead time* — task In progress'ga o'tgandan Done bo'lguncha o'tgan vaqt.
- *Rework* — Testing'dan qaytgan yoki qayta ochilgan ish.
- *Standart taklifi* — standart docini o'zgartirish so'rovi (5.4).

## 3. Qoidalar

1. **Raqamlar bilan boshlanadi.** PM retrodan oldin metrikalar jadvalini (5.2) to'ldiradi va qatnashchilarga 1 ish kuni oldin yuboradi [b.q.]. *Nega:* taassurot bilan o'tgan retro eng yaqinda bo'lgan yoki eng baland ovozda aytilgan muammoni muhokama qiladi; raqam esa haqiqiy joyni ko'rsatadi.
2. **Fikrlar oldindan yozma beriladi.** Har bir qatnashchi retrogacha uch savolga qisqa javob yozadi: nima yaxshi ishladi, nima xalaqit berdi, nimani o'zgartiramiz. Meetingda fikrlar guruhlanadi va ovoz bilan 2–3 tasi tanlanadi. *Nega:* og'zaki aylanishda kamgap odamning fikri eshitilmaydi; yozma ravishda esa hammaning fikri teng eshitiladi.
3. **Odam emas, tizim tahlil qilinadi.** "Kim aybdor?" deb emas, "qaysi qoida, darvoza yoki shablon ishlamadi?" deb so'raladi (root docdagi 10-tamoyil). Ism bilan tanqid qilinmaydi. *Nega:* aybdor qidirilgan retroda odamlar muammoni yashiradi va keyingi retro bo'sh o'tadi.
4. **Retro egasi va muddati belgilangan 1–3 ta harakat [b.q.] bilan tugaydi.** Har bir harakat Jira'da task bo'ladi. Taklif ko'proq bo'lsa, qolganlari keyingi retroga qoldiriladi. *Nega:* o'nta "yaxshilash" hech biri bajarilmaydigan ro'yxatga aylanadi; bitta bajarilgan o'zgarish esa o'ntasidan foydaliroq.
5. **Keyingi retro avvalgi harakatlardan boshlanadi.** Har bir harakat bo'yicha u bajarilgani va yordam bergani, bajarilmagan bo'lsa, nega bajarilmagani ko'riladi. *Nega:* harakatlar tekshirilmasa, retro shunchaki gaplashishga aylanadi va jamoa unga ishonmay qo'yadi.
6. **Loyiha ichidagi va standartga tegishli takliflar ajratiladi.** Faqat shu loyihaga tegishli taklif (masalan, daily vaqti) loyiha hujjatlariga yoziladi. Har qanday loyihaga tegishli taklif (masalan, DoD'ga yangi punkt) standart taklifi sifatida rasmiylashtiriladi (5.4). *Nega:* bitta jamoaning odati standartga tushsa, boshqa loyihalarga ortiqcha qoida bo'ladi; haqiqiy saboq esa loyihada qolib ketsa, keyingi jamoa uni qaytadan o'rganadi.
7. **Standart faqat yozma taklif orqali o'zgaradi.** Taklifni retro qatnashchisi yozadi, o'sha docning egasi doc o'zgarishini tayyorlaydi, o'zgarish esa jamoa bilan kelishilgach (ish rejasidagi "Kelishuvlar") repozitoriyga kiritiladi. Docning pastidagi "Oxirgi yangilangan" va "Keyingi ko'rib chiqish" yangilanadi, o'zgarish jamoaga e'lon qilinadi. *Nega:* og'zaki "endi bunday qilamiz" keyingi loyihaga yetib bormaydi; yozilgan standart yetib boradi.
8. **Loyiha retrosida og'riqlar tekshiriladi.** Root docdagi "Jamoadagi real og'riqlar" jadvalining har bir qatori bo'yicha og'riq kamaydimi, o'zgarmadimi yoki kuchaydimi, raqam yoki misol bilan ko'rsatiladi. Natija loyiha kartasiga yoziladi. *Nega:* standart aynan shu og'riqlar uchun yozilgan; ular kamaymasa, standart ishlamayapti degani.
9. **Metrikalar loyihalar orasida solishtiriladi.** Loyiha retrosi metrikalari loyiha kartasida ("Natijalar" bo'limi) saqlanadi; keyingi loyiha o'z raqamlarini ular bilan solishtiradi. *Nega:* "yaxshilandimi?" degan savolga bitta loyiha ichida javob topib bo'lmaydi, buning uchun solishtirish kerak.

**Kichik loyihada (3–5 kishi).** Release retrosi 45 daqiqa davom etadi va 1–2 harakat bilan tugaydi; loyiha retrosi majburiy. Metrikalar jadvalidan kamida birinchi to'rttasi to'ldiriladi.

## 4. Metrikalar

Quyida boshqa doclar shu yerga yuboradigan raqamlar keltirilgan. Har birining qayerdan olinishi ko'rsatilgan: ularni hisoblash uchun alohida ish qilinmaydi, mavjud yozuvlar ishlatiladi.

| Metrika | Qanday hisoblanadi | Manba |
| --- | --- | --- |
| Srok aniqligi | Real release sanasi − rejadagi sana (ish kunida) | [D06](D06-baholash-va-srok.md), 10-qoida |
| Baho aniqligi | Σ haqiqiy soat ÷ Σ baho; haqiqiy kunlik fokus soati | [D06](D06-baholash-va-srok.md), 10-qoida |
| Rework ulushi | Testing'dan qaytgan tasklar ÷ Done bo'lgan tasklar | [D08](D08-kanban-dor-dod.md), 6-qoida |
| Release'dan keyingi bug'lar | Release'dan keyin 2 hafta ichida ochilgan [b.q.] bug'lar soni, jiddiylik bo'yicha | [D08](D08-kanban-dor-dod.md) bug shabloni, [D16](D16-support-va-fikr-yigish.md) |
| Lead time | Tasklarning In progress → Done o'rtacha vaqti | Jira |
| Change request'lar | Soni, jami bahosi, qaysi bosqichda kelgani | [D10](D10-ozgarishlarni-boshqarish.md), 10-qoida |
| Review vaqti va MR hajmi | MR ochilgandan birinchi review'gacha o'rtacha vaqt; o'rtacha qatorlar soni | [D11](D11-dasturchilar-qoidalari.md) |
| Qayta ochilgan bug'lar | Soni | [D13](D13-test-strategiyasi.md), 15-qoida |
| Jamoaning qoniqishi | Retroda qisqa so'rov: "jarayon ishimizga yordam berdimi?" 1–5 | Retro |

## 5. Shablonlar

### 5.1. Release retrosi agendasi (45–60 daqiqa)

```
Retro: <loyiha>, R<N>   Sana: <sana>   Olib boradi: <PM>
Oldindan: metrikalar jadvali (5.2) va yozma fikrlar — <sana>gacha

1. Avvalgi harakatlar — bajarildimi, yordam berdimi (5 daq)
2. Metrikalar — nima o'zgardi, nima ajablantiradi (10 daq)
3. Yozma fikrlar — guruhlash (10 daq)
4. Ovoz — eng muhim 2–3 mavzu (5 daq)
5. Har mavzu: qaysi qoida/darvoza ishlamadi, nimani o'zgartiramiz (15 daq)
6. Harakatlar: nima, kim, qachongacha; standart takliflari (5 daq)
7. Qoniqish so'rovi 1–5 (2 daq)
```

### 5.2. Metrikalar jadvali

```
Loyiha: <nomi>   Release: R<N>   Davr: <sana — sana>

| Metrika                     | Bu release | Oldingi release | Izoh |
| --------------------------- | ---------- | --------------- | ---- |
| Srok aniqligi (ish kuni)    |            |                 |      |
| Baho aniqligi (haqiqat/baho)|            |                 |      |
| Kunlik fokus soati          |            |                 |      |
| Rework ulushi               |            |                 |      |
| Release'dan keyingi bug'lar |            |                 |      |
| Lead time (kun)             |            |                 |      |
| Change request'lar (soni / soat) |       |                 |      |
| Review vaqti (soat)         |            |                 |      |
| Qoniqish (1–5)              |            |                 |      |
```

### 5.3. Retro natijasi

```
Retro: <loyiha>, R<N>   Sana: <sana>   Qatnashdi: <ismlar>

Avvalgi harakatlar: <TASK-ID> — bajarildi / yo'q (nega)
Asosiy mavzular: 1. <...> 2. <...>
Harakatlar:
  <TASK-ID> — <nima> — <kim> — <sana>
Standart takliflari: <taklif raqami yoki "yo'q">
Qoniqish: <o'rtacha>
```

### 5.4. Standartga o'zgartirish taklifi

```
Taklif: <qisqa nom>   Doc: D<NN>, <bo'lim yoki qoida>   Kim taklif qildi: <ism>, <loyiha>
Muammo: <nima bo'ldi — raqam yoki misol bilan>
Taklif: <qoidaga nima qo'shiladi, o'zgaradi yoki olib tashlanadi>
Nega standartga: <nega bu boshqa loyihalarga ham tegishli>
Doc egasining qarori: qabul / rad (sabab) / boshqa loyihada sinab ko'rish
Kiritildi: <commit yoki sana>
```

## 6. Misol

Test Platformasini qurish loyihasining release'dan keyingi retrosi misol loyihada hali yozilmagan: [loyiha kartasidagi "Hujjatlar" jadvalida](loyihalar/test-platformasi/index.md) u "rejada" deb belgilangan.

## 7. Checklist: retro ishlayaptimi

- [ ] Har release'dan keyin 1 hafta ichida retro o'tgan va natijasi (5.3) yozilgan
- [ ] Metrikalar jadvali retrodan oldin to'ldirilgan
- [ ] Har bir retroda 1–3 harakat qabul qilingan, har biri Jira'da egasi va muddati bilan yozilgan
- [ ] Oxirgi retroning harakatlari keyingi retroda tekshirilgan; yarmidan ko'pi bajarilgan
- [ ] Standart takliflari 5.4 bo'yicha yozilgan va doc egasining qarori bor
- [ ] Loyiha oxirida og'riqlar jadvali tekshirilgan va natijalar loyiha kartasiga yozilgan

## 8. Tez-tez uchraydigan xatolar

1. **Shikoyat soati.** Bir soat davomida "nima yomon edi" muhokama qilinadi va retro harakatsiz tugaydi. To'g'risi: egasi va muddati bilan 1–3 harakat qabul qilish.
2. **Bir xil muammo har retroda qaytadi.** Harakat yozilgan, lekin uni hech kim tekshirmaydi. To'g'risi: retro avvalgi harakatlardan boshlanadi.
3. **Aybdor qidirish.** "Testni X o'tkazib yubordi" deyiladi va keyingi retroda hamma jim o'tiradi. To'g'risi: qaysi qoida yoki darvoza buni ushlamaganini so'rash.
4. **Raqamsiz retro.** "Bu safar yaxshiroq bo'ldi shekilli" degan taassurot bilan cheklaniladi. To'g'risi: metrikalar jadvalini to'ldirish va oldingi release bilan solishtirish.
5. **Saboq loyihada qolib ketadi.** Jamoa yaxshi qoida topdi, lekin standart o'zgarmadi va keyingi loyiha xuddi shu xatoni qiladi. To'g'risi: standart taklifi yoziladi va doc egasi qaror qabul qiladi.

---

Egasi: PM · Oxirgi yangilangan: 2026-11-09 · Keyingi ko'rib chiqish: pilot loyiha retrosidan keyin (shu doc bo'yicha)
