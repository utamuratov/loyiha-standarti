# D12 — UI/UX standartlari va design system

*`[b.q.]` — boshlang'ich qiymat: bu raqam manbadan olinmagan, standart yozilganda taklif sifatida qo'yilgan; pilotda tekshiriladi va retroda ([D17](D17-retro-va-standartni-yangilash.md)) tuzatiladi. Barcha bunday qiymatlar va manbalar — [Manbalar](manbalar.md).*

## 1. Maqsad

Kompaniyaning barcha loyihalarida interfeys bir xil, tushunarli va qulay bo'lsin: foydalanuvchi bir ekranni o'rgansa, keyingisini taxmin qila olsin. Dizayner va frontend esa bitta komponent ro'yxati va bitta rang/shrift to'plamidan foydalansin, toki "maketda bunday, kodda boshqacha" degan holat bo'lmasin.

## 2. Kim uchun va qachon

- **Egasi:** UI/UX dizayner (design system'ning ham egasi).
- **Kim nima qiladi:**

| Rol | Vazifasi |
| --- | --- |
| Dizayner | Maketlarni shu standart va komponent ro'yxati asosida chizadi; yangi komponent kerak bo'lsa, frontend bilan kelishadi |
| Frontend dasturchi | Komponentlarni ro'yxatdagi kutubxona komponentlari va tokenlar bilan quradi; maketdan chetga chiqmaydi, chiqish kerak bo'lsa dizaynerga aytadi |
| Analitik | Ekranlarning holatlari va xato holatlari [D03](D03-loyiha-boshlangich-hujjati.md) story'larida bo'lishini ta'minlaydi; matnlar terminologiya lug'atiga mos bo'lishini kuzatadi |
| Tekshiruvchi (QA) | Testing ustunida ekranlarni 5.2-checklist bo'yicha ko'rib chiqadi |

- **Qachon:**
  - 3-bosqichda (Dizayn) maketlar shu standart bo'yicha chiziladi va 3-darvozada tekshiriladi.
  - 5-bosqichda (Ishlab chiqish) qurilgan ekranlar code review va Testing ustunida tekshiriladi.
  - Design system loyihalar orasida yashaydi va har loyihada boyib boradi.

**Atamalar.**
- *Design system* — komponentlar, tokenlar va qoidalar to'plami. U Figma kutubxonasida ham, kodda ham bir xil turadi.
- *Token* — nomlangan dizayn qiymati: rang, shrift o'lchami, oraliq (spacing), burchak radiusi.
- *Holat* (state) — ekran yoki komponentning ko'rinishi: bo'sh, yuklanmoqda, xato, ruxsat yo'q, to'ldirilgan.
- *Accessibility* (a11y) — interfeysdan imkoniyati cheklangan odamlar ham foydalana olishi; bunga kontrast, klaviatura bilan ishlash va ekran o'quvchi (screen reader) kiradi.
- *Adaptivlik* (responsive) — interfeysning turli ekran o'lchamlariga moslashishi.

Dizayn jarayonining o'zi (brief, wireframe, review, handoff) [D04](D04-dizayn-brief-va-jarayon.md) da yozilgan. Bu doc esa "nima bilan va qanday ko'rinishda chiziladi va quriladi?" degan savolga javob beradi.

## 3. Asosiy tamoyillar

1. **Izchillik.** Bir xil vazifa hamma joyda bir xil komponent, joy va so'z bilan bajariladi. Masalan, "Saqlash" har doim forma pastida o'ngda turadi.
2. **Holat doim ko'rinadi.** Foydalanuvchi tizim nima qilayotganini biladi: yuklanmoqda, saqlandi, xato, internet yo'q.
3. **Xato xabari aniq va yordam beradi.** U nima bo'lganini va endi nima qilish kerakligini aytadi: "Xatolik yuz berdi" emas, "JShShIR 14 ta raqamdan iborat bo'lishi kerak".
4. **Xatoning oldi olinadi.** Interfeys noto'g'ri harakatga iloji boricha yo'l qo'ymaydi: shart bajarilmaguncha tugma o'chiq turadi, maydonda format cheklovi bo'ladi, xavfli amaldan oldin tasdiq so'raladi.
5. **Qaytarib bo'lmaydigan amal tasdiq bilan bajariladi.** O'chirish, yakunlash, yuborish oldidan oqibati yoziladi ("Testni yakunlasangiz, javoblarni o'zgartirib bo'lmaydi").
6. **Qaytarish imkoni beriladi.** Iloji bo'lsa, tasdiq o'rniga "bekor qilish" beriladi (masalan, o'chirilgandan keyin 5 soniya [b.q.] "Qaytarish").
7. **Eslab qolish emas, ko'rib tanish.** Variantlar ro'yxatdan tanlanadi, kerakli ma'lumot ekranda ko'rinadi.
8. **Ortiqcha narsa yo'q.** Har ekranda bitta asosiy amal bo'ladi; ikkinchi darajali amallar kamroq ko'zga tashlanadi.

Manba: Nielsen'ning 10 ta foydalanuvchanlik evristikasi; batafsil ma'lumot 10-bo'limda.

## 4. Qoidalar

### A. Design system va tokenlar

1. **Bitta komponent kutubxonasi va uning Figma'dagi aksi.** Har bir loyiha kompaniya tanlagan UI kutubxonasidan foydalanadi (frontend loyihalarda bu PrimeNG). Figma kutubxonasida xuddi shu komponentlar bor. Kutubxonada bor narsa uchun o'z komponenti yozilmaydi. *Nega:* o'z komponentida holatlar, klaviatura va accessibility qaytadan yoziladi va odatda chala qoladi.
2. **Ranglar, shriftlar, oraliqlar va radiuslar faqat tokenlardan olinadi.** Kodda `#276BAF` yoki `13px` kabi qattiq qiymat yozilmaydi, tokenga murojaat qilinadi. Tokenlar bitta joyda turadi: kodda kutubxona mavzusida (theme preset), Figma'da esa o'zgaruvchilarda (variables). *Nega:* brend rangi o'zgarsa, u bitta joyda o'zgartiriladi; maket va kod bir-biridan ajralib ketmaydi.
3. **Yangi komponent faqat kelishuv bilan qo'shiladi.** Dizayner va frontend birga komponent kartochkasini (6.1) to'ldiradi, u design system ro'yxatiga qo'shiladi. Faqat bitta ekran uchun "maxsus" ko'rinish chizilmaydi. *Nega:* har loyihada 5 xil tugma paydo bo'lmaydi.
4. **Takroriy UI bitta umumiy komponent bo'ladi.** Ikki joyda bir xil ishlaydigan qism nusxalanmaydi, u umumiy komponentga chiqariladi. *Nega:* nusxadagi tuzatish ikkinchi nusxada unutiladi.

### B. Ekran holatlari

5. **Har bir ekran va har bir ma'lumot bloki uchun holatlar chiziladi va quriladi:**

| Holat | Qanday ko'rsatiladi |
| --- | --- |
| Yuklanmoqda | Kontent shaklidagi skeleton; 300 ms dan qisqa yuklanishda hech narsa ko'rsatilmaydi [b.q.] |
| Bo'sh | Nega bo'shligi va keyingi qadam ("Hali test yo'q. Test qo'shish") |
| Xato | Nima bo'ldi va "Qayta urinish" tugmasi |
| Ruxsat yo'q | Nega ruxsat yo'qligi va kimga murojaat qilish |
| Internet yo'q | Doimiy banner; ulanish qaytganda avtomatik davom etish |

*Nega:* chizilmagan holatni har dasturchi o'zicha quradi yoki umuman qurmaydi; natijada foydalanuvchi oq ekran ko'radi (bu [D04](D04-dizayn-brief-va-jarayon.md) da ham tayyor mezoni).

### C. Formalar

6. **Har maydonning ko'rinadigan label'i bor.** Placeholder label o'rnini bosmaydi. Majburiy maydonlar `*` bilan belgilanadi; agar ko'pchilik maydon majburiy bo'lsa, ixtiyoriylari "(ixtiyoriy)" deb yoziladi.
7. **Validatsiya quyidagicha ishlaydi:**
   - maydondan chiqqanda yoki yuborishda tekshiriladi, har harf terilganda emas;
   - xato maydon ostida, qizil rangda, aniq matn bilan chiqadi;
   - yuborishda birinchi xatoli maydonga fokus o'tadi;
   - format cheklovi (faqat raqam, uzunlik) kiritishning o'zida qo'yiladi.
8. **Yuborish tugmasi qoidalari:**
   - forma pastida turadi;
   - bosilgandan keyin javob kelguncha "yuklanmoqda" holatida va o'chiq bo'ladi (ikki marta yuborilmasligi uchun);
   - shart bajarilmagan bo'lsa (masalan, rozilik), o'chiq turadi va nega o'chiqligi yonida yozilgan.
9. **Saqlanmagan o'zgarish yo'qolmaydi.** Forma o'zgargan bo'lsa, sahifadan chiqishda ogohlantirish chiqadi.

### D. Jadvallar va ro'yxatlar

10. **Ma'lumot jadvali standart imkoniyatlar bilan quriladi.** Har bir imkoniyatni qo'shish yoki qo'shmaslik [D03](D03-loyiha-boshlangich-hujjati.md) da story darajasida hal qilinadi, lekin qo'shilsa, u quyidagi ko'rinishda bo'ladi:

| Imkoniyat | Standart |
| --- | --- |
| Qidiruv | Jadval ustida chapda; yozish to'xtagach 300–500 ms dan keyin qidiradi [b.q.]; "Tozalash" tugmasi |
| Filtr | Qidiruv yonida; qo'llangan filtrlar soni tugmada ko'rinadi; "Filtrlarni tozalash" |
| Saralash | Ustun sarlavhasini bosish; joriy saralash belgisi ko'rinadi |
| Pagination | Jadval ostida: sahifadagi qatorlar soni (10/20/50), jami yozuvlar soni. Filtr, saralash va sahifa URL'da saqlanadi: havola ulashilsa, xuddi shu ko'rinish ochiladi |
| Ustunlarni sozlash | Ko'p ustunli jadvalda: yashirish/ko'rsatish; tanlov foydalanuvchida saqlanadi |
| Eksport | Jadval ustida o'ngda; joriy filtr bo'yicha eksport qilinadi; nima eksport bo'lishi yozilgan |
| Ommaviy amallar | Qator boshida checkbox; tanlanganda jadval ustida "N ta tanlandi" va amallar paneli |
| Qator amallari | Qator oxirida; 2 tadan ko'p bo'lsa, "…" menyusiga yig'iladi |
| Holatlar | B bo'limidagi kabi; filtr natijasi bo'sh bo'lsa, "Hech narsa topilmadi" va "Filtrlarni tozalash" ko'rsatiladi |

11. **Karta ko'rinishidagi ro'yxat** (vitrina, katalog) "Ko'proq ko'rsatish" yoki cheksiz aylantirish bilan quriladi. Qaysi biri tanlanishi loyiha boshida bir marta qaror qilinadi va hamma joyda bir xil bo'ladi.

### E. Dialoglar va bildirishnomalar

12. **Har holat uchun qaysi komponent ishlatilishi:**

| Holat | Komponent |
| --- | --- |
| Amal natijasi (saqlandi, yuborildi) | Toast: 3–5 soniya [b.q.], o'ng yuqorida |
| Backend yoki tarmoq xatosi | Qizil toast: o'zi yo'qolmaydi yoki uzunroq turadi; matni aniq bo'ladi |
| Maydon xatosi | Maydon ostida matn, toast emas |
| Xavfli amalni tasdiqlash | Tasdiq dialogi: sarlavhada savol, matnda oqibati yoziladi; tugmalarda "Ha/Yo'q" emas, amal nomi turadi ("Yakunlash", "Bekor qilish") |
| Qisqa qo'shimcha kiritish (kod, izoh) | Dialog: Enter yuboradi, Esc yopadi, fokus birinchi maydonda |
| Ekran darajasidagi doimiy holat (internet yo'q, test pauzada) | Banner, toast emas |

13. **Bitta vaqtda bitta dialog.** Dialog ustiga dialog ochilmaydi. *Nega:* foydalanuvchi qaysi biri nima uchun ochilganini yo'qotadi.

### F. Adaptivlik va accessibility

14. **Qo'llab-quvvatlanadigan ekranlar [D03](D03-loyiha-boshlangich-hujjati.md) da yoziladi** (masalan, faqat desktop yoki desktop + telefon). Maket har biri uchun chiziladi. Boshlang'ich breakpoint'lar sifatida UI kutubxonasi va Tailwind'dagi qiymatlar olinadi. *Nega:* "telefonda ham ochilsin" degan talab oxirida kelsa, ekranlar qayta quriladi.
15. **Accessibility bo'yicha minimal talablar:**
    - matn kontrasti kamida 4.5:1 (katta matn uchun 3:1);
    - hamma amal klaviatura bilan bajariladi va fokus ko'rinadi;
    - har maydonning label'i va har ikonka-tugmaning matnli nomi (`aria-label`) bor;
    - rang yagona belgi emas (xato faqat qizil rang bilan emas, matn bilan ham ko'rsatiladi).

    *Nega:* bu davlat va ta'lim tizimlarida ayniqsa muhim, chunki foydalanuvchilar orasida ko'rishi past va klaviatura bilan ishlaydiganlar bor.

### G. Matn va terminologiya

16. **Bitta tushuncha uchun bitta so'z ishlatiladi.** Loyiha boshida terminologiya lug'ati (6.3) tuziladi va [D03](D03-loyiha-boshlangich-hujjati.md), maketlar, tarjima kalitlari va qo'llanma ([D15](D15-qollanma-va-oqitish.md)) shu lug'atdan foydalanadi. *Nega:* bir ekranda "nomzod", boshqasida "ishtirokchi" deb yozilsa, foydalanuvchi ularni har xil odam deb o'ylaydi.
17. **Tugma matni fe'l bo'ladi va amalni nomlaydi:** "Saqlash", "Testni boshlash"; keyin nima bo'lishi aniq bo'lmasa, "OK" yoki "Davom" yozilmaydi.
18. **Barcha matnlar tarjima kalitlari orqali chiqariladi:** kodda qattiq matn bo'lmaydi; har bir kalitning har bir qo'llab-quvvatlanadigan tilda qiymati bor. *Nega:* yangi til qo'shish yoki matnni tuzatish kod o'zgarishini talab qilmaydi; tarjimasi yo'q kalit UI'da xom chiqmaydi.

**Kichik loyihada.** Kompaniyaning mavjud design system'i va tokenlari olinadi; loyihaga xos qism faqat terminologiya lug'ati va yangi komponent kartochkalaridan iborat. A–C va G bo'limlari majburiy.

## 5. Tekshirish

### 5.1. Maket tekshiruvi (3-darvozada, dizayner + frontend)

- [ ] Hamma komponent design system ro'yxatidan olingan; yangilari kartochka bilan kelishilgan
- [ ] Har bir ekranning holatlari chizilgan (4-bo'lim, B)
- [ ] Ranglar va shriftlar Figma o'zgaruvchilaridan olingan, qattiq qiymat yo'q
- [ ] Matnlar lug'atga mos; tugmalarda fe'l yozilgan
- [ ] Kontrast tekshirilgan (Figma plugin yoki onlayn kalkulyator)
- [ ] Qo'llab-quvvatlanadigan har ekran o'lchami uchun maket bor

### 5.2. Ekran tekshiruvi (Testing ustunida, tekshiruvchi)

- [ ] Ekran maketga mos (oraliqlar, ranglar, matn)
- [ ] Yuklanmoqda, bo'sh va xato holatlari haqiqatan ko'rinadi (DevTools'da tarmoqni sekinlashtirib yoki bloklab tekshiriladi)
- [ ] Formada label'lar, majburiy belgisi va validatsiya matni bor, ikki marta yuborib bo'lmaydi
- [ ] Asosiy amalni faqat klaviatura bilan bajarish mumkin
- [ ] Har bir tilda tarjima kaliti xom chiqmaydi, uzun matn joyidan chiqib ketmaydi
- [ ] Qo'llab-quvvatlanadigan eng kichik ekranda buzilmaydi

## 6. Shablonlar

### 6.1. Komponent kartochkasi

```markdown
## <Komponent nomi>
Qachon ishlatiladi: …   Qachon ishlatilmaydi (o'rniga nima): …
Kutubxona komponenti: <masalan, PrimeNG Table> / o'z komponenti (nega)
Variantlar: …   Holatlar: oddiy, hover, fokus, o'chiq, yuklanmoqda, xato
Matn qoidalari: …
Accessibility: klaviatura, aria-label
Figma: <havola>   Kod: <fayl yo'li>
```

### 6.2. Tokenlar ro'yxati

```markdown
| Token | Qiymat | Qayerda ishlatiladi |
| --- | --- | --- |
| primary-500 | #… | Asosiy tugma, havola |
| radius-md | …px | Input, karta |
| font-size-base | …px | Asosiy matn |
| spacing-4 | …px | Forma maydonlari orasi |
```

### 6.3. Terminologiya lug'ati

```markdown
| Atama | Ma'nosi | Ishlatilmaydi | Tarjimalar (ru, …) |
| --- | --- | --- | --- |
```

## 7. Misol

Shu doc bo'yicha to'ldirilgan variantni misol loyihada ko'ring: [Test Platformasi · UI: ekranlar va komponentlar](loyihalar/test-platformasi/D12-ui-ekranlar.md).

## 8. Checklist: loyiha UI standartga mosmi

Dizayner va frontend har release oldidan tekshiradi:

- [ ] Design system ro'yxati (komponent kartochkalari) dolzarb; Figma va kod bir-biriga mos
- [ ] Kodda qattiq rang va o'lcham qiymatlari yo'q (qidiruv bilan tekshiriladi: `#[0-9a-f]{6}` faqat tema fayllarida uchraydi)
- [ ] Release'dagi har ekran 5.2-checklistdan o'tgan
- [ ] Terminologiya lug'ati bor, yangi matnlar unga mos
- [ ] Qo'llab-quvvatlanadigan har bir tilda tarjimasiz kalit yo'q
- [ ] Nusxalangan UI komponentlari yo'q (yoki ular texnik qarz sifatida Jira'ga yozilgan)

**Tayyor mezoni.** Dizayner va frontend bitta komponent ro'yxatidan foydalanadi. Tekshiruv: release'dagi tasodifiy 3 ta ekranning har bir komponenti ro'yxatda bor, ranglari esa tokenlardan olingan. Buni dizayner tekshiradi.

## 9. Tez-tez uchraydigan xatolar

1. **Faqat "chiroyli" holat chiziladi.** Bo'sh, xato va yuklanish holatlari "dasturchi o'zi qiladi" deb qoldiriladi. To'g'risi: holatlarsiz maket handoff'dan o'tmaydi (B bo'limi, [D04](D04-dizayn-brief-va-jarayon.md)).
2. **Har ekranda yangi tugma.** Dizayner har gal yangi ko'rinish chizadi, frontend esa uni noldan quradi. To'g'risi: komponent ro'yxati va kartochkadan foydalanish (3-qoida).
3. **Hamma narsa toast bilan ko'rsatiladi.** Maydon xatosi ham, doimiy holat ham toast'da chiqadi va foydalanuvchi uni o'qib ulgurmaydi. To'g'risi: 12-qoidadagi jadvalga amal qilish.
4. **"OK" va "Ha/Yo'q" tugmalari.** Foydalanuvchi nimani tasdiqlayotganini o'qimaydi. To'g'risi: tugmaga amal nomini yozish (17-qoida).
5. **Bitta tushuncha uchun uch xil so'z.** "Nomzod", "ishtirokchi" va "foydalanuvchi" bitta odam haqida ishlatiladi. To'g'risi: lug'atga amal qilish (16-qoida).

## 10. O'rganish uchun manbalar

- **Nielsen Norman Group — "10 Usability Heuristics for User Interface Design"**: 3-bo'limdagi tamoyillarning asosi.
- **Material Design** (m3.material.io): komponentlar va holatlar bo'yicha batafsil qoidalar.
- **Apple Human Interface Guidelines**: mobil interfeys va accessibility.
- **WCAG 2.2** (w3.org/WAI): accessibility talablari, kontrast mezonlari.
- **PrimeNG hujjatlari** (primeng.org): komponentlar, mavzu (theme) va tokenlar.

---

Egasi: UI/UX dizayner · Oxirgi yangilangan: 2026-11-07 · Keyingi ko'rib chiqish: pilot loyiha retrosidan keyin ([D17](D17-retro-va-standartni-yangilash.md))
