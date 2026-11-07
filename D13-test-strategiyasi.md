# D13 — Test strategiyasi (unit, integration, e2e)

## 1. Maqsad

Testlar ish davomida, kod bilan birga yozilsin va har o'zgarishda avtomatik ishlasin. Shunda release oldidan qo'lda tekshirishga bog'liqlik kamayadi, bir marta tuzatilgan xato esa qaytib kelmaydi.

## 2. Kim uchun va qachon

- **Egalari:**
  - tech lead — avtomatik testlar, CI;
  - QA — test rejasi, qo'lda test, regressiya.

  Kichik jamoada QA rolini analitik yoki muallif bo'lmagan dasturchi bajaradi (D08).
- **Kim nima qiladi:**

| Rol | Vazifasi |
| --- | --- |
| Dasturchi | O'z taskiga unit va integration test yozadi; e2e'ni o'zgargan oqim uchun yangilaydi |
| QA / tekshiruvchi | D03 qabul mezonlaridan test ssenariylari tuzadi; Testing ustunida tekshiradi; release oldidan regressiya o'tkazadi |
| Tech lead | Testlar pipeline'da ishlashini va qizil pipeline merge'ni bloklashini ta'minlaydi; beqaror (flaky) testlarni kuzatadi |
| Analitik | Qabul mezonlari tekshirsa bo'ladigan bo'lishini ta'minlaydi (D03) |

- **Qachon:**
  - 4-bosqich (Planlash): test vositalari va CI tayyorlanadi.
  - 5-bosqich: testlar har task bilan yoziladi.
  - 5-darvoza (Ishlab chiqish → Release): regressiya va QA sign-off.

**Atamalar.**
- *Unit test* — bitta funksiya, servis yoki komponentni tashqi tizimlarsiz tekshiradi.
- *Integration test* — bir nechta qism birga ishlashini tekshiradi: masalan, backend'da API va ma'lumotlar bazasi.
- *E2E test* (end-to-end) — foydalanuvchi oqimini brauzerda boshidan oxirigacha tekshiradi.
- *Mock* — haqiqiy tizim (backend, tashqi servis) o'rniga oldindan belgilangan javob beradigan soxta qism.
- *Flaky test* — kod o'zgarmasa ham goh o'tib, goh yiqiladigan test.
- *Regressiya* — avval ishlagan narsaning yangi o'zgarishdan keyin buzilishi.

**Bu doc va D08.** D08 DoD'da minimal talab bor: biznes logikaga unit test yoziladi va qizil test bilan merge qilinmaydi. Bu doc o'sha talabni kengaytiradi: qaysi testlar, qayerda, qancha.

## 3. Test darajalari

