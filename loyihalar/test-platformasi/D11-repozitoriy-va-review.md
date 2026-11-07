# D11 · Repozitoriy, merge request va ADR

Standart: [D11 — Dasturchilar qoidalari va code review](../../D11-dasturchilar-qoidalari.md). Misol loyiha: [Test Platformasi](index.md).

Frontend misollari real repozitoriydan (`test-uzedu-user`). Backend: `[TO'LDIRILSIN: backend]` — backend dasturchilari o'z repolari bo'yicha shu bo'limni to'ldiradi.

## Real frontend repo standart bilan solishtirganda

| Qoida | Real repoda | Standart bo'yicha nima qo'shilardi |
| --- | --- | --- |
| Doimiy branchlar: `main`, `dev` | `main` → prod, `dev` → staging (`.gitlab-ci.yml`). Lekin boshqa uzoq yashaydigan branchlar ham bor: `master`, `olympiad`, `feat/camera-check` | Ortiqcha doimiy branchlarni yopish; mijozga xos farqlarni konfiguratsiyaga ko'chirish. [TO'LDIRILSIN: `master` va `olympiad` nima uchun turibdi] |
| Himoyalangan branchlar | [TO'LDIRILSIN: GitLab sozlamasi] | `dev` va `main` ga faqat MR orqali |
| Conventional Commits | Ko'p commitlar formatga mos, masalan `feat(auth): refresh entering test settings on pinfl page` | Formatni commit hook bilan tekshirish (ixtiyoriy) |
| Bitta commit — bitta o'zgarish | Ish qoidasi yozilgan: ilova tuzatishi va test o'zgarishi alohida commitda (`CLAUDE.md`). Masalan, `6dabeb6 feat(auth): …` va `046eb51 test: cover entering settings refresh …`. Lekin eski commitlar orasida ikki xil o'zgarish bitta xabarga yozilgani ham bor (`0ad2dcb fix(camera): … fix(logs): …`) | Qoida yozilgan — endi uni review'da tekshirish |
| MR shabloni | Yo'q (`.gitlab/` papkasi yo'q) | `.gitlab/merge_request_templates/Default.md` (standart, 4.1) |
| Formatter | Prettier, `printWidth: 100`, `singleQuote` (`package.json`) | Pipeline'da `prettier --check` |
| Linter | Yo'q (`package.json` da ESLint yo'q) | `angular-eslint` qo'shish va pipeline'da ishlatish |
| Qat'iy tiplar | `strict`, `strictTemplates` va boshqalar yoqilgan (`tsconfig.json`) | — (mos) |
| Testlar merge'dan oldin | Faqat lokal `pre-push` hook'da (`.husky/pre-push`); GitLab CI'da test bosqichi yo'q | Pipeline'ga type-check, lint, unit testlar; qizil pipeline bilan merge taqiqi ([D13](../../D13-test-strategiyasi.md), [D14](../../D14-release-va-deploy.md)) |
| Maxfiy kalitlar | CI'da o'zgaruvchilar orqali (`$HARBOR_PASSWORD`, `$GITOPS_TOKEN_EDUHR`, `.gitlab-ci.yml`) | — (mos); masked/protected ekanini tekshirish |
| Repo hujjatlari | `README.md`, `CLAUDE.md` ish qoidalari, `docs/` — oqimlar, arxitektura, testlar | — (namuna sifatida) |
| ADR | Alohida ADR yo'q, lekin `docs/test-entry-flow.md` da qaror va "Ko'rib chiqilib, rad etilgan variantlar" jadvali bor — mazmunan ADR | Shunday bo'limlarni `docs/adr/` formatiga keltirish (5.4) |

## To'ldirilgan MR (namunaviy)

```markdown
## Task
UZ-123 · Story: US-04

## Nima o'zgardi va nega
- Taymer pauzasi bitta flag emas, sabablar to'plami: offline, savol yuklanmoqda,
  savol xatosi. Bir vaqtda ikki sabab bo'lsa, biri yo'qolganda taymer
  noto'g'ri davom etmasligi uchun.
- Qolgan vaqt serverga faqat taymer yurganda yuboriladi.

## Qanday tekshirildi
- [x] Unit testlar: har bir sabab alohida va ikkitasi bir vaqtda
- [x] Qo'lda: DevTools'da offline; savol fayli so'rovini bloklash
- [x] Video ilova qilindi

## Reviewer uchun
- E'tibor: `pauseReasons` bo'shaganda taymer qayta ishga tushishi
- Kontrakt o'zgarishi: yo'q
- Yangi sozlama, migratsiya yoki tarjima kaliti: xato holati uchun 1 ta tarjima kaliti
```

Yechim real repodagi `TestTimerService` dan olingan (`docs/test-timer-and-question-loader.md`).

## Review izohlari (namunaviy)

- `[bloklovchi]` `resume('offline')` dan keyin `question-error` sababi qolgan bo'lsa ham taymer yuradimi? Shu holatga test kerak.
- `[taklif]` Sabab nomlarini string emas, `type PauseReason = 'offline' | …` qilsak, xato yozilgan nom kompilyatsiyada ushlanadi.
- `[savol]` 3 marta urinish soni sozlamadan olinadimi yoki kodda qat'iymi? [TZ](D03-tz.md) da yozilmagan.

Uchinchi izoh [TZ](D03-tz.md) dagi bo'shliqni topdi: javob TZ ga qo'shiladi, review'da yo'qolib ketmaydi.

## ADR (real qarordan)

`docs/test-entry-flow.md` dagi qaror ADR formatida:

```markdown
# ADR-0001: Kirish sozlamalari har ishtirokchi oqimi boshida olinadi
Holat: qabul qilingan

## Kontekst
Admin kirish sozlamalarini (EXE, maxfiy kod, Face ID, kirish maydonlari) backend'da
o'zgartiradi. Nazoratchi kun bo'yi bir login bilan ishlaydi.

## Qaror
Sozlamalar login'da va har safar `/auth/pinfl` ochilganda olinadi — bu har bir
ishtirokchi oqimining boshi. Bitta ishtirokchining butun oqimi bir xil sozlama
bilan o'tadi.

## Ko'rib chiqilgan variantlar
| Variant | Nega tanlanmadi |
| --- | --- |
| Faqat login'da olish | O'zgarish qayta login qilinmaguncha (soatlab) ko'rinmaydi |
| Har nazoratchi sahifasida olish | Ishtirokchi boshiga 3–4 so'rov; oqim o'rtasida sozlama o'zgarib qolishi mumkin |
| Sozlama o'zgarsa tokenni bekor qilish | Test yechayotgan barcha ishtirokchilar test o'rtasida chiqarib yuboriladi |

## Oqibatlari
O'zgarish keyingi ishtirokchidan kuchga kiradi; joriy ishtirokchi eski sozlama bilan tugatadi.
```

## Og'riqqa bog'liqlik

- "Nega unday qilgandik?" → ADR (24-qoida). Yuqoridagi ADR yozuvi bo'lmasa, keyingi dasturchi "sozlamani bir marta login'da olsak bo'lardi-ku" deb rad etilgan variantga qaytadi.
- "Muhokamalar cho'zilib ketadi" → izoh belgilari va 2 aylanish chegarasi (11–12-qoidalar).

---

Egasi: tech lead · Oxirgi yangilangan: 2026-11-07 · Keyingi ko'rib chiqish: standartdagi [D11](../../D11-dasturchilar-qoidalari.md) o'zgarganda
