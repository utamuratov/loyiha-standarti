# D02 — Loyiha hayot sikli va bosqich darvozalari

## 1. Maqsad

Loyiha qaysi bosqichlardan o'tishi, har bosqich nima bilan tugashi va keyingisiga qachon o'tish mumkinligi hamma uchun bir xil bo'lsin. Shuningdek, qarorlar va risklar bitta joyda yozib borilsin, "nega unday qilgandik?" degan savolga javob doim topilsin.

## 2. Kim uchun va qachon

- **Egasi:** PM. Bosqichlar rejasini tuzadi, darvozalarni o'tkazadi, qarorlar jurnali va risklar reestrini yuritadi.
- **Kim o'qiydi:** butun jamoa. Har bir rol o'z bosqichining kirish va chiqishini bilishi kerak.
- **Qachon:** 1-bosqichda (Boshlash) loyiha uchun bosqichlar rejasi tuziladi; har bosqich oxirida darvoza o'tkaziladi; jurnal va reestr loyiha davomida yuritiladi.

**Atamalar.** *Darvoza* (gate) — bosqich oxiridagi tekshiruv: checklist bajarilganmi va keyingi bosqichga o'tsa bo'ladimi. *UAT* (user acceptance testing) — mijozning natijani qabul qilish sinovi. *ADR* (architecture decision record) — arxitektura qarorining batafsil yozuvi ([D11](D11-dasturchilar-qoidalari.md)).

**Ikki xil darvoza.** Bu doc butun loyiha (yoki release) bosqichdan bosqichga o'tishini tekshiradi. Bitta taskning board ustunlari orasida o'tishi — [D08](D08-kanban-dor-dod.md) dagi DoR va DoD.

## 3. Bosqichlar

