# D07 — Ishlar taqsimoti va resurs planlash

*`[b.q.]` — boshlang'ich qiymat: bu raqam manbadan olinmagan, standart yozilganda taklif sifatida qo'yilgan; pilotda tekshiriladi va retroda ([D17](D17-retro-va-standartni-yangilash.md)) tuzatiladi. Barcha bunday qiymatlar va manbalar — [Manbalar](manbalar.md).*

## 1. Maqsad

Har bir modul va ish uchun mos odam bo'lsin, hech kim ortiqcha yuklanmasin, loyiha esa bitta odam yo'qligida to'xtab qolmasin. Odamlarning real bandligi srok hisobiga kirsin, yangi odam tez ulansin, ketayotgan odamning bilimi jamoada qolsin.

## 2. Kim uchun va qachon

- **Egasi:** PM. Bir nechta loyiha orasida odamlarni PM'lar va resurslarni taqsimlaydigan rahbar birgalikda taqsimlaydi.
- **Kim nima qiladi:**

| Rol | Vazifasi |
| --- | --- |
| PM | Modullar taqsimoti va bandlik jadvalini yuritadi; bandlik o'zgarsa srokni qayta hisoblaydi ([D06](D06-baholash-va-srok.md)) |
| Tech lead | Ko'nikmalar matritsasini to'ldiradi; modul egasi va zaxirasini taklif qiladi; bilim almashishni kuzatadi |
| Dasturchi, dizayner | O'z ko'nikmasini baholaydi; zaxira bo'lgan modulida ham ishlaydi; ketishda handover qiladi |
| Resurslarni taqsimlaydigan rahbar | Loyihalar orasida odamni ko'chirish qarorini PM'lar bilan birga qabul qiladi |

- **Qachon:**
  - 4-bosqichda (Planlash) modullar taqsimoti va bandlik jadvali srokdan oldin tuziladi ([D02](D02-loyiha-hayot-sikli.md), 4-darvoza).
  - Har release boshida va jamoa o'zgarganda ular yangilanadi.
  - Yangi odam qo'shilganda onboarding (4.), odam ketganda yoki uzoq ta'tilga chiqqanda esa handover (4.) o'tkaziladi.

**Bu doc va boshqalar.** Rollar va ularning zaxirasi [D01](D01-rollar-va-raci.md) da yozilgan; bu yerda esa modullar va odamlarning vaqti ko'riladi. Tasklarni Ready ustunidan bajaruvchining o'zi oladi ([D08](D08-kanban-dor-dod.md)), PM kunlik tasklarni taqsimlamaydi.

**Atamalar.**
- *Modul* — tizimning mustaqil qismi (masalan, login, test yechish, natijalar) yoki texnik qatlam (frontend, backend, CI).
- *Bandlik* — odam vaqtining shu loyihaga ajratilgan ulushi, foizda.
- *Bus factor* — nechta odam yo'qolsa, modul ustidagi ish to'xtashi. Qiymat 1 bo'lsa, bu xavfli: bitta odam ketsa, modul ham u bilan ketadi.
- *Onboarding* — yangi odamni loyihaga ulash.
- *Handover* — ketayotgan odamning ishi va bilimini topshirishi.

## 3. Qoidalar

