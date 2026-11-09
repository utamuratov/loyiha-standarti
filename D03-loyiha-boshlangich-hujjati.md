# D03 — Loyiha boshlang'ich hujjati (Brief + TZ)

## 1. Maqsad

Loyiha bo'yicha barcha rollar bir xil tushunadigan yagona manba bo'lsin: nima quriladi, kim uchun, nima kirmaydi va "tayyor" qanday tekshiriladi. Bu doc rework'ning asosiy sababini — ish boshlanganda talab va qabul mezoni yozilmagan bo'lishini — yopadi.

## 2. Kim uchun va qachon

- **Egasi:** biznes analitik (kichik jamoada — PM). Yozadi, versiyasini yuritadi, savollarni yopadi.
- **Tasdiqlaydi:** mijoz (PO) — scope va story'lar bo'yicha yozma tasdiq.
- **Kim nimani o'qiydi:**

| Rol | D03 dan nima oladi |
| --- | --- |
| Dizayner | Ekranlar ro'yxati, story'lar, xato holatlari — maket uchun ([D04](D04-dizayn-brief-va-jarayon.md)) |
| Dasturchi / tech lead | Story'lar, ruxsatlar, API kontrakti talablari, nofunksional talablar — baholash ([D06](D06-baholash-va-srok.md)) va kod uchun |
| QA | Qabul mezonlari — test ssenariylari uchun ([D13](D13-test-strategiyasi.md)) |
| PM | Scope va release'lar — reja va srok uchun ([D02](D02-loyiha-hayot-sikli.md), [D06](D06-baholash-va-srok.md)) |
| Support | Rollar va asosiy oqimlar — qo'llanma uchun ([D15](D15-qollanma-va-oqitish.md)) |

- **Qachon:**
  - 1-bosqich (Boshlash): **Brief** qismi, 1–2 sahifa — 1-darvozaga.
  - 2-bosqich (Talablar): **to'liq TZ** — [D05](D05-kickoff-va-doc-review.md) doc review'dan o'tib, 2-darvozaga.
  - Keyin: faqat [D10](D10-ozgarishlarni-boshqarish.md) (change request) orqali o'zgaradi.

**Atamalar.** *User story* — foydalanuvchi nuqtai nazaridan yozilgan talab: "kim, nima qiladi, nima uchun". *Qabul mezoni* (acceptance criteria) — story bajarilganini tekshiradigan aniq shartlar. *API kontrakti* — frontend va backend o'rtasidagi kelishuv: endpoint, so'rov va javob formati, xato kodlari. *Nofunksional talab* — tizim *qanday* ishlashi: tezlik, yuklama, xavfsizlik.

## 3. Qoidalar

