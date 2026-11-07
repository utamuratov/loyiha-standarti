# D13 · Test rejasi va testlar

Standart: [D13 — Test strategiyasi (unit, integration, e2e)](../../D13-test-strategiyasi.md). Misol loyiha: [Test Platformasi](index.md).

Frontend misollari real repozitoriydan (`test-uzedu-user`); backend testlari — `[TO'LDIRILSIN: backend]`.

## Eng muhim 5 oqim va ularning e2e qamrovi

Real repoda 11 ta e2e spec va 171 ta test bor; testlar backend'siz, to'liq mock bilan ishlaydi (`docs/e2e-testing.md`, 2- va 3-bo'limlar). Quyidagi 5 oqim — test rejasidagi majburiy ro'yxat. Har biri real spec'ga bog'langan.

| # | Oqim | Story ([TZ](D03-tz.md)) | Real spec | Tekshiriladigan xato holatlari (spec'dan) |
| --- | --- | --- | --- | --- |
| 1 | Nazoratchi login → ishtirokchini topish → testga kirish | US-01–03 | `login.cy.ts`, `pinfl.cy.ts`, `application-details.cy.ts` | backend xatosi, arizalar topilmadi, rozilik belgilanmagan, noto'g'ri maxfiy kod |
| 2 | Test yechish → javob saqlash → yakunlash → natija | US-05 | `solve-test.cy.ts`, `question-types.cy.ts` | test yaratilmasa, server yakunlashni rad etsa |
| 3 | Taymer: offline, kontent yuklanishi, vaqt tugashi | US-04 | `exam-session.cy.ts` | offline'da pauza, kontent yuklanayotganda pauza, F5 da `save-time` |
| 4 | Proktoring: tabdan chiqish, chetlatish | R2 | `exam-session.cy.ts` | qoidabuzarlik, tizim va nazoratchi chetlatishi |
| 5 | Face ID (MyID) | R2 | `face-id.cy.ts` | yuz mos kelmasligi, 2 urinishdan keyin nazoratchi kodi, MyID xatosida qayta yuklash |

Namunaviy ssenariy yozuvi:

```
ID: E2E-03 · Story: US-04 · Spec: cypress/e2e/exam-session.cy.ts
Oldingi holat: ishtirokchi test sahifasida, savol kontenti yuklangan, taymer yurmoqda
Qadamlar: 1. Brauzerni offline qilish. 2. 10 soniya kutish. 3. Online qilish.
Kutilgan natija: offline paytida qolgan vaqt kamaymaydi; online'da taymer davom etadi
Xato holatlari: kontent yuklanayotganda ham pauza (alohida test)
```

## Real repo standart bilan solishtirganda

| Qoida | Real repoda | Standart bo'yicha nima qo'shilardi |
| --- | --- | --- |
| Biznes logikaga unit test (1) | Vitest; 11 ta unit spec fayl — hash, storage, tab nazorati, guard'lar va boshqalar (`src/**/*.spec.ts`, `docs/unit-testing.md`) | Eng muhim logikaga — taymer pauza sabablari (`TestTimerService`) va javoblarni yig'ish — unit test yo'q. Ular hozir faqat e2e orqali tekshiriladi. Unit test qo'shish |
| Asosiy oqimlar e2e bilan (3) | 5 ta oqimning hammasi qoplangan (yuqoridagi jadval) | — (namuna sifatida) |
| Mock qat'iy (10) | Mock qilinmagan `/api/` so'rovi testni yiqitadi (`docs/e2e-testing.md`, 5-bo'lim) | — (namuna) |
| Selektorlar (8) | `data-cy` atributi; matn va CSS ishlatilmaydi (`docs/e2e-testing.md`, 4-bo'lim) | — (namuna) |
| Soxta ma'lumot (9) | Haqiqiy login va JShShIR ishlatilmaydi, `factories.ts` (`docs/e2e-testing.md`, 4-bo'lim) | — (namuna) |
| Testlar bo'sh o'tmasligi (12) | `data-cy` ni vaqtincha buzib tekshirish tartibi yozilgan (`docs/e2e-testing.md`, 2-bo'lim E) | — (namuna) |
| Flaky va tuzoqlar (11, 16) | "Ma'lum tuzoqlar" jadvali, 20 dan ortiq yozuv (`docs/e2e-testing.md`, 8-bo'lim); `it.skip` sababi testda izohda | Har `skip` uchun Jira task, egasi va muddat |
| Staging'da qo'lda tekshiruv (14) | Qo'lda tekshirish jadvali bor (`docs/e2e-testing.md`, 7-bo'lim) | Har release'da to'ldiriladigan regressiya checklisti va 5-darvozaga sign-off |
| Testlar pipeline'da (6–7) | Testlar faqat lokal `pre-push` hook'da; GitLab CI'da test bosqichi yo'q. Bu ongli qaror sifatida yozilgan: "tashqi CI'ga qaramlik yo'q", cheklovi — `--no-verify` bilan chetlab o'tiladi (`docs/e2e-testing.md`, 9-bo'lim) | Testlarni GitLab CI'ga qo'shish va "Pipelines must succeed" (6.3) |
| Qamrov o'lchanadi (5) | [TO'LDIRILSIN: Vitest coverage sozlanganmi] | Pipeline'da qamrov hisoboti va chegarasi |
| Test hujjati dolzarb (16) | `docs/e2e-testing.md` 9-bo'limida e2e branch "hali `main` ga qo'shilmagan" deyilgan, lekin `main` tarixida e2e commitlari bor | Holat bo'limini yangilash — hujjat kod bilan birga yangilanadi ([D11](../../D11-dasturchilar-qoidalari.md), 25-qoida) |
| Backend integration va kontrakt testlari (4) | `[TO'LDIRILSIN: backend]` | |
| Yuklama testi | `[TO'LDIRILSIN: backend]`; raqam [TZ](D03-tz.md) dagi S-02 savoliga bog'liq ("imtihon kunlarida minglab parallel ishtirokchi") | Release oldidan yuklama testi |

## GitLab CI'ga test bosqichi (namunaviy)

Real `.gitlab-ci.yml` dagi `validate-and-check` bosqichiga qo'shiladigan job'lar. Namuna — ishga tushirishdan oldin tekshirilishi kerak. Ayniqsa e2e uchun Chrome o'rnatilgan image kerak: `[TO'LDIRILSIN: runner'ga mos Cypress image]`.

```yaml
unit_and_types:
  stage: validate-and-check
  image: node:22-alpine
  rules:
    - if: '$CI_PIPELINE_SOURCE == "merge_request_event"'
    - if: '$CI_COMMIT_BRANCH == "dev" || $CI_COMMIT_BRANCH == "main"'
  script:
    - npm ci
    - npx tsc -p tsconfig.app.json --noEmit
    - npm run cy:typecheck
    - npm test -- --watch=false

e2e:
  stage: validate-and-check
  image: <Chrome o'rnatilgan Cypress image>
  rules:
    - if: '$CI_PIPELINE_SOURCE == "merge_request_event"'
    - if: '$CI_COMMIT_BRANCH == "dev" || $CI_COMMIT_BRANCH == "main"'
  script:
    - npm ci
    - npm run e2e
  artifacts:
    when: on_failure
    paths: [cypress/screenshots]
```

Keyin GitLab'da Settings → Merge requests → "Pipelines must succeed" yoqiladi. Shundan keyin `build_job` faqat testlar o'tgandan keyin ishlashi uchun `needs` ga test job'lari qo'shiladi ([release va deploy](D14-release-va-deploy.md)).

## Bug → regressiya testi

[Board va tasklar](D08-board-va-tasklar.md) dagi namunaviy bug ("savol yuklanmay qolganda taymer davom etmoqda") quyidagicha yopiladi:

1. Dasturchi avval `TestTimerService` uchun unit test yozadi: `question-loading` sababi bilan `pause` chaqirilganda taymer kamaymaydi. Test yiqiladi.
2. Kod tuzatiladi — test o'tadi.
3. `exam-session.cy.ts` dagi "kontent yuklanayotganda pauza" ssenariysi qayta yuritiladi.
4. Tekshiruvchi staging'da [bug yozuvidagi](D08-board-va-tasklar.md) qadamlarni takrorlaydi va bug'ni Done'ga o'tkazadi.

## Og'riqqa bog'liqlik

"Bitta narsa qayta-qayta qilinadi" — 2-qoida: bug tuzatishi testsiz bo'lsa, keyingi o'zgarish uni yana ochadi va ish uchinchi marta qilinadi.

---

Egasi: tech lead + QA · Oxirgi yangilangan: 2026-11-07 · Keyingi ko'rib chiqish: standartdagi [D13](../../D13-test-strategiyasi.md) o'zgarganda
