# D10 — O'zgarishlarni boshqarish (change request)

*`[b.q.]` — boshlang'ich qiymat: bu raqam manbadan olinmagan, standart yozilganda taklif sifatida qo'yilgan; pilotda tekshiriladi va retroda ([D17](D17-retro-va-standartni-yangilash.md)) tuzatiladi. Barcha bunday qiymatlar va manbalar — [Manbalar](manbalar.md).*

## 1. Maqsad

Tasdiqlangan scope'ga kelgan har yangi talab yoki o'zgarish srok va baho bilan birga ko'rilsin va yozma qaror bilan qabul qilinsin, toki "yo'l-yo'lakay qo'shib qo'ying" degan so'rov srokni yashirin buzmasin. Shu bilan birga kichik aniqlashtirishlar og'ir jarayonga tushmasin: o'zgarish hajmiga qarab yo'l ham yengil yoki to'liq bo'ladi.

## 2. Kim uchun va qachon

- **Egasi:** PM. U change request'ni (CR) rasmiylashtiradi, ta'sirini yig'adi va qarorni PO'dan oladi. RACI bo'yicha ([D01](D01-rollar-va-raci.md)) A — PO, R — PM.
- **Kim nima qiladi:**

| Rol | Vazifasi |
| --- | --- |
| Har kim (jamoa a'zosi) | Mijozdan kelgan so'rovni 1 ish kunida Backlog'ga yozadi; mijozga o'zi "ha" demaydi |
| PM | CR'ni ochadi, ta'sirini yig'adi, variantlarni PO'ga beradi, qarorni yozadi |
| Analitik | O'zgarishni TZ tiliga o'giradi: qaysi story, qabul mezoni va ekran o'zgarishini yozadi; TZ versiyasini yangilaydi |
| Dizayner, dasturchilar | O'z qismi bo'yicha ta'sir va baho beradi ([D06](D06-baholash-va-srok.md)) |
| PO (mijoz) | Kichik va katta CR'ni tasdiqlaydi yoki rad etadi; variantlardan birini tanlaydi |

- **Qachon:** TZ ([D03](D03-loyiha-boshlangich-hujjati.md)) 2-darvozada tasdiqlangandan keyin loyihaning oxirigacha. So'rov qayerdan kelishidan qat'i nazar qo'llanadi: demo ([D09](D09-meetinglar-ritmi.md)), dizayn review ([D04](D04-dizayn-brief-va-jarayon.md)), Telegram, qo'ng'iroq, ekspluatatsiyadagi murojaat ([D16](D16-support-va-fikr-yigish.md)) yoki jamoaning o'z taklifi.

**Atamalar.**
- *Change request (CR)* — tasdiqlangan TZ'ni o'zgartirish so'rovi: yangi story, o'zgargan qabul mezoni, yangi ekran, o'zgargan nofunksional talab.
- *Aniqlashtirish* — TZ'dagi noaniq joyga javob; u ish hajmini oshirmaydi.
- *Bug* — qurilgan narsaning tasdiqlangan qabul mezoniga mos kelmasligi. Bug CR emas, u [D08](D08-kanban-dor-dod.md) dagi bug shabloni bo'yicha ochiladi.
- *Ta'sir tahlili* — o'zgarish nimalarga tegishini yozish: scope, baho, srok, boshqa rollar ishi, risklar.

## 3. Qoidalar

1. **Har bir so'rov 1 ish kuni [b.q.] ichida Backlog'ga yoziladi, javobni esa PM beradi.** So'rovni qabul qilgan odam uni `change-request` labeli bilan Backlog'ga yozadi va so'rovchiga "yozib oldim, PM ta'siri bilan qaytadi" deydi. Jamoa a'zosi mijozga "ha, qilamiz" demaydi. *Nega:* bitta "ha" baholanmagan va rejada yo'q ishni keltirib chiqaradi; uni keyin rad etish ancha qiyin.
2. **Avval so'rovning turi aniqlanadi.** PM va analitik so'rovni uch turdan biriga ajratadi (4-bo'lim): aniqlashtirish, kichik CR yoki katta CR. So'rov bug bo'lsa, u [D08](D08-kanban-dor-dod.md) bo'yicha bug sifatida ochiladi. *Nega:* har bir aniqlashtirishni to'liq CR qilish byurokratiya bo'ladi; har bir katta o'zgarishni "aniqlashtirish" deb o'tkazish esa yashirin scope'ga aylanadi.
3. **Bahosiz qaror qabul qilinmaydi.** Kichik va katta CR'ning bahosini bajaruvchilar beradi ([D06](D06-baholash-va-srok.md), 2-qoida); ta'sir tahlili 1–2 ish kuni [b.q.] ichida PO'ga yetkaziladi. *Nega:* "qancha turadi?" deb so'ramasdan qabul qilingan o'zgarish srokdan yashirincha olinadi.
4. **Katta CR variantlar bilan beriladi, ulardan birini PO tanlaydi.** PM kamida ikki variant beradi: (a) qo'shish va sanani surish; (b) qo'shish va boshqa story'ni keyingi release'ga chiqarish; (c) CR'ni keyingi release'ga qoldirish. Test va review'ni qisqartirish variant emas ([D06](D06-baholash-va-srok.md), 9-qoida). *Nega:* mijoz o'zgarishning narxini ko'rgandagina uning qanchalik muhimligini aniq ayta oladi.
5. **Qabul qilingan CR hujjatlarda aks etadi, keyin ishga olinadi.** Tartib quyidagicha: qaror qarorlar jurnaliga yoziladi ([D02](D02-loyiha-hayot-sikli.md)); TZ'ning yangi versiyasi chiqariladi va versiyalar tarixiga CR raqami bilan yoziladi ([D03](D03-loyiha-boshlangich-hujjati.md)); maket o'zgarsa, yangi Handoff versiyasi saqlanadi ([D04](D04-dizayn-brief-va-jarayon.md)); tasklar va reja yangilanadi; srok o'zgarsa, mijozga yangilangan srok xati yuboriladi ([D06](D06-baholash-va-srok.md)). Shundan keyingina task Ready'ga o'tadi ([D08](D08-kanban-dor-dod.md)). *Nega:* TZ'da yo'q o'zgarishni QA tekshira olmaydi, keyingi dasturchi esa "nega bunday?" deb so'raydi.
6. **Katta CR darvozalardan qayta o'tadi.** O'zgargan qism 2–4-darvozalardan o'tadi: TZ'ning shu qismi review qilinadi (o'zgarish katta bo'lsa, qisqa doc review o'tkaziladi, [D05](D05-kickoff-va-doc-review.md)), maket chiziladi va ish baholanadi ([D02](D02-loyiha-hayot-sikli.md), 6-qoida). Butun loyiha emas, faqat o'zgargan qism qaytadi. *Nega:* maket va bahosiz ishlab chiqishga tushgan talab rework'ga olib boradigan eng tez yo'l.
7. **Release scope'i yopilgandan keyin CR faqat keyingi release'ga kiradi.** Release'ning oxirgi haftasida (yoki 5-darvozadan 5 ish kuni [b.q.] oldin) yangi CR shu release'ga kirmaydi; kritik istisnoni PO va tech lead birga, yozma qaror bilan qiladi. *Nega:* oxirgi kunlardagi o'zgarish regressiya va testga vaqt qoldirmaydi va prod'dagi bug'ga aylanadi.
8. **Rad etilgan CR ham yoziladi.** U qarorlar jurnaliga sababi bilan yoziladi: "R2 ga qoldirildi", "rad etildi — maqsadga ta'sir qilmaydi". *Nega:* bir oydan keyin xuddi shu so'rov qaytadi; yozilgan sabab bahsni bir daqiqada yopadi.
9. **Narx va shartnomaga ta'sir alohida hal qilinadi.** CR shartnoma narxi yoki muddatiga ta'sir qilsa, PM ta'sir tahlilini kompaniyaning tijorat tartibi bo'yicha mas'ul odamga beradi; bu doc faqat ta'sirni hisoblaydi va qarorni yozadi. *Nega:* jamoa ichida "bepul qilib beramiz" deb qabul qilingan o'zgarish kompaniya hisobidan bajariladi.
10. **CR'lar soni va hajmi retroda ko'riladi.** PM har release oxirida CR'lar sonini, jami bahosini va qaysi bosqichda kelganini hisoblaydi ([D17](D17-retro-va-standartni-yangilash.md)). *Nega:* CR'lar ko'p bo'lsa, bu TZ yoki doc review'da biror narsa o'tkazib yuborilganining belgisi; raqam qayerni tuzatish kerakligini ko'rsatadi.

## 4. O'zgarish turlari

| Tur | Belgisi | Kim tasdiqlaydi | Yo'li |
| --- | --- | --- | --- |
| **Aniqlashtirish** | Ish hajmi o'zgarmaydi; qabul mezonining ma'nosi saqlanadi | Analitik | TZ'ga yoziladi va versiyalar tarixida "aniqlashtirish" deb belgilanadi; jamoa kanaliga xabar beriladi |
| **Kichik CR** | Jami baho 1 ish kunidan oshmaydi [b.q.]; release buferiga sig'adi ([D06](D06-baholash-va-srok.md), 5-qoida); maket handoff'i, API kontrakti va srok o'zgarmaydi | PO yozma "ha" bilan (xabar yetarli) | Qisqa CR (5.1 ning 1–4-qatorlari), TZ versiyasi, jurnal; bufer hisobidan bajariladi |
| **Katta CR** | Yuqoridagi shartlardan biri bajarilmaydi | PO variantlardan birini tanlab | To'liq CR (5.1), ta'sir tahlili, variantlar, darvozalardan qayta o'tish (6-qoida) |

Buferning yarmidan [b.q.] ko'pi kichik CR'larga sarflansa, keyingi har bir CR katta deb hisoblanadi va PO'ga variantlar bilan beriladi. *Nega:* kichik o'zgarishlar alohida olganda arzon, birga esa srokni yeb qo'yadi.

**Kichik loyihada (3–5 kishi).** Shu uch tur va 1-, 3-, 5-qoidalar majburiy. Katta CR uchun to'liq doc review shart emas: analitik va dasturchining yozma ko'rigi yetarli.

## 5. Shablonlar

### 5.1. Change request

```
CR-<NN>   Sana: <sana>   Kim so'radi: <ism, rol>   Qayerdan: demo / Telegram / murojaat / jamoa
Tur: aniqlashtirish / kichik / katta

1. Nima: <o'zgarish, so'rovchining so'zi bilan>
2. Nega: <qaysi muammoni yechadi, kim uchun>
3. TZ'ga ta'siri: story US-<NN> (yangi / o'zgaradi), ekran E-<NN>, qabul mezonlari
4. Baho: <soat> — <kim baholadi>   (fe / be / design / test)
--- katta CR uchun ---
5. Boshqa ishlarga ta'siri: maket (handoff v<N>), API kontrakti, testlar, qo'llanma
6. Srok va release'ga ta'siri: R<N> sanasi <sana> → <sana> yoki <story> R<N+1> ga
7. Risklar: <yangi yoki o'zgargan, R-<NN>>
8. Variantlar:
   A) <...>
   B) <...>
   C) <...>
   Tavsiyamiz: <variant va nega>

Qaror: qabul qilindi (<variant>) / keyingi release'ga / rad etildi — <sabab>
Tasdiqladi: PO — <ism>, <sana>   Jurnal: Q-<NN>   TZ: v<X.Y>
```

### 5.2. TZ versiyalar tarixi qatori

```
| v<X.Y> | <sana> | <nima o'zgardi, qisqa> | CR-<NN> / aniqlashtirish | <kim tasdiqladi> |
```

## 6. Misol

Misol loyihadagi change request [Board va tasklar](loyihalar/test-platformasi/D08-board-va-tasklar.md) faylining "Change request" bo'limida: unda TZ'dagi ochiq savol mijoz javobidan keyin CR'ga aylanishi ko'rsatilgan. To'liq misol (ishlab chiqish o'rtasida yangi mijoz uchun alohida build qo'shilishi) hali yozilmagan: [loyiha kartasidagi "Hujjatlar" jadvalida](loyihalar/test-platformasi/index.md) u "rejada" deb belgilangan.

## 7. Checklist: o'zgarishlar boshqarilyaptimi

- [ ] Oxirgi 2 haftada mijozdan kelgan har bir so'rov Backlog'da `change-request` labeli bilan bor (chat va demo protokollari bilan solishtiriladi)
- [ ] Har bir CR'ning turi va bahosi bor; katta CR'larda variantlar va PO qarori bor
- [ ] Qabul qilingan har CR uchun TZ versiyalar tarixida CR raqami va qarorlar jurnalida yozuv bor
- [ ] Ready yoki In progress'dagi hech bir `change-request` task'i qarorsiz emas
- [ ] Release'ning oxirgi haftasida shu release'ga kirgan CR yo'q (yoki yozma istisno qarori bor)
- [ ] Rad etilgan CR'lar jurnalga sababi bilan yozilgan
- [ ] Release oxirida CR'lar soni va hajmi hisoblangan va retroga berilgan

## 8. Tez-tez uchraydigan xatolar

1. **"Shu tugmani ham qo'shib yuboring".** Telegram'dagi so'rov to'g'ridan-to'g'ri dasturchiga boradi va hech qayerda yozilmaydi. To'g'risi: so'rovni Backlog'ga yozish, turini aniqlash va shundan keyin ishga olish.
2. **Dasturchi mijozga "ha" deydi.** U buni yaxshi niyat bilan qiladi, lekin baholanmagan ish rejaga tushadi. To'g'risi: "yozib oldim, PM ta'siri bilan qaytadi" deb javob berish.
3. **Katta o'zgarish "aniqlashtirish" niqobida keladi.** "Bu TZ'da nazarda tutilgan edi" deyiladi, lekin aslida yangi ekran va yangi endpoint kerak. To'g'risi: tur 4-bo'limdagi belgilar bo'yicha aniqlanadi.
4. **CR qabul qilindi, TZ esa eskicha qoldi.** QA eski qabul mezoni bo'yicha tekshiradi va "bug" ochadi. To'g'risi: TZ versiyasini ishga olishdan oldin yangilash.
5. **Release kuni o'zgarish kiritiladi.** "Juda kichkina" deb oxirgi kunda kiritilgan o'zgarish prod'ni buzadi. To'g'risi: release scope'i yopilgach, o'zgarish faqat keyingi release'ga kiradi.

---

Egasi: PM · Oxirgi yangilangan: 2026-11-09 · Keyingi ko'rib chiqish: pilot loyiha retrosidan keyin ([D17](D17-retro-va-standartni-yangilash.md))
