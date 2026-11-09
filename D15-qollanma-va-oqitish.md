# D15 — Foydalanuvchi qo'llanmasi va o'qitish

## 1. Maqsad

Foydalanuvchi tizimni yordamsiz ishlata olsin, support'ga bir xil savollar kamaysin. Buning uchun eng ko'p savol tug'diradigan joylar avval tizimning o'zida tushuntiriladi, qolgani rol va vazifa bo'yicha qisqa qo'llanmada bo'ladi, o'qitish esa slayd emas — foydalanuvchi o'z vazifasini o'zi bajaradigan amaliy sessiya. Qo'llanma har release bilan birga yangilanadi.

## 2. Kim uchun va qachon

- **Egalari:** support (qo'llanma, o'qitish, FAQ) va biznes analitik (mazmun: rollar va oqimlar [D03](D03-loyiha-boshlangich-hujjati.md) dan). Kichik jamoada support ishini PM yoki analitik bajaradi ([D01](D01-rollar-va-raci.md)).
- **Kim nima qiladi:**

| Rol | Vazifasi |
| --- | --- |
| Support | Qo'llanma va FAQ'ni yozadi va yangilaydi; o'qitishni o'tkazadi; qo'llanma sinovini tashkil qiladi |
| Analitik | Rollar va vazifalar ro'yxatini beradi; qadamlar TZ'ga mosligini tekshiradi |
| Dizayner | Tizim ichidagi maslahat va bo'sh holat matnlarini chizadi ([D12](D12-ui-ux-standartlari.md)); skrinshotlar maketga mos |
| Dasturchi | Tizim ichidagi yordamni quradi: "Yordam" havolasi, maslahatlar, birinchi kirish turi |
| PO (mijoz) | O'qitishga foydalanuvchilarni yig'adi; o'z tomonidagi ichki o'qituvchilarni belgilaydi |

- **Qachon:**
  - 5-bosqich (Ishlab chiqish): vazifa sahifalari story'lar bilan parallel, staging asosida yoziladi.
  - 6-bosqich (Release): release notes'dagi "O'zgardi" punktlari bo'yicha qo'llanma release e'lonidan oldin yangilanadi ([D14](D14-release-va-deploy.md)).
  - 7-bosqich (Topshirish): qo'llanma sinovi va o'qitish; 7-darvozada "qo'llanma yangilangan" ([D02](D02-loyiha-hayot-sikli.md)).
  - 8-bosqich (Ekspluatatsiya): FAQ murojaatlar asosida to'ldiriladi ([D16](D16-support-va-fikr-yigish.md)).

UAT (mijozning qabul sinovi) — [D02](D02-loyiha-hayot-sikli.md); atamalar va tugma matnlari — [D12](D12-ui-ux-standartlari.md) dagi terminologiya lug'ati.

**Atamalar.**
- *Vazifa sahifasi* — qo'llanmaning bitta "qanday qilish kerak" bo'limi: bitta vazifa, qadamlar, natija.
- *Tizim ichidagi yordam* — interfeysning o'zidagi tushuntirish: maslahat (tooltip), bo'sh holat matni, birinchi kirishdagi qisqa tur.
- *FAQ* — tez-tez beriladigan savollar va javoblar.

## 3. Qoidalar

