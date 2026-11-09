# D04 — Dizaynerga brief va dizayn jarayoni

## 1. Maqsad

Dizayner nima, kim uchun va qanday cheklovlar bilan chizishini ishni boshlashdan oldin aniq bilsin; maket bosqichma-bosqich — avval oqim, keyin ko'rinish — kelishilsin; dasturchiga esa savolsiz quriladigan, to'liq maket topshirilsin. Bu "bitta narsa qayta-qayta qilinadi" og'rig'ining dizayndagi qismi: chala brief, kelishilmagan oqim va holatsiz maket ekranlarni ikki marta chizdiradi va ikki marta qurdiradi.

## 2. Kim uchun va qachon

- **Egalari:** UI/UX dizayner (jarayon va maket) va biznes analitik (brief mazmuni). RACI — [D01](D01-rollar-va-raci.md).
- **Kim nima qiladi:**

| Rol | Vazifasi |
| --- | --- |
| Analitik | Brief'ni dizayner bilan birga to'ldiradi; wireframe'da story'lar to'liq qamralganini tekshiradi |
| Dizayner | Wireframe, UI maket, prototip; review'larni chaqiradi; handoff'ni tayyorlaydi |
| Frontend / tech lead | Wireframe'da — qurish mumkinmi, kutubxonada bormi; handoff'ni qabul qiladi |
| QA | Handoff'da holatlar va xato matnlarini ko'radi — test ssenariylari uchun ([D13](D13-test-strategiyasi.md)) |
| PO (mijoz) | Wireframe va UI'ni ko'radi; oqim va kontent bo'yicha izoh beradi |
| PM | Dizayn ishini rejaga qo'yadi; 3-darvozani tasdiqlaydi ([D02](D02-loyiha-hayot-sikli.md)) |

- **Qachon:** 3-bosqich (Dizayn) — TZ ([D03](D03-loyiha-boshlangich-hujjati.md)) 2-darvozadan o'tgach, butun loyiha yoki release bo'yicha. Ish ketma-ketligi: **brief → wireframe → wireframe review → UI → UI review → mijozga ko'rsatish → handoff.** Ishlab chiqish davomida maket o'zgarsa — 6-qoida.

Nima bilan chiziladi (komponentlar, tokenlar, ekran holatlari, formalar, matn) — [D12](D12-ui-ux-standartlari.md). Bu doc o'sha standart bo'yicha ishni qanday tartibda qilish va topshirishni beradi.

**Atamalar.**
- *Brief* — dizaynerga topshiriq: nima, kim uchun, qanday cheklovlar bilan.
- *Wireframe* — ekranning rangsiz sxemasi: qaysi bloklar, qaysi tartibda, oqim qanday.
- *UI maket* — yakuniy ko'rinish: komponentlar, ranglar, matnlar, holatlar.
- *Prototip* — ekranlarni bosiladigan qilib bog'langan maket: oqimni sinab ko'rish uchun.
- *Handoff* — tayyor maketni dasturchiga topshirish: hamma narsa joyida, savollar yopilgan.

## 3. Qoidalar

