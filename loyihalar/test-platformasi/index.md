# Test Platformasi — misol loyiha

Bu papka standart bo'yicha bitta loyihaning hujjatlar to'plami qanday ko'rinishini ko'rsatadi. Standartdagi har bir doc qoida va bo'sh shablonni beradi, bu yerda esa shu shablonlarning bitta real loyiha uchun to'ldirilgan varianti turadi.

**Ssenariy: Test Platformasini bugun noldan qurayapmiz.** Natija hozirgi Test Platformasi darajasida bo'lishi kerak. Savol — unga qaysi bosqichlar, hujjatlar va qoidalar orqali, kamroq rework bilan yetiladi. Test Platformasining o'tmishda qanday qurilgani tahlil qilinmaydi: u jarayon namunasi emas (kamchiliklari ko'p), lekin release qilingan va har kuni ishlatilayotgan real mahsulot.

**Yangi loyiha uchun.** Shu papka tuzilmasini nusxalang: `loyihalar/<loyiha-nomi>/`, ichida `index.md` (loyiha kartasi) va har doc uchun bitta fayl. Yozilmagan doc fayli yaratilmaydi — jadvalda "rejada" bo'lib turadi.

## Loyiha kartasi

- **Mahsulot.** Maktabgacha va maktab ta'limi vazirligi tizimida nomzodlar va o'qituvchilar test topshiradigan tizim. Oqim: nazoratchi login → JShShIR → ariza → Face ID → test → natija; alohida ommaviy test portali; proktoring (veb-kamera orqali yuzni tanish, brauzerdan chalg'ishni aniqlash, desktop agent). Manba: frontend repodagi `README.md`, `CLAUDE.md`.
- **Mijozlar.** Bitta mahsulot bir nechta mijozga alohida build bilan yetkaziladi: argos, uzinfocom, olymp, control, ssv.
- **Holati.** Release qilingan, ekspluatatsiyada — foydalanuvchilar har kuni ishlatadi.
- **Jamoa (ssenariy uchun).** 5 kishi: PM va analitik bitta odam, dizayner, 2 ta backend, 1 ta frontend. Alohida tech lead, QA, DevOps va support yo'q — bu rollarning ishi jamoa ichida taqsimlanadi ([D01](../../D01-rollar-va-raci.md)).
- **Hajmi.** Kichik loyiha (3–5 kishi), shuning uchun root docdagi "Loyiha hajmiga qarab moslashtirish" jadvalidagi qisqa shakl ishlatiladi; to'liq shakl kerak bo'lgan joyda bu alohida aytiladi.
- **Vositalar.** Jira (board), Figma (dizayn), GitLab (kod va CI, `git.uzinfocom.uz`), Telegram (tezkor aloqa — lekin kelishuv u yerda qolmaydi).
- **Mavjud hujjatlar.** Belgilangan jarayon ham, TZ ham yo'q edi. Faqat frontend repozitoriyida `CLAUDE.md` ish qoidalari va `docs/` texnik hujjatlari bor (arxitektura, test oqimi, proktoring, Face ID, tarjimalar, unit va e2e testlar).

## Misollar qayerdan olinadi

- **Frontend** — real repozitoriydan: `test-uzedu-user` (Test Platformasining frontendi; repo nomi o'zgartirilmagan). Standartga mos joylari namuna sifatida, mos kelmaydigan joylari esa "standart bo'yicha nima qo'shilardi" sifatida ko'rsatiladi. Har faktning manbasi (fayl yo'li) yoziladi.
- **Backend** — kodi bu ishda yo'q, backend alohida repozitoriyda. Aniq misollar `[TO'LDIRILSIN: backend]` deb belgilangan va backend dasturchilari to'ldiradi.

**Frontend repo faktlari** (keyingi hujjatlar shularga tayanadi):

- *Stack (`package.json`, `CLAUDE.md`):* Angular 21 (standalone, signals, zoneless), PrimeNG 21, Tailwind v4, Transloco (tarjimalar backend'dan), SignalR, face-api.js.
- *Testlar (`cypress/e2e/`, `docs/unit-testing.md`):* unit — Vitest; e2e — Cypress, backend to'liq mock, 11 ta spec faylda 171 ta test (`docs/e2e-testing.md`, 2-bo'lim). `docs/e2e-testing.md` 9-bo'limida e2e branch hali `main` ga qo'shilmagan deyilgan, lekin `main` tarixida e2e commitlari bor — hujjat eskirgan.
- *CI/CD (`.gitlab-ci.yml`):* `dev` push → staging build → Harbor image → GitOps orqali avtomatik deploy. `main` push → production build → image → prod'ga deploy qo'lda (`when: manual`). CI'da test bosqichi yo'q.
- *Hook'lar (`.husky/pre-push`):* har push'da type-check va unit testlar, `main` push'ida qo'shimcha e2e (~6 daqiqa). Hook lokal, `--no-verify` yoki `SKIP_E2E=1` bilan chetlab o'tiladi — [D08](../../D08-kanban-dor-dod.md) DoD'dagi "qizil test bilan merge yo'q" qoidasi uchun muhim cheklov.
- *Branch tartibi (`.gitlab-ci.yml`, `docs/e2e-testing.md`):* `dev` → staging, `main` → prod; ikkita remote (`origin` va `uzinfocom`). `docs/e2e-testing.md` Jenkins publish'ini ham tilga oladi — [TO'LDIRILSIN: Jenkins hozir ishlatiladimi].

## Hujjatlar

| Standart | Loyiha hujjati | Holat |
| --- | --- | --- |
| [D01](../../D01-rollar-va-raci.md) Rollar va RACI | 5 kishilik jamoa uchun RACI; tech lead, QA, DevOps va support ishlari kimga biriktiriladi | Rejada |
| [D02](../../D02-loyiha-hayot-sikli.md) Hayot sikli | [Loyiha rejasi, qarorlar va risklar](D02-loyiha-rejasi.md) | Yozilgan |
| [D03](../../D03-loyiha-boshlangich-hujjati.md) Boshlang'ich hujjat | [TZ (qisqartirilgan)](D03-tz.md) | Yozilgan |
| [D04](../../D04-dizayn-brief-va-jarayon.md) Dizayn brief | Face ID tekshiruvi va test yechish ekranlari uchun to'ldirilgan brief | Rejada |
| [D05](../../D05-kickoff-va-doc-review.md) Kickoff | Kickoff protokoli | Rejada |
| [D06](../../D06-baholash-va-srok.md) Baholash | Modullarni (login, ariza, Face ID, test yechish, natija) 1–3 kunlik tasklarga bo'lish va uch nuqtali baho | Rejada |
| D07 Resurs | Modullar bo'yicha taqsimot jadvali | Rejada |
| [D08](../../D08-kanban-dor-dod.md) Kanban, DoR, DoD | [Board va tasklar](D08-board-va-tasklar.md) | Yozilgan |
| [D09](../../D09-meetinglar-ritmi.md) Meetinglar | Haftalik sync protokoli | Rejada |
| D10 O'zgarishlar | Ishlab chiqish o'rtasida yangi mijoz (alohida build) qo'shilishi — change request | Rejada |
| [D11](../../D11-dasturchilar-qoidalari.md) Dasturchilar qoidalari | [Repozitoriy, merge request va ADR](D11-repozitoriy-va-review.md) | Yozilgan |
| [D12](../../D12-ui-ux-standartlari.md) UI/UX | [UI: ekranlar va komponentlar](D12-ui-ekranlar.md) | Yozilgan |
| [D13](../../D13-test-strategiyasi.md) Test | [Test rejasi va testlar](D13-test-rejasi.md) | Yozilgan |
| [D14](../../D14-release-va-deploy.md) Release va deploy | [Release va deploy](D14-release-va-deploy.md) | Yozilgan |
| D15 Qo'llanma | Nomzod roli uchun qo'llanma bo'limi (kirishdan natijagacha) | Rejada |
| D16 Support | Namunaviy murojaatlarni toifalash ("test paytida kamera ishlamadi", "natija ko'rinmayapti") | Rejada |
| D17 Retro | Release'dan keyingi retro | Rejada |

## Ochiq joylar

Hujjatlardagi `[TO'LDIRILSIN]` belgilari — kim to'ldirishi bo'yicha:

- **Frontend va infratuzilma:** `Dockerfile.prod` qayerda va boshqa mijozlar qanday deploy qilinadi, monitoring, test sessiyalari jadvali ([Release va deploy](D14-release-va-deploy.md)); Vitest coverage, CI uchun Cypress image ([Test rejasi](D13-test-rejasi.md)); `master` va `olympiad` branchlari, protected branch sozlamasi ([Repozitoriy](D11-repozitoriy-va-review.md)); har mijozga runtime sozlama varianti nega tanlanmadi ([Loyiha rejasi](D02-loyiha-rejasi.md), Q-02); Jenkins (yuqorida).
- **Dizayner:** Figma havolalari, taymer pauza holati maketda bormi, UI'dagi atamalar ([UI](D12-ui-ekranlar.md), [TZ](D03-tz.md), [Board](D08-board-va-tasklar.md)).
- **Backend dasturchilari:** API kontrakti va endpointlar, shaxsiy ma'lumotlar, integration va yuklama testlari, deploy, migratsiya va backup ([TZ](D03-tz.md), [Test rejasi](D13-test-rejasi.md), [Release va deploy](D14-release-va-deploy.md), [Repozitoriy](D11-repozitoriy-va-review.md)).
- **PM / analitik:** biznes maqsad va muvaffaqiyat raqamlari, yuklama va tezlik talablari, qurilmalar ([TZ](D03-tz.md)). Misol uchun majburiy emas; real loyihaning TZ'sida majburiy.

---

Egasi: PM · Oxirgi yangilangan: 2026-11-07 · Keyingi ko'rib chiqish: har yangi loyiha hujjati yozilganda
