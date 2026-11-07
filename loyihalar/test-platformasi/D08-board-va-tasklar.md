# D08 · Board va tasklar

Standart: [D08 — Kanban qoidalari, DoR va DoD](../../D08-kanban-dor-dod.md). Misol loyiha: [Test Platformasi](index.md).

Board — Jira, kod — GitLab. Jamoa 5 kishi, alohida QA yo'q, shuning uchun Testing'ni PM/analitik yoki boshqa dasturchi yuritadi. Story'lar [TZ](D03-tz.md) dan.

## Board qanday ko'rinadi (bir kun, namunaviy)

| Backlog | Ready | In progress | Code review | Testing | Done |
| --- | --- | --- | --- | --- | --- |
| [US-06] be — sozlamalarni olish endpointi | [US-05] fe — yakunlash oynasi | [US-04] fe — taymer pauzasi (Frontend) | [US-03] fe — rozilik oynasi | | [US-01] fe — nazoratchi login'i |
| CR: rozilikni backend'da qayd etish (`change-request`) | | [US-04] be — `save-time` (Backend 1) | | | |
| | | 🚩 [US-02] be — arizalarni topish (Backend 2) — kontraktni kutmoqda | | | |

## To'g'ri yozilgan task

```
Sarlavha: [US-04] fe — Taymerni internet uzilishi va savol yuklanishida to'xtatish
Tavsif: Ishtirokchi texnik sabab bilan vaqt yo'qotmasligi kerak.
        D03, C bo'limi, US-04.
Qabul mezonlari: US-04 ning 4 ta mezoni (internet uzilishi; savol yuklanishi;
        3 marta xatodan keyin; boshqa savolga o'tish)
Maket: [TO'LDIRILSIN: Figma havolasi — taymer pauza holati va savol xato holati]
API: qolgan vaqtni yuborish — `save-time` [TO'LDIRILSIN: backend, kontrakt havolasi]
Baho: 2 kun — Frontend bergan
Bog'liqlik: yo'q (backend tayyor bo'lmaguncha mock bilan)
```

**DoD bu task uchun:**

- [ ] Uchala pauza sababiga (offline, savol yuklanmoqda, savol xatosi) unit test bor. Real repoda taymer mantig'i alohida servisda (`TestTimerService`), shuning uchun unit testi oson (`docs/test-timer-and-question-loader.md`).
- [ ] Type-check va unit testlar yashil.
- [ ] Analitik staging'da 4 ta mezonni tekshirgan (internetni brauzerda o'chirib).

## To'g'ri yozilgan bug (namunaviy)

```
Sarlavha: Test yechish — savol yuklanmay qolganda taymer davom etmoqda
Muhit: staging; <mijoz> build'i; Chrome
Qadamlar: 1. Testni boshlash. 2. DevTools'da savol fayllari so'rovini bloklash.
          3. Keyingi savolga o'tish.
Kutilgan: taymer to'xtaydi, xato holati ko'rinadi (US-04, 2- va 3-mezon)
Haqiqiy: taymer davom etmoqda, savol bo'sh
Dalil: video
Jiddiylik: yuqori — ishtirokchi vaqt yo'qotadi
Bog'liq story: US-04
```

## Change request (TZ dagi S-01 dan)

[TZ](D03-tz.md) dagi ochiq savol S-01 "rozilik qayd etilishi kerakmi" mijoz tomonidan "ha" deb yopildi. Bu R1 scope'idagi o'zgarish, shuning uchun:

1. Backlog'ga `change-request` labeli bilan task ochiladi.
2. PM ta'sirini yozadi: backend (rozilikni saqlash), frontend (yuborish), [TZ](D03-tz.md) shaxsiy ma'lumotlar bo'limi; baho — bajaruvchilardan.
3. [TZ](D03-tz.md) v1.1 ga yangilanadi, qaror [qarorlar jurnaliga](D02-loyiha-rejasi.md) yoziladi.
4. Shundan keyin task DoR bo'yicha Ready'ga o'tadi.

## Real repo bilan solishtirish: "avtomatik tekshiruvlar yashil"

Real frontend repoda (`test-uzedu-user`):

- Har push'da Husky `pre-push` hook type-check va unit testlarni ishlatadi; `main` ga push'da e2e ham ishlaydi (`.husky/pre-push`).
- GitLab CI'da test bosqichi yo'q — u faqat build va deploy qiladi (`.gitlab-ci.yml`).
- Hook lokal va `--no-verify` bilan chetlab o'tiladi.

**Standart bo'yicha nima qo'shilardi:** testlarni CI'ga ham qo'shish va merge request'ni qizil pipeline bilan merge qilib bo'lmaydigan qilish. Shunda DoD'dagi "qizil test bilan merge qilinmaydi" qoidasi odamning intizomiga emas, tizimga bog'lanadi ([D13](../../D13-test-strategiyasi.md), [D14](../../D14-release-va-deploy.md)).

## Og'riqqa bog'liqlik

- "Aytilgan narsalar esdan chiqadi" → 6-bo'lim, 1-qoida: chatdagi so'rov 1 kunda boardga.
- "Bitta narsa qayta-qayta qilinadi" → DoR (maket va qabul mezonisiz ish boshlanmaydi) va 6-qoida (qaytgan task sanaladi).

---

Egasi: PM · Oxirgi yangilangan: 2026-11-07 · Keyingi ko'rib chiqish: standartdagi D08 o'zgarganda
