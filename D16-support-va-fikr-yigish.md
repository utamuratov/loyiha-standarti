# D16 — Support va fikr yig'ish

## 1. Maqsad

Tizim ishga tushgandan keyin foydalanuvchi murojaati yo'qolmasin, kritik muammo tez hal bo'lsin, foydalanuvchilarning fikri esa keyingi rejaga kirsin. Har murojaatning egasi, holati va javob muddati ko'rinib turadi; bir xil savollar qo'llanma va interfeysni tuzatishga, takliflar — Backlog'ga aylanadi.

## 2. Kim uchun va qachon

- **Egasi:** support. Kichik jamoada support ishini PM yoki analitik bajaradi, texnik murojaatlar navbatchi dasturchiga o'tadi ([D01](D01-rollar-va-raci.md), 5-bo'lim).
- **Kim nima qiladi:**

| Rol | Vazifasi |
| --- | --- |
| Support | Murojaatni qayd etadi, toifalaydi, foydalanuvchiga javob beradi; bug'ni boardga yozadi; FAQ va oylik hisobotni yuritadi |
| Navbatchi dasturchi | Kritik va yuqori jiddiylikdagi bug va alertlarni ko'radi; aylanib o'tish yo'li yoki hotfix ([D14](D14-release-va-deploy.md)) |
| Tech lead | Kritik hodisada rollback yoki hotfix qarorini qabul qiladi ([D14](D14-release-va-deploy.md)) |
| PM | Takliflarni oyda bir marta tahlil qiladi; change request'ga aylantiradi ([D10](D10-ozgarishlarni-boshqarish.md)); mijozga hisobot yuboradi |
| PO (mijoz) | Javob vaqtlarini kelishadi; o'z tomonidagi birinchi qator yordamni (agar bo'lsa) belgilaydi |

- **Qachon:**
  - 6–7-bosqich: release'dan oldin murojaat kanali, javob vaqtlari va navbatchilik tayyor bo'ladi; 7-darvozada mijozga aytilgan bo'ladi ([D02](D02-loyiha-hayot-sikli.md)).
  - 8-bosqich (Ekspluatatsiya): har kuni.
  - Muhim tadbir (masalan, imtihon kuni) — kuchaytirilgan navbatchilik (3-qoida, 8-qoida).

Bug shabloni va jiddiylik darajalari — [D08](D08-kanban-dor-dod.md); hotfix va rollback — [D14](D14-release-va-deploy.md); qo'llanma va FAQ — [D15](D15-qollanma-va-oqitish.md).

**Atamalar.**
- *Murojaat* — foydalanuvchi yoki monitoringdan kelgan har qanday xabar: muammo, savol, taklif.
- *SLA* (service level agreement) — kelishilgan javob va hal qilish vaqti.
- *Birinchi javob* — "qabul qildik, ko'ryapmiz" emas, foydalanuvchiga keyingi qadamni aytadigan javob.
- *Aylanib o'tish yo'li* (workaround) — muammo tuzatilguncha foydalanuvchi ishini davom ettirish usuli.
- *Navbatchi* — belgilangan davrda kritik murojaatlarga birinchi javob beradigan dasturchi.

## 3. Qoidalar

