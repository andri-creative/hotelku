# Hotelku - Website Booking Hotel

Proyek aplikasi web booking hotel menggunakan **Next.js 16**, **TypeScript**, **Tailwind CSS**, dan **PostgreSQL** dengan ORM **Prisma**.

---

## 📋 Alur Pengembangan Saat Ini

### ✅ Tahap Selesai:

1. **Setup Proyek Dasar**
   - Next.js 16 dengan App Router
   - TypeScript configuration
   - Tailwind CSS v4
   - ESLint setup

2. **Database & ORM**
   - PostgreSQL database configured
   - Prisma schema defined dengan models:
     - `User` (dengan Role: SUPER_ADMIN, ADMIN, STAFF, USER)
     - `Profile` (data profil user)
     - `Booking` (status: PENDING, PAID, CONFIRMED, CANCELLED)
   - Prisma Client generated di `/generated/prisma`

3. **Frontend Struktur**
   - Layout utama di `app/layout.tsx`
   - Home page di `app/page.tsx`
   - Navbar component di `components/header/navbar.tsx`
   - SEO component di `components/seo.tsx`
   - Global CSS styling

4. **Dependencies Installed**
   - @prisma/client & @prisma/adapter-pg
   - lucide-react (icons)
   - nextjs-toploader (loading bar)
   - pg (PostgreSQL driver)
   - Tailwind CSS & TypeScript

### 🚧 Tahap Selanjutnya:

- [ ] Authentication system (login/register)
- [ ] Hotel list & detail pages
- [ ] Search & filter functionality
- [ ] Booking form & checkout
- [ ] Payment integration
- [ ] User dashboard
- [ ] Admin dashboard
- [ ] Database migrations & seeding

---

## 🚀 Getting Started

Jalankan development server:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## 📂 Project Structure

```
hotelku/
├── app/                    # Next.js App Router
├── components/             # Reusable React components
├── prisma/                 # Database schema & migrations
├── public/                 # Static files
├── generated/              # Prisma Client (generated)
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
└── next.config.ts          # Next.js config
```