1. **Tuzilma — rol va vazifa bo'yicha.** Qo'llanma har rol uchun alohida bo'lim; bo'lim ichida — vazifalar, fe'l bilan nomlangan ("Testni boshlash", "Natijani ko'rish"). Vazifalar ro'yxati [D03](D03-loyiha-boshlangich-hujjati.md) dagi rollar va story'lardan olinadi; tizim menyusini qayta tasvirlash emas. *Nega:* foydalanuvchi "menyuda nima bor" emas, "buni qanday qilaman" deb qidiradi.
2. **Vazifa sahifasi qisqa va bir xil shaklda** (4.2): maqsad bitta gapda, raqamlangan qadamlar (har qadamda bitta amal), muhim qadamda skrinshot, kutilgan natija, tez-tez uchraydigan xato va nima qilish kerak. Sahifa bir ekrandan oshsa — vazifa bo'linadi. *Nega:* uzun matnni foydalanuvchi o'qimaydi, qadamlab bajaradi.
3. **Matn UI bilan bir xil.** Tugma va menyu nomlari aynan interfeysdagidek, atamalar — [D12](D12-ui-ux-standartlari.md) dagi lug'atdan. *Nega:* qo'llanmada "Yuborish", ekranda "Saqlash" bo'lsa, foydalanuvchi to'xtab qoladi va support'ga yozadi.
4. **Skrinshotlarda haqiqiy shaxsiy ma'lumot yo'q.** Skrinshot va videolar test ma'lumotlari bilan, staging'da olinadi: haqiqiy ism, JShShIR, yuz tasviri ko'rinmaydi ([D14](D14-release-va-deploy.md) dagi himoya qoidalari). *Nega:* qo'llanma keng tarqatiladi — undagi shaxsiy ma'lumot sizib chiqish hisoblanadi.
5. **Avval tizim ichida, keyin qo'llanmada.** Eng ko'p savol tug'diradigan joylar uchun tushuntirish interfeysning o'ziga qo'yiladi: aniq bo'sh holat va xato matni, maslahat, birinchi kirishdagi qisqa tur ([D12](D12-ui-ux-standartlari.md)). Qaysi joylar — murojaatlar statistikasidan ([D16](D16-support-va-fikr-yigish.md)). Bir xil savol UI'dagi kamchilikni ko'rsatsa, bu story yoki bug sifatida Backlog'ga ham tushadi. *Nega:* qo'llanmani kam odam ochadi; ekrandagi bir gap esa har kim ko'radi.
6. **Qo'llanma release bilan birga.** Release notes'ning "O'zgardi" bo'limidagi har punkt qo'llanmada aks etadi; skrinshotlar yangilanadi; bu release e'lonidan oldin qilinadi. Qo'llanma tizimning qaysi versiyasiga tegishli ekani yoziladi. *Nega:* eskirgan qo'llanma qo'llanma yo'qligidan yomon — foydalanuvchi unga ishonib, xato qiladi.
7. **FAQ murojaatlardan o'sadi.** Bir xil savol 3 marta kelsa, javobi FAQ'ga yoziladi va tegishli vazifa sahifasiga havola qilinadi. *Nega:* support bir javobni qayta-qayta yozmaydi; foydalanuvchi javobni o'zi topadi.
8. **O'qitish — amaliy va rol bo'yicha** (4.3). Har rol uchun alohida, 45–60 daqiqa, o'qitish muhitida (staging yoki demo) foydalanuvchi o'z asosiy vazifalarini o'zi bajaradi; ko'p qatnashchili mijozda — avval mijozning ichki o'qituvchilari o'qitiladi. Har asosiy vazifa uchun 3 daqiqagacha qisqa video yoziladi. *Nega:* ko'rib turgan odam eslab qolmaydi, o'zi qilgan odam esa qiladi; video yangi xodim uchun o'qitishni takrorlaydi.
9. **Qo'llanma sinov bilan "tayyor".** Support tizimni oldin ko'rmagan kamida 3 kishi bilan sinov o'tkazadi: har biri o'z rolining asosiy vazifasini faqat qo'llanma bilan, yordamsiz bajaradi. Qayerda to'xtagani yoziladi (4.4) va qo'llanma yoki UI tuzatiladi. *Nega:* muallif o'z qo'llanmasidagi bo'shliqni ko'rmaydi — u tizimni allaqachon biladi ([D01](D01-rollar-va-raci.md), 3-qoida).
10. **Qo'llanma bitta joyda va tizimdan topiladi.** Tizimda "Yordam" havolasi qo'llanmaga olib boradi; boshqa nusxalar (PDF, Telegram'dagi fayl) tarqatilmaydi yoki havolaga almashtiriladi. *Nega:* uch xil nusxa — uch xil versiya.

**Kichik loyihada (3–5 kishi).** Asosiy rol(lar) uchun vazifa sahifalari va FAQ; 4-, 6- va 9-qoidalar saqlanadi (sinov 1–2 kishi bilan bo'lishi mumkin). Video va alohida o'qitish sessiyasi — mijoz so'rasa.

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

Misol loyihada hali yozilmagan: Test Platformasi uchun nomzod roli qo'llanmasi (kirishdan natijagacha) — [loyiha kartasidagi "Hujjatlar" jadvalida](loyihalar/test-platformasi/index.md) "rejada". Shu mavzudagi real risk — [loyiha rejasidagi](loyihalar/test-platformasi/D02-loyiha-rejasi.md) R-01: kamera yoki yorug'lik sabab Face ID'dan o'tolmaslik, chorasi — qo'llanmada kamera talablari.

## 6. Checklist: qo'llanma va o'qitish tayyormi

- [ ] Har rolning asosiy vazifalari uchun vazifa sahifasi bor ([D03](D03-loyiha-boshlangich-hujjati.md) dagi rollar va story'lar bilan solishtirish)
- [ ] Tasodifiy 3 sahifada: tugma nomlari UI bilan bir xil, skrinshotlarda haqiqiy shaxsiy ma'lumot yo'q
- [ ] Oxirgi release notes'dagi "O'zgardi" punktlarining har biri qo'llanmada aks etgan; qo'llanmadagi versiya tizim versiyasiga mos
- [ ] Qo'llanma sinovi 3 kishi bilan o'tgan, hisobot va tuzatishlar bor
- [ ] Tizimda "Yordam" havolasi qo'llanmaga olib boradi
- [ ] Har rol uchun o'qitish o'tgan (yoki kichik loyihada — mijoz so'ramagan)
- [ ] FAQ oxirgi oyda kamida 3 marta kelgan savollarni o'z ichiga oladi

## 7. Tez-tez uchraydigan xatolar

1. **Menyu bo'yicha qo'llanma.** "Sozlamalar bo'limida quyidagi maydonlar bor…" — foydalanuvchi o'z vazifasini topa olmaydi. To'g'risi: rol va vazifa bo'yicha.
2. **Release'dan keyin eskirgan skrinshotlar.** Qo'llanmadagi ekran tizimdagidan farq qiladi. To'g'risi: release e'lonidan oldin "O'zgardi" punktlari bo'yicha yangilash.
3. **Hamma narsa qo'llanmada, ekranda hech narsa yo'q.** Bo'sh holatda faqat "Ma'lumot yo'q". To'g'risi: eng ko'p savol tug'diradigan joylar — tizim ichida.
4. **Slayd bilan o'qitish.** Bir soatlik taqdimotdan keyin foydalanuvchi birinchi testni boshlay olmaydi. To'g'risi: har kim o'z vazifasini o'qitish muhitida o'zi bajaradi.
5. **Haqiqiy ma'lumotli skrinshot.** Qo'llanmada haqiqiy nomzodning JShShIR va surati. To'g'risi: faqat test ma'lumotlari.

---

Egasi: support + biznes analitik · Oxirgi yangilangan: 2026-11-09 · Keyingi ko'rib chiqish: pilot loyiha retrosidan keyin ([D17](D17-retro-va-standartni-yangilash.md))
