# D03 · TZ: ____

> - **Standart:** [D03 — Loyiha boshlang'ich hujjati](https://utamuratov.github.io/loyiha-standarti/D03-loyiha-boshlangich-hujjati.html) (har bo'lim uchun qoida va "nega" shu yerda).
> - **Kim to'ldiradi:** analitik (kichik jamoada PM). **Tasdiqlaydi:** PO, yozma.
> - **Qachon:** A qism (Brief) — 1-bosqichda, 1-darvozagacha. B qism — 2-bosqichda, doc review'dan o'tib, 2-darvozagacha. Undan keyin TZ faqat [change request](D10-ozgarishlar.md) orqali o'zgaradi.

Versiya: v0.1 · Holat: qoralama / review'da / tasdiqlangan · Egasi: ____
Tasdiqlagan: ____ (PO), sana ____ · Tasdiq qayerda: Jira epic ____

## A. Brief

### 1. Muammo

Kim, qanday qiyinchilikka duch keladi (2–4 gap).

____

### 2. Biznes maqsad

____

### 3. Muvaffaqiyat mezonlari

Raqam bilan o'lchanadigan bo'lsin: "tez" emas, "N daqiqadan kam".

| Mezon | Hozir | Maqsad | Qanday o'lchanadi |
| --- | --- | --- | --- |
| | | | |

### 4. Foydalanuvchilar va rollar

| Rol | Kim (qisqa) | Asosiy vazifasi tizimda |
| --- | --- | --- |
| | | |

### 5. Scope chegarasi

**Kiradi:**
- ____

**Kirmaydi** (majburiy ro'yxat):
- ____

### 6. Cheklovlar

Muddat, byudjet, texnologiya, huquqiy talablar: ____

## B. Talablar

### 7. Release'lar

| Release | Story'lar | Maqsad |
| --- | --- | --- |
| R1 | US-01, … | |

### 8. Ekranlar ro'yxati

| ID | Ekran | Rol | Story'lar | Maket havolasi |
| --- | --- | --- | --- | --- |
| E-01 | | | | |

Ro'yxatda yo'q ekran chizilmaydi: u avval shu yerga qo'shiladi.

### 9. User story'lar

Har story'da kamida 2 ta qabul mezoni bo'ladi, ulardan biri — xato yoki chegaraviy holat.

**US-01.** ____ sifatida ____ qilaman, ____ uchun.

Qabul mezonlari:
- Agar ____, qachon ____, unda ____.
- Agar ____ (xato yoki chegaraviy holat), qachon ____, unda ____.

### 10. Rollar va ruxsatlar matritsasi

| Harakat | Rol 1 | Rol 2 | Rol 3 |
| --- | --- | --- | --- |
| | ruxsat / yo'q | | |

### 11. Sozlamalar

Admin yoqib-o'chira oladigan narsalar.

| Sozlama | Ta'siri | Standart qiymati | Qachon kuchga kiradi |
| --- | --- | --- | --- |
| | | | |

### 12. Integratsiyalar

| Tashqi tizim | Nima uchun | Egasi (kim bilan kelishiladi) |
| --- | --- | --- |
| | | |

### 13. API kontrakti talablari

| Endpoint | Maqsad | So'rov | Javob | Xato holatlari |
| --- | --- | --- | --- | --- |
| | | | | |

Kontrakt fayli: ____ (qaysi repoda). Tayyorlash usuli (qo'lda yoki skeletlardan generatsiya) ADR bilan tanlanadi ([D11](https://utamuratov.github.io/loyiha-standarti/D11-dasturchilar-qoidalari.html), 17-qoida). 2-darvozaga qoralama, 3-darvozagacha kelishilgan kontrakt kerak.

### 14. Nofunksional talablar

Raqam bilan yoziladi. Raqam hali yo'q bo'lsa, ochiq savolga yoziladi.

| Talab | Qiymat |
| --- | --- |
| Tezlik (javob vaqti) | |
| Yuklama (bir vaqtdagi foydalanuvchilar) | |
| Ishonchlilik (ishlash vaqti, backup) | |
| Xavfsizlik | |
| Qurilma va brauzerlar | |
| Support javob vaqtlari ([D16](https://utamuratov.github.io/loyiha-standarti/D16-support-va-fikr-yigish.html)) | |

### 15. Shaxsiy ma'lumotlar

Loyiha shaxsiy ma'lumot bilan ishlamasa: "Shaxsiy ma'lumot yig'ilmaydi".

| Ma'lumot | Maqsad | Rozilik qanday olinadi va qayd etiladi | Kim ko'radi | Qayerda va qancha saqlanadi | Qachon o'chiriladi |
| --- | --- | --- | --- | --- | --- |
| | | | | | |

### 16. Farazlar

- F-01: ____ (noto'g'ri chiqsa, nimaga ta'sir qiladi: ____)

### 17. Ochiq savollar

| ID | Savol | Egasi | Muddat | Bloklovchi |
| --- | --- | --- | --- | --- |
| S-01 | | | | ha / yo'q |

### 18. Risklar

Risklar shu yerda emas, [loyiha rejasidagi](D02-loyiha-rejasi.md) reestrda yuritiladi.

### 19. Versiyalar tarixi

| Versiya | Sana | Nima o'zgardi | Asos | Kim tasdiqladi |
| --- | --- | --- | --- | --- |
| v0.1 | | Brief qoralamasi | — | — |

## Checklist

- [ ] Brief PO tomonidan tasdiqlangan (1-darvoza)
- [ ] Scope'da "kirmaydi" ro'yxati bor
- [ ] Har story'ning ID'si va kamida 2 ta qabul mezoni bor, biri — xato yoki chegaraviy holat
- [ ] Har ekranning ID'si va tegishli story'lari bor
- [ ] Ruxsatlar matritsasida har rol uchun ruxsat etilgan va taqiqlangan harakatlar bor
- [ ] Sozlamalar "qachon kuchga kiradi" bilan yozilgan
- [ ] Nofunksional talablarda raqamlar bor yoki ochiq savol sifatida yozilgan
- [ ] Shaxsiy ma'lumotlar bo'limi to'ldirilgan (agar tegishli bo'lsa)
- [ ] API kontrakti qoralamasi va kontrakt fayli havolasi bor
- [ ] Doc review'da bloklovchi savollar soni 0; qolgan savollarning egasi va muddati bor
- [ ] Versiya raqami va PO'ning yozma tasdig'i Jira epic'ida turibdi
