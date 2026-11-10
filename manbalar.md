# Manbalar va asoslar

Bu sahifa standart nimaga tayanishini ko'rsatadi. Standart uch xil narsadan tuzilgan, va ularni ajratib ko'rish muhim:

1. **Sanoatda keng qo'llanadigan amaliyotlar** — nomi va manbasi bor (1-bo'lim).
2. **Bizning loyihalash qarorlarimiz va jamoadan olingan faktlar** — amaliyotlarni bizning sharoitga moslash (2-bo'lim).
3. **Boshlang'ich qiymatlar** — aniq raqam va chegaralar; manbadan olinmagan, doclarda `[b.q.]` bilan belgilangan va pilotda tekshiriladi (3-bo'lim).

Manbalar kitob, standart yoki hujjat nomi va muallifi darajasida keltirilgan. Bu sahifada sahifa raqamlari va iqtiboslar yo'q.

## 1. Amaliyotlar va ularning manbalari

| Standartdagi narsa | Manba | Docda |
| --- | --- | --- |
| Loyihani bosqichlarga bo'lish va bosqichlar orasidagi darvozalar | Stage-Gate modeli — Robert G. Cooper, "Winning at New Products"; PMI, "PMBOK Guide" (loyiha fazalari) | [D02](D02-loyiha-hayot-sikli.md) |
| Qarorlar jurnali va risklar reestri | PMI, "PMBOK Guide" (risk va o'zgarishlarni boshqarish) | [D02](D02-loyiha-hayot-sikli.md) |
| RACI matritsa | PMI, "PMBOK Guide" (mas'uliyatni taqsimlash matritsasi) | [D01](D01-rollar-va-raci.md) |
| Brief va TZ, user story va qabul mezonlari | User story formati Scrum va XP amaliyotlaridan; qabul mezonlari — agile talablar amaliyoti | [D03](D03-loyiha-boshlangich-hujjati.md) |
| Definition of Done; daily 15 daqiqa; sprint review (demo) va retrospektiva | Ken Schwaber, Jeff Sutherland — "The Scrum Guide" | [D08](D08-kanban-dor-dod.md), [D09](D09-meetinglar-ritmi.md), [D17](D17-retro-va-standartni-yangilash.md) |
| Definition of Ready | Scrum hamjamiyatidagi amaliyot (Scrum Guide'ning o'zida yo'q) | [D08](D08-kanban-dor-dod.md) |
| Kanban board, WIP limitlari, ishni "tortish" | David J. Anderson — "Kanban: Successful Evolutionary Change for Your Technology Business" | [D08](D08-kanban-dor-dod.md) |
| Uch nuqtali baho, (O + 4E + P) / 6 | PERT usuli | [D06](D06-baholash-va-srok.md) |
| "Kechikkan loyihaga odam qo'shish uni tezlashtirmaydi" | Brooks qonuni — Frederick P. Brooks, "The Mythical Man-Month" | [D06](D06-baholash-va-srok.md), [D07](D07-taqsimot-va-resurs.md) |
| O'zgarishlarni boshqarish (change request, ta'sir tahlili) | PMI, "PMBOK Guide" (integratsiyalashgan o'zgarishlar nazorati) | [D10](D10-ozgarishlarni-boshqarish.md) |
| Code review: kichik MR, review'ga javob ko'pi bilan 1 ish kunida | Google — "Engineering Practices" (google.github.io/eng-practices) | [D11](D11-dasturchilar-qoidalari.md) |
| Commit xabarlari formati | Conventional Commits spetsifikatsiyasi (conventionalcommits.org) | [D11](D11-dasturchilar-qoidalari.md) |
| API kontrakti fayli; design-first va code-first usullari | OpenAPI Specification (OpenAPI Initiative, spec.openapis.org); yondashuvlar nomi — Swagger (SmartBear) hujjatlari | [D11](D11-dasturchilar-qoidalari.md) |
| Arxitektura qarori yozuvi (ADR) | Michael Nygard — "Documenting Architecture Decisions" | [D11](D11-dasturchilar-qoidalari.md) |
| UI tamoyillari | Jakob Nielsen — 10 ta foydalanuvchanlik evristikasi (Nielsen Norman Group) | [D12](D12-ui-ux-standartlari.md) |
| Kontrast 4.5:1 va accessibility minimumi | W3C — WCAG 2.x | [D12](D12-ui-ux-standartlari.md) |
| Design system, komponentlar, holatlar | Google Material Design, Apple Human Interface Guidelines | [D12](D12-ui-ux-standartlari.md) |
| Test piramidasi | Mike Cohn — "Succeeding with Agile" | [D13](D13-test-strategiyasi.md) |
| Pipeline'da avtomatik testlar, qizil build bilan merge yo'q, release va rollback | Jez Humble, David Farley — "Continuous Delivery" | [D13](D13-test-strategiyasi.md), [D14](D14-release-va-deploy.md) |
| Versiya raqamlash MAJOR.MINOR.PATCH | Semantic Versioning (semver.org) | [D14](D14-release-va-deploy.md) |
| Maxfiy sozlamalar koddan tashqarida | "The Twelve-Factor App" (12factor.net), konfiguratsiya bo'limi | [D14](D14-release-va-deploy.md) |
| Vazifaga yo'naltirilgan qo'llanma ("qanday qilish kerak") | Diátaxis hujjatlash ramkasi — Daniele Procida (diataxis.fr) | [D15](D15-qollanma-va-oqitish.md) |
| Murojaatlar, jiddiylik darajalari, SLA | ITIL — incident management amaliyoti | [D16](D16-support-va-fikr-yigish.md) |
| Ayblashsiz hodisa tahlili | Google — "Site Reliability Engineering" kitobi, "Postmortem Culture" bobi | [D16](D16-support-va-fikr-yigish.md), [D17](D17-retro-va-standartni-yangilash.md) |
| Retro tuzilmasi: ma'lumot → tahlil → harakatlar | Esther Derby, Diana Larsen — "Agile Retrospectives" | [D17](D17-retro-va-standartni-yangilash.md) |
| Jarayon metrikalari (lead time va boshqalar) | Nicole Forsgren, Jez Humble, Gene Kim — "Accelerate" (DORA tadqiqotlari); bizdagi ta'riflar soddalashtirilgan | [D17](D17-retro-va-standartni-yangilash.md) |

## 2. Loyihalash qarorlari va faktlar

**Bizning qarorlarimiz** — yuqoridagi amaliyotlarga tayanadi, lekin aynan shu ko'rinishda hech qayerdan ko'chirilmagan:

- 8 bosqichning tarkibi va nomlari, 7 darvoza va har birining tasdiqlovchisi ([D02](D02-loyiha-hayot-sikli.md)).
- Standartning 17 ta docga bo'linishi va har mavzuning "uyi" ([root doc](00-root.md), katalog).
- Kichik loyiha uchun qisqa shakl ("Loyiha hajmiga qarab moslashtirish").
- O'zgarishlarning uch turi — aniqlashtirish, kichik va katta change request ([D10](D10-ozgarishlarni-boshqarish.md)).
- Har docning tuzilmasi: maqsad, kim uchun, qoidalar va ularning "nega"si, shablon, misol, checklist, xatolar ([AGENTS.md](AGENTS.md)).

**Jamoadan olingan faktlar** — muallif (Odilbek Utamuratov) bergan javoblar, [ish rejasidagi](ish-rejasi.md) "Kelishuvlar":

- Jamoadagi real og'riqlar (root doc, "Jamoadagi real og'riqlar").
- Kichik loyiha chegarasi — 3–5 kishi; vositalar — Jira, Figma, Telegram, GitLab.
- Standart kim uchun va qanday tasdiqlanishi.

**Misol loyiha faktlari** — Test Platformasining frontend repozitoriyidan, fayl yo'li bilan ([misol loyiha](loyihalar/test-platformasi/index.md)).

## 3. Boshlang'ich qiymatlar `[b.q.]`

Quyidagi raqamlar mantiqiy boshlang'ich taklif, lekin isbotlangan me'yor emas. Ular pilotda tekshiriladi: retroda ([D17](D17-retro-va-standartni-yangilash.md)) haqiqiy raqamlar bilan solishtiriladi va kerak bo'lsa o'zgartiriladi. O'zgarganda shu jadval ham yangilanadi.

| Doc | Qiymat | Pilotda nimani tekshirish |
| --- | --- | --- |
| [D01](D01-rollar-va-raci.md) | Maslahatchi (C) javob muddati — 1 ish kuni | Qarorlar shu muddatda chiqyaptimi |
| [D02](D02-loyiha-hayot-sikli.md) | Muhim qaror jurnalga 1 ish kunida; kichik loyihada darvoza 15 daqiqa | Jurnal o'z vaqtida to'ldiriladimi |
| [D04](D04-dizayn-brief-va-jarayon.md) | Dizayn review muddati — 1 ish kuni | Dizayn review'da kutib qolmayaptimi |
| [D05](D05-kickoff-va-doc-review.md) | Material 1 ish kuni oldin; izohlarni 2 soat oldin tekshirish; kickoff va review 60 daqiqa; bitta savolga 10 daqiqa | Meetinglar vaqtga sig'yaptimi |
| [D06](D06-baholash-va-srok.md) | Kunlik fokus — 6 soat; P > 2E — katta noaniqlik; bufer — farqlar yig'indisining yarmi; bahodan yarmidan ko'p oshsa — signal | Baho va haqiqat farqi, real fokus soati |
| [D07](D07-taqsimot-va-resurs.md) | Bir odam ko'pi bilan 2 loyihada; yangi odam 2 hafta yarim bandlik | Ko'p loyihadagi odamlarning unumdorligi |
| [D08](D08-kanban-dor-dod.md) | Task 1–3 kunlik; 3 kundan katta — bo'linadi; WIP — bajaruvchiga 1 ta; so'rov Backlog'ga 1 ish kunida; 1 kundan ortiq bloklangan — daily'da | Lead time, In progress'da turib qolish |
| [D09](D09-meetinglar-ritmi.md) | Protokol 1 ish kunida; haftalik sync 30–45 daqiqa; uzoq release'da demo har 2 haftada | Meetinglarga ketgan vaqt, protokollar soni |
| [D10](D10-ozgarishlarni-boshqarish.md) | So'rov 1 ish kunida; ta'sir tahlili 1–2 ish kunida; kichik CR ≤ 1 ish kuni; scope 5-darvozadan 5 ish kuni oldin yopiladi; bufer yarmi — chegara | CR'lar soni va ular srokka qanchalik ta'sir qildi |
| [D12](D12-ui-ux-standartlari.md) | Bekor qilish 5 soniya; skeleton 300 ms dan uzun yuklanishda; qidiruv 300–500 ms dan keyin; toast 3–5 soniya | Foydalanuvchi sinovlari va murojaatlar |
| [D13](D13-test-strategiyasi.md) | E2E — eng muhim 5 ta oqim; logika qamrovi ≥ 80%; to'liq suite 10 daqiqadan oshmasa — MR'da; flaky — 1 kunda; yangi test 3 marta | Release'dan keyingi bug'lar, pipeline vaqti |
| [D14](D14-release-va-deploy.md) | Rollback 15 daqiqada; qo'lda o'zgarish 1 ish kunida kodga; smoke test 15 daqiqada; prod'da 15 daqiqadan ortiq tuzatishga urinmaslik | Haqiqiy rollback vaqti |
| [D15](D15-qollanma-va-oqitish.md) | 3 marta takrorlangan savol — FAQ'ga; o'qitish 45–60 daqiqa; qo'llanma sinovi 3 kishi bilan; video 3 daqiqagacha | Murojaatlar soni, sinov natijalari |
| [D16](D16-support-va-fikr-yigish.md) | Javob vaqtlari jadvali (masalan, kritik — 30 daqiqa); takliflar tahlili oyda bir marta; 3 marta takrorlangan savol — FAQ'ga | Javob vaqtlari bajarilishi |
| [D17](D17-retro-va-standartni-yangilash.md) | Release retrosi 1 hafta ichida, 45–60 daqiqa; boshlash retrosi 45 daqiqa; loyiha retrosi 60–90 daqiqa; metrikalar 1 ish kuni oldin; 1–3 harakat; release'dan keyingi bug'lar — 2 hafta | Harakatlarning bajarilishi |

---

Egasi: Odilbek Utamuratov · Oxirgi yangilangan: 2026-11-10 · Keyingi ko'rib chiqish: pilot loyiha retrosidan keyin
