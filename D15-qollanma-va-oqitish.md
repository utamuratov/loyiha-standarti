# D15 — Foydalanuvchi qo'llanmasi va o'qitish

*`[b.q.]` — boshlang'ich qiymat: bu raqam manbadan olinmagan, standart yozilganda taklif sifatida qo'yilgan; pilotda tekshiriladi va retroda ([D17](D17-retro-va-standartni-yangilash.md)) tuzatiladi. Barcha bunday qiymatlar va manbalar — [Manbalar](manbalar.md).*

## 1. Maqsad

Foydalanuvchi tizimni yordamsiz ishlata olsin, support'ga bir xil savollar kamaysin. Buning uchun eng ko'p savol tug'diradigan joylar avval tizimning o'zida tushuntiriladi, qolgani rol va vazifa bo'yicha qisqa qo'llanmada bo'ladi, o'qitish esa slayd ko'rsatish emas, foydalanuvchi o'z vazifasini o'zi bajaradigan amaliy sessiya bo'ladi. Qo'llanma har release bilan birga yangilanadi.

## 2. Kim uchun va qachon

- **Egalari:** support (qo'llanma, o'qitish, FAQ) va biznes analitik (mazmun, ya'ni [D03](D03-loyiha-boshlangich-hujjati.md) dagi rollar va oqimlar). Kichik jamoada support ishini PM yoki analitik bajaradi ([D01](D01-rollar-va-raci.md)).
- **Kim nima qiladi:**

| Rol | Vazifasi |
| --- | --- |
| Support | Qo'llanma va FAQ'ni yozadi va yangilaydi; o'qitishni o'tkazadi; qo'llanma sinovini tashkil qiladi |
| Analitik | Rollar va vazifalar ro'yxatini beradi; qadamlar TZ'ga mosligini tekshiradi |
| Dizayner | Tizim ichidagi maslahat va bo'sh holat matnlarini chizadi ([D12](D12-ui-ux-standartlari.md)); skrinshotlar maketga mos bo'lishini kuzatadi |
| Dasturchi | Tizim ichidagi yordamni quradi: "Yordam" havolasi, maslahatlar, birinchi kirish turi |
| PO (mijoz) | O'qitishga foydalanuvchilarni yig'adi; o'z tomonidagi ichki o'qituvchilarni belgilaydi |

- **Qachon:**
  - 5-bosqichda (Ishlab chiqish) vazifa sahifalari story'lar bilan parallel ravishda, staging asosida yoziladi.
  - 6-bosqichda (Release) qo'llanma release notes'dagi "O'zgardi" punktlari bo'yicha release e'lonidan oldin yangilanadi ([D14](D14-release-va-deploy.md)).
  - 7-bosqichda (Topshirish) qo'llanma sinovi va o'qitish o'tkaziladi; 7-darvozada "qo'llanma yangilangan" punkti tekshiriladi ([D02](D02-loyiha-hayot-sikli.md)).
  - 8-bosqichda (Ekspluatatsiya) FAQ murojaatlar asosida to'ldiriladi ([D16](D16-support-va-fikr-yigish.md)).

UAT (mijozning qabul sinovi) [D02](D02-loyiha-hayot-sikli.md) da yozilgan; atamalar va tugma matnlari [D12](D12-ui-ux-standartlari.md) dagi terminologiya lug'atidan olinadi.

**Atamalar.**
- *Vazifa sahifasi* — qo'llanmaning bitta "qanday qilish kerak" bo'limi: unda bitta vazifa, uning qadamlari va natijasi yoziladi.
- *Tizim ichidagi yordam* — interfeysning o'zidagi tushuntirish: maslahat (tooltip), bo'sh holat matni, birinchi kirishdagi qisqa tur.
- *FAQ* — tez-tez beriladigan savollar va javoblar.

## 3. Qoidalar

1. **Qo'llanma rol va vazifa bo'yicha tuziladi.** Qo'llanmada har bir rol uchun alohida bo'lim bo'ladi; bo'lim ichida fe'l bilan nomlangan vazifalar turadi ("Testni boshlash", "Natijani ko'rish"). Vazifalar ro'yxati [D03](D03-loyiha-boshlangich-hujjati.md) dagi rollar va story'lardan olinadi; qo'llanma tizim menyusini qayta tasvirlamaydi. *Nega:* foydalanuvchi "menyuda nima bor" emas, "buni qanday qilaman" deb qidiradi.
2. **Vazifa sahifasi qisqa va bir xil shaklda yoziladi** (4.2): maqsad bitta gapda, raqamlangan qadamlar (har qadamda bitta amal), muhim qadamda skrinshot, kutilgan natija, tez-tez uchraydigan xato va unda nima qilish kerakligi. Sahifa bir ekrandan oshsa, vazifa bo'linadi. *Nega:* foydalanuvchi uzun matnni o'qimaydi, u qadamma-qadam bajaradi.
3. **Matn UI bilan bir xil bo'ladi.** Tugma va menyu nomlari aynan interfeysdagidek yoziladi, atamalar esa [D12](D12-ui-ux-standartlari.md) dagi lug'atdan olinadi. *Nega:* qo'llanmada "Yuborish", ekranda "Saqlash" bo'lsa, foydalanuvchi to'xtab qoladi va support'ga yozadi.
4. **Skrinshotlarda haqiqiy shaxsiy ma'lumot yo'q.** Skrinshot va videolar test ma'lumotlari bilan, staging'da olinadi: haqiqiy ism, JShShIR, yuz tasviri ko'rinmaydi ([D14](D14-release-va-deploy.md) dagi himoya qoidalari). *Nega:* qo'llanma keng tarqatiladi, shuning uchun undagi shaxsiy ma'lumot sizib chiqish hisoblanadi.
5. **Tushuntirish avval tizim ichida, keyin qo'llanmada beriladi.** Eng ko'p savol tug'diradigan joylar uchun tushuntirish interfeysning o'ziga qo'yiladi: aniq bo'sh holat va xato matni, maslahat, birinchi kirishdagi qisqa tur ([D12](D12-ui-ux-standartlari.md)). Bu qaysi joylar ekani murojaatlar statistikasidan aniqlanadi ([D16](D16-support-va-fikr-yigish.md)). Bir xil savol UI'dagi kamchilikni ko'rsatsa, bu story yoki bug sifatida Backlog'ga ham tushadi. *Nega:* qo'llanmani kam odam ochadi, ekrandagi bir gapni esa hamma ko'radi.
6. **Qo'llanma release bilan birga yangilanadi.** Release notes'ning "O'zgardi" bo'limidagi har punkt qo'llanmada aks etadi; skrinshotlar yangilanadi; bu release e'lonidan oldin qilinadi. Qo'llanma tizimning qaysi versiyasiga tegishli ekani yoziladi. *Nega:* eskirgan qo'llanma qo'llanma yo'qligidan ham yomon: foydalanuvchi unga ishonib, xato qiladi.
7. **FAQ murojaatlardan o'sadi.** Bir xil savol 3 marta kelsa [b.q.], javobi FAQ'ga yoziladi va tegishli vazifa sahifasiga havola qilinadi. *Nega:* support bir javobni qayta-qayta yozmaydi; foydalanuvchi javobni o'zi topadi.
8. **O'qitish amaliy bo'ladi va rol bo'yicha o'tkaziladi** (4.3). Har bir rol uchun alohida, 45–60 daqiqalik [b.q.] sessiyada foydalanuvchi o'qitish muhitida (staging yoki demo) o'z asosiy vazifalarini o'zi bajaradi; qatnashchilari ko'p mijozda avval mijozning ichki o'qituvchilari o'qitiladi. Har bir asosiy vazifa uchun 3 daqiqagacha [b.q.] qisqa video yoziladi. *Nega:* faqat ko'rib turgan odam eslab qolmaydi, o'zi bajargan odam esa eslab qoladi; video esa yangi xodim uchun o'qitishni takrorlaydi.
9. **Qo'llanma sinovdan o'tgandagina "tayyor" hisoblanadi.** Support tizimni oldin ko'rmagan kamida 3 kishi bilan sinov [b.q.] o'tkazadi: har biri o'z rolining asosiy vazifasini faqat qo'llanma bilan, yordamsiz bajaradi. Qayerda to'xtagani yoziladi (4.4) va qo'llanma yoki UI tuzatiladi. *Nega:* muallif o'z qo'llanmasidagi bo'shliqni ko'rmaydi, chunki u tizimni allaqachon biladi ([D01](D01-rollar-va-raci.md), 3-qoida).
10. **Qo'llanma bitta joyda va tizimdan topiladi.** Tizimda "Yordam" havolasi qo'llanmaga olib boradi; boshqa nusxalar (PDF, Telegram'dagi fayl) tarqatilmaydi yoki havolaga almashtiriladi. *Nega:* uch xil nusxa tez orada uch xil versiyaga aylanadi.

**Kichik loyihada (3–5 kishi).** Asosiy rol(lar) uchun vazifa sahifalari va FAQ yoziladi; 4-, 6- va 9-qoidalar saqlanadi (sinov 1–2 kishi bilan o'tkazilishi mumkin). Video va alohida o'qitish sessiyasi faqat mijoz so'rasa tayyorlanadi.

## 4. Shablonlar

### 4.1. Qo'llanma tuzilmasi

```
<Tizim nomi> — qo'llanma   Tizim versiyasi: v<X.Y>   Yangilangan: <sana>

Boshlash
  - Tizimga kirish
  - Qurilma va brauzer talablari (masalan, kamera, internet)
<Rol 1>
  - <Vazifa: fe'l bilan>
  - <Vazifa>
<Rol 2>
  - …
FAQ
O'zgarishlar tarixi (release notes'ning "Foydalanuvchilar uchun" qismlari)
Yordam: <support kanali, ish vaqti>
```

### 4.2. Vazifa sahifasi

```
# <Vazifa: fe'l bilan, masalan "Testni boshlash">
Kim uchun: <rol>   Tizim versiyasi: v<X.Y>

Nima uchun: <1 gap>
Oldindan kerak: <masalan, nazoratchi tizimga kirgan>

1. <Bitta amal: "«Boshlash» tugmasini bosing">
2. <...>   [skrinshot: muhim qadamda, test ma'lumotlari bilan]
3. <...>

Natija: <foydalanuvchi nimani ko'radi>
Agar <xato yoki holat> bo'lsa: <nima qilish kerak / kimga murojaat qilish>
Bog'liq: <boshqa vazifa sahifasi>, <FAQ savoli>
```

### 4.3. O'qitish sessiyasi rejasi

```
Rol: <rol>   Sana: <sana>   Davomiyligi: 45–60 daq   O'tkazadi: <support>
Qatnashchilar: <N kishi, kim>   Muhit: <staging / demo>, test akkauntlari: <...>

1. Tizim nima uchun va bu rol nima qiladi (5 daq)
2. Har asosiy vazifa: ko'rsatish (3 daq) → qatnashchi o'zi bajaradi (7 daq)
   - <Vazifa 1>
   - <Vazifa 2>
3. Xato holatlari: <masalan, internet uzildi> — nima bo'ladi, nima qilish kerak (10 daq)
4. Qo'llanma va yordam qayerda (5 daq)
5. Savollar (yangi savollar → FAQ) (5 daq)
Natija: qatnashchilar ro'yxati, kim qaysi vazifani bajara olmadi, yangi savollar
```

### 4.4. Qo'llanma sinovi hisoboti

```
Sana: <sana>   Tizim versiyasi: v<X.Y>   O'tkazdi: <support>

| Sinovchi (rol) | Vazifa | Bajardi (ha/yo'q) | Qayerda to'xtadi | Tuzatish (qo'llanma / UI) |
| -------------- | ------ | ----------------- | ---------------- | ------------------------- |
| <rol>          |        |                   |                  |                           |

Xulosa: qo'llanma tayyor / tuzatishdan keyin qayta sinov <sana>
```

## 5. Misol

Test Platformasi uchun nomzod roli qo'llanmasi (kirishdan natijagacha) misol loyihada hali yozilmagan: [loyiha kartasidagi "Hujjatlar" jadvalida](loyihalar/test-platformasi/index.md) u "rejada" deb belgilangan. Shu mavzudagi real risk [loyiha rejasidagi](loyihalar/test-platformasi/D02-loyiha-rejasi.md) R-01: kamera yoki yorug'lik sababli Face ID'dan o'ta olmaslik; uning chorasi qo'llanmada kamera talablarini yozish.

## 6. Checklist: qo'llanma va o'qitish tayyormi

- [ ] Har bir rolning asosiy vazifalari uchun vazifa sahifasi bor ([D03](D03-loyiha-boshlangich-hujjati.md) dagi rollar va story'lar bilan solishtiriladi)
- [ ] Tasodifiy 3 sahifada tugma nomlari UI bilan bir xil, skrinshotlarda haqiqiy shaxsiy ma'lumot yo'q
- [ ] Oxirgi release notes'dagi "O'zgardi" punktlarining har biri qo'llanmada aks etgan; qo'llanmadagi versiya tizim versiyasiga mos
- [ ] Qo'llanma sinovi 3 kishi bilan o'tgan, hisobot va tuzatishlar bor
- [ ] Tizimda "Yordam" havolasi qo'llanmaga olib boradi
- [ ] Har bir rol uchun o'qitish o'tgan (yoki kichik loyihada mijoz uni so'ramagan)
- [ ] FAQ oxirgi oyda kamida 3 marta kelgan savollarni o'z ichiga oladi

## 7. Tez-tez uchraydigan xatolar

1. **Menyu bo'yicha qo'llanma.** "Sozlamalar bo'limida quyidagi maydonlar bor…" deb yoziladi va foydalanuvchi o'z vazifasini topa olmaydi. To'g'risi: qo'llanmani rol va vazifa bo'yicha tuzish.
2. **Release'dan keyin eskirgan skrinshotlar.** Qo'llanmadagi ekran tizimdagidan farq qiladi. To'g'risi: qo'llanmani release e'lonidan oldin "O'zgardi" punktlari bo'yicha yangilash.
3. **Hamma narsa qo'llanmada, ekranda esa hech narsa yo'q.** Bo'sh holatda faqat "Ma'lumot yo'q" deb yoziladi. To'g'risi: eng ko'p savol tug'diradigan joylarni tizimning o'zida tushuntirish.
4. **Slayd bilan o'qitish.** Bir soatlik taqdimotdan keyin foydalanuvchi birinchi testni boshlay olmaydi. To'g'risi: har kim o'z vazifasini o'qitish muhitida o'zi bajaradi.
5. **Haqiqiy ma'lumotli skrinshot.** Qo'llanmada haqiqiy nomzodning JShShIR'i va surati ko'rinadi. To'g'risi: faqat test ma'lumotlaridan foydalanish.

---

Egasi: support + biznes analitik · Oxirgi yangilangan: 2026-11-09 · Keyingi ko'rib chiqish: pilot loyiha retrosidan keyin ([D17](D17-retro-va-standartni-yangilash.md))