1. **Brief'siz chizilmaydi.** Brief (4.1) analitik va dizayner tomonidan tasdiqlangan TZ'ning tegishli bo'limlaridan to'ldiriladi. Brief'da TZ'da yo'q talab paydo bo'lmaydi — bo'lsa, u [D03](D03-loyiha-boshlangich-hujjati.md) ga savol bo'lib qaytadi. *Nega:* og'zaki "shunday ekran kerak" bilan boshlangan dizayn TZ'dan uzoqlashadi va keyin qayta chiziladi.
2. **Avval wireframe, keyin UI.** UI faqat wireframe review'dan keyin boshlanadi. Wireframe review'da: analitik — har story qamralganmi; frontend yoki tech lead — qurish mumkinmi, kutubxonada bormi; PO — oqim to'g'rimi. Bitta oddiy ekran (masalan, standart forma) uchun wireframe o'tkazib yuborilishi mumkin; ko'p qadamli oqim uchun — yo'q. *Nega:* oqimdagi xato wireframe'da bir soatda tuzatiladi; chiroyli UI'da topilsa — ekranlar qayta chiziladi.
3. **Har ekran TZ'ga bog'langan.** Figma'dagi har frame nomida ekran ID'si va holati bor (4.2), ekran esa [D03](D03-loyiha-boshlangich-hujjati.md) dagi ekranlar ro'yxatida va story'ga bog'langan. Ro'yxatda yo'q ekran chizilmaydi — avval TZ'ga qo'shiladi. *Nega:* bog'lanmagan ekranni dasturchi topa olmaydi, o'zgarish qaysi ekranlarga ta'sir qilishini esa hech kim ayta olmaydi; ro'yxatdan tashqari ekran — yashirin scope.
4. **Holatlarsiz ekran tayyor emas.** [D12](D12-ui-ux-standartlari.md) dagi holatlar (B bo'limi) va TZ story'laridagi xato holatlari chizilmaguncha ekran handoff'ga chiqmaydi. *Nega:* chizilmagan holatni har dasturchi o'zicha quradi yoki umuman qurmaydi.
5. **Review — yozma izohlar bilan, muddat bilan.** Wireframe va UI review'da izohlar Figma'ning o'zida, [D05](D05-kickoff-va-doc-review.md) dagi belgilar bilan qoldiriladi: `[bloklovchi]`, `[savol]`, `[taklif]`. Review muddati — 1 ish kuni. Mijoz izohi scope'ni o'zgartirsa (yangi ekran, yangi funksiya) — change request ([D10](D10-ozgarishlarni-boshqarish.md)); ko'rinish va matn bo'yicha bo'lsa — dizayner tuzatadi. *Nega:* og'zaki izoh eslab qolinmaydi; muddatsiz review dizaynni haftalab kutdiradi; "shu tugmani ham qo'shamiz" esa dizayn orqali scope'ni yashirin kengaytiradi.
6. **Handoff'dagi maket — yagona haqiqat, o'zgarishi versiya bilan.** Figma'da "Handoff" sahifasidagi narsa quriladi; boshqa sahifalar — ish jarayoni. Handoff'dan keyingi har o'zgarish versiya nomi va izoh bilan saqlanadi (Figma version history), dasturchiga va tegishli Jira taskiga yoziladi. *Nega:* "qaysi maket oxirgisi?" savoli va eski versiya bo'yicha qurilgan ekran — rework'ning eng tez yo'li.
7. **Handoff checklist bilan va qabul qilinadi.** Dizayner handoff checklistini (4.3) to'ldiradi; frontend va QA ko'rib chiqadi, savollar yopiladi. Dasturchi qabul qilgach, ekran taski Ready'ga tayyor bo'ladi ([D08](D08-kanban-dor-dod.md) DoR). Maket sifatini tekshirish (komponentlar, tokenlar, kontrast) — [D12](D12-ui-ux-standartlari.md) 5.1. *Nega:* "maket tayyor" degani dizayner uchun bir narsa, dasturchi uchun boshqa; checklist ikkalasi uchun bir xil "tayyor".
8. **Prototip — ko'p qadamli oqim uchun.** Login → test kabi ketma-ket oqimlar uchun bosiladigan prototip qilinadi va PO'ga shu orqali ko'rsatiladi; alohida ekranlar uchun shart emas. *Nega:* mijoz oqimni statik ekranlar qatoridan tasavvur qila olmaydi; prototipda esa qadam yetishmasligi darhol ko'rinadi.
9. **Dizayner qurilgan ekranni ko'radi.** Har release'dan oldin dizayner asosiy ekranlarni staging'da maket bilan solishtiradi; farqlar bug sifatida ([D08](D08-kanban-dor-dod.md)) ochiladi. Kundalik tekshiruv — Testing'da ([D12](D12-ui-ux-standartlari.md) 5.2). *Nega:* maket va kod sekin-asta ajralib ketadi; ularni eng yaxshi ko'radigan odam — maket muallifi.

**Kichik loyihada (3–5 kishi).** Brief alohida hujjat bo'lmasligi mumkin: TZ'dagi ekranlar ro'yxatiga maket havolasi qo'shiladi ([D03](D03-loyiha-boshlangich-hujjati.md)). Oddiy ekranlar uchun wireframe o'tkazib yuboriladi. 3-, 4-, 6- va 7-qoidalar (TZ'ga bog'lash, holatlar, yagona haqiqat, handoff checklist) majburiy.

## 4. Shablonlar

### 4.1. Dizayn brief

```
Loyiha: <nomi>   Release / modul: <R<N> / nomi>   TZ: D03 v<X.Y>
Tuzdi: <analitik>, <dizayner>   Sana: <sana>

Maqsad: bu ekranlar foydalanuvchiga nima beradi (1–2 gap)
Foydalanuvchilar: <rollar>; qurilma va sharoit (masalan, imtihon zalidagi kompyuter)
Story'lar: US-<NN>, …
Ekranlar: E-<NN> <nomi> — <rol>, …
Oqim: <birinchi ekran> → … → <oxirgi ekran>; muqobil yo'llar va xatolar
Kontent: qaysi ma'lumotlar ko'rsatiladi, matnlar manbasi (terminologiya lug'ati, D12)
Qurilmalar va ekranlar: desktop / planshet / telefon (D03 dagi talab)
Design system: mavjud komponentlar; yangi komponent kerakmi (kartochka, D12)
Cheklovlar: texnik (masalan, kamera, offline), huquqiy, brend
Kirmaydi: <bu bosqichda chizilmaydigan narsalar>
Ochiq savollar: S-<NN> (TZ'dagi ro'yxatga)
Muddatlar: wireframe review — <sana>; UI review — <sana>; handoff — <sana>
```

### 4.2. Figma tuzilmasi va nomlash

```
Fayl: <loyiha> — <release yoki modul>
Sahifalar:
  01 Wireframe     — oqimlar, rangsiz
  02 UI            — ish jarayonidagi maketlar
  03 Handoff       — tayyor, quriladigan (yagona haqiqat)
  04 Arxiv         — eski variantlar (o'chirilmaydi)
Frame nomi:  E-<NN> <ekran nomi> — <holat>
  masalan:   E-03 Rozilik — xato
             E-04 Test yechish — internet yo'q
Version history: "Handoff v<N> — <nima o'zgardi>"
```

### 4.3. Handoff checklist

```
Release / modul: <...>   Handoff v<N>   Sana: <sana>

[ ] Har ekran TZ'dagi ekranlar ro'yxatida, frame nomida ID va holat
[ ] Har ekranning holatlari chizilgan (D12, B bo'limi) va story'dagi xato holatlari bor
[ ] Maket tekshiruvi o'tgan (D12, 5.1)
[ ] Ko'p qadamli oqimlar uchun prototip bor
[ ] Matnlar lug'atdan, har tilda uzun matn sig'ishi tekshirilgan
[ ] Qo'llab-quvvatlanadigan har ekran o'lchami uchun maket bor
[ ] Ikonka va rasmlar eksportga tayyor (format, o'lcham)
[ ] Yangi komponentlar kartochkasi bilan (D12, 6.1)
[ ] Ochiq savollar yo'q yoki egasi va muddati bilan TZ'da
Qabul qildi: frontend — <ism>, QA — <ism>, <sana>
```

## 5. Misol

Misol loyihada hali yozilmagan: Test Platformasi uchun Face ID va test yechish ekranlari brief'i — [loyiha kartasidagi "Hujjatlar" jadvalida](loyihalar/test-platformasi/index.md) "rejada".

## 6. Checklist: dizayn bosqichi tayyormi

- [ ] Release yoki modul uchun brief bor va TZ versiyasiga bog'langan
- [ ] Ko'p qadamli oqimlar wireframe review'dan o'tgan: analitik, frontend yoki tech lead va PO izohlari yopilgan
- [ ] Figma tuzilmasi 4.2 bo'yicha; har frame nomida ekran ID'si va holati
- [ ] Handoff checklisti (4.3) to'ldirilgan va frontend hamda QA qabul qilgan
- [ ] Mijoz maketni yoki prototipni ko'rgan; scope'ni o'zgartiradigan izohlari change request bo'lgan
- [ ] Handoff'dan keyingi har o'zgarish versiya nomi bilan va Jira taskida qayd etilgan

## 7. Tez-tez uchraydigan xatolar

1. **To'g'ridan-to'g'ri chiroyli UI.** Oqim kelishilmagan, mijoz uchinchi ekranda "bu qadam umuman kerak emas" deydi. To'g'risi: ko'p qadamli oqim uchun avval wireframe.
2. **"Oxirgi maket qaysi?"** Figma'da beshta variant, dasturchi eskisini quradi. To'g'risi: "Handoff" sahifasi — yagona haqiqat, o'zgarish — versiya bilan.
3. **Dizayn orqali scope.** Review'da mijoz yangi ekran so'raydi, dizayner chizadi — TZ'da va bahoda u yo'q. To'g'risi: yangi ekran — change request.
4. **Handoff — Telegram'da havola.** "Mana maket" degan xabar, holatlar va savollar yo'q. To'g'risi: handoff checklist va dasturchining qabuli.
5. **Dizayner release'dan keyin yo'qoladi.** Qurilgan ekran maketdan farq qiladi, buni hech kim sezmaydi. To'g'risi: release oldidan dizaynerning staging'dagi ko'rigi.

---

Egasi: UI/UX dizayner + biznes analitik · Oxirgi yangilangan: 2026-11-09 · Keyingi ko'rib chiqish: pilot loyiha retrosidan keyin (D17)
