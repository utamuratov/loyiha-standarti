# D01 — Rollar va RACI matritsa

## 1. Maqsad

Har bir ish uchun kim bajarishi, kim yakuniy javob berishi, kimdan maslahat so'ralishi va kim xabardor qilinishi oldindan, yozma ravishda aniq bo'lsin. Aks holda ish "men sizni qiladi deb o'ylagandim" degan joyda qoladi, ayniqsa kichik jamoada tech lead, QA, DevOps va support alohida odam bo'lmaganda: test, deploy va murojaatlar hech kimniki bo'lmay qoladi.

## 2. Kim uchun va qachon

- **Egasi:** PM. Rollarni biriktiradi, jadvalni yuritadi.
- **Kim ishlatadi:** butun jamoa va mijoz tomoni. Yangi a'zo loyihaga qo'shilgan birinchi kuni o'qiydi.
- **Qachon:**
  - 1-bosqichda (Boshlash) loyiha rollari biriktiriladi va kickoff'da ([D05](D05-kickoff-va-doc-review.md)) jamoaga ko'rsatiladi — bu 1-darvozaning punkti ([D02](D02-loyiha-hayot-sikli.md)).
  - Jamoa o'zgarganda (odam qo'shildi, ketdi, uzoq ta'tilga chiqdi) jadval o'sha haftaning o'zida yangilanadi.

**Atamalar.**
- *Rol* — loyihadagi vazifa (masalan, "tekshiruvchi"). Rol lavozim emas: bitta odam bir nechta rolni bajarishi mumkin.
- *RACI* — har bir faoliyat uchun to'rt xil ishtirok:
  - **R** (Responsible) — bajaradi;
  - **A** (Accountable) — yakuniy tasdiqlaydi va natija uchun javob beradi;
  - **C** (Consulted) — qarordan **oldin** fikri so'raladi;
  - **I** (Informed) — qarordan **keyin** xabardor qilinadi.
- *PO* (product owner) — mijoz tomonidagi qaror qiluvchi: scope, ustuvorlik va natijani qabul qilish.

## 3. Rollar

| Rol | Asosiy mas'uliyat | Qaror huquqi | Asosiy hujjatlari |
| --- | --- | --- | --- |
| Mijoz / PO | Biznes maqsad, ustuvorliklar, natijani qabul qilish | Scope va ustuvorlik | Tasdiqlangan [D03](D03-loyiha-boshlangich-hujjati.md), UAT akti |
| PM | Srok, resurs, risk, aloqa; jarayonni yuritish | Taqsimot, meetinglar, change request'ni rasmiylashtirish | D01, [D02](D02-loyiha-hayot-sikli.md), [D05](D05-kickoff-va-doc-review.md), [D06](D06-baholash-va-srok.md), [D07](D07-taqsimot-va-resurs.md), [D09](D09-meetinglar-ritmi.md), [D10](D10-ozgarishlarni-boshqarish.md) |
| Biznes analitik | Talablarni yig'ish, user story va qabul mezonlari | Talablar to'liqligi (DoR) | [D03](D03-loyiha-boshlangich-hujjati.md) |
| UI/UX dizayner | Foydalanuvchi oqimlari, maket, design system | UI yechimlari standart doirasida | [D04](D04-dizayn-brief-va-jarayon.md), [D12](D12-ui-ux-standartlari.md) |
| Tech lead | Arxitektura, texnik baholash, code review sifati | Texnik yechimlar, merge, release tarkibi, rollback | [D11](D11-dasturchilar-qoidalari.md), [D13](D13-test-strategiyasi.md), [D14](D14-release-va-deploy.md) |
| Dasturchi (FE/BE/mobile) | Taskni DoD bo'yicha bajarish, testlar, merge request, boshqalarning MR'ini review qilish | Task ichidagi implementatsiya | MR, unit testlar |
| QA / tekshiruvchi | Test rejasi, Testing ustuni, regressiya, bug hisoboti | Task Done'mi; release'ga tayyorlik (QA sign-off) | [D13](D13-test-strategiyasi.md), test hisobotlari |
| DevOps | Muhitlar, CI/CD, monitoring, backup, prod deploy | Deploy tartibi | [D14](D14-release-va-deploy.md) |
| Support | Qo'llanma, o'qitish, foydalanuvchi murojaatlari | Murojaatlarni toifalash | [D15](D15-qollanma-va-oqitish.md), [D16](D16-support-va-fikr-yigish.md) |

