# D16 — Support va fikr yig'ish

*`[b.q.]` — boshlang'ich qiymat: bu raqam manbadan olinmagan, standart yozilganda taklif sifatida qo'yilgan; pilotda tekshiriladi va retroda ([D17](D17-retro-va-standartni-yangilash.md)) tuzatiladi. Barcha bunday qiymatlar va manbalar — [Manbalar](manbalar.md).*

## 1. Maqsad

Tizim ishga tushgandan keyin foydalanuvchi murojaati yo'qolmasin, kritik muammo tez hal bo'lsin, foydalanuvchilarning fikri esa keyingi rejaga kirsin. Har bir murojaatning egasi, holati va javob muddati ko'rinib tursin; bir xil savollar qo'llanma va interfeysni tuzatishga, takliflar esa Backlog'dagi ishga aylansin.

## 2. Kim uchun va qachon

- **Egasi:** support. Kichik jamoada support ishini PM yoki analitik bajaradi, texnik murojaatlar navbatchi dasturchiga o'tadi ([D01](D01-rollar-va-raci.md), 5-bo'lim).
- **Kim nima qiladi:**

| Rol | Vazifasi |
| --- | --- |
| Support | Murojaatni qayd etadi, toifalaydi, foydalanuvchiga javob beradi; bug'ni boardga yozadi; FAQ va oylik hisobotni yuritadi |
| Navbatchi dasturchi | Kritik va yuqori jiddiylikdagi bug va alertlarni ko'rib chiqadi; aylanib o'tish yo'lini topadi yoki hotfix tayyorlaydi ([D14](D14-release-va-deploy.md)) |
| Tech lead | Kritik hodisada rollback yoki hotfix qarorini qabul qiladi ([D14](D14-release-va-deploy.md)) |
| PM | Takliflarni oyda bir marta tahlil qiladi va keraklilarini change request'ga aylantiradi ([D10](D10-ozgarishlarni-boshqarish.md)); mijozga hisobot yuboradi |
| PO (mijoz) | Javob vaqtlarini kelishadi; o'z tomonidagi birinchi qator yordamni (agar bo'lsa) belgilaydi |

- **Qachon:**
  - 6–7-bosqichlarda release'dan oldin murojaat kanali, javob vaqtlari va navbatchilik tayyor bo'ladi; 7-darvozagacha ular mijozga aytilgan bo'ladi ([D02](D02-loyiha-hayot-sikli.md)).
  - 8-bosqichda (Ekspluatatsiya) bu doc har kuni ishlatiladi.
  - Muhim tadbir (masalan, imtihon kuni) paytida kuchaytirilgan navbatchilik tashkil qilinadi (3- va 8-qoidalar).

Bug shabloni va jiddiylik darajalari [D08](D08-kanban-dor-dod.md) da, hotfix va rollback [D14](D14-release-va-deploy.md) da, qo'llanma va FAQ esa [D15](D15-qollanma-va-oqitish.md) da yozilgan.

**Atamalar.**
- *Murojaat* — foydalanuvchi yoki monitoringdan kelgan har qanday xabar: muammo, savol, taklif.
- *SLA* (service level agreement) — kelishilgan javob va hal qilish vaqti.
- *Birinchi javob* — "qabul qildik, ko'ryapmiz" emas, foydalanuvchiga keyingi qadamni aytadigan javob.
- *Aylanib o'tish yo'li* (workaround) — muammo tuzatilguncha foydalanuvchi ishini davom ettirish usuli.
- *Navbatchi* — belgilangan davrda kritik murojaatlarga birinchi javob beradigan dasturchi.

## 3. Qoidalar