1. **Bandlik ochiq va 100% dan oshmaydi.** Har odamning loyihalar bo'yicha bandligi bitta jadvalda (4.) turadi. Bir odam bir vaqtda ko'pi bilan 2 loyihada [b.q.] ishlaydi. *Nega:* "hammasida biroz" ishlaydigan odam hech birida oldinga siljimaydi, chunki loyihalar orasida o'tishning o'zi vaqt oladi; yashirin ortiqcha yuklama esa srok kechikkandagina ko'rinadi.
2. **Srok real bandlik bilan hisoblanadi.** [D06](D06-baholash-va-srok.md) dagi hisobga odamlar shu jadvaldagi foiz va ta'til kunlari bilan kiradi. Bandlik o'zgarsa (odam boshqa loyihaga olindi), PM shu hafta srokni qayta hisoblaydi va srok o'zgarsa, PO'ga yozadi. *Nega:* jamoadagi 5 kishidan ikkitasi yarim vaqt ishlasa, "jamoa 5 kishi" degan hisob haqiqatdan uzoq bo'ladi.
3. **Odamni loyihadan olish yozma qaror bilan bo'ladi.** Loyihadan odam olinsa yoki bandligi kamaysa, PM'lar va rahbar uning ta'sirini (qaysi modul, srok qanchaga suriladi) yozadi; qaror qarorlar jurnaliga kiritiladi ([D02](D02-loyiha-hayot-sikli.md)). *Nega:* jim ko'chirilgan odam yashirin scope o'zgarishining teskarisi: ish o'sha-o'sha, odam esa kam.
4. **Har modulning egasi va zaxirasi bor (bus factor ≥ 2).** Modullar taqsimoti (4.) har modul uchun asosiy bajaruvchi va zaxirani ko'rsatadi. Zaxira deganda shu modulning kodini review qilgan va unda kamida bitta task bajargan odam tushuniladi. *Nega:* bitta odamdagi modul uning kasalligi, ta'tili yoki ketishi bilan to'xtaydi; kichik jamoada bu eng katta risk.
5. **Bilim ish ichida tarqatiladi.** Zaxira modul egasining MR'larini review qiladi ([D11](D11-dasturchilar-qoidalari.md), 9-qoida); har release'da zaxira o'z zaxira modulida kamida bitta task oladi; murakkab qism juft bo'lib qilinadi; muhim qarorlar ADR'ga yoziladi ([D11](D11-dasturchilar-qoidalari.md)). *Nega:* "kerak bo'lganda o'rganib olamiz" degan yondashuv ishlamaydi, chunki kerak bo'lgan payt odatda shoshilinch payt bo'ladi.
6. **Ish ko'nikma va o'sishga qarab taqsimlanadi.** Ko'nikmalar matritsasi (4.) bo'yicha kritik va srokka yaqin ish tajribali odamga beriladi; o'rganish uchun mos ish esa o'rta darajadagi odamga, tajribali odamning review'i bilan beriladi. *Nega:* doim faqat eng kuchli odamga berilgan ish uni ortiqcha yuklaydi va boshqalarni o'stirmaydi; bus factor ham shundan pasayadi.
7. **Yangi odam onboarding checklist bilan ulanadi va srokka darhol to'liq kirmaydi.** Birinchi haftada unga muhit, hujjatlar (jarayon xaritasi, TZ, [D01](D01-rollar-va-raci.md) rollar jadvali), mentor va birinchi kichik task beriladi (4.). Srok hisobida yangi odam birinchi 2 haftada yarim bandlik [b.q.] bilan olinadi. *Nega:* yangi odamni ulashga jamoaning ham vaqti ketadi; uni birinchi kundan to'liq hisoblash srokni kechiktiradi ([D06](D06-baholash-va-srok.md), 9-qoida: odam qo'shish oxirgi haftalarda kam yordam beradi).
8. **Ta'til oldindan rejalashtiriladi, ketish esa handover bilan bo'ladi.** Rejalashtirilgan ta'tillar release rejasiga kiradi. Ketayotgan odam oxirgi ish haftasida handover qiladi (4.): ochiq tasklar, kirish huquqlari, "faqat men biladigan" narsalar zaxiraga va hujjatlarga o'tadi. *Nega:* ketgan odam bilan birga ketgan bilim keyin oylar davomida qayta tiklanadi.

**Kichik loyihada (3–5 kishi).** Modullar taqsimoti (4.) va 4-, 5-, 8-qoidalar majburiy: kichik jamoada bitta odam ko'pincha butun yo'nalishni (masalan, yagona frontendchi) ushlab turadi, shuning uchun zaxira va bilim almashish eng muhim. Ko'nikmalar matritsasi va bandlik jadvali faqat odamlar boshqa loyihalarda ham band bo'lsa yuritiladi.

## 4. Shablonlar

### 4.1. Ko'nikmalar matritsasi

```
Daraja: 0 — bilmaydi; 1 — yordam bilan qiladi; 2 — mustaqil qiladi; 3 — boshqalarni o'rgata oladi

| Odam   | Angular | Backend (<stack>) | DB | CI/CD | UI dizayn | Test (e2e) | <domen> |
| ------ | ------- | ----------------- | -- | ----- | --------- | ---------- | ------- |
| <ism>  |         |                   |    |       |           |            |         |
```

### 4.2. Bandlik jadvali

```
Davr: <oy yoki release>   Yuritadi: <PM>

| Odam  | Loyiha A | Loyiha B | Ta'til / bayram     | Jami |
| ----- | -------- | -------- | ------------------- | ---- |
| <ism> | 70%      | 30%      | <sana — sana>       | 100% |
```

### 4.3. Modullar taqsimoti

```
| Modul           | Egasi  | Zaxira | Zaxiraning oxirgi taski | Bus factor | Izoh |
| --------------- | ------ | ------ | ----------------------- | ---------- | ---- |
| <login>         | <ism>  | <ism>  | <TASK-ID, sana>         | 2          |      |
| <frontend>      | <ism>  | —      | —                       | 1 ⚠️       | Risk R-<NN>, reja: … |
```

Bus factor 1 bo'lgan har modul risklar reestriga ([D02](D02-loyiha-hayot-sikli.md)) chorasi bilan yoziladi.

### 4.4. Onboarding checklist

```
Yangi odam: <ism>, <rol>   Boshladi: <sana>   Mentor: <ism>

1-kun:
[ ] Kirish huquqlari: GitLab, Jira, Figma, hujjatlar joyi, jamoa kanali
[ ] Lokal muhit ishga tushdi (README bo'yicha); muammolar README'ga yozildi
1-hafta:
[ ] O'qidi: jarayon xaritasi, loyiha kartasi, TZ (D03), rollar jadvali (D01), D08, rolga xos doclar
[ ] Meetinglarga qo'shildi (ritm jadvali, D09)
[ ] Birinchi kichik task — mentor review'i bilan merge qilindi
2-hafta:
[ ] Mustaqil task; boardni tushuntira oladi (D08 tayyor mezoni)
[ ] Modullar taqsimotida qaysi modulda zaxira ekani yozildi
```

### 4.5. Handover (ketishda yoki uzoq ta'tildan oldin)

```
Kim: <ism>   Oxirgi kun: <sana>   Kimga: <zaxira / yangi egasi>

[ ] Ochiq tasklar: har biri kimga o'tdi (Jira'da bajaruvchi o'zgardi)
[ ] Ochiq MR'lar: merge qilindi yoki egasi o'zgardi
[ ] "Faqat men biladigan" narsalar: ro'yxat → README / ADR / docs ga yozildi
[ ] Kirish huquqlari: kimga o'tkazildi, ketgandan keyin qaysilari yopiladi
[ ] Modullar taqsimoti va D01 rollar jadvali yangilandi
[ ] Qabul qiluvchi bilan 1 soatlik o'tish (kod va hujjatlar bo'yicha)
```

## 5. Misol

Test Platformasi modullari bo'yicha taqsimot jadvali misol loyihada hali yozilmagan: [loyiha kartasidagi "Hujjatlar" jadvalida](loyihalar/test-platformasi/index.md) u "rejada" deb belgilangan. Shu mavzudagi real risk [loyiha rejasidagi](loyihalar/test-platformasi/D02-loyiha-rejasi.md) R-05: "Frontend bitta odamda".

## 6. Checklist: resurs boshqarilyaptimi

- [ ] Modullar taqsimoti bor; har bir modulning egasi va zaxirasi bor; bus factor 1 bo'lganlari risklar reestriga yozilgan
- [ ] Har zaxira so'nggi release'da o'z zaxira modulida kamida bitta task bajargan
- [ ] Bandlik jadvalida hech kim 100% dan oshmaydi va 2 tadan ortiq loyihada emas
- [ ] Release srok hisobida odamlar real bandlik va ta'til kunlari bilan olingan ([D06](D06-baholash-va-srok.md))
- [ ] Oxirgi bandlik o'zgarishi srokka ta'siri bilan qarorlar jurnaliga yozilgan
- [ ] Oxirgi yangi odam onboarding checklistini 2 haftada yopgan
- [ ] Oxirgi ketgan odamning handover checklisti to'liq

## 7. Tez-tez uchraydigan xatolar

1. **"Hammasini Ali biladi".** Modul bitta odamda: u ta'tilga chiqsa, release to'xtaydi. To'g'risi: zaxira tayinlash va har release'da zaxiraga shu moduldan task berish.
2. **Hammasida biroz.** Odam to'rt loyihada 25% dan ishlaydi va hech qaysi biri oldinga siljimaydi. To'g'risi: ko'pi bilan 2 loyiha, bandlik esa jadvalda ko'rsatiladi.
3. **Jim ko'chirish.** Odam boshqa "shoshilinch" loyihaga olinadi, srok esa eskicha qoladi. To'g'risi: yozma qaror va qayta hisoblangan srok.
4. **Kech qo'shilgan odam.** Release kechikayotganda yangi odam qo'shiladi va birinchi kundan to'liq hisoblanadi. To'g'risi: onboarding vaqtini srokka kiritish; ko'pincha scope'ni kesish tezroq natija beradi.
5. **Ketish bir kunlik xabar bilan bo'ladi.** Odam ketdi, kirish huquqlari va "faqat u biladigan" serverlar esa hech kimda yo'q. To'g'risi: oxirgi haftada handover checklistini bajarish.

---

Egasi: PM · Oxirgi yangilangan: 2026-11-09 · Keyingi ko'rib chiqish: pilot loyiha retrosidan keyin ([D17](D17-retro-va-standartni-yangilash.md))