1. **Bitta loyiha — bitta D03.** Talab chatda, ovozli xabarda yoki alohida faylda bo'lsa, u D03 ga tushmaguncha talab hisoblanmaydi. *Nega:* tarqoq talablarni har kim o'zicha yig'adi va farq oxirida chiqadi.
2. **Avval Brief, keyin TZ.** Brief'da faqat muammo, maqsad, muvaffaqiyat mezoni va scope chegarasi. Story'lar mijoz Brief'ni tasdiqlagandan keyin yoziladi. *Nega:* maqsad kelishilmasdan yozilgan detallar butunlay qayta yoziladi.
3. **Scope'da "kirmaydi" ro'yxati majburiy.** *Nega:* aytilmagan narsani mijoz "bo'ladi" deb, jamoa "bo'lmaydi" deb tushunadi.
4. **Har story'ning ID'si va kamida 2 ta qabul mezoni bor, ulardan biri — xato yoki chegaraviy holat.** Format: "Agar … / Qachon … / Unda …". *Nega:* dizayner xato holatini chizadi, dasturchi uni kodlaydi, QA tekshiradi — hammasi bitta matndan.
5. **Story ID boshqa joylarda ham ishlatiladi:** Jira task, Figma ekran, test ssenariysi. *Nega:* o'zgarish bo'lsa, nimalarga ta'sir qilishi bir qidiruvda topiladi.
6. **Har bir rol va ruxsat matritsada.** Rol nima ko'radi, nima qiladi, nima qila olmaydi. *Nega:* ruxsatlar odatda oxirida esga olinadi va xavfsizlik teshigi bo'ladi.
7. **Sozlanadigan xulq-atvor alohida ro'yxatda.** Admin yoqib-o'chira oladigan har bir narsa — nomi, standart qiymati, qachon kuchga kirishi. *Nega:* "qachon kuchga kiradi" yozilmasa, har dasturchi o'zicha qiladi.
8. **Nofunksional talablar raqam bilan.** "Tez ishlasin" emas, "imtihon kuni bir vaqtda N ishtirokchi, javobni saqlash 1 soniyadan oshmaydi". *Nega:* raqamsiz talabni tekshirib ham, baholab ham bo'lmaydi.
9. **Shaxsiy ma'lumot bilan ishlansa, alohida bo'lim majburiy:** qaysi ma'lumot, nima uchun, rozilik qanday olinadi va qayd etiladi, kim ko'radi, qayerda va qancha saqlanadi, qachon o'chiriladi. Himoyaning texnik qoidalari — [D14](D14-release-va-deploy.md). *Nega:* bu huquqiy majburiyat; keyin qo'shish qimmat.
10. **API kontrakti talablari D03 da, jarayoni [D11](D11-dasturchilar-qoidalari.md) da.** D03 da: qaysi ma'lumot oqimlari, asosiy endpointlar, xato holatlari va kontrakt fayli qayerda saqlanishi. 2-darvozaga qoralama, 3-darvozagacha asosiy endpointlar kelishilgan bo'ladi. *Nega:* frontend va backend bir vaqtda ishlay olishi uchun kontrakt koddan oldin turishi kerak.
11. **Ochiq savollar — egasi va muddati bilan.** Ish boshlanishini to'xtatadigan savol "bloklovchi" deb belgilanadi ([D05](D05-kickoff-va-doc-review.md)). *Nega:* egasiz savol hech qachon yopilmaydi.
12. **Faraz yozib qo'yiladi.** Ma'lumot yo'q bo'lsa, faraz qilinadi va "faraz" deb belgilanadi. *Nega:* faraz noto'g'ri chiqsa, qaysi qism qayta ko'rilishi ko'rinadi.
13. **Versiya va tasdiq.** Har tasdiqlangan versiya raqamlanadi (v1.0, v1.1 …); mijozning yozma tasdig'i va tasdiqlangan versiya raqami Jira epic'ida turadi. Risklar D03 da emas, [D02](D02-loyiha-hayot-sikli.md) risklar reestrida. *Nega:* "qaysi versiya bo'yicha qildik" degan bahs bo'lmaydi.

**Kichik loyihada.** Shablonning hamma bo'limlari qoladi, lekin har biri qisqa bo'lishi mumkin. Dizayn brief'i ([D04](D04-dizayn-brief-va-jarayon.md)) alohida yozilmasa, ekranlar ro'yxatiga maket havolasi qo'shiladi.

## 4. Shablon

