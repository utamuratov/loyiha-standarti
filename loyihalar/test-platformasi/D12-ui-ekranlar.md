# D12 · UI: ekranlar va komponentlar

Standart: [D12 — UI/UX standartlari va design system](../../D12-ui-ux-standartlari.md). Misol loyiha: [Test Platformasi](index.md).

Frontend faktlari real repozitoriydan (`test-uzedu-user`). Admin panel bu repoda yo'q, shuning uchun jadval standarti (D bo'limi) bu yerda to'liq ko'rsatilmaydi.

## Design system va tokenlar (real)

- **Kutubxona:** PrimeNG 21, `Nora` mavzusi asosida o'z preset'i; yordamchi stillar — Tailwind v4; ikonkalar — PrimeIcons (`package.json`, `src/app/core/utils/mytheme.ts`).
- **Tokenlar preset'da:** brend palitrasi `brand-50` … `brand-950`, asosiy rang `brand-500 = #276BAF`; radiuslar `xs 4px` … `xl 20px`; tugma label'i `fontWeight: 500` (`mytheme.ts`). Bu 2-qoidaga mos: tokenlar bitta joyda.
- **Kontrast:** `#276BAF` oq fonda taxminan 5.5:1 — oddiy matn uchun AA talabiga (4.5:1) mos.
- **Ishlatilayotgan komponentlar** (`src/app` dagi importlardan): Button, InputText, Password, Select, SelectButton, Checkbox, RadioButton, InputOtp, Table, Dialog, DynamicDialog, ConfirmDialog, Toast, Skeleton, Listbox, Drawer, BlockUI, Menu, Galleria, SpeedDial. Design system ro'yxati shu bilan boshlanadi: har biriga komponent kartochkasi (6.1).
- **Umumiy yechimlar:** backend xatolari bitta joyda — `errorInterceptor` orqali toast bilan ko'rsatiladi; yuklanish tugmasi — `LoadingButton` direktivasi; internet yo'qligi — `Offline` va `OnlineBack` komponentlari (`docs/architecture.md`). Bu 8- va 12-qoidalarning kodda bir marta yozilgan ko'rinishi.

## Ariza formasi (E-03) — standart bo'yicha

Real xulq-atvor `docs/test-entry-flow.md` va `cypress/e2e/application-details.cy.ts` dan:

| Standart qoidasi | Real ekranda | Izoh |
| --- | --- | --- |
| Shart bajarilmaguncha tugma o'chiq (8) | Rozilik belgilanmaguncha «Kirish» o'chiq | Standart bo'yicha qo'shiladi: tugma yonida nega o'chiqligi ("Davom etish uchun roziligingiz kerak") |
| Yuborishda yuklanish holati (8) | «Kirish» desktop agentni tekshirayotganda `loading` holatida | Mos |
| Qisqa kiritish dialogi (12) | Maxfiy kod dialogi: to'g'ri/noto'g'ri kod, Enter, bekor qilish | Mos |
| Backend xatosi — toast (12) | Agent xato qaytarsa — toast, oqim to'xtaydi | Matn aniq bo'lishi: nima qilish kerak (3-tamoyil) |
| Rozilik matni — ko'rib tanish (7) | Havola dialog ochadi: qaysi ma'lumot va qaysi maqsadda ishlatiladi | Mos |

## Test yechish ekrani (E-04) — holatlar

| Holat | Real ekranda | Manba |
| --- | --- | --- |
| Savol yuklanmoqda | Skeleton; variantlar yuklanguncha tanlash o'chiq; taymer pauzada | `docs/test-timer-and-question-loader.md`, `docs/e2e-testing.md` 8-bo'lim |
| Savol yuklanmadi | 3 urinishdan keyin «Qayta urinish» | `docs/e2e-testing.md` 7-bo'lim |
| Internet yo'q | `Offline` komponenti, taymer pauzada, ulanish qaytganda kontent o'zi yuklanadi | `docs/architecture.md`, `docs/e2e-testing.md` 7-bo'lim |
| Yakunlash | Tasdiq dialogi: yechilgan savollar foizi va qolgan vaqt | `docs/testing.md` 4-bo'lim |
| Qoidabuzarlik | Ogohlantirish dialogi (tabdan chiqish) | `cypress/e2e/exam-session.cy.ts` |

