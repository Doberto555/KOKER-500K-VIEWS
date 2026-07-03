# JOKER 500K VIEWS

Sit pou moun enskri non ak nimewo WhatsApp yo pou gen plis views sou Statut yo.

**Fèt pa:** Doberto Mr Lit, an kolaborasyon avèk **Joker**.

---

## Sa ki nan pwojè a

| Fichye | Sa li fè |
|---|---|
| `index.html` | Paj akèy — fòm enskripsyon (non, nimewo ak kod peyi, imèl) |
| `list.html` | Lis piblik — montre non moun ki enskri yo, **nimewo yo kache** |
| `admin.html` | Paj admin (mande modpas) — wè non + nimewo, telechaje fichye VCF |
| `countries.js` | Lis kod tout peyi ak validasyon longè nimewo (Ayiti = 8 chif) |
| `supabase-client.js` | Koneksyon Supabase + fonksyon pou jenere VCF |
| `styles.css` | Tout style/design sit la |
| `supabase-schema.sql` | Kòd SQL pou kreye tab la nan Supabase |

---

## Etap enstalasyon (100% nan telefòn/navigatè, san CLI)

### 1. Kreye pwojè Supabase
1. Ale sou [supabase.com](https://supabase.com) → kreye yon pwojè tou nèf.
2. Nan **SQL Editor**, kole tout kontni fichye `supabase-schema.sql` la epi klike **Run**.
3. Nan **Settings > API**, kopye:
   - `Project URL`
   - `anon public key`

### 2. Konekte kod la ak Supabase
Ouvri `supabase-client.js` epi ranplase:
```js
const SUPABASE_URL = "https://TON-PWOJE.supabase.co";
const SUPABASE_ANON_KEY = "TON-ANON-KEY-LA";
```
ak valè ou kopye yo.

### 3. Kreye kont Admin lan (SE SÈL FASON POU JWENN AKSÈ ADMIN)
1. Nan Supabase Dashboard → **Authentication > Users > Add user**.
2. Antre yon imèl (egzanp: `admin@joker500k.com`) ak yon **modpas fò** ke se sèl ou konnen.
3. Se imèl + modpas sa a ou pral itilize sou `admin.html` pou konekte.
4. Pa gen okenn lòt fason pou gen aksè admin — pa gen fòm "kreye kont" piblik sou sit la.

### 4. Mete sit la sou GitHub + Vercel
1. Kreye yon repo GitHub tou nèf, mete tout fichye yo ladan (via "Upload files" sou github.com si w pa itilize CLI).
2. Ale sou [vercel.com](https://vercel.com) → **New Project** → chwazi repo a → Deploy.
3. Se sa — sit la disponib sou yon lyen `.vercel.app`, epi ou ka mete yon domèn pèsonalize apre si w vle.

---

## Kijan konfidansyalite a fonksyone

- **Paj piblik (`list.html`)**: li li nan yon *view* SQL ki rele `public_registrations`, ki gen **sèlman** `name` ak `created_at`. Kolòn `phone` pa menm egziste nan repons lan — se pa yon kesyon "kache nan CSS", li pa janm soti nan sèvè a.
- **Paj admin (`admin.html`)**: apre yon moun konekte ak imèl/modpas admin lan (Supabase Auth), Row Level Security (RLS) otorize l li **tout** tab `registrations`, ki gen `phone` tou.
- San moun konekte kòm admin, RLS bloke tout tantativ pou li kolòn `phone` a — menm si yon moun eseye apèl API a dirèkteman.

---

## Limit fichye VCF

Bouton "Telechaje VCF" nan paj admin lan pran **maksimòm 30,000 kontak** nan yon sèl fichye `.vcf`, jan sa te mande a. Si gen plis pase 30,000 moun enskri, se premye 30,000 (pi resan yo) ki ap parèt nan fichye a; ou ka ajiste `MAX_CONTACTS` nan `supabase-client.js` si w vle chanje sa.

---

## Kòd peyi yo

`countries.js` gen yon lis ~90 peyi ak longè nimewo yo pou chak (egzanp Ayiti = 8 chif apre +509). Si w vle ajoute yon peyi ki pa la, jis ajoute yon liy nan tablo `COUNTRIES` la ak menm fòma a.