## 4. Qoidalar

1. **Har faoliyatda aynan bitta A.** Bir nechta odam "tasdiqlaydi" deb yozilmaydi; boshqalar C bo'ladi. *Nega:* "hamma javobgar" amalda "hech kim javobgar emas" degani: qaror cho'ziladi va xato bo'lsa egasi topilmaydi.
2. **Har rolga loyiha boshida aniq odam va zaxira yoziladi** (6.1-shablon). Alohida odami yo'q rol bo'sh qoldirilmaydi — u jamoadagi kimgadir biriktiriladi (5-bo'lim). *Nega:* tech lead, QA yoki DevOps yo'q jamoada review, test va deploy "o'z-o'zidan" hech kimga tushmaydi; zaxira esa odam kasal yoki ta'tilda bo'lganda ish to'xtab qolmasligi uchun kerak.
3. **Hech kim o'z ishining yagona tekshiruvchisi bo'lmaydi.** MR'ni muallifdan boshqa odam tasdiqlaydi ([D11](D11-dasturchilar-qoidalari.md)); taskni Testing'da muallifdan boshqa odam tekshiradi ([D08](D08-kanban-dor-dod.md)); TZ'ni analitik emas, PO tasdiqlaydi ([D03](D03-loyiha-boshlangich-hujjati.md)). Rollar birlashtirilganda ham shu saqlanadi. *Nega:* muallif o'z xatosini ko'rmaydi, chunki u tizimni qanday ishlatish kerakligini biladi va xatoga olib keladigan qadamni qilmaydi.
4. **C oldin, I keyin — va C'ning muddati bor.** C'dan fikr belgilangan muddatda (masalan, 1 ish kuni) so'raladi; javob bo'lmasa, A qaror qabul qiladi va sababini yozadi. I'ga qaror qabul qilingandan keyin, kelishilgan kanalda xabar beriladi. *Nega:* hamma C bo'lsa yoki C javobini kutib tursa, muhokama cho'ziladi va qaror chiqmaydi.
5. **Mijoz tomonida bitta PO.** Scope, ustuvorlik va qabul bo'yicha qaror mijoz tomonidan bitta odamdan keladi; boshqa mijoz vakillari C yoki I. Jamoa a'zosi (PM ham) PO o'rnida scope'ni tasdiqlamaydi. *Nega:* mijozdan uch kishi uch xil gapirsa, jamoa qaysi birini bajarishni bilmaydi va keyin "biz buni so'ramagandik" degan bahs chiqadi.
6. **Ish uchun javobgar va darvoza tasdiqlovchisi ikki xil narsa.** RACI'dagi A ishning sifati uchun javob beradi (masalan, maket uchun dizayner). Darvoza tasdiqlovchisi esa bosqich checklisti bajarilganini tekshiradi (masalan, 3-darvozani PM tasdiqlaydi); ular [D02](D02-loyiha-hayot-sikli.md) da yoziladi va bu jadvalda takrorlanmaydi. *Nega:* ikkalasi aralashtirilsa, ish muallifi o'z bosqichini o'zi yopadi (3-qoida) yoki darvoza ish sifatini tekshiradigan ikkinchi review'ga aylanadi.
7. **Jadval hammaga ko'rinadi va dolzarb holda turadi.** Rollar va RACI loyiha hujjatlari yonida turadi; o'zgarsa, jamoaga e'lon qilinadi va qarorlar jurnaliga yoziladi ([D02](D02-loyiha-hayot-sikli.md)). *Nega:* eskirgan jadval jadval yo'qligidan ham yomon: odamlar unga ishonib, noto'g'ri odamga murojaat qiladi.

## 5. Kichik jamoada rollarni birlashtirish

Kichik loyihada (3–5 kishi) tech lead, QA, DevOps va support ko'pincha alohida odam emas. Ularning ishi quyidagicha biriktiriladi; 3-qoida (o'zini tekshirmaslik) har doim saqlanadi.