```markdown
# <Loyiha nomi> — TZ
Versiya: v<X.Y> · Holat: qoralama / review'da / tasdiqlangan · Egasi: <analitik>
Tasdiqlagan: <mijoz PO, sana>

## A. Brief
1. Muammo — kim, qanday qiyinchilikka duch keladi (2–4 gap)
2. Biznes maqsad
3. Muvaffaqiyat mezonlari — o'lchanadigan, raqam bilan
4. Foydalanuvchilar va rollar — qisqa
5. Scope chegarasi — kiradi / kirmaydi
6. Cheklovlar — muddat, byudjet, texnologiya, huquqiy talablar

## B. Talablar
7. Release'lar — har biriga qaysi story'lar kiradi (D02)
8. Ekranlar ro'yxati — ID, nomi, rol, maket havolasi
9. User story'lar
   US-<NN>. <rol> sifatida <harakat>, <maqsad> uchun.
   Qabul mezonlari:
   - Agar <holat>, qachon <harakat>, unda <natija>.
   - (kamida bitta xato yoki chegaraviy holat)
10. Rollar va ruxsatlar matritsasi
11. Sozlamalar — nomi, ta'siri, standart qiymati, qachon kuchga kiradi
12. Integratsiyalar — tashqi tizim, nima uchun, kim egasi
13. API kontrakti talablari — asosiy endpointlar, xato holatlari, kontrakt fayli havolasi
14. Nofunksional talablar — tezlik, yuklama, ishonchlilik, xavfsizlik, qurilma va brauzerlar
15. Shaxsiy ma'lumotlar — ma'lumot, maqsad, rozilik, kim ko'radi, saqlash joyi va muddati, o'chirish
16. Farazlar
17. Ochiq savollar — savol, egasi, muddat, bloklovchi (ha/yo'q)
18. Risklar — D02 reestriga havola
19. Versiyalar tarixi — versiya, sana, nima o'zgardi, asos (D10 change request)
```

## 5. Misol

Shu doc bo'yicha to'ldirilgan variant — misol loyihada: [Test Platformasi · TZ (qisqartirilgan)](loyihalar/test-platformasi/D03-tz.md).

## 6. Checklist: D03 tayyormi

- [ ] Brief mijoz tomonidan tasdiqlangan (1-darvoza)
- [ ] Scope'da "kirmaydi" ro'yxati bor
- [ ] Har story'ning ID'si va kamida 2 ta qabul mezoni bor, biri — xato yoki chegaraviy holat
- [ ] Har ekranning ID'si va tegishli story'lari bor
- [ ] Rollar va ruxsatlar matritsasida har rol uchun ruxsat etilgan va taqiqlangan harakatlar bor
- [ ] Sozlamalar "qachon kuchga kiradi" bilan yozilgan
- [ ] Nofunksional talablarda raqamlar bor yoki ochiq savol sifatida yozilgan
- [ ] Shaxsiy ma'lumotlar bo'limi to'ldirilgan (agar tegishli bo'lsa)
- [ ] API kontrakti qoralamasi va kontrakt fayli havolasi bor
- [ ] [D05](D05-kickoff-va-doc-review.md) doc review'da bloklovchi savollar soni 0; qolgan savollarning egasi va muddati bor
- [ ] Versiya raqami va mijozning yozma tasdig'i Jira epic'ida

## 7. Tez-tez uchraydigan xatolar

1. **Faqat "baxtli yo'l".** Story'larda internet uzilishi, topilmagan foydalanuvchi, ruxsat yo'qligi yozilmaydi — ular release oldidan bug bo'lib chiqadi.
2. **"Va hokazo" bilan tugaydigan scope.** "Hisobotlar va h.k." — baholab ham, qabul qilib ham bo'lmaydi. Har bir narsa nomi bilan yoki "kirmaydi" ro'yxatida.
3. **TZ — bir martalik hujjat.** Tasdiqlangandan keyin o'zgarishlar chatda qoladi va D03 eskiradi. To'g'risi: har o'zgarish [D10](D10-ozgarishlarni-boshqarish.md) orqali va versiyalar tarixida.
4. **Dasturchi yozadigan narsani analitik yozadi.** TZ'da jadval nomlari, kod tuzilmasi. To'g'risi: D03 "nima" va "qanday tekshiriladi" ni yozadi; "qanday quriladi" — ADR va kod ([D11](D11-dasturchilar-qoidalari.md)).
5. **Raqamsiz nofunksional talablar.** "Ko'p foydalanuvchiga chidasin" — yuklama testi nimaga qarab o'tkazilishi noma'lum.

---

Egasi: biznes analitik · Oxirgi yangilangan: 2026-11-07 · Keyingi ko'rib chiqish: pilot loyiha retrosidan keyin ([D17](D17-retro-va-standartni-yangilash.md))
