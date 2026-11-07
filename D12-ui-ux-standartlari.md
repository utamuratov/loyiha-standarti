# D12 — UI/UX standartlari va design system

## 1. Maqsad

Kompaniyaning barcha loyihalarida interfeys bir xil, tushunarli va qulay bo'lsin: foydalanuvchi bir ekranni o'rgansa, keyingisini taxmin qila olsin. Dizayner va frontend esa bitta komponent ro'yxati va bitta rang/shrift to'plamidan foydalansin — "maketda bunday, kodda boshqacha" bo'lmasin.

## 2. Kim uchun va qachon

- **Egasi:** UI/UX dizayner (design system'ning ham egasi).
- **Kim nima qiladi:**

| Rol | Vazifasi |
| --- | --- |
| Dizayner | Maketlarni shu standart va komponent ro'yxati asosida chizadi; yangi komponent kerak bo'lsa, frontend bilan kelishadi |
| Frontend dasturchi | Komponentlarni ro'yxatdagi kutubxona komponentlari va tokenlar bilan quradi; maketdan chetga chiqmaydi, chiqish kerak bo'lsa dizaynerga aytadi |
| Analitik | Ekranlarning holatlari va xato holatlari [D03](D03-loyiha-boshlangich-hujjati.md) story'larida bo'lishini ta'minlaydi; matnlar terminologiya lug'atiga mos |
| Tekshiruvchi (QA) | Testing'da 5.2-checklist bo'yicha ko'radi |

- **Qachon:**
  - 3-bosqichda (Dizayn) maketlar shu standart bo'yicha chiziladi va 3-darvozada tekshiriladi.
  - 5-bosqichda (Ishlab chiqish) code review va Testing'da tekshiriladi.
  - Design system loyihalar orasida yashaydi va har loyihada boyib boradi.

**Atamalar.**
- *Design system* — komponentlar, tokenlar va qoidalar to'plami. U Figma kutubxonasida ham, kodda ham bir xil turadi.
- *Token* — nomlangan dizayn qiymati: rang, shrift o'lchami, oraliq (spacing), burchak radiusi.
- *Holat* (state) — ekran yoki komponentning ko'rinishi: bo'sh, yuklanmoqda, xato, ruxsat yo'q, to'ldirilgan.
- *Accessibility* (a11y) — interfeysdan imkoniyati cheklangan odamlar ham foydalana olishi: kontrast, klaviatura, ekran o'quvchi.
- *Adaptivlik* (responsive) — interfeysning turli ekran o'lchamlariga moslashishi.

Dizayn jarayonining o'zi (brief, wireframe, review, handoff) — D04. Bu doc esa "nima bilan va qanday ko'rinishda" chiziladi va quriladi degan savolga javob beradi.

## 3. Asosiy tamoyillar

1. **Izchillik.** Bir xil vazifa hamma joyda bir xil komponent, joy va so'z bilan bajariladi. Masalan, "Saqlash" har doim forma pastida o'ngda turadi.
2. **Holat doim ko'rinadi.** Foydalanuvchi tizim nima qilayotganini biladi: yuklanmoqda, saqlandi, xato, internet yo'q.
3. **Xato xabari aniq va yordam beradi.** Nima bo'ldi va endi nima qilish kerak. "Xatolik yuz berdi" emas, "JShShIR 14 ta raqamdan iborat bo'lishi kerak".
4. **Xatoning oldini olish.** Noto'g'ri harakatni iloji boricha qildirmaslik: shart bajarilmaguncha tugma o'chiq, maydonda format cheklovi, xavfli amaldan oldin tasdiq.
5. **Qaytarib bo'lmaydigan amal — tasdiq bilan.** O'chirish, yakunlash, yuborish oldidan oqibati yoziladi ("Testni yakunlasangiz, javoblarni o'zgartirib bo'lmaydi").
6. **Qaytarish imkoni.** Iloji bo'lsa, tasdiq o'rniga "bekor qilish" beriladi (masalan, o'chirilgandan keyin 5 soniya "Qaytarish").
7. **Eslab qolish emas, ko'rib tanish.** Variantlar ro'yxatdan tanlanadi, kerakli ma'lumot ekranda ko'rinadi.
8. **Ortiqcha yo'q.** Har ekranda bitta asosiy amal; ikkinchi darajali amallar ko'rinishi kamroq.

Manba: Nielsen'ning 10 ta foydalanuvchanlik evristikasi; batafsil — 7-bo'lim.

## 4. Qoidalar

### A. Design system va tokenlar

1. **Bitta komponent kutubxonasi va uning Figma'dagi aksi.** Har loyiha kompaniyaning tanlangan UI kutubxonasidan foydalanadi (frontend loyihalarda — PrimeNG). Figma kutubxonasida xuddi shu komponentlar bor. Kutubxonada bor narsa uchun o'z komponenti yozilmaydi. *Nega:* o'z komponentida holatlar, klaviatura va accessibility qaytadan yoziladi — va odatda chala.
2. **Ranglar, shriftlar, oraliqlar va radiuslar — faqat tokenlardan.** Kodda `#276BAF` yoki `13px` kabi qattiq qiymat yozilmaydi, tokenga murojaat qilinadi. Tokenlar bitta joyda: kodda — kutubxona mavzusi (theme preset), Figma'da — o'zgaruvchilar (variables). *Nega:* brend rangi o'zgarsa, bitta joyda o'zgaradi; maket va kod ajralib ketmaydi.
3. **Yangi komponent faqat kelishuv bilan qo'shiladi.** Dizayner va frontend birga komponent kartochkasini (6.1) to'ldiradi, u design system ro'yxatiga qo'shiladi. Faqat bitta ekran uchun "maxsus" ko'rinish chizilmaydi. *Nega:* har loyihada 5 xil tugma paydo bo'lmaydi.
4. **Takroriy UI bitta umumiy komponent bo'ladi.** Ikki joyda bir xil ishlaydigan qism nusxalanmaydi — umumiy komponentga chiqariladi. *Nega:* nusxadagi tuzatish ikkinchi nusxada unutiladi.

### B. Ekran holatlari

5. **Har ekran va har ma'lumot bloki uchun holatlar chiziladi va quriladi:**

| Holat | Qanday ko'rsatiladi |
| --- | --- |
| Yuklanmoqda | Kontent shaklidagi skeleton; 300 ms dan qisqa yuklanishda hech narsa ko'rsatilmaydi |
| Bo'sh | Nega bo'shligi va keyingi qadam ("Hali test yo'q. Test qo'shish") |
| Xato | Nima bo'ldi va "Qayta urinish" tugmasi |
| Ruxsat yo'q | Nega ruxsat yo'qligi va kimga murojaat qilish |
| Internet yo'q | Doimiy banner; ulanish qaytganda avtomatik davom etish |

*Nega:* chizilmagan holatni har dasturchi o'zicha quradi yoki umuman qurmaydi; foydalanuvchi oq ekran ko'radi (D04 da ham tayyor mezoni).

### C. Formalar

6. **Har maydonning ko'rinadigan label'i bor.** Placeholder label o'rnini bosmaydi. Majburiy maydonlar `*` bilan belgilanadi; agar ko'pchilik maydon majburiy bo'lsa, ixtiyoriylari "(ixtiyoriy)" deb yoziladi.
7. **Validatsiya:**
   - maydondan chiqqanda yoki yuborishda tekshiriladi, har harf terilganda emas;
   - xato maydon ostida, qizil rangda, aniq matn bilan chiqadi;
   - yuborishda birinchi xatoli maydonga fokus o'tadi;
   - format cheklovi (faqat raqam, uzunlik) kiritishning o'zida qo'yiladi.
8. **Yuborish tugmasi:**
   - forma pastida turadi;
   - bosilgandan keyin javob kelguncha "yuklanmoqda" holatida va o'chiq bo'ladi (ikki marta yuborilmasligi uchun);
   - shart bajarilmagan bo'lsa (masalan, rozilik), o'chiq turadi va nega o'chiqligi yonida yozilgan.
9. **Saqlanmagan o'zgarish yo'qolmaydi.** Forma o'zgargan bo'lsa, sahifadan chiqishda ogohlantirish chiqadi.

### D. Jadvallar va ro'yxatlar

10. **Ma'lumot jadvali standart imkoniyatlar bilan.** Har birini qo'shish yoki qo'shmaslik [D03](D03-loyiha-boshlangich-hujjati.md) da story darajasida qaror qilinadi, lekin qo'shilsa — shu ko'rinishda:

| Imkoniyat | Standart |
| --- | --- |
| Qidiruv | Jadval ustida chapda; yozish to'xtagach 300–500 ms dan keyin qidiradi; "Tozalash" tugmasi |
| Filtr | Qidiruv yonida; qo'llangan filtrlar soni tugmada ko'rinadi; "Filtrlarni tozalash" |
| Saralash | Ustun sarlavhasini bosish; joriy saralash belgisi ko'rinadi |
| Pagination | Jadval ostida: sahifadagi qatorlar soni (10/20/50), jami yozuvlar soni. Filtr, saralash va sahifa URL'da saqlanadi — havola ulashsa, xuddi shu ko'rinish ochiladi |
| Ustunlarni sozlash | Ko'p ustunli jadvalda: yashirish/ko'rsatish; tanlov foydalanuvchida saqlanadi |
| Eksport | Jadval ustida o'ngda; joriy filtr bo'yicha eksport qilinadi; nima eksport bo'lishi yozilgan |
| Ommaviy amallar | Qator boshida checkbox; tanlanganda jadval ustida "N ta tanlandi" va amallar paneli |
| Qator amallari | Qator oxirida; 2 tadan ko'p bo'lsa — "…" menyusi |
| Holatlar | B bo'limidagi kabi; filtr natijasi bo'sh bo'lsa — "Hech narsa topilmadi" va "Filtrlarni tozalash" |

11. **Karta ko'rinishidagi ro'yxat** (vitrina, katalog) "Ko'proq ko'rsatish" yoki cheksiz aylantirish bilan quriladi. Qaysi biri tanlanishi loyiha boshida bir marta qaror qilinadi va hamma joyda bir xil bo'ladi.

### E. Dialoglar va bildirishnomalar

12. **Qachon nima ishlatiladi:**

| Holat | Komponent |
| --- | --- |
| Amal natijasi (saqlandi, yuborildi) | Toast — 3–5 soniya, o'ng yuqorida |
| Backend yoki tarmoq xatosi | Toast (qizil) — o'zi yo'qolmaydi yoki uzunroq turadi; matni aniq |
| Maydon xatosi | Maydon ostida matn, toast emas |
| Xavfli amalni tasdiqlash | Tasdiq dialogi: sarlavha — savol, matn — oqibati, tugmalar — amal nomi bilan ("Yakunlash", "Bekor qilish"), "Ha/Yo'q" emas |
| Qisqa qo'shimcha kiritish (kod, izoh) | Dialog: Enter yuboradi, Esc yopadi, fokus birinchi maydonda |
| Ekran darajasidagi doimiy holat (internet yo'q, test pauzada) | Banner, toast emas |

13. **Bitta vaqtda bitta dialog.** Dialog ustiga dialog ochilmaydi. *Nega:* foydalanuvchi qaysi biri nima uchun ochilganini yo'qotadi.

### F. Adaptivlik va accessibility

14. **Qo'llab-quvvatlanadigan ekranlar [D03](D03-loyiha-boshlangich-hujjati.md) da yoziladi** (masalan, faqat desktop yoki desktop + telefon). Maket har biri uchun chiziladi. Boshlang'ich breakpoint'lar — UI kutubxonasi va Tailwind'niki. *Nega:* "telefonda ham ochilsin" degan talab oxirida kelsa, ekranlar qayta quriladi.
15. **Accessibility minimumi:**
    - matn kontrasti kamida 4.5:1 (katta matn uchun 3:1);
    - hamma amal klaviatura bilan bajariladi va fokus ko'rinadi;
    - har maydonning label'i va har ikonka-tugmaning matnli nomi (`aria-label`) bor;
    - rang yagona belgi emas (xato faqat qizil rang bilan emas, matn bilan ham ko'rsatiladi).

    *Nega:* bu davlat va ta'lim tizimlarida ayniqsa muhim — foydalanuvchilar orasida ko'rishi past va klaviatura bilan ishlaydiganlar bor.

### G. Matn va terminologiya

16. **Bitta tushuncha — bitta so'z.** Loyiha boshida terminologiya lug'ati (6.3) tuziladi va [D03](D03-loyiha-boshlangich-hujjati.md), maketlar, tarjima kalitlari va qo'llanma (D15) shu lug'atdan foydalanadi. *Nega:* bir ekranda "nomzod", boshqasida "ishtirokchi" — foydalanuvchi ular har xil odam deb o'ylaydi.
17. **Tugma matni — fe'l, amalning nomi:** "Saqlash", "Testni boshlash"; "OK" yoki "Davom" emas (keyin nima bo'lishi aniq bo'lmasa).
18. **Barcha matnlar tarjima kalitlari orqali** — kodda qattiq matn yo'q; har kalitning har bir qo'llab-quvvatlanadigan tilda qiymati bor. *Nega:* yangi til qo'shish yoki matnni tuzatish kod o'zgarishini talab qilmaydi; tarjimasi yo'q kalit UI'da xom chiqmaydi.

**Kichik loyihada.** Kompaniyaning mavjud design system'i va tokenlari olinadi; loyihaga xos qism — terminologiya lug'ati va yangi komponent kartochkalari. A–C va G bo'limlari majburiy.

## 5. Tekshirish

### 5.1. Maket tekshiruvi (3-darvozada, dizayner + frontend)

- [ ] Hamma komponent design system ro'yxatidan; yangilari kartochka bilan kelishilgan
- [ ] Har ekranning holatlari chizilgan (4-qoida B)
- [ ] Ranglar va shriftlar Figma o'zgaruvchilaridan, qattiq qiymat yo'q
- [ ] Matnlar lug'atga mos; tugmalar — fe'l
- [ ] Kontrast tekshirilgan (Figma plugin yoki onlayn kalkulyator)
- [ ] Qo'llab-quvvatlanadigan har ekran o'lchami uchun maket bor

### 5.2. Ekran tekshiruvi (Testing ustunida, tekshiruvchi)

- [ ] Maketga mos (oraliqlar, ranglar, matn)
- [ ] Yuklanmoqda, bo'sh, xato holatlari haqiqatan ko'rinadi (DevTools'da tarmoqni sekinlashtirib/bloklab)
- [ ] Forma: label'lar, majburiy belgisi, validatsiya matni, ikki marta yuborish yo'q
- [ ] Faqat klaviatura bilan asosiy amalni bajarish mumkin
- [ ] Har til uchun: tarjima kaliti xom chiqmaydi, uzun matn joyidan chiqib ketmaydi
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

## 7. Test Platformasi misoli

Ssenariy: Test Platformasini noldan quryapmiz. Frontend faktlari real repozitoriydan (`test-uzedu-user`). Admin panel bu repoda yo'q, shuning uchun jadval standarti (D bo'limi) bu yerda to'liq ko'rsatilmaydi.

### 7.1. Design system va tokenlar (real)

- **Kutubxona:** PrimeNG 21, `Nora` mavzusi asosida o'z preset'i; yordamchi stillar — Tailwind v4; ikonkalar — PrimeIcons (`package.json`, `src/app/core/utils/mytheme.ts`).
- **Tokenlar preset'da:** brend palitrasi `brand-50` … `brand-950`, asosiy rang `brand-500 = #276BAF`; radiuslar `xs 4px` … `xl 20px`; tugma label'i `fontWeight: 500` (`mytheme.ts`). Bu 2-qoidaga mos: tokenlar bitta joyda.
- **Kontrast:** `#276BAF` oq fonda taxminan 5.5:1 — oddiy matn uchun AA talabiga (4.5:1) mos.
- **Ishlatilayotgan komponentlar** (`src/app` dagi importlardan): Button, InputText, Password, Select, SelectButton, Checkbox, RadioButton, InputOtp, Table, Dialog, DynamicDialog, ConfirmDialog, Toast, Skeleton, Listbox, Drawer, BlockUI, Menu, Galleria, SpeedDial. Design system ro'yxati shu bilan boshlanadi: har biriga komponent kartochkasi (6.1).
- **Umumiy yechimlar:** backend xatolari bitta joyda — `errorInterceptor` orqali toast bilan ko'rsatiladi; yuklanish tugmasi — `LoadingButton` direktivasi; internet yo'qligi — `Offline` va `OnlineBack` komponentlari (`docs/architecture.md`). Bu 8- va 12-qoidalarning kodda bir marta yozilgan ko'rinishi.

### 7.2. Ariza formasi (E-03) — standart bo'yicha

Real xulq-atvor `docs/test-entry-flow.md` va `cypress/e2e/application-details.cy.ts` dan:

| Standart qoidasi | Real ekranda | Izoh |
| --- | --- | --- |
| Shart bajarilmaguncha tugma o'chiq (8) | Rozilik belgilanmaguncha «Kirish» o'chiq | Standart bo'yicha qo'shiladi: tugma yonida nega o'chiqligi ("Davom etish uchun roziligingiz kerak") |
| Yuborishda yuklanish holati (8) | «Kirish» desktop agentni tekshirayotganda `loading` holatida | Mos |
| Qisqa kiritish dialogi (12) | Maxfiy kod dialogi: to'g'ri/noto'g'ri kod, Enter, bekor qilish | Mos |
| Backend xatosi — toast (12) | Agent xato qaytarsa — toast, oqim to'xtaydi | Matn aniq bo'lishi: nima qilish kerak (3-tamoyil) |
| Rozilik matni — ko'rib tanish (7) | Havola dialog ochadi: qaysi ma'lumot va qaysi maqsadda ishlatiladi | Mos |

### 7.3. Test yechish ekrani (E-04) — holatlar

| Holat | Real ekranda | Manba |
| --- | --- | --- |
| Savol yuklanmoqda | Skeleton; variantlar yuklanguncha tanlash o'chiq; taymer pauzada | `docs/test-timer-and-question-loader.md`, `docs/e2e-testing.md` 8-bo'lim |
| Savol yuklanmadi | 3 urinishdan keyin «Qayta urinish» | `docs/e2e-testing.md` 7-bo'lim |
| Internet yo'q | `Offline` komponenti, taymer pauzada, ulanish qaytganda kontent o'zi yuklanadi | `docs/architecture.md`, `docs/e2e-testing.md` 7-bo'lim |
| Yakunlash | Tasdiq dialogi: yechilgan savollar foizi va qolgan vaqt | `docs/testing.md` 4-bo'lim |
| Qoidabuzarlik | Ogohlantirish dialogi (tabdan chiqish) | `cypress/e2e/exam-session.cy.ts` |

Standart bo'yicha tekshiriladigan narsa: "taymer pauzada" holati foydalanuvchiga ko'rinadimi (2-tamoyil)? Aks holda nomzod vaqt to'xtaganini bilmay xavotirlanadi. [TO'LDIRILSIN: Figma'dagi maketda pauza holati bormi]

### 7.4. Real repoda standart bo'yicha nima qo'shilardi

| Qoida | Real holat | Nima qilinadi |
| --- | --- | --- |
| Takroriy UI — bitta komponent (4) | Savol turlari komponentlari ommaviy portalda nusxalangan; ular asosiy test oynasi bilan bir xil, faqat `styleUrl` yo'li farq qiladi (`docs/e2e-testing.md`, 9-bo'lim; `features/public-test/solve-test/question-by-type/`) | Umumiy `shared` komponentlarga chiqarish |
| Tarjima kalitlari to'liq (18) | Ommaviy portalda prod tarjimalarida 5 ta kalit yo'q va UI'da kalitning o'zi chiqadi (`docs/e2e-testing.md`, 9-bo'lim "Ochiq masalalar") | Release checklistiga "yangi tarjima kalitlari prod'da bor" punkti ([D14](D14-release-va-deploy.md)) |
| Doimiy holat — banner (12) | Filtr qo'llangach yon paneldagi filtr tanlovni ko'rsatmaydi (o'sha manba) | Filtr holati bitta joyda saqlanadi, D bo'limidagi "qo'llangan filtrlar soni" |
| Qamrov qarori | Dark mode preset'da selektor bilan e'lon qilingan, lekin amalga oshirilmagan (`src/tailwind.css` dagi TODO) | [D03](D03-loyiha-boshlangich-hujjati.md) da qaror: kerakmi? Kerak bo'lmasa — "kirmaydi" ro'yxatiga, preset'dagi qoldiqni olib tashlash |

### 7.5. Terminologiya lug'ati (parcha)

Real repo hujjatlarida bir tushuncha uchun bir nechta so'z uchraydi — lug'at aynan shu uchun kerak.

| Atama | Ma'nosi | Ishlatilmaydi | Manba (aralash ishlatilgan joy) |
| --- | --- | --- | --- |
| Ishtirokchi | Test topshirayotgan odam | nomzod, participant | `README.md` — "nomzodlar", `docs/test-entry-flow.md` — "ishtirokchi" |
| Nazoratchi | Test o'tkaziladigan joyda tizimga kiruvchi xodim | supervisor, proktor | `docs/test-entry-flow.md` |
| JShShIR | Shaxsiy identifikatsiya raqami | PINFL (UI'da) | marshrut nomi `/auth/pinfl` — kodda qolishi mumkin, UI'da bitta atama |
| E'tiroz | Ishtirokchining savol bo'yicha shikoyati | shikoyat | `docs/testing.md` — "Shikoyat / E'tiroz" |
| Chetlatish | Ishtirokchini testdan chiqarish | diskvalifikatsiya | `docs/testing.md` — "diskvalifikatsiya", e2e — "chetlatish" |

Tanlangan atamalar — namuna; yakuniy tanlov mijoz va analitik bilan qilinadi. [TO'LDIRILSIN: UI'da hozir qaysi atamalar ko'rinadi]

### Og'riqqa bog'liqlik

"Bitta narsa qayta-qayta qilinadi" — chizilmagan holatlar (B bo'limi) va nusxalangan komponentlar (4-qoida) bir xil ishni ikki marta qildiradi: avval qurish, keyin "xato holati yo'q ekan" deb qaytib kelish yoki ikkinchi nusxani alohida tuzatish.

## 8. Checklist: loyiha UI standartga mosmi

Dizayner va frontend har release oldidan tekshiradi:

- [ ] Design system ro'yxati (komponent kartochkalari) dolzarb; Figma va kod bir xil
- [ ] Kodda qattiq rang va o'lcham qiymatlari yo'q (qidiruv bilan tekshirish: `#[0-9a-f]{6}` faqat tema fayllarida)
- [ ] Release'dagi har ekran 5.2-checklistdan o'tgan
- [ ] Terminologiya lug'ati bor, yangi matnlar unga mos
- [ ] Har qo'llab-quvvatlanadigan tilda tarjimasi yo'q kalit yo'q
- [ ] Nusxalangan UI komponentlari yo'q (yoki texnik qarz sifatida Jira'da)

**Tayyor mezoni.** Dizayner va frontend bitta komponent ro'yxatidan foydalanadi. Tekshiruv: release'dagi tasodifiy 3 ta ekranning har bir komponenti ro'yxatda bor, ranglari esa tokenlardan. Tekshiradi — dizayner.

## 9. Tez-tez uchraydigan xatolar

1. **Faqat "chiroyli" holat chiziladi.** Bo'sh, xato va yuklanish holatlari "dasturchi o'zi qiladi" deb qoldiriladi. To'g'risi: holatlarsiz maket handoff'dan o'tmaydi (B bo'limi, D04).
2. **Har ekranda yangi tugma.** Dizayner har gal yangi ko'rinish chizadi, frontend uni noldan quradi. To'g'risi: komponent ro'yxati va kartochka (3-qoida).
3. **Toast bilan hamma narsa.** Maydon xatosi ham, doimiy holat ham toast'da — foydalanuvchi o'qib ulgurmaydi. To'g'risi: 12-qoidadagi jadval.
4. **"OK" va "Ha/Yo'q" tugmalari.** Foydalanuvchi nimani tasdiqlayotganini o'qimaydi. To'g'risi: tugmada amal nomi (17-qoida).
5. **Bir tushuncha — uch so'z.** "Nomzod", "ishtirokchi", "foydalanuvchi" bitta odam haqida. To'g'risi: lug'at (16-qoida).

## 10. O'rganish uchun manbalar

- **Nielsen Norman Group — "10 Usability Heuristics for User Interface Design"**: 3-bo'limdagi tamoyillarning asosi.
- **Material Design** (m3.material.io): komponentlar va holatlar bo'yicha batafsil qoidalar.
- **Apple Human Interface Guidelines**: mobil interfeys va accessibility.
- **WCAG 2.2** (w3.org/WAI): accessibility talablari, kontrast mezonlari.
- **PrimeNG hujjatlari** (primeng.org): komponentlar, mavzu (theme) va tokenlar.

---

Egasi: UI/UX dizayner · Oxirgi yangilangan: 2026-11-07 · Keyingi ko'rib chiqish: pilot loyiha retrosidan keyin (D17)