Standart bo'yicha tekshiriladigan narsa: "taymer pauzada" holati foydalanuvchiga ko'rinadimi (2-tamoyil)? Aks holda nomzod vaqt to'xtaganini bilmay xavotirlanadi. [TO'LDIRILSIN: Figma'dagi maketda pauza holati bormi]

## Real repoda standart bo'yicha nima qo'shilardi

| Qoida | Real holat | Nima qilinadi |
| --- | --- | --- |
| Takroriy UI — bitta komponent (4) | Savol turlari komponentlari ommaviy portalda nusxalangan; ular asosiy test oynasi bilan bir xil, faqat `styleUrl` yo'li farq qiladi (`docs/e2e-testing.md`, 9-bo'lim; `features/public-test/solve-test/question-by-type/`) | Umumiy `shared` komponentlarga chiqarish |
| Tarjima kalitlari to'liq (18) | Ommaviy portalda prod tarjimalarida 5 ta kalit yo'q va UI'da kalitning o'zi chiqadi (`docs/e2e-testing.md`, 9-bo'lim "Ochiq masalalar") | Release checklistiga "yangi tarjima kalitlari prod'da bor" punkti ([D14](../../D14-release-va-deploy.md)) |
| Doimiy holat — banner (12) | Filtr qo'llangach yon paneldagi filtr tanlovni ko'rsatmaydi (o'sha manba) | Filtr holati bitta joyda saqlanadi, D bo'limidagi "qo'llangan filtrlar soni" |
| Qamrov qarori | Dark mode preset'da selektor bilan e'lon qilingan, lekin amalga oshirilmagan (`src/tailwind.css` dagi TODO) | [TZ](D03-tz.md) da qaror: kerakmi? Kerak bo'lmasa — "kirmaydi" ro'yxatiga, preset'dagi qoldiqni olib tashlash |

## Terminologiya lug'ati (parcha)

Real repo hujjatlarida bir tushuncha uchun bir nechta so'z uchraydi — lug'at aynan shu uchun kerak.

| Atama | Ma'nosi | Ishlatilmaydi | Manba (aralash ishlatilgan joy) |
| --- | --- | --- | --- |
| Ishtirokchi | Test topshirayotgan odam | nomzod, participant | `README.md` — "nomzodlar", `docs/test-entry-flow.md` — "ishtirokchi" |
| Nazoratchi | Test o'tkaziladigan joyda tizimga kiruvchi xodim | supervisor, proktor | `docs/test-entry-flow.md` |
| JShShIR | Shaxsiy identifikatsiya raqami | PINFL (UI'da) | marshrut nomi `/auth/pinfl` — kodda qolishi mumkin, UI'da bitta atama |
| E'tiroz | Ishtirokchining savol bo'yicha shikoyati | shikoyat | `docs/testing.md` — "Shikoyat / E'tiroz" |
| Chetlatish | Ishtirokchini testdan chiqarish | diskvalifikatsiya | `docs/testing.md` — "diskvalifikatsiya", e2e — "chetlatish" |

Tanlangan atamalar — namuna; yakuniy tanlov mijoz va analitik bilan qilinadi. [TO'LDIRILSIN: UI'da hozir qaysi atamalar ko'rinadi]

## Og'riqqa bog'liqlik

"Bitta narsa qayta-qayta qilinadi" — chizilmagan holatlar (B bo'limi) va nusxalangan komponentlar (4-qoida) bir xil ishni ikki marta qildiradi: avval qurish, keyin "xato holati yo'q ekan" deb qaytib kelish yoki ikkinchi nusxani alohida tuzatish.

---

Egasi: UI/UX dizayner · Oxirgi yangilangan: 2026-11-07 · Keyingi ko'rib chiqish: standartdagi D12 o'zgarganda