1. **Rasmiy kanal bitta bo'ladi va har bir murojaat qayd etiladi.** Foydalanuvchi uchun bitta kanal (masalan, support guruhi, forma yoki tiket tizimi) bor va u tizimdagi "Yordam" sahifasida yozilgan ([D15](D15-qollanma-va-oqitish.md)). Jamoa a'zosining shaxsiy Telegram'iga kelgan murojaat ham shu kanalga ko'chiriladi. *Nega:* shaxsiy chatdagi murojaat odam ta'tilga chiqsa yo'qoladi va hech qachon sanalmaydi.
2. **Har bir murojaat toifalanadi va unga ega biriktiriladi.** Toifalar: **bug** (tizim qabul mezoniga mos ishlamaydi), **savol** (tizim to'g'ri, foydalanuvchi bilmaydi), **taklif** (yangi narsa yoki o'zgarish), **kirish** (login, huquq, akkaunt). Bug'ga [D08](D08-kanban-dor-dod.md) dagi jiddiylik beriladi. *Nega:* toifasiz murojaatlar bitta uyum bo'lib qoladi va kritik bug savollar orasida yo'qolib ketadi.
3. **Javob vaqtlari kelishilgan va yozilgan.** 4.2-jadval loyiha boshida mijoz bilan kelishiladi va [D03](D03-loyiha-boshlangich-hujjati.md) nofunksional talablariga yoziladi. Birinchi javob muddati ish vaqti ichida hisoblanadi; kritik murojaat uchun, agar mijoz bilan shunday kelishilgan bo'lsa, ish vaqtidan tashqarida ham hisoblanadi. *Nega:* kelishilmagan kutish har ikki tomonda norozilik tug'diradi: mijoz "darhol", jamoa "keyingi hafta" deb tushunadi.
4. **Bug boardga chat orqali emas, shablon bilan yoziladi.** Support bug'ni [D08](D08-kanban-dor-dod.md) dagi bug shabloni bo'yicha yozadi: qadamlar, muhit, mijoz build'i va dalil. Bug dasturchi bilan alohida chat orqali hal qilinmaydi. Kritik bug haqida navbatchiga darhol xabar beriladi va boardda belgi qo'yiladi. *Nega:* chatdagi bug sanalmaydi, takrorlanmaydi va regressiya testisiz yopiladi ([D13](D13-test-strategiyasi.md), 2-qoida).
5. **Kritik holatda avval ish tiklanadi, keyin xato tuzatiladi.** Kritik bug yoki alertda birinchi maqsad foydalanuvchi ishini tiklash: aylanib o'tish yo'li yoki rollback. Tuzatish keyin hotfix bilan, review va testlarni qisqartirmasdan qilinadi ([D14](D14-release-va-deploy.md), 14-qoida). Kritik hodisadan keyin qisqa tahlil yoziladi: nima bo'ldi, nega oldindan ushlanmadi va nima o'zgaradi. *Nega:* shoshilinch "prod'da tuzatish" ikkinchi hodisani keltirib chiqaradi; tahlilsiz hodisa takrorlanadi.
6. **Monitoring alerti ham murojaat hisoblanadi.** [D14](D14-release-va-deploy.md) dagi har bir alert shu tartibda egasi, jiddiyligi va javob vaqti bilan qayd etiladi. *Nega:* monitoring muammoni foydalanuvchidan oldin ko'rsa ham, unga javob berilmasa, bundan foyda yo'q.
7. **Murojaat yopilganda foydalanuvchiga xabar beriladi va saboq olinadi.** Murojaat yopilganda foydalanuvchiga natija aytiladi. Savol 3 marta takrorlansa [b.q.], u FAQ'ga yoziladi ([D15](D15-qollanma-va-oqitish.md), 7-qoida); sababi interfeysda bo'lsa, story yoki bug ochiladi. *Nega:* yopilgan, lekin foydalanuvchiga aytilmagan murojaat qayta murojaatga aylanadi; o'rganilmagan savol esa keyingi oy yana o'nta savol olib keladi.
8. **Navbatchilik jadvali yuritiladi.** Kritik va yuqori murojaatlar uchun har haftaga navbatchi dasturchi va uning zaxirasi belgilanadi (4.3). Muhim tadbir (masalan, imtihon kuni) uchun alohida jonli navbatchilik va to'g'ridan-to'g'ri aloqa kanali tashkil qilinadi, tadbir oldidan esa freeze e'lon qilinadi ([D14](D14-release-va-deploy.md)). *Nega:* "kim ko'radi?" degan savol kritik paytda eng ko'p vaqt yeydi.
9. **Takliflar oyda bir marta [b.q.] tahlil qilinadi.** PM va support takliflarni guruhlaydi: nechta foydalanuvchi so'ragan, qaysi rol, qaysi vazifa. Muhimlari PO bilan ko'riladi va change request bo'ladi ([D10](D10-ozgarishlarni-boshqarish.md)); rad etilganlari sababi bilan yoziladi. *Nega:* tahlilsiz takliflar ro'yxati o'sib boradi va hech qachon ochilmaydi; foydalanuvchi esa "bizni eshitishmaydi" deb o'ylaydi.
10. **Mijozga oylik hisobot yuboriladi** (4.4): unda murojaatlar soni toifa va jiddiylik bo'yicha, javob vaqtlari qanchalik bajarilgani, eng ko'p berilgan savollar, nima tuzatilgani va nima rejada ekani ko'rsatiladi. *Nega:* mijoz support ishini faqat yomon kunda ko'radi; raqamli hisobot esa umumiy holatni ko'rsatadi va keyingi ustuvorliklarni kelishishga asos bo'ladi.
11. **Murojaatda shaxsiy ma'lumot minimal bo'ladi.** Foydalanuvchidan JShShIR, parol yoki surat ochiq kanalda so'ralmaydi; kerak bo'lsa, faqat murojaatni aniqlash uchun minimal ma'lumot so'raladi. Murojaat yozuvida shaxsiy ma'lumot saqlanmaydi ([D14](D14-release-va-deploy.md) dagi himoya qoidalari). *Nega:* support kanalini ko'p odam ko'radi, shuning uchun u yerdagi shaxsiy ma'lumot sizib chiqish hisoblanadi.

**Kichik loyihada (3–5 kishi).** Bitta kanal, toifalar, javob vaqtlari jadvali va navbatchi (1-, 2-, 3-, 4-, 8-qoidalar) majburiy. Oylik hisobot qisqa bo'lishi, takliflar tahlili esa choraklik o'tkazilishi mumkin.

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

Quyidagilar boshlang'ich qiymatlar [b.q.]: ular loyiha boshida mijoz bilan kelishib o'zgartiriladi.

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

Test Platformasi uchun namunaviy murojaatlarni toifalash misoli (masalan, "test paytida kamera ishlamadi", "natija ko'rinmayapti") misol loyihada hali yozilmagan: [loyiha kartasidagi "Hujjatlar" jadvalida](loyihalar/test-platformasi/index.md) u "rejada" deb belgilangan.

## 6. Checklist: support ishlayaptimi

- [ ] Rasmiy kanal bitta va tizimdagi "Yordam" sahifasida yozilgan
- [ ] Javob vaqtlari jadvali mijoz bilan kelishilgan va TZ'ga yozilgan
- [ ] Oxirgi 20 ta murojaatning har birida toifa, egasi va holat bor
- [ ] Oxirgi oyda javob vaqtlari bajarilish foizi hisoblangan
- [ ] Har kritik hodisaning qisqa tahlili bor
- [ ] Navbatchilik jadvali joriy va keyingi hafta uchun to'ldirilgan
- [ ] Oylik hisobot mijozga yuborilgan; takliflar tahlil qilingan
- [ ] Murojaat yozuvlarida shaxsiy ma'lumot yo'q (tasodifiy 5 tasi tekshiriladi)

## 7. Tez-tez uchraydigan xatolar

1. **Dasturchining shaxsiy Telegram'i support kanaliga aylanadi.** Murojaatlar sanalmaydi, dasturchi esa kun bo'yi chalg'iydi. To'g'risi: bitta rasmiy kanal bo'ladi, dasturchiga murojaat faqat support orqali yetadi.
2. **"Ko'ryapmiz" va jimlik.** Birinchi javob berilgan, lekin keyingi qadam yo'q. To'g'risi: birinchi javob keyingi qadamni aytadi; murojaat yopilganda esa natija aytiladi.
3. **Kritik paytda "kim ko'radi?" degan savol.** Navbatchi belgilanmagan, hamma bir-biriga qaraydi. To'g'risi: navbatchilik jadvali va zaxira.
4. **Prod'da tezkor tuzatish.** Kritik bug review va testsiz to'g'ridan-to'g'ri tuzatiladi va ikkinchi bug paydo bo'ladi. To'g'risi: avval ish tiklanadi (aylanib o'tish yoki rollback), keyin hotfix chiqariladi.
5. **Takliflar qabristoni.** Ro'yxatda yuzlab takliflar bor, lekin hech biri ko'rib chiqilmagan. To'g'risi: oylik tahlil o'tkaziladi va har bir taklif bo'yicha qaror qabul qilinadi.

---

Egasi: support · Oxirgi yangilangan: 2026-11-09 · Keyingi ko'rib chiqish: pilot loyiha retrosidan keyin ([D17](D17-retro-va-standartni-yangilash.md))
