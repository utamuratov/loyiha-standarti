# Loyiha boshlash to'plami

Bu papka yangi loyihani noldan boshlash uchun to'ldiriladigan fayllar to'plami. Unda birinchi kundan 4-darvozagacha (Boshlash → Talablar → Dizayn → Planlash) kerak bo'ladigan hujjatlar bor. Bu bosqichlarda ishni asosan PM va biznes analitik qiladi.

Fayllarda qoidalar takrorlanmaydi: ularda faqat bo'sh forma, kim to'ldirishi va checklist bor. Qoida va uning "nega"si standart docda turadi, har fayl boshida unga havola bor. To'ldirilgan namunani [misol loyihada](https://utamuratov.github.io/loyiha-standarti/loyihalar/test-platformasi/) ko'rish mumkin.

## Qanday ishlatiladi

1. **Hujjatlar joyini oching.** Bu joy kompaniyaning ichki tizimida bo'ladi: ichki GitLab, private GitHub repo yoki ichki wiki, masalan Confluence ([D02](https://utamuratov.github.io/loyiha-standarti/D02-loyiha-hayot-sikli.html), 10-qoida). Bu ochiq repoga yoki ochiq saytga loyiha hujjatlari yozilmaydi.
2. **Papkani nusxalang.** Shu papkadagi fayllarni yangi joyga ko'chiring. GitLab'da `loyiha-kartasi.md` ni `README.md` deb qayta nomlang, shunda u repo ochilganda birinchi ko'rinadi.
3. **Kartani to'ldiring.** [Loyiha kartasi](loyiha-kartasi.md) — loyihaning bosh sahifasi: kim, nima, qayerda va hozir qaysi bosqich.
4. **Quyidagi jadval bo'yicha yuring.** Har qadamda bitta faylning bitta bo'limi to'ldiriladi. Darvoza checklisti to'liq bo'lmaguncha keyingi bosqich boshlanmaydi.

Fayllar ichidagi `____` — to'ldiriladigan joy. Javob hali yo'q bo'lsa, joyni bo'sh qoldirmang: uni [TZ](D03-tz.md) dagi ochiq savollarga egasi va muddati bilan yozing.

Standart docga havolalar to'liq manzil bilan yozilgan, shuning uchun ular fayllar boshqa joyga ko'chirilgandan keyin ham ishlaydi.

## Birinchi kundan 4-darvozagacha

### 1-bosqich: Boshlash

| # | Nima qilinadi | Kim | Fayl |
| --- | --- | --- | --- |
| 1 | Hujjatlar joyi, Jira loyihasi va jamoa kanali ochiladi | PM | [Loyiha kartasi](loyiha-kartasi.md) |
| 2 | Qarorlar jurnali va risklar reestri ochiladi | PM | [Loyiha rejasi](D02-loyiha-rejasi.md), 3–4-bo'limlar |
| 3 | Rollar jadvali: har rolga odam va zaxira, mijoz tomonidan PO | PM | [Jamoa va RACI](D01-jamoa-va-raci.md) |
| 4 | Brief: muammo, maqsad, muvaffaqiyat mezonlari, scope chegarasi | Analitik | [TZ](D03-tz.md), A qism |
| 5 | Bosqichlar va release'lar bo'yicha dastlabki reja | PM | [Loyiha rejasi](D02-loyiha-rejasi.md), 1-bo'lim |
| 6 | Kickoff: Brief va agenda 1 ish kuni oldin yuboriladi | PM | [Kickoff va doc review](D05-kickoff-va-doc-review.md), 1-bo'lim |
| 7 | Meetinglar ritmi kickoff'da kelishiladi | PM | [Meetinglar ritmi](D09-meetinglar-ritmi.md) |
| 8 | **1-darvoza:** checklist, PO tasdig'i | PM, PO | [Loyiha rejasi](D02-loyiha-rejasi.md), 2-bo'lim |

### 2-bosqich: Talablar

| # | Nima qilinadi | Kim | Fayl |
| --- | --- | --- | --- |
| 9 | To'liq TZ: release'lar, ekranlar, story'lar va qabul mezonlari | Analitik | [TZ](D03-tz.md), B qism |
| 10 | Rollar va ruxsatlar, sozlamalar, integratsiyalar | Analitik | [TZ](D03-tz.md), B qism |
| 11 | API kontrakti qoralamasi | Tech lead, backend; analitik — talablar | [TZ](D03-tz.md), 13-bo'lim |
| 12 | Nofunksional talablar va shaxsiy ma'lumotlar | Analitik, tech lead | [TZ](D03-tz.md), 14–15-bo'limlar |
| 13 | Doc review: yozma izohlar, keyin meeting | PM, analitik | [Kickoff va doc review](D05-kickoff-va-doc-review.md), 2–3-bo'limlar |
| 14 | Izohlar TZ'da yopiladi, bloklovchi savollar soni 0 | Analitik | [TZ](D03-tz.md), 17-bo'lim |
| 15 | **2-darvoza:** PO TZ versiyasini yozma tasdiqlaydi | PM, PO | [Loyiha rejasi](D02-loyiha-rejasi.md), 2-bo'lim |

2-darvozadan keyin TZ faqat change request orqali o'zgaradi: [O'zgarishlar](D10-ozgarishlar.md).

