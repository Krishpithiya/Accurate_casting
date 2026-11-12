# Accurate Casting — Next.js (MERN Stack) Website Clone

A high-fidelity, production-ready clone of [accuratecasting.com](https://accuratecasting.com/) rebuilt with modern **Next.js 14**, **React 18**, **Tailwind CSS**, **TypeScript**, and **MongoDB / Mongoose (MERN stack backend)**.

---

## 🚀 Features & Pages Included

### 1. **Complete Page Architecture**
- **Home (`/`)**:
  - Top contact bar with social handles and phone numbers `(+91)99096-10203` and `(+91)915 781 5285`.
  - Sticky brand navigation with Accurate Casting vector logo & active page highlights.
  - Interactive **Hero Slider** (Slide 1 & Slide 2 with smooth transition and auto-rotation).
  - 3 Core Engineering Pillars: Engineering Excellence, Standards & Ethics, Environment.
  - About Us overview with company credentials, capacity highlights, and capabilities badges.
  - **Animated Stat Counter**: Projects Completed, Equipments, Satisfied Clients, Industry Expertise.
  - Why Choose Us section with interactive metallurgy and quality management progress bars.
  - "We Are Always Ready To Serve" section with workflow badges and quick hotline.
  - 4 Core Casting Services: Investment Casting, Alloy Steel, Carbon Steel, Stainless Steel.
  - **Product Showcase**: Fast preview of casting parts across key industrial sectors.
  - **Testimonial Slider**: Real client reviews (Mitul Patel, Ajay Chaniyara, Vikash Godhani) with 5-star ratings.
  - "Tired of Getting Costly Products after all?" with 5 cost-effective advantages.
  - "Connect With Us" emergency CTA banner.
  - Comprehensive Footer with full address, operating hours, quick links, copyright, and logo.
- **About Us (`/about-us`)**:
  - Full company profile, 550 MT/annum capacity, piece weight thresholds (10g to 60kg).
  - 9 Turnkey Infrastructure Services (Design Assistance, Tool Development, Spectrometer Analysis, Physical Analysis, Dimensional Testing, Heat Treatment, Radiography, Machining, Finishing Operations).
  - Our Vision & Lean Manufacturing Roadmap.
- **Technical Capabilities (`/technical-capabilities`)**:
  - Comprehensive ASTM & DIN material grade tables across 9 alloy categories:
    - Carbon Steel (A216-WCB, A216-WCC, A352-LCC, A352-LCB / DIN 1.0619, 1.1138)
    - Low Alloy Steels (A217-WC1, WC6, WC9, C5, C12, C12A / DIN 1.5419, 1.7356, 1.7379)
    - Martensitic Steels (A743-CA15, CA40, CA-6NM / DIN 1.4008, 1.4028, 1.4313)
    - Heat Resisting Steel (A297-HF, HH, HI, HK, HD / DIN 1.4825, 1.4837, 1.4846, 1.4848)
    - Austenitic Stainless Steel (A351-CF8, CF8M, CF3, CF3M, CF8C, CK20, CN7M, CG8M)
    - Austenitic Ferrite Duplex Steels (A351-CF3MN, CD4MCu, CG6MMN, CK3MCuN / 254 SMO)
    - Super Duplex Stainless Steel (A890-GR1A to GR6A, 2205, 2507)
    - Nickel-Based Super Alloys (Monel 400, Hastelloy B/C/C4/C22, Inconel 600/625, Incoloy 825)
    - Cobalt-Based Alloys (Stellite equivalents)
- **Quality Assurance (`/quality-assurance`)**:
  - International accreditations: **ISO 9001:2015**, **PED 2014/68/EU**, **AD 2000-Merkblatt W0**.
  - In-house 24-channel spectrometer, UTM, Charpy impact tester, and metallurgical microscope.
  - Interactive modal certificate viewer for all 3 original scanned certificates.
- **Process (`/process`)**:
  - 14-stage precision lost-wax manufacturing roadmap with quality checkpoints and heat treatment cycle certification.
- **Products (`/product`)**:
  - Catalog of 9 industry sectors: Pumps, Agriculture, Earth Moving, Hardware, Automobiles, Food Processing, Surgical Implants, Valves & Piping, and General Engineering.
  - Interactive "Quick View" modal and direct inquiry integration.
- **Contact Us (`/contact-us`)**:
  - Interactive contact form with real-time feedback and validation.
  - Factory address, hotline numbers, multiple emails, and operating schedule.
  - Responsive embedded Google Maps plant location in Ribda, Rajkot, Gujarat.

---

### 2. **MERN Stack Backend & API**
- **MongoDB Connection Pooling (`src/lib/mongodb.ts`)**: Serverless-ready Mongoose connection caching.
- **Mongoose Contact Model (`src/models/Contact.ts`)**: Schema for persistent customer inquiries.
- **Mongoose Product Model (`src/models/Product.ts`)**: Schema for dynamic product management.
- **Inquiry API (`POST /api/contact`)**: Validates form inputs, stores submissions into MongoDB, and returns structured JSON responses.
- **Products API (`GET /api/products`)**: Serves catalog data for dynamic frontend consumption.

---

## 🛠️ Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Library**: React 18
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Typography**: Google Font Mulish
- **Database / Backend**: Node.js + Mongoose / MongoDB

---

## 🏃 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
# In Windows PowerShell:
Copy-Item .env.example .env.local
```
*(Optional) If you have a local or MongoDB Atlas cluster, update `MONGODB_URI` in `.env.local`.*

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm start
```