| Daraja | Nimani tekshiradi | Kim yozadi | Qayerda ishlaydi | Tezligi |
| --- | --- | --- | --- | --- |
| Unit | Biznes logika: hisob-kitob, holat o'zgarishi, validatsiya, ruxsat tekshiruvi | Dasturchi | Har MR pipeline'ida | Soniyalar |
| Integration (backend) | API + ma'lumotlar bazasi + tranzaksiyalar; endpoint kontraktga mos javob beradi | Backend dasturchi | Har MR pipeline'ida | Daqiqalar |
| E2E (frontend, mock backend) | Foydalanuvchi oqimlari, ekran holatlari, xato holatlari | Frontend dasturchi | Har MR pipeline'ida (yoki 6-qoida bo'yicha) | Daqiqalar |
| Smoke (to'liq tizim) | Staging/prod'da asosiy oqim haqiqiy backend bilan ishlaydi | QA / tekshiruvchi | Har deploy'dan keyin | Daqiqalar |
| Qo'lda va regressiya | Avtomatlashtirilmagan holatlar, qurilma va brauzerlar, UX | QA / tekshiruvchi | Testing ustuni; release oldidan staging | Soatlar |
| Yuklama | D03 dagi yuklama talabi bajariladi | Backend + DevOps | Release oldidan, agar D03 da raqam bo'lsa | Soatlar |

**Nisbat.** Unit testlar eng ko'p, e2e — asosiy oqimlar uchun. Har xato holatini e2e bilan tekshirish qimmat va sekin; mantiq unit testda, oqim e2e'da tekshiriladi.

## 4. Qoidalar

### A. Nima majburiy

1. **Biznes logikaga unit test** — har task'da (D08 DoD). Biznes logika — natijaga, pulga, vaqtga, ruxsatga yoki ma'lumot saqlanishiga ta'sir qiladigan kod. Faqat ko'rinish (layout, stil) uchun unit test shart emas. *Nega:* eng qimmat xatolar mantiqda; ularni unit test eng arzon ushlaydi.
2. **Har bug tuzatishi — avval yiqiladigan test.** Tuzatishdan oldin xatoni qaytaradigan test yoziladi, keyin kod tuzatiladi va test o'tadi. Kichik jamoa uchun ham majburiy. *Nega:* bir marta tuzatilgan xato qaytib kelsa, bu — rework va ishonchni yo'qotish.
3. **D03 dagi har asosiy oqim e2e bilan qoplanadi.** Loyiha uchun eng muhim 5 ta oqim 2-darvozada test rejasida nomi bilan yoziladi. E2E'da baxtli yo'l bilan birga kamida bitta xato holati ham tekshiriladi. *Nega:* oqim — foydalanuvchi ko'radigan narsa; unit testlar o'tsa ham oqim buzilishi mumkin.
4. **API kontrakti testlanadi.** Backend integration testi endpoint javobi kontraktga (D11) mosligini tekshiradi. Frontend mock'lari ham shu kontraktdan olinadi. *Nega:* mock bilan o'tgan frontend testi faqat mock to'g'ri bo'lsagina foydali.

### B. Qamrov

5. **Qamrov o'lchanadi, lekin maqsad emas.** Pipeline unit testlar qamrovini (coverage) ko'rsatadi. Boshlang'ich chegaralar:
   - biznes logika papkalarida (servislar, util'lar) satr qamrovi ≥ 80%;
   - MR umumiy qamrovni pasaytirmaydi.

   Chegaralar pilotdan keyin D17 retroda qayta ko'riladi. *Nega:* raqamsiz "test yozing" tekshirilmaydi; raqamning o'zi esa ma'nosiz testlarga olib kelmasligi uchun faqat logika papkalariga qo'yiladi.

### C. CI va merge

6. **Har MR pipeline'ida:** formatter, linter, tip tekshiruvi, unit va integration testlar. E2E ham MR'da ishlaydi, agar to'liq suite 10 daqiqadan oshmasa. Oshsa:
   - MR'da faqat o'zgargan modul spec'lari ishlaydi;
   - to'liq suite `dev` ga har merge'dan keyin ishlaydi;
   - `dev` → `main` release'idan oldin to'liq suite majburiy.

   *Nega:* sekin pipeline'ni odamlar chetlab o'tishni boshlaydi; tez pipeline — ishlatiladigan pipeline.
7. **Qizil pipeline merge'ni bloklaydi** — GitLab sozlamasida ("Pipelines must succeed"). Lokal git hook faqat qulaylik: u xatoni push'dan oldin ko'rsatadi, lekin tekshiruv o'rnini bosmaydi. *Nega:* hook'ni `--no-verify` bilan chetlab o'tsa bo'ladi, pipeline'ni esa yo'q.

### D. Ishonchli testlar

8. **Selektorlar — maxsus test atributi** (`data-cy` yoki `data-testid`). Matn yoki CSS klass emas. *Nega:* tarjima yoki dizayn o'zgarsa, test xato bo'lmasa ham yiqilmaydi.
9. **Test ma'lumotlari soxta va kodda.** Factory'lar orqali yaratiladi; real login, parol, JShShIR yoki yuz tasviri ishlatilmaydi. *Nega:* shaxsiy ma'lumot repoga tushmaydi (D11); testlar har kimda bir xil ishlaydi.
10. **E2E'da mock qat'iy (strict).** Mock qilinmagan so'rov testni yiqitadi. *Nega:* test haqiqiy backend'ga jimgina borib, uning holatiga bog'lanib qolmaydi.
11. **Flaky test darhol hal qilinadi.** Bir kun ichida tuzatiladi yoki karantinga olinadi: test o'tkazib yuboriladi (`skip`), kodda sababi yoziladi, Jira'da egasi va muddati bilan task ochiladi. Karantindagi testlar soni haftalik sync'da ko'riladi. Yangi test 3 marta ketma-ket yuritib tekshiriladi. *Nega:* "goh yiqiladi, qayta yuritamiz" odati odamlarni qizil natijaga e'tibor bermaslikka o'rgatadi.
12. **Testlar "bo'sh o'tmasligi" tekshiriladi.** Yangi test yozilgach, tekshirilayotgan kod vaqtincha buziladi — test yiqilishi kerak. *Nega:* hech narsani tekshirmaydigan test yashil bo'ladi va noto'g'ri ishonch beradi.

### E. Qo'lda test, regressiya va bug'lar

13. **Testing ustunida qabul mezonlari bo'yicha tekshiriladi** — muallif bo'lmagan odam tomonidan (D08). *Nega:* avtomatik testlar dasturchi o'ylagan holatlarni tekshiradi, tekshiruvchi esa foydalanuvchi qiladigan narsani.
14. **Release oldidan staging'da regressiya checklisti** o'tkaziladi (5.3). Natija QA sign-off sifatida 5-darvoza yozuviga tushadi (D02). *Nega:* mock bilan o'tgan testlar haqiqiy backend bilan integratsiyani tekshirmaydi.
15. **Bug hayot sikli boardda:** bug D08 shabloni bo'yicha ochiladi va Backlog → … → Done yo'lini o'tadi. Bug Done'ga faqat regressiya testi bilan o'tadi (2-qoida). Qayta ochilgan bug'lar soni sanaladi (D17). *Nega:* alohida "bug ro'yxati" boardni ikkiga bo'ladi.
16. **Test hujjati repoda:** testlarni qanday ishga tushirish, mock strategiyasi, ma'lum tuzoqlar. Yangi tuzoq topilsa, shu hujjatga qator qo'shiladi. *Nega:* bir marta yarim kun yo'qotilgan muammo keyingi odamga yana yarim kun olmaydi.

**Kichik loyihada.** Minimum — D08 DoD (unit test, yashil tekshiruvlar) va 1–3 va 7-qoidalar. E2E 5 ta asosiy oqim uchun; yuklama testi faqat D03 da raqam bo'lsa.

## 5. Shablonlar

### 5.1. Release test rejasi

```markdown
# Test rejasi — <release>
Egasi: <QA / tekshiruvchi> · D03 versiyasi: v<X.Y>

## Scope
Release'ga kiradigan story'lar: US-…
Kirmaydi: …

## Eng muhim oqimlar (e2e majburiy)
| # | Oqim | Story | E2E spec | Xato holatlari |

## Avtomatlashtirilmagan holatlar (qo'lda)
| Holat | Nega avtomatlashtirilmagan | Kim tekshiradi |

## Muhit
Staging, mijoz build'i, brauzerlar va qurilmalar: …

## Kirish va chiqish mezoni
Kirish: release scope'idagi tasklar Done.
Chiqish: regressiya checklisti o'tgan; ochiq kritik bug yo'q; yuklama testi (agar talab bo'lsa) o'tgan.

## Risklar
D02 risklar reestriga havola.
```

### 5.2. E2E ssenariy yozuvi

```
ID: E2E-<NN> · Story: US-<NN> · Spec: <fayl yo'li>
Oldingi holat: <kim, qaysi sahifada, qanday ma'lumot bilan>
Qadamlar: 1. … 2. …
Kutilgan natija: …
Xato holatlari: …
```

### 5.3. Staging regressiya checklisti

```
Release: <nomi> · Muhit: staging · Sana: … · Tekshiruvchi: …
- [ ] Eng muhim 5 oqim haqiqiy backend bilan oxirigacha o'tdi
- [ ] Release'dagi har story qabul mezonlari bo'yicha
- [ ] Xato holatlari: tarmoq uzilishi, backend xatosi, ruxsat yo'q
- [ ] Qo'llab-quvvatlanadigan brauzerlar/qurilmalarda asosiy oqim
- [ ] Konsolda ushlanmagan xato yo'q
Natija: o'tdi / o'tmadi (bug'lar: …)
```

### 5.4. Karantin yozuvi (kodda)

```ts
// KARANTIN(UZ-789): sekin mashinada toast redirect'dan oldin yo'qoladi.
// Egasi: <ism>, muddat: <sana>.
it.skip('…', () => { … });
```

## 6. uzedu misoli

Ssenariy: uzedu'ni noldan quryapmiz. Frontend misollari real repozitoriydan (`test-uzedu-user`); backend testlari — `[TO'LDIRILSIN: backend]`.

### 6.1. Eng muhim 5 oqim va ularning e2e qamrovi

Real repoda 11 ta e2e spec va 171 ta test bor; testlar backend'siz, to'liq mock bilan ishlaydi (`docs/e2e-testing.md`, 2- va 3-bo'limlar). Quyidagi 5 oqim — test rejasidagi majburiy ro'yxat. Har biri real spec'ga bog'langan.

| # | Oqim | Story (D03) | Real spec | Tekshiriladigan xato holatlari (spec'dan) |
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

### 6.2. Real repo standart bilan solishtirganda

| Qoida | Real repoda | Standart bo'yicha nima qo'shilardi |
| --- | --- | --- |
| Biznes logikaga unit test (1) | Vitest; 11 ta unit spec fayl — hash, storage, tab nazorati, guard'lar va boshqalar (`src/**/*.spec.ts`, `docs/unit-testing.md`) | Eng muhim logikaga — taymer pauza sabablari (`TestTimerService`) va javoblarni yig'ish — unit test yo'q. Ular hozir faqat e2e orqali tekshiriladi. Unit test qo'shish |
| Asosiy oqimlar e2e bilan (3) | 5 ta oqimning hammasi qoplangan (6.1) | — (namuna sifatida) |
| Mock qat'iy (10) | Mock qilinmagan `/api/` so'rovi testni yiqitadi (`docs/e2e-testing.md`, 5-bo'lim) | — (namuna) |
| Selektorlar (8) | `data-cy` atributi; matn va CSS ishlatilmaydi (`docs/e2e-testing.md`, 4-bo'lim) | — (namuna) |
| Soxta ma'lumot (9) | Haqiqiy login va JShShIR ishlatilmaydi, `factories.ts` (`docs/e2e-testing.md`, 4-bo'lim) | — (namuna) |
| Testlar bo'sh o'tmasligi (12) | `data-cy` ni vaqtincha buzib tekshirish tartibi yozilgan (`docs/e2e-testing.md`, 2-bo'lim E) | — (namuna) |
| Flaky va tuzoqlar (11, 16) | "Ma'lum tuzoqlar" jadvali, 20 dan ortiq yozuv (`docs/e2e-testing.md`, 8-bo'lim); `it.skip` sababi testda izohda | Har `skip` uchun Jira task, egasi va muddat |
| Staging'da qo'lda tekshiruv (14) | Qo'lda tekshirish jadvali bor (`docs/e2e-testing.md`, 7-bo'lim) | Har release'da to'ldiriladigan regressiya checklisti va 5-darvozaga sign-off |
| Testlar pipeline'da (6–7) | Testlar faqat lokal `pre-push` hook'da; GitLab CI'da test bosqichi yo'q. Bu ongli qaror sifatida yozilgan: "tashqi CI'ga qaramlik yo'q", cheklovi — `--no-verify` bilan chetlab o'tiladi (`docs/e2e-testing.md`, 9-bo'lim) | Testlarni GitLab CI'ga qo'shish va "Pipelines must succeed" (6.3) |
| Qamrov o'lchanadi (5) | [TO'LDIRILSIN: Vitest coverage sozlanganmi] | Pipeline'da qamrov hisoboti va chegarasi |
| Test hujjati dolzarb (16) | `docs/e2e-testing.md` 9-bo'limida e2e branch "hali `main` ga qo'shilmagan" deyilgan, lekin `main` tarixida e2e commitlari bor | Holat bo'limini yangilash — hujjat kod bilan birga yangilanadi (D11, 25-qoida) |
| Backend integration va kontrakt testlari (4) | `[TO'LDIRILSIN: backend]` | |
| Yuklama testi | `[TO'LDIRILSIN: backend]`; raqam D03 dagi S-02 savoliga bog'liq ("imtihon kunlarida minglab parallel ishtirokchi") | Release oldidan yuklama testi |

### 6.3. GitLab CI'ga test bosqichi (namunaviy)

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

Keyin GitLab'da Settings → Merge requests → "Pipelines must succeed" yoqiladi. Shundan keyin `build_job` faqat testlar o'tgandan keyin ishlashi uchun `needs` ga test job'lari qo'shiladi (D14).

### 6.4. Bug → regressiya testi

D08 dagi namunaviy bug ("savol yuklanmay qolganda taymer davom etmoqda") quyidagicha yopiladi:

1. Dasturchi avval `TestTimerService` uchun unit test yozadi: `question-loading` sababi bilan `pause` chaqirilganda taymer kamaymaydi. Test yiqiladi.
2. Kod tuzatiladi — test o'tadi.
3. `exam-session.cy.ts` dagi "kontent yuklanayotganda pauza" ssenariysi qayta yuritiladi.
4. Tekshiruvchi staging'da D08 bug yozuvidagi qadamlarni takrorlaydi va bug'ni Done'ga o'tkazadi.

### Og'riqqa bog'liqlik

"Bitta narsa qayta-qayta qilinadi" — 2-qoida: bug tuzatishi testsiz bo'lsa, keyingi o'zgarish uni yana ochadi va ish uchinchi marta qilinadi.

## 7. Checklist: test strategiyasi ishlayaptimi

Tech lead har release oldidan tekshiradi:

- [ ] Release test rejasi bor; 5 ta eng muhim oqim nomi bilan va spec'ga bog'langan
- [ ] Pipeline har MR'da unit va (6-qoida bo'yicha) e2e testlarni ishlatadi
- [ ] "Pipelines must succeed" yoqilgan — qizil pipeline bilan merge qilib bo'lmaydi
- [ ] Biznes logika papkalarida qamrov chegarasi bajarilgan
- [ ] Release davomida yopilgan har bug'ning regressiya testi bor (tasodifiy 3 tasini tekshirish)
- [ ] Karantindagi testlarning har biri Jira'da egasi va muddati bilan
- [ ] Staging regressiya checklisti to'ldirilgan va 5-darvoza yozuvida

**Tayyor mezoni.** Qizil test bilan merge'ni GitLab o'zi bloklaydi (bir marta ataylab qizil MR bilan sinab ko'riladi). 5 ta eng muhim oqim e2e bilan qoplangan.

## 8. Tez-tez uchraydigan xatolar

1. **"Testni keyin yozamiz".** Release oldidan vaqt bo'lmaydi va testlar umuman yozilmaydi. To'g'risi: test — taskning bir qismi (D08 DoD).
2. **Hamma narsa e2e bilan.** Har chegaraviy holat uchun e2e — suite sekinlashadi va beqarorlashadi. To'g'risi: mantiq unit'da, oqim e2e'da.
3. **Mock'ga ko'r-ko'rona ishonch.** Mock bilan hammasi yashil, staging'da esa backend boshqa format qaytaradi. To'g'risi: mock kontraktdan olinadi (4-qoida), release oldidan staging regressiyasi (14-qoida).
4. **Flaky testni "qayta yuritib" o'tkazish.** Bir oydan keyin hech kim qizil natijaga ishonmaydi. To'g'risi: bir kun ichida tuzatish yoki karantin (11-qoida).
5. **Testlar faqat dasturchining kompyuterida.** Hook chetlab o'tiladi, yangi dasturchida hook o'rnatilmagan. To'g'risi: pipeline (7-qoida).

---

Egasi: tech lead + QA · Oxirgi yangilangan: 2026-11-07 · Keyingi ko'rib chiqish: pilot loyiha retrosidan keyin (D17)