| # | Bosqich | Kirish | Chiqish (darvozaga olib kelinadi) | Darvozani tasdiqlaydi |
| --- | --- | --- | --- | --- |
| 1 | Boshlash | Mijoz g'oyasi yoki buyurtmasi | [D03](D03-loyiha-boshlangich-hujjati.md) Brief qismi: muammo, maqsad, muvaffaqiyat mezonlari, scope chegarasi; jamoa va rollar; hujjatlar joyi, jurnal va reestr ochilgan | Mijoz (PO) |
| 2 | Talablar | Tasdiqlangan Brief | To'liq [D03](D03-loyiha-boshlangich-hujjati.md): user story va qabul mezonlari, rollar va ruxsatlar, API kontrakti qoralamasi, nofunksional talablar, shaxsiy ma'lumotlar; D05 doc review o'tgan | Mijoz (PO) — scope; analitik — to'liqlik |
| 3 | Dizayn | Tasdiqlangan [D03](D03-loyiha-boshlangich-hujjati.md) | Barcha ekranlar barcha holatlari bilan (D04, [D12](D12-ui-ux-standartlari.md)); dasturchilar handoff'ni qabul qilgan; mijoz maketni ko'rgan | PM (mijoz tasdig'i checklist ichida) |
| 4 | Planlash | [D03](D03-loyiha-boshlangich-hujjati.md) + maketlar | Jira'da tasklar (1–3 kunlik), bajaruvchilar bahosi (D06), release'larga bo'lingan reja, kelishilgan srok | PM; srokni mijoz tasdiqlaydi |
| 5 | Ishlab chiqish | Ready ustunidagi tasklar | Release scope'idagi barcha tasklar Done ([D08](D08-kanban-dor-dod.md) DoD); regressiya o'tgan | Tech lead (QA sign-off bilan) |
| 6 | Release | Release nomzodi (staging'da) | Release checklist ([D14](D14-release-va-deploy.md)), rollback rejasi, release notes; prod'ga chiqqan | Tech lead / DevOps |
| 7 | Topshirish | Prod'dagi versiya | UAT akti, qo'llanma va o'qitish (D15) | Mijoz (PO) |
| 8 | Ekspluatatsiya | Qabul qilingan versiya | Murojaat kanali ishlaydi (D16), murojaatlar backlog'ga tushadi; retro (D17) | PM |

**Sikl.** 5–7 bosqichlar har release uchun takrorlanadi: loyiha bir nechta release'ga bo'linadi va har biri o'z darvozalaridan o'tadi. Ishlab chiqish ichida haftalik sikl aylanadi (D09). 8-bosqichda kelgan yangi talab 2-bosqichga qaytadi (D10).

## 4. Qoidalar

1. **Darvozasiz o'tish yo'q.** Keyingi bosqich ishi faqat darvoza tasdig'idan keyin boshlanadi. *Nega:* to'liq bo'lmagan doc bilan boshlangan ish keyin qayta qilinadi — rework'ning asosiy manbai.
2. **Darvoza — checklist va yozma tasdiq.** Checklist (5-bo'lim) punktma-punkt tekshiriladi; natija "Darvoza yozuvi" shablonida qayd etiladi. Og'zaki yoki Telegram'dagi "bo'ldi" tasdiq emas. *Nega:* og'zaki kelishuv esdan chiqadi va keyin bahsga aylanadi.
3. **Har darvozaning bitta tasdiqlovchisi bor** (3-bo'limdagi jadval). Boshqalar maslahat beradi, lekin qaror bitta odamda. *Nega:* "hamma tasdiqlashi kerak" degani amalda "hech kim tasdiqlamaydi".
4. **Shartli o'tish ruxsat etiladi, yashirin o'tish — yo'q.** Bajarilmagan punkt bilan o'tish mumkin, agar u risklar reestriga egasi va muddati bilan yozilsa. Bloklovchi punkt (masalan, scope tasdiqlanmagan) bilan o'tilmaydi. *Nega:* real loyihada hamma narsa bir vaqtda tayyor bo'lmaydi, lekin ochiq qolgan narsa ko'rinib turishi kerak.
5. **Darvoza loyiha yoki release darajasida o'tkaziladi.** Katta loyihada modullar turli bosqichda bo'lishi mumkin (A modul ishlab chiqishda, B dizaynda); unda darvoza har release qismi uchun alohida o'tkaziladi. *Nega:* butun loyihani bitta dizayn tugashini kutib to'xtatish shart emas.
6. **O'zgarish orqaga qaytaradi.** Tasdiqlangan scope o'zgarsa, o'zgargan qism D10 orqali 2-bosqichga qaytadi va 2–4 darvozalardan qayta o'tadi. Faqat o'zgargan qism, butun loyiha emas. *Nega:* yangi talab maket va bahosiz ishlab chiqishga tushsa, srok yashirin buziladi.
7. **Muhim qaror 1 ish kuni ichida qarorlar jurnaliga yoziladi.** Muhim qaror — scope, srok, arxitektura, UX oqimi, integratsiya yoki mijoz bilan kelishuvga ta'sir qiladigan har qanday qaror, u meetingda, Telegram'da yoki qo'ng'iroqda qabul qilinganidan qat'i nazar. Yozadi — qaror qabul qilingan suhbatdagi PM yoki tech lead. Arxitektura qarorining batafsil tahlili ADR'da ([D11](D11-dasturchilar-qoidalari.md)), jurnalda unga havola. *Nega:* "nega unday qilgandik?" va "kim aytgandi?" savollarining yagona javobi — yozilgan sabab.
8. **Risk aniqlangan kuni reestrga yoziladi** va haftalik sync'da (D09) ko'riladi. Har riskning egasi va chorasi bor. *Nega:* aytilmagan risk srok o'tib ketganda birdan "chiqadi".
9. **Jurnal va reestrning uyi bitta.** Ular loyiha hujjatlari yonida ([D03](D03-loyiha-boshlangich-hujjati.md) bilan bir joyda) yuritiladi; [D03](D03-loyiha-boshlangich-hujjati.md), D05, D09, D10 ularga havola qiladi, nusxa olmaydi. *Nega:* ikki joydagi jurnal tez orada ikki xil bo'lib qoladi.

**Kichik loyihada (3–5 kishi).** 8 bosqich va darvozalar saqlanadi, lekin darvoza 15 daqiqalik qisqa tasdiq bo'ladi; 1–2 yoki 3–4 bosqichlar bir haftada o'tishi mumkin. Jurnal va reestr majburiy.

## 5. Shablonlar

### 5.1. Darvoza checklistlari

Har darvoza uchun punktlar. ⛔ — bloklovchi: bajarilmasa o'tilmaydi (shartli o'tish ham yo'q).

**1-darvoza: Boshlash → Talablar**
- [ ] ⛔ Muammo va biznes maqsad yozilgan ([D03](D03-loyiha-boshlangich-hujjati.md) Brief)
- [ ] O'lchanadigan muvaffaqiyat mezonlari bor
- [ ] ⛔ Scope chegarasi: nima kiradi va nima kirmaydi
- [ ] Mijoz tomondan qaror qiluvchi (PO) belgilangan
- [ ] Jamoa va rollar belgilangan (root doc yoki D01)
- [ ] Hujjatlar joyi, Jira loyihasi, qarorlar jurnali va risklar reestri ochilgan

**2-darvoza: Talablar → Dizayn**
- [ ] ⛔ [D03](D03-loyiha-boshlangich-hujjati.md) to'liq; har bir story'da qabul mezoni bor
- [ ] ⛔ D05 doc review o'tgan; bloklovchi savollar soni 0
- [ ] Qolgan ochiq savollarning egasi va muddati bor
- [ ] Rollar va ruxsatlar matritsasi bor
- [ ] API kontrakti qoralamasi (asosiy endpointlar) bor
- [ ] Shaxsiy ma'lumotlar bo'limi to'ldirilgan (agar loyiha shaxsiy ma'lumot bilan ishlasa — ⛔)
- [ ] Mijoz [D03](D03-loyiha-boshlangich-hujjati.md) versiyasini yozma tasdiqlagan

**3-darvoza: Dizayn → Planlash**
- [ ] ⛔ [D03](D03-loyiha-boshlangich-hujjati.md) dagi har bir ekran chizilgan
- [ ] Har ekranning holatlari: bo'sh, yuklanmoqda, xato, ruxsat yo'q (D04)
- [ ] Komponentlar [D12](D12-ui-ux-standartlari.md) ro'yxatidan; yangi komponent bo'lsa — kelishilgan
- [ ] Dasturchilar maketni ko'rib, handoff checklistini qabul qilgan
- [ ] Mijoz maketni ko'rgan, izohlari yopilgan yoki jurnalga yozilgan

**4-darvoza: Planlash → Ishlab chiqish**
- [ ] ⛔ Birinchi release scope'idagi tasklar Jira'da, DoR bo'yicha ([D08](D08-kanban-dor-dod.md))
- [ ] ⛔ Har bahoni bajaruvchining o'zi bergan (D06)
- [ ] Loyiha release'larga bo'lingan; har release'ning scope'i va sanasi bor
- [ ] Srok mijoz bilan kelishilgan va jurnalga yozilgan
- [ ] Muhitlar (dev, staging) va CI tayyor yoki task sifatida rejada ([D14](D14-release-va-deploy.md))
- [ ] Risklar reestri ko'rib chiqilgan

**5-darvoza: Ishlab chiqish → Release**
- [ ] ⛔ Release scope'idagi barcha tasklar Done ([D08](D08-kanban-dor-dod.md) DoD)
- [ ] ⛔ Avtomatik testlar yashil ([D13](D13-test-strategiyasi.md))
- [ ] Ochiq kritik bug yo'q; qolgan bug'lar ro'yxati va qarori bor
- [ ] QA sign-off (yoki kichik jamoada — sinovni o'tkazgan odamning tasdig'i)

**6-darvoza: Release → Topshirish**
- [ ] ⛔ Staging'da tekshirilgan
- [ ] ⛔ Rollback rejasi bor ([D14](D14-release-va-deploy.md))
- [ ] Release checklist bajarilgan, release notes yozilgan
- [ ] Prod'dan keyin asosiy oqim tekshirilgan (smoke test)

**7-darvoza: Topshirish → Ekspluatatsiya**
- [ ] ⛔ UAT o'tkazilgan va akt imzolangan (yoki mijozning yozma qabuli)
- [ ] Qo'llanma yangilangan (D15)
- [ ] O'qitish o'tkazilgan (kerak bo'lsa)
- [ ] Murojaat kanali va javob vaqti mijozga aytilgan (D16)

**8: Ekspluatatsiya** — darvoza emas, doimiy holat. Har release'dan keyin retro (D17); yangi talablar 2-bosqichga.

### 5.2. Darvoza yozuvi

```
Darvoza: <N>-darvoza, <bosqich> → <bosqich>   Release: <nomi yoki "butun loyiha">
Sana: <YYYY-MM-DD>   Tasdiqlovchi: <ism, rol>
Checklist: <bajarilgan>/<jami>; bloklovchilar — hammasi bajarilgan
Shartli o'tilgan punktlar: <punkt> → R-<ID> (egasi, muddat)
Qaror: o'tildi / o'tilmadi (sababi)
Havola: <checklist, D03 versiyasi, Jira>
```

### 5.3. Qarorlar jurnali

| ID | Sana | Qaror | Sabab va ko'rilgan variantlar | Kim qaror qildi | Ta'siri | Manba | Holat |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Q-01 | | | | | scope / srok / kod / UX | meeting protokoli, Jira, Telegram havolasi | amalda / bekor qilingan (→ Q-xx) |

Qaror o'zgarsa, eski qator o'chirilmaydi: holati "bekor qilingan" bo'ladi va yangi qarorga havola qo'yiladi.

### 5.4. Risklar reestri

| ID | Risk | Ehtimollik | Ta'sir | Egasi | Chora | Muddat | Holat |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R-01 | | past / o'rta / yuqori | past / o'rta / yuqori | | | | ochiq / yopilgan / sodir bo'ldi |

## 6. Misol

Shu doc bo'yicha to'ldirilgan variant — misol loyihada: [Test Platformasi · Loyiha rejasi, qarorlar va risklar](loyihalar/test-platformasi/D02-loyiha-rejasi.md).

## 7. Checklist: loyihada D02 qo'llandimi

- [ ] Loyiha boshida bosqichlar rejasi va release'larga bo'linish yozilgan
- [ ] Har darvozaning tasdiqlovchisi ismi bilan belgilangan
- [ ] Qarorlar jurnali va risklar reestri ochilgan, [D03](D03-loyiha-boshlangich-hujjati.md) dan havola bor
- [ ] Har o'tilgan darvoza uchun darvoza yozuvi bor
- [ ] Shartli o'tilgan har punkt reestrda egasi va muddati bilan
- [ ] Haftalik sync'da risklar reestri ko'rilmoqda
- [ ] Telegram'da qabul qilingan muhim qarorlar ham jurnalda bor

## 8. Tez-tez uchraydigan xatolar

1. **"Dizayner hozircha boshlab tursin".** [D03](D03-loyiha-boshlangich-hujjati.md) tasdiqlanmasdan dizayn boshlanadi, keyin maketlar qayta chiziladi. To'g'risi: 2-darvozani kuting yoki tasdiqlangan qism (release) bo'yicha boshlang.
2. **Darvoza — formallik.** Checklist "hammasi bor" deb o'qilmasdan belgilanadi. To'g'risi: tasdiqlovchi har punktga havola (doc, Jira) so'raydi.
3. **Qaror Telegram'da qoladi.** Bir oydan keyin hech kim topolmaydi. To'g'risi: kelishuvdan keyin 1 ish kuni ichida jurnalga yozish va Telegram'ga jurnal havolasini tashlash.
4. **Risklar reestri loyiha boshida to'ldirilib, keyin ochilmaydi.** To'g'risi: haftalik sync agendasida doimiy punkt.
5. **Bitta katta release.** Hamma narsa oxirida birga chiqadi va birinchi fikr juda kech keladi. To'g'risi: kamida 2–3 release'ga bo'lish.

---

Egasi: PM · Oxirgi yangilangan: 2026-11-07 · Keyingi ko'rib chiqish: pilot loyiha retrosidan keyin (D17)