1. **Bitta rasmiy kanal, har murojaat qayd etiladi.** Foydalanuvchi uchun bitta kanal (masalan, support guruhi, forma yoki tiket tizimi) bor va u tizimdagi "Yordam" sahifasida yozilgan ([D15](D15-qollanma-va-oqitish.md)). Jamoa a'zosining shaxsiy Telegram'iga kelgan murojaat ham shu kanalga ko'chiriladi. *Nega:* shaxsiy chatdagi murojaat odam ta'tilga chiqsa yo'qoladi va hech qachon sanalmaydi.
2. **Har murojaat toifalanadi va egasi bilan.** Toifalar: **bug** (tizim qabul mezoniga mos ishlamaydi), **savol** (tizim to'g'ri, foydalanuvchi bilmaydi), **taklif** (yangi narsa yoki o'zgarish), **kirish** (login, huquq, akkaunt). Bug'ga [D08](D08-kanban-dor-dod.md) dagi jiddiylik beriladi. *Nega:* toifasiz murojaatlar bitta uyum bo'lib qoladi — kritik bug savollar orasida yo'qoladi.
3. **Javob vaqtlari kelishilgan va yozilgan.** 4.2-jadval loyiha boshida mijoz bilan kelishiladi va [D03](D03-loyiha-boshlangich-hujjati.md) nofunksional talablariga yoziladi. Birinchi javob muddati — ish vaqti ichida; kritik uchun ish vaqtidan tashqari ham, agar mijoz bilan shunday kelishilgan bo'lsa. *Nega:* kelishilmagan kutish har ikki tomonda norozilik tug'diradi: mijoz "darhol", jamoa "keyingi hafta" deb tushunadi.
4. **Bug boardga shablon bilan, chat bilan emas.** Support bug'ni [D08](D08-kanban-dor-dod.md) bug shabloni bo'yicha yozadi: qadamlar, muhit, mijoz build'i, dalil. Dasturchi bilan alohida chat orqali hal qilinmaydi. Kritik bug — navbatchiga darhol xabar va boardda belgi. *Nega:* chatdagi bug sanalmaydi, takrorlanmaydi va regressiya testisiz yopiladi ([D13](D13-test-strategiyasi.md), 2-qoida).
5. **Kritik — avval tiklash, keyin tuzatish.** Kritik bug yoki alertda birinchi maqsad — foydalanuvchi ishini tiklash: aylanib o'tish yo'li yoki rollback. Tuzatish keyin hotfix bilan, qisqartirilmagan review va testlar bilan ([D14](D14-release-va-deploy.md), 14-qoida). Kritik hodisadan keyin qisqa tahlil yoziladi: nima bo'ldi, nega ushlanmadi, nima o'zgaradi. *Nega:* shoshilinch "prod'da tuzatish" ikkinchi hodisani keltirib chiqaradi; tahlilsiz hodisa takrorlanadi.
6. **Monitoring alerti ham murojaat.** [D14](D14-release-va-deploy.md) dagi har alert shu tartibda qayd etiladi: egasi, jiddiylik, javob vaqti. *Nega:* muammoni foydalanuvchidan oldin monitoring ko'rsa ham, javob berilmasa — foydasi yo'q.
7. **Javob yopilgan murojaat — foydalanuvchiga xabar va saboq.** Murojaat yopilganda foydalanuvchiga natija aytiladi. Savol 3 marta takrorlansa — FAQ'ga ([D15](D15-qollanma-va-oqitish.md), 7-qoida); interfeys sababli bo'lsa — story yoki bug. *Nega:* yopilgan, lekin foydalanuvchiga aytilmagan murojaat — qayta murojaat; o'rganilmagan savol — keyingi oy yana o'nta savol.
8. **Navbatchilik jadvali bor.** Kritik va yuqori murojaatlar uchun haftalik navbatchi dasturchi va uning zaxirasi (4.3). Muhim tadbir (masalan, imtihon kuni) uchun alohida jonli navbatchilik va to'g'ridan-to'g'ri aloqa kanali; tadbir oldidan freeze ([D14](D14-release-va-deploy.md)). *Nega:* "kim ko'radi?" degan savol kritik paytda eng ko'p vaqt yeydi.
9. **Takliflar oyda bir marta tahlil qilinadi.** PM va support takliflarni guruhlaydi: nechta foydalanuvchi so'ragan, qaysi rol, qaysi vazifa. Muhimlari PO bilan ko'riladi va change request bo'ladi ([D10](D10-ozgarishlarni-boshqarish.md)); rad etilganlari sababi bilan yoziladi. *Nega:* tahlilsiz takliflar ro'yxati o'sib boradi va hech qachon ochilmaydi; foydalanuvchi esa "bizni eshitishmaydi" deb o'ylaydi.
10. **Oylik hisobot mijozga** (4.4): murojaatlar soni toifa va jiddiylik bo'yicha, javob vaqtlari bajarilishi, eng ko'p savollar, nima tuzatildi va nima rejada. *Nega:* mijoz support ishini faqat yomon kunda ko'radi; raqamli hisobot esa umumiy holatni ko'rsatadi va keyingi ustuvorliklarni kelishishga asos bo'ladi.
11. **Murojaatda shaxsiy ma'lumot — minimal.** Foydalanuvchidan JShShIR, parol yoki surat ochiq kanalda so'ralmaydi; kerak bo'lsa — faqat murojaatni aniqlash uchun minimal ma'lumot. Murojaat yozuvida shaxsiy ma'lumot saqlanmaydi ([D14](D14-release-va-deploy.md) dagi himoya qoidalari). *Nega:* support kanali ko'p odam ko'radigan joy — u yerdagi shaxsiy ma'lumot sizib chiqish hisoblanadi.

**Kichik loyihada (3–5 kishi).** Bitta kanal, toifalar, javob vaqtlari jadvali va navbatchi (1-, 2-, 3-, 4-, 8-qoidalar) majburiy. Oylik hisobot — qisqa, takliflar tahlili — choraklik bo'lishi mumkin.

## 4. Shablonlar

### 4.1. Murojaat yozuvi

```
Murojaat-<NN>   Kelgan: <sana, vaqt>   Kanal: <...>   Kimdan: <rol, mijoz build'i>
Toifa: bug / savol / taklif / kirish   Jiddiylik (bug uchun): kritik / yuqori / o'rta / past
Qisqa: <bir gap>
Egasi: <ism>   Birinchi javob: <vaqt>   Hal qilindi: <vaqt>
Natija: javob berildi / bug → <TASK-ID> / taklif → Backlog / CR-<NN>
Foydalanuvchiga xabar: <ha, sana>   FAQ'ga: ha / yo'q
```

### 4.2. Javob vaqtlari (loyiha uchun kelishiladi)

Boshlang'ich qiymatlar — loyiha boshida mijoz bilan kelishib o'zgartiriladi.

```
| Toifa / jiddiylik | Birinchi javob   | Hal qilish maqsadi                         |
| ----------------- | ---------------- | ------------------------------------------ |
| Bug — kritik      | 30 daqiqa        | Aylanib o'tish yoki rollback — 4 soat; hotfix |
| Bug — yuqori      | 4 ish soati      | 2 ish kuni (hotfix yoki keyingi release)   |
| Bug — o'rta       | 1 ish kuni       | Keyingi release                            |
| Bug — past        | 2 ish kuni       | Backlog ustuvorligi bo'yicha               |
| Savol / kirish    | 1 ish kuni       | Javob bilan yopiladi                       |
| Taklif            | 2 ish kuni       | Oylik tahlilda ko'riladi                    |
Ish vaqti: <kunlar, soatlar>   Kritik uchun ish vaqtidan tashqari: ha / yo'q
```

### 4.3. Navbatchilik jadvali

```
| Hafta          | Navbatchi | Zaxira | Aloqa       | Izoh                    |
| -------------- | --------- | ------ | ----------- | ----------------------- |
| <sana — sana>  | <ism>     | <ism>  | <telefon/kanal> | <imtihon kuni: jonli> |
```

### 4.4. Oylik hisobot (mijozga)

```
<Loyiha> — support hisoboti, <oy>

Murojaatlar: jami <N>; bug <N> (kritik <N>, yuqori <N>, o'rta <N>, past <N>), savol <N>, taklif <N>, kirish <N>
Javob vaqtlari bajarildi: <%>; buzilgan holatlar va sababi: <...>
Eng ko'p savollar (top-5) va nima qilindi (FAQ, UI tuzatish): <...>
Tuzatildi: <release / hotfix ro'yxati>
Takliflar: tahlil qilindi <N>; Backlog'ga / CR'ga <N>; rad etildi <N> (sabab)
Keyingi oyga: <...>
```

## 5. Misol

Misol loyihada hali yozilmagan: Test Platformasi uchun namunaviy murojaatlarni toifalash (masalan, "test paytida kamera ishlamadi", "natija ko'rinmayapti") — [loyiha kartasidagi "Hujjatlar" jadvalida](loyihalar/test-platformasi/index.md) "rejada".

## 6. Checklist: support ishlayaptimi

- [ ] Rasmiy kanal bitta va tizimdagi "Yordam" sahifasida yozilgan
- [ ] Javob vaqtlari jadvali mijoz bilan kelishilgan va TZ'da
- [ ] Oxirgi 20 ta murojaatning har birida toifa, egasi va holat bor
- [ ] Oxirgi oyda javob vaqtlari bajarilish foizi hisoblangan
- [ ] Har kritik hodisaning qisqa tahlili bor
- [ ] Navbatchilik jadvali joriy va keyingi hafta uchun to'ldirilgan
- [ ] Oylik hisobot mijozga yuborilgan; takliflar tahlil qilingan
- [ ] Murojaat yozuvlarida shaxsiy ma'lumot yo'q (tasodifiy 5 tasini tekshirish)

## 7. Tez-tez uchraydigan xatolar

1. **Dasturchining shaxsiy Telegram'i — support kanali.** Murojaatlar sanalmaydi, dasturchi kun bo'yi chalg'iydi. To'g'risi: bitta rasmiy kanal, dasturchiga faqat support orqali.
2. **"Ko'ryapmiz" va jimlik.** Birinchi javob bor, keyingi qadam yo'q. To'g'risi: birinchi javob keyingi qadamni aytadi; yopilganda — natija.
3. **Kritik paytda "kim ko'radi?"** Navbatchi belgilanmagan, hamma bir-biriga qaraydi. To'g'risi: navbatchilik jadvali va zaxira.
4. **Prod'da tezkor tuzatish.** Kritik bug review va testsiz to'g'ridan-to'g'ri tuzatiladi — ikkinchi bug paydo bo'ladi. To'g'risi: avval tiklash (aylanib o'tish yoki rollback), keyin hotfix.
5. **Takliflar qabristoni.** Yuzlab takliflar ro'yxatda, hech biri ko'rilmagan. To'g'risi: oylik tahlil va har biriga qaror.

---

Egasi: support · Oxirgi yangilangan: 2026-11-09 · Keyingi ko'rib chiqish: pilot loyiha retrosidan keyin ([D17](D17-retro-va-standartni-yangilash.md))
