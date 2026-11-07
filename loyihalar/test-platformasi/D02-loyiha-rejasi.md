# D02 · Loyiha rejasi, qarorlar va risklar

Standart: [D02 — Loyiha hayot sikli va bosqich darvozalari](../../D02-loyiha-hayot-sikli.md). Misol loyiha: [Test Platformasi](index.md).

Jamoa 5 kishi — kichik loyiha, darvozalar qisqa shaklda.

## Release'larga bo'lish (namunaviy)

Bir martada hamma narsani qurish o'rniga, Test Platformasi uch release'ga bo'linadi. Har biri 5–7 bosqichlardan alohida o'tadi.

| Release | Scope | Nega shu tartibda |
| --- | --- | --- |
| R1 | Nazoratchi login → JShShIR → ariza → test → natija; savol turlari, taymer | Asosiy qiymat: test topshirish ishlaydi |
| R2 | Face ID (testdan oldin MyID, test davomida yuzni tekshirish), proktoring, desktop agent | Eng ko'p noaniqlik va integratsiya shu yerda — R1 barqaror bo'lgach |
| R3 | Ommaviy test portali; yangi mijozlar uchun alohida build'lar | Mustaqil qism, asosiy oqimga ta'sir qilmaydi |

[TO'LDIRILSIN: Test Platformasining real birinchi release scope'i boshqacha bo'lgan bo'lsa, bu bo'linish faqat ssenariy uchun taklif ekanini review'da tasdiqlash]

## 2-darvoza yozuvi (namunaviy)

```
Darvoza: 2-darvoza, Talablar → Dizayn   Release: R2 (Face ID va proktoring)
Sana: <YYYY-MM-DD>   Tasdiqlovchi: <mijoz PO>
Checklist: 6/7; bloklovchilar — hammasi bajarilgan
Shartli o'tilgan punktlar:
  "API kontrakti qoralamasi" — desktop agent bilan almashinuv formati kelishilmagan
  → R-04 (egasi: backend, muddat: 3-darvozagacha)
Qaror: o'tildi
Havola: D03 v1.3, Jira epic "R2"
```

Shaxsiy ma'lumotlar bo'limi bu release uchun bloklovchi edi: R2 yuz tasvirini qayta ishlaydi, shuning uchun qaysi tasvir qayerda solishtirilishi va qancha saqlanishi [TZ](D03-tz.md) da yozilmaguncha darvoza o'tmaydi.

## Qarorlar jurnalidan yozuvlar

Qarorlarning o'zi hozirgi Test Platformasidan olingan (manbasi ko'rsatilgan); sabab va variantlar — ssenariy uchun namuna.

| ID | Qaror | Sabab va ko'rilgan variantlar | Ta'siri | Manba (faktning) |
| --- | --- | --- | --- | --- |
| Q-01 | Yuz testdan oldin MyID orqali (backend'da), test davomida esa brauzerning o'zida davriy tekshiriladi | Faqat boshida tekshirish — test o'rtasida odam almashishini ushlamaydi; har snapshot'ni serverga yuborish — tarmoq va server yuklamasi | kod, UX | `test-uzedu-user/docs/face-verification.md` |
| Q-02 | Bitta kod bazasi, har mijoz uchun alohida build konfiguratsiyasi | Har mijozga alohida repo — tuzatishlarni ko'chirish qimmat; bitta build va runtime sozlama — [TO'LDIRILSIN: nega tanlanmadi] | kod, release | `test-uzedu-user/package.json` |
| Q-03 | Tarjimalar backend'da saqlanadi, frontend ularni yuklaydi | Tarjimani o'zgartirish uchun frontend release kerak bo'lmasin | kod, release | `test-uzedu-user/docs/translations.md` |
| Q-04 | E2E testlar backend'siz, to'liq mock bilan ishlaydi | Staging backend holatiga bog'liq bo'lmagan barqaror testlar; real integratsiya backend integration testlarida | test | `test-uzedu-user/docs/e2e-testing.md` |

## Risklar reestridan yozuvlar (namunaviy)

| ID | Risk | Ehtimollik | Ta'sir | Egasi | Chora |
| --- | --- | --- | --- | --- | --- |
| R-01 | Nomzod kamerasi yoki yorug'lik sabab Face ID'dan o'ta olmaydi va test boshlanmaydi | o'rta | yuqori | Analitik | [TZ](D03-tz.md) da muqobil yo'l (nazoratchi tasdig'i) belgilash; D15 da kamera talablari |
| R-02 | JShShIR yoki yuz tasvirlari loglar yoki staging orqali sizib chiqadi | past | yuqori | Tech lead | [TZ](D03-tz.md) shaxsiy ma'lumotlar bo'limi; [D14](../../D14-release-va-deploy.md) dagi himoya qoidalari |
| R-03 | Test vaqtida bir vaqtda ko'p nomzod — yuklama cho'qqisi | o'rta | yuqori | Backend | Nofunksional talabda yuklama soni; release oldidan yuklama testi |
| R-04 | Desktop agent bilan almashinuv formati kech kelishiladi | o'rta | o'rta | Backend | 3-darvozagacha kontraktni yopish |
| R-05 | Frontend bitta odamda — u yo'q bo'lsa ish to'xtaydi | yuqori | yuqori | PM | Code review'ni backendchi ham qiladi; `docs/` va `CLAUDE.md` yuritiladi (D07, [D11](../../D11-dasturchilar-qoidalari.md)) |

---

Egasi: PM · Oxirgi yangilangan: 2026-11-07 · Keyingi ko'rib chiqish: standartdagi [D02](../../D02-loyiha-hayot-sikli.md) o'zgarganda