| Rol | Kimga biriktiriladi | Cheklov |
| --- | --- | --- |
| PM + analitik | Bitta odam | TZ'ni PO tasdiqlaydi, PM/analitik o'zi emas |
| Tech lead | Eng tajribali dasturchi | O'z MR'ini o'zi tasdiqlamaydi — review'ni boshqa dasturchi qiladi |
| QA / tekshiruvchi | Analitik yoki task muallifi bo'lmagan dasturchi ([D08](D08-kanban-dor-dod.md)) | O'z taskini testlamaydi |
| DevOps | Tech lead yoki backend dasturchi ([D14](D14-release-va-deploy.md)) | Prod'ga kirish huquqi faqat shu odam va zaxirasida |
| Support | PM/analitik (qo'llanma, toifalash); texnik murojaatlar — dasturchiga ([D16](D16-support-va-fikr-yigish.md)) | Murojaat egasiz qolmaydi |

Birlashtirib **bo'lmaydi:** PO va jamoa a'zosi (5-qoida); muallif va uning yagona tekshiruvchisi (3-qoida).

## 6. Shablonlar

### 6.1. Loyiha rollari

```
Loyiha: <nomi>   Versiya: v<N>   Sana: <sana>   Yuritadi: <PM>

| Rol              | Asosiy odam | Zaxira | Izoh (qaysi rollar birlashtirilgan) |
| ---------------- | ----------- | ------ | ----------------------------------- |
| PO (mijoz)       |             |        |                                     |
| PM               |             |        |                                     |
| Analitik         |             |        |                                     |
| Dizayner         |             |        |                                     |
| Tech lead        |             |        |                                     |
| Dasturchilar     |             |        |                                     |
| QA / tekshiruvchi|             |        |                                     |
| DevOps           |             |        |                                     |
| Support          |             |        |                                     |

Mijoz tomoni: C — <ismlar>; I — <ismlar>
Kanallar: qarorlar — <qarorlar jurnali havolasi>; I uchun xabar — <kanal>
C javob muddati: <masalan, 1 ish kuni>
Standart RACI'dan farqlar: <yo'q / qaysi qator va nega>
```

### 6.2. Standart RACI

Loyiha shu jadvalni o'zgarishsiz oladi; farq bo'lsa, 6.1 dagi "farqlar" qatoriga yoziladi. Ustunlarda odamlar emas, rollar turadi.

| Faoliyat | PO | PM | Analitik | Dizayner | Tech lead | Dasturchi | QA | DevOps | Support |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Brief: muammo, maqsad, scope chegarasi ([D03](D03-loyiha-boshlangich-hujjati.md)) | A | C | R | I | C | I | I | I | I |
| TZ: story, qabul mezonlari ([D03](D03-loyiha-boshlangich-hujjati.md)) | A | C | R | C | C | C | C | I | I |
| API kontrakti ([D03](D03-loyiha-boshlangich-hujjati.md), [D11](D11-dasturchilar-qoidalari.md)) | | I | C | | A | R | I | | |
| Bosqichlar rejasi, qarorlar jurnali, risklar ([D02](D02-loyiha-hayot-sikli.md)) | I | A/R | C | I | C | I | I | I | I |
| Rollar va RACI (D01) | C | A/R | I | I | C | I | I | I | I |
| Maketlar va handoff ([D04](D04-dizayn-brief-va-jarayon.md), [D12](D12-ui-ux-standartlari.md)) | C | I | C | A/R | C | C | I | | |
| Task bahosi ([D06](D06-baholash-va-srok.md)) | | C | | C | A | R | | | |
| Release rejasi va srok ([D06](D06-baholash-va-srok.md), [D07](D07-taqsimot-va-resurs.md)) | A | R | C | C | C | C | I | I | I |
| Taskni Ready'ga tayyorlash, DoR ([D08](D08-kanban-dor-dod.md)) | | A | R | C | C | C | | | |
| Kod va testlar ([D11](D11-dasturchilar-qoidalari.md), [D13](D13-test-strategiyasi.md)) | | | | | A | R | | | |
| Code review va merge ([D11](D11-dasturchilar-qoidalari.md)) | | | | | A | R (muallif emas) | | | |
| Testing va Done ([D08](D08-kanban-dor-dod.md)) | | I | C | C | | C | A/R | | |
| Regressiya va QA sign-off ([D13](D13-test-strategiyasi.md)) | | I | | | C | C | A/R | | |
| CI/CD va muhitlar ([D14](D14-release-va-deploy.md)) | | | | | C | C | | A/R | |
| Release tarkibi, prod deploy, rollback ([D14](D14-release-va-deploy.md)) | I | C | | | A | C | C | R | I |
| Release sanasini kelishish va e'lon ([D14](D14-release-va-deploy.md)) | C | A/R | | | C | | | I | I |
| UAT va qabul ([D02](D02-loyiha-hayot-sikli.md)) | A/R | C | C | | I | | C | | I |
| Scope o'zgarishi, change request ([D10](D10-ozgarishlarni-boshqarish.md)) | A | R | C | C | C | C | I | | I |
| Qo'llanma va o'qitish ([D15](D15-qollanma-va-oqitish.md)) | I | C | C | C | | | | | A/R |
| Murojaatlar va toifalash ([D16](D16-support-va-fikr-yigish.md)) | I | C | | | | C | | | A/R |
| Retro ([D17](D17-retro-va-standartni-yangilash.md)) | C | A/R | C | C | C | C | C | C | C |

A/R — shu rol ham bajaradi, ham yakuniy javob beradi.

## 7. Misol

Test Platformasi uchun rollar va RACI misol loyihada hali yozilmagan: [loyiha kartasidagi "Hujjatlar" jadvalida](loyihalar/test-platformasi/index.md) u "rejada" deb belgilangan.

## 8. Checklist: loyihada rollar aniqmi

- [ ] 6.1-shablon to'ldirilgan: har rolning asosiy odami va zaxirasi bor, bo'sh rol yo'q
- [ ] Mijoz tomonidan bitta PO ismi bilan yozilgan
- [ ] RACI'ning har qatorida aynan bitta A
- [ ] Hech bir qatorda bitta odam ham bajaruvchi, ham yagona tekshiruvchi emas (MR review, Testing, TZ tasdig'i)
- [ ] Jadval kickoff'da ko'rsatilgan va loyiha hujjatlari yonida turibdi
- [ ] Oxirgi jamoa o'zgarishidan keyin yangilangan va qarorlar jurnaliga yozilgan

## 9. Tez-tez uchraydigan xatolar

1. **"Hamma javobgar".** Bitta qatorda uchta A yoki A umuman yo'q. To'g'risi: bitta A, qolganlar C.
2. **Yo'q rollar "keyin ko'ramiz".** Jamoada QA va DevOps yo'q, shuning uchun test va deploy hech kimga yozilmagan. Natijada release oldidan shoshilinch qo'lda tekshiruv boshlanadi va "kim deploy qiladi?" degan savol tug'iladi. To'g'risi: rollarni 5-bo'lim bo'yicha loyiha boshida biriktirish.
3. **Lavozimni rol deb yozish.** "Ali — backend" deb yozilgan, lekin Ali tech lead ham, DevOps ham ekanini hech kim bilmaydi. To'g'risi: rol bo'yicha yozish, birlashtirilganini izohda ko'rsatish.
4. **Mijozdan uch "tasdiqlovchi".** Har biri o'z o'zgarishini so'raydi, scope suzib yuradi. To'g'risi: bitta PO, qolganlar C/I.
5. **Bir marta tuzilib, unutilgan jadval.** Odam ketgan, uning rollari esa hali unda. To'g'risi: jamoa o'zgargan hafta yangilash va e'lon qilish.

---

Egasi: PM · Oxirgi yangilangan: 2026-11-07 · Keyingi ko'rib chiqish: pilot loyiha retrosidan keyin ([D17](D17-retro-va-standartni-yangilash.md))