### 3-bosqich: Dizayn

| # | Nima qilinadi | Kim | Fayl |
| --- | --- | --- | --- |
| 16 | Dizayn brief'i | Analitik, dizayner | [Dizayn brief](D04-dizayn-brief.md), 1-bo'lim |
| 17 | Wireframe review: har story qamralganini tekshirish | Analitik, frontend, PO | Figma |
| 18 | UI review, mijozga ko'rsatish | Dizayner, PO | Figma |
| 19 | Handoff: dasturchi va QA qabul qiladi | Dizayner | [Dizayn brief](D04-dizayn-brief.md), 2-bo'lim |
| 20 | API kontrakti kelishiladi (3-darvozagacha) | Tech lead, frontend | [TZ](D03-tz.md), 13-bo'lim |
| 21 | **3-darvoza** | PM | [Loyiha rejasi](D02-loyiha-rejasi.md), 2-bo'lim |

### 4-bosqich: Planlash

| # | Nima qilinadi | Kim | Fayl |
| --- | --- | --- | --- |
| 22 | Modullar egasi va zaxirasi; bandlik | PM, tech lead | [Modullar taqsimoti](D07-modullar-taqsimoti.md) |
| 23 | Story'lar 1–3 kunlik tasklarga bo'linadi, Jira'da DoR bo'yicha | Analitik, tech lead | Jira ([D08](https://utamuratov.github.io/loyiha-standarti/D08-kanban-dor-dod.html)) |
| 24 | Bajaruvchilar baholaydi, PM srokni hisoblaydi | Dasturchilar, PM | [Baho va srok](D06-baho-va-srok.md), 1-bo'lim |
| 25 | Srok xati mijozga; PO tasdiqlaydi | PM, PO | [Baho va srok](D06-baho-va-srok.md), 2-bo'lim |
| 26 | **4-darvoza** | PM; srokni PO | [Loyiha rejasi](D02-loyiha-rejasi.md), 2-bo'lim |

4-darvozadan keyin ishlab chiqish boshlanadi. Undan keyingi bosqichlar (kanban, code review, test, release) uchun standartning [D08](https://utamuratov.github.io/loyiha-standarti/D08-kanban-dor-dod.html)–[D14](https://utamuratov.github.io/loyiha-standarti/D14-release-va-deploy.html) doclariga qarang.

## Kichik loyihada (3–5 kishi)

Hamma fayllar kerak, lekin ular qisqaroq bo'ladi. Odatda:

- PM va analitik bitta odam bo'ladi. TZ'ni baribir PO tasdiqlaydi.
- Dizayn brief'i alohida yozilmasa, TZ'dagi ekranlar ro'yxatiga maket havolasi qo'shiladi.
- Bandlik jadvali faqat odamlar boshqa loyihalarda ham band bo'lsa to'ldiriladi.

Qaysi qism majburiy ekani har standart docning "Kichik loyihada" bandida yozilgan.

## Fayllar

| Fayl | Standart doc | Asosan kim to'ldiradi |
| --- | --- | --- |
| [Loyiha kartasi](loyiha-kartasi.md) | [Root doc](https://utamuratov.github.io/loyiha-standarti/00-root.html) | PM |
| [D01 · Jamoa va RACI](D01-jamoa-va-raci.md) | [D01](https://utamuratov.github.io/loyiha-standarti/D01-rollar-va-raci.html) | PM |
| [D02 · Loyiha rejasi](D02-loyiha-rejasi.md) | [D02](https://utamuratov.github.io/loyiha-standarti/D02-loyiha-hayot-sikli.html) | PM |
| [D03 · TZ](D03-tz.md) | [D03](https://utamuratov.github.io/loyiha-standarti/D03-loyiha-boshlangich-hujjati.html) | Analitik |
| [D04 · Dizayn brief](D04-dizayn-brief.md) | [D04](https://utamuratov.github.io/loyiha-standarti/D04-dizayn-brief-va-jarayon.html) | Analitik, dizayner |
| [D05 · Kickoff va doc review](D05-kickoff-va-doc-review.md) | [D05](https://utamuratov.github.io/loyiha-standarti/D05-kickoff-va-doc-review.html) | PM |
| [D06 · Baho va srok](D06-baho-va-srok.md) | [D06](https://utamuratov.github.io/loyiha-standarti/D06-baholash-va-srok.html) | PM, tech lead |
| [D07 · Modullar taqsimoti](D07-modullar-taqsimoti.md) | [D07](https://utamuratov.github.io/loyiha-standarti/D07-taqsimot-va-resurs.html) | PM |
| [D09 · Meetinglar ritmi](D09-meetinglar-ritmi.md) | [D09](https://utamuratov.github.io/loyiha-standarti/D09-meetinglar-ritmi.html) | PM |
| [D10 · O'zgarishlar](D10-ozgarishlar.md) | [D10](https://utamuratov.github.io/loyiha-standarti/D10-ozgarishlarni-boshqarish.html) | PM, analitik |

---

Egasi: Odilbek Utamuratov · Oxirgi yangilangan: 2026-11-11 · Keyingi ko'rib chiqish: pilot loyihaning 4-darvozasidan keyin
