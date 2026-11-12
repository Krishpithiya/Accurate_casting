import { Language } from '@/context/LanguageContext';

export interface TranslationSchema {
  nav: {
    home: string;
    aboutUs: string;
    technicalCapabilities: string;
    qualityAssurance: string;
    process: string;
    product: string;
    contactUs: string;
    getInTouch: string;
    callUs: string;
    tagline: string;
  };
  slider: {
    weAre: string;
    title: string;
    description: string;
    contactNow: string;
  };
  pillars: {
    p1Title: string;
    p1Desc: string;
    p2Title: string;
    p2Desc: string;
    p3Title: string;
    p3Desc: string;
  };
  homeAbout: {
    badge: string;
    title: string;
    desc1: string;
    desc2: string;
    readMore: string;
    skills: string[];
  };
  stats: {
    projects: string;
    equipment: string;
    clients: string;
    expertise: string;
    years: string;
  };
  whyChoose: {
    badge: string;
    heading: string;
    desc1: string;
    desc2: string;
    btn: string;
    trackRecord: string;
    expertiseTitle: string;
    expertiseDesc: string;
    skills: { title: string; pct: number }[];
  };
  readyToServe: {
    badge: string;
    title: string;
    desc: string;
    b1Title: string;
    b1Desc: string;
    b2Title: string;
    b2Desc: string;
    b3Title: string;
    b3Desc: string;
    b4Title: string;
    b4Desc: string;
    hotlineTitle: string;
    hours: string;
  };
  servicesSection: {
    badge: string;
    title: string;
    desc: string;
    viewSpecs: string;
    s1Title: string;
    s1Desc: string;
    s1Tag: string;
    s2Title: string;
    s2Desc: string;
    s2Tag: string;
    s3Title: string;
    s3Desc: string;
    s3Tag: string;
    s4Title: string;
    s4Desc: string;
    s4Tag: string;
  };
  productsSection: {
    badge: string;
    title: string;
    desc: string;
    browseAll: string;
    quickView: string;
    inquire: string;
    modalBtn: string;
    modalClose: string;
    customTitle: string;
    customDesc: string;
    customBtn: string;
  };
  testimonialsSection: {
    badge: string;
    title: string;
    desc: string;
    r1Name: string;
    r1Role: string;
    r1Quote: string;
    r2Name: string;
    r2Role: string;
    r2Quote: string;
    r3Name: string;
    r3Role: string;
    r3Quote: string;
  };
  costEffective: {
    badge: string;
    title: string;
    desc: string;
    points: string[];
    btn: string;
  };
  cta: {
    badge: string;
    title: string;
    desc: string;
    btnContact: string;
    btnCall: string;
  };
  footer: {
    aboutText: string;
    followUs: string;
    quickLinks: string;
    contactInfo: string;
    address: string;
    hours: string;
    rights: string;
    tagline: string;
  };
  aboutPage: {
    bannerTitle: string;
    bannerSub: string;
    meltInFidelity: string;
    title: string;
    p1: string;
    p2: string;
    keySpecsTitle: string;
    specCapacity: string;
    specWeight: string;
    specTolerance: string;
    specMetals: string;
    p3: string;
    annualCapacity: string;
    pedCertified: string;
    infraBadge: string;
    infraTitle: string;
    infraDesc: string;
    futureReady: string;
    visionTitle: string;
    visionP1: string;
    visionP2: string;
    partnerBtn: string;
  };
  capabilitiesPage: {
    bannerTitle: string;
    bannerSub: string;
    badge: string;
    title: string;
    desc: string;
    astmTh: string;
    dinTh: string;
    requestBtn: string;
    foundrySpecBadge: string;
    foundryTitle: string;
    foundryDesc: string;
    consultBtn: string;
  };
  qualityPage: {
    bannerTitle: string;
    bannerSub: string;
    badge: string;
    title: string;
    desc: string;
    isoTitle: string;
    isoDesc: string;
    pedTitle: string;
    pedDesc: string;
    adTitle: string;
    adDesc: string;
    infraBadge: string;
    infraTitle: string;
    certBadge: string;
    certTitle: string;
    certSub: string;
    cert1Title: string;
    cert1Std: string;
    cert2Title: string;
    cert2Std: string;
    cert3Title: string;
    cert3Std: string;
    viewCert: string;
  };
  processPage: {
    bannerTitle: string;
    bannerSub: string;
    badge: string;
    title: string;
    desc: string;
    verifiedCheckpoint: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
  };
  contactPage: {
    bannerTitle: string;
    bannerSub: string;
    badge: string;
    title: string;
    desc: string;
    factoryAddr: string;
    phoneNumbers: string;
    emailInquiries: string;
    operatingHours: string;
    wednesdayOff: string;
    plantLocation: string;
    openMaps: string;
    formTitle: string;
    formDesc: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
    messagePlaceholder: string;
    submitBtn: string;
    sendingBtn: string;
    successMsg: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  // ----------------------------------------------------
  // ENGLISH
  // ----------------------------------------------------
  en: {
    nav: {
      home: 'Home',
      aboutUs: 'About Us',
      technicalCapabilities: 'Technical Capabilities',
      qualityAssurance: 'Quality Assurance',
      process: 'Process',
      product: 'Product',
      contactUs: 'Contact Us',
      getInTouch: 'Get In Touch',
      callUs: 'Call Us',
      tagline: 'We Provide The Best Service For You.',
    },
    slider: {
      weAre: 'WE ARE',
      title: 'ACCURATE CASTING',
      description: 'An India based Company Pouring Fidelity in Casting.',
      contactNow: 'Contact Now',
    },
    pillars: {
      p1Title: 'ENGINEERING EXCELLENCE',
      p1Desc:
        'The process we have been using with our team is focused on gradual improvement. We have team of expertised guys and latest machineries for a rich quality of castings.',
      p2Title: 'STANDARDS & ETHICS',
      p2Desc:
        'Accurate Casting ethics policy reflects the high standard of manufacturing policy our company represents. We dedicate ourselves to anticipating the changing needs of customers and creating innovative & quality castings in time.',
      p3Title: 'ENVIRONMENT',
      p3Desc:
        'The work environment is very important in determining how enjoyable the work is. We have the best environment among our team of smart guys who have a superior level of intellectual bandwidth and skills as well.',
    },
    homeAbout: {
      badge: 'About Us',
      title: 'WELCOME TO ACCURATE CASTING !',
      desc1:
        'Accurate Casting is a manufacturer of high-quality Investment Casting products catering to both domestic and international markets. Brimming with the zeal to establish the epitome of client satisfaction and to achieve excellence with every effort.',
      desc2:
        'We operate with high capacity, utilizing induction melting furnaces, fully automated wax injection presses, and spectrometer alloy control. We ensure exact dimensional accuracy according to international standards (IS 11166, VDA P 690 D2 & ISO 2768).',
      readMore: 'Read More About Us',
      skills: [
        'Titanium Welding',
        'Mobile Welding',
        'Stainless Steel',
        'Magnesium Alloys',
        'Pipe Welding',
        'Precision Fettling',
      ],
    },
    stats: {
      projects: 'Project Completed',
      equipment: 'Our Equipments',
      clients: 'Satisfied Clients',
      expertise: 'Industry Expertise',
      years: '+ Years',
    },
    whyChoose: {
      badge: 'Why Choose Us?',
      heading:
        'Our Experienced guys at Accurate Casting always giving their best to make the clients happy!!',
      desc1:
        'With the massive appealing infrastructure, modern machinery and unmatched talent of our experienced team at Accurate Casting, we give our best to make our patrons happy.',
      desc2:
        'Our experienced team is proud to have worked with a diverse range of clients from different sectors of industries, such as Automobile, Food Processing, Surgicals, Hardware, Agriculture, Pumps and Valves.',
      btn: 'Explore Capabilities',
      trackRecord: 'Our Track Record',
      expertiseTitle: 'This Is Our Expertise',
      expertiseDesc:
        'Accurate Casting always aims for quality management, inspection, and certification pertinent to the casting process.',
      skills: [
        { title: 'Quality Management & Metallurgy', pct: 98 },
        { title: 'Dimensional Accuracy & Inspection', pct: 95 },
        { title: 'Customer Satisfaction & Timely Delivery', pct: 99 },
        { title: 'Safety & Environmental Standards', pct: 96 },
      ],
    },
    readyToServe: {
      badge: 'Customer First',
      title: 'We Are Always Ready To Serve',
      desc:
        'We are proficient and capable to deliver our customers with a faultless range of products. Every worker of our team is proud to have decades of experience in the industry. Moreover, they work hard to achieve our firm’s business goals as well as the highest standards in all our products.',
      b1Title: 'We Have Professional Workers',
      b1Desc: 'Decades of combined foundry experience',
      b2Title: 'On Time In Progress',
      b2Desc: 'Strict production and delivery schedules',
      b3Title: 'Friendly To Serve Customers',
      b3Desc: 'Direct technical consultation',
      b4Title: 'Give The Best & Fair',
      b4Desc: 'Reasonable, transparent pricing',
      hotlineTitle: 'Direct Inquiry Hotline',
      hours: 'Mon - Fri : 9am - 5pm',
    },
    servicesSection: {
      badge: 'Our Services.',
      title: 'We Provide Best Service',
      desc:
        'State-of-the-art lost-wax investment casting capabilities engineered across multiple metallurgical grades.',
      viewSpecs: 'View Specifications',
      s1Title: 'Investment Casting',
      s1Desc:
        'Investment casting, also referred to as lost-wax casting, is a manufacturing method that begins with the creation of a wax model of a part or product, followed by the coating of it with a ceramic shell.',
      s1Tag: 'Core Specialty',
      s2Title: 'Alloy Steel Casting',
      s2Desc:
        'Alloy steel casting is a kind of investment casting in which iron, carbon, and other elements are alloyed to generate high-strength, wear-resistant finished products.',
      s2Tag: 'High Tensile',
      s3Title: 'Carbon Steel Casting',
      s3Desc:
        'Carbon steel casting is a type of investment casting in which carbon steels are used to make an end product. Carbon steels are iron and carbon alloys alongside tiny amounts of additional components.',
      s3Tag: 'Durable & Tough',
      s4Title: 'Stainless Steel Casting',
      s4Desc:
        'Stainless steel casting produces a finished product by combining stainless steel alloys. Includes at least 10.5% chromium with superior corrosion and oxidation resistance.',
      s4Tag: 'Corrosion Resistant',
    },
    productsSection: {
      badge: 'Product Portfolio',
      title: 'Explore More Products',
      desc: 'Browse our diverse range of precision investment casting products.',
      browseAll: 'Browse All 9 Sectors',
      quickView: 'Quick View',
      inquire: 'Inquire',
      modalBtn: 'Request Spec & Pricing',
      modalClose: 'Close',
      customTitle: 'Have a Specific Drawing or OEM Component?',
      customDesc:
        'We manufacture customized castings ranging from 10 grams to 60 kg per piece. Send us your CAD model or 2D drawing.',
      customBtn: 'Request Custom Quote',
    },
    testimonialsSection: {
      badge: 'Testimonials',
      title: 'Let’s See What Our Client Say',
      desc:
        'Our expertise in casting help us to serve our client with faultless products. As result our client speak for us.',
      r1Name: 'Mitul Patel',
      r1Role: 'Client',
      r1Quote:
        'Good behaviour of staff, Good engineering knowledge and services. Accurate Casting has consistently met our delivery schedules with uncompromising product quality.',
      r2Name: 'Ajay Chaniyara',
      r2Role: 'Industrial Partner',
      r2Quote:
        'Good experience with submersible bush. They have expertise in new design developments and also in aluminium pressurized die casting. Highly recommended team!',
      r3Name: 'Vikash Godhani',
      r3Role: 'Manufacturing Executive',
      r3Quote:
        'Very good experience with their staff and quality products. I worked with Many in rajkot but this has been a stand apart company in precision and turnaround time.',
    },
    costEffective: {
      badge: 'Why Choose us',
      title: 'Tired of Getting Costly Products after all?',
      desc:
        'With decades of experience in the casting industry, we help our clients get better products with effective cost and time savings. We combine advanced metallurgical formulations with optimized yield design to minimize waste and deliver superior finish.',
      points: [
        'Excellent Quality Raw Materials',
        'Precision using Coordination',
        'High-Quality Products at Reasonable Prices',
        'Quick Support over phone',
        'High Customer Satisfaction',
      ],
      btn: 'Request A Cost Comparison',
    },
    cta: {
      badge: 'Connect With Us',
      title: 'Ready to order cost efficient casting products?',
      desc:
        'Accurate Casting is a manufacturer of high-quality Investment Casting products catering to both domestic and international markets. Get in touch with our engineering team today.',
      btnContact: 'Get In Touch Now',
      btnCall: 'Call: (+91) 99096-10203',
    },
    footer: {
      aboutText:
        'Accurate Casting is a manufacturer of high-quality Investment Casting products catering to both domestic and international markets.',
      followUs: 'Follow Us',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info',
      address:
        'Plot No.11,12 & 13, Sr.No. 57/1,p/1, Global Industrial Estate, Nr. Ribda Railway Station, Kotda Sangani Road, Ribda-Gondal, Rajkot-360311, Gujarat, India',
      hours: 'Mon - Fri : 9:00 am - 5:00 pm (Weekday Off-Wednesday)',
      rights: '©2026 Accurate Casting. All rights reserved.',
      tagline: 'Precision Investment Casting Manufacturer | Rajkot, Gujarat',
    },
    aboutPage: {
      bannerTitle: 'About Us',
      bannerSub: "Melt-In Fidelity — India's Premier Investment Casting Manufacturer",
      meltInFidelity: 'MELT-IN FIDELITY',
      title: 'ABOUT ACCURATE CASTING',
      p1:
        'Accurate Casting is a manufacturer of high-quality Investment Casting products catering to both domestic and international markets. Brimming with the zeal to establish the epitome of client satisfaction and to achieve excellence with every effort. Promising to deliver precision in this rapidly growing demanded market of casting. Positioned in a rapidly industrially growing HUB of India in the city of Rajkot, Gujarat state.',
      p2:
        'We at Accurate Casting work with great endeavour for higher achievements with customer satisfaction by acquiring closer tolerances, better finish, meeting customer specification and higher quality standards in our products and services.',
      keySpecsTitle: 'Key Production Specifications:',
      specCapacity: '550 Metric Tons / Annum',
      specWeight: '10g to 60kg single piece',
      specTolerance: 'IS 11166 : 1993, VDA P 690 D2 & ISO 2768',
      specMetals: 'Carbon, Alloy, Stainless Steel, Hastelloy, Monel',
      p3:
        'Serving as the backbone of the organization, our working team performs all the business functions while creating a harmonized and value-based work environment and strives to better with each passing day.',
      annualCapacity: 'Annual Capacity',
      pedCertified: 'PED Certified',
      infraBadge: 'INFRASTRUCTURE',
      infraTitle: 'OUR SERVICES & PROCESSES',
      infraDesc:
        'Comprehensive turnkey casting services from initial design to final machined delivery.',
      futureReady: 'FUTURE READY',
      visionTitle: 'OUR VISION',
      visionP1:
        'Looking to the future, Accurate Casting has initiated a significant Lean Manufacturing Initiative Process with a number of considerable and exciting changes underway and planned for the near term. With product quality, cost and customer satisfaction in mind, we are searching for ways to broaden our customer base and to better serve our current customers.',
      visionP2:
        'By exploring a range of additional quality standards, investing in the industry’s best production technologies to expand and improve capabilities and by integrating key components of its supply chain.',
      partnerBtn: 'Partner With Us',
    },
    capabilitiesPage: {
      bannerTitle: 'Technical Capabilities',
      bannerSub: 'Broadest Range of Ferrous, Stainless, Duplex, & Super Alloys',
      badge: 'TECHNICAL CAPABILITIES',
      title: 'Materials Poured at Accurate Casting :',
      desc:
        'Our state-of-the-art foundry pours an expansive range of ferrous grades, stainless steels, duplex alloys, and nickel/cobalt-based superalloys conforming to international ASTM, DIN, EN, and BS standards.',
      astmTh: 'ASTM Grade',
      dinTh: 'DIN Equivalent',
      requestBtn: 'Request Grade Chemical Spec',
      foundrySpecBadge: 'Foundry Specifications',
      foundryTitle: 'Need A Custom Alloy or Non-Standard Grade?',
      foundryDesc:
        'Our 24-channel spectrometer and metallurgical experts can formulate bespoke alloy chemistries customized to your corrosive, thermal, or mechanical wear requirements.',
      consultBtn: 'Consult Our Metallurgist',
    },
    qualityPage: {
      bannerTitle: 'Quality Assurance',
      bannerSub: 'Uncompromising Metallurgical Standards & Certified Facilities',
      badge: 'METALLURGICAL EXCELLENCE',
      title: 'Zero-Defect Quality Policy',
      desc:
        'Our quality policy reflects the highest standards of manufacturing. We ensure every heat poured adheres strictly to customer specifications, international norms, and pressure vessel codes.',
      isoTitle: 'ISO 9001:2015',
      isoDesc: 'Certified Quality Management System for consistent precision manufacturing.',
      pedTitle: 'PED 2014/68/EU',
      pedDesc: 'Pressure Equipment Directive certified for European and global markets.',
      adTitle: 'AD 2000-W0',
      adDesc: 'Compliant with German technical rules for high-temperature & pressure vessels.',
      infraBadge: 'TESTING & INSPECTION INFRASTRUCTURE',
      infraTitle: 'In-House Laboratory & Verification Procedures',
      certBadge: 'OFFICIAL ACCREDITATION',
      certTitle: 'Our International Certificates',
      certSub: 'Click any certificate to expand and inspect accreditation details.',
      cert1Title: 'ISO 9001:2015 Certificate',
      cert1Std: 'Quality Management Systems',
      cert2Title: 'PED 2014/68/EU Certificate',
      cert2Std: 'Pressure Equipment Directive (TUV)',
      cert3Title: 'AD 2000-Merkblatt W0',
      cert3Std: 'Technical Rules for Pressure Vessels',
      viewCert: 'View Full Certificate',
    },
    processPage: {
      bannerTitle: 'Manufacturing Process',
      bannerSub: '14-Stage Precision Lost-Wax Investment Casting Cycle',
      badge: 'Quality Engineered',
      title: 'Our Investment Casting Process',
      desc:
        'From initial tool die development to calibrated heat treatment and final 100% inspection, our end-to-end process guarantees uncompromising fidelity.',
      verifiedCheckpoint: 'Verified Quality Checkpoint',
      ctaTitle: 'Looking for High-Yield, Zero-Porosity Castings?',
      ctaDesc:
        'Our engineering team reviews your drawings and recommends optimal gating and alloy specifications for defect-free production.',
      ctaBtn: 'Submit Your Drawings',
    },
    contactPage: {
      bannerTitle: 'Contact Us',
      bannerSub: 'We Are Always Ready To Serve — Connect With Our Engineering Team',
      badge: 'GET IN TOUCH',
      title: 'Accurate Casting Works',
      desc:
        'Reach out to our sales and technical team for product drawings, tooling inquiries, material feasibility studies, and quotation requests.',
      factoryAddr: 'Factory Address',
      phoneNumbers: 'Phone Numbers',
      emailInquiries: 'Email Inquiries',
      operatingHours: 'Operating Hours',
      wednesdayOff: '(Weekday Off - Wednesday)',
      plantLocation: 'Plant Location — Rajkot, Gujarat',
      openMaps: 'Open in Google Maps ↗',
      formTitle: 'Send Us A Message',
      formDesc:
        'Have questions about our casting specifications, quotes, or delivery? Reach out to us.',
      firstName: 'First Name',
      lastName: 'Last Name',
      phone: 'Phone No',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      messagePlaceholder:
        'Please detail your casting specifications, material grade, volume, or drawings...',
      submitBtn: 'Submit Message',
      sendingBtn: 'Sending...',
      successMsg:
        'Your message has been sent successfully. We will get in touch with you shortly!',
    },
  },

  // ----------------------------------------------------
  // GUJARATI (ગુજરાતી)
  // ----------------------------------------------------
  gu: {
    nav: {
      home: 'મુખપૃષ્ઠ',
      aboutUs: 'અમારા વિશે',
      technicalCapabilities: 'ટેકનિકલ ક્ષમતાઓ',
      qualityAssurance: 'ગુણવત્તા ખાતરી',
      process: 'ઉત્પાદન પ્રક્રિયા',
      product: 'પ્રોડક્ટ્સ',
      contactUs: 'સંપર્ક કરો',
      getInTouch: 'સંપર્ક સાધો',
      callUs: 'કોલ કરો',
      tagline: 'અમે તમારા માટે શ્રેષ્ઠ સેવા પૂરી પાડીએ છીએ.',
    },
    slider: {
      weAre: 'અમે છીએ',
      title: 'એક્યુરેટ કાસ્ટિંગ',
      description: 'કાસ્ટિંગમાં ચોકસાઈ અને વિશ્વસનીયતા આપતી અગ્રણી ભારતીય કંપની.',
      contactNow: 'હમણાં સંપર્ક કરો',
    },
    pillars: {
      p1Title: 'એન્જિનિયરિંગ ઉત્કૃષ્ટતા',
      p1Desc:
        'અમારી ટીમ દ્વારા ઉપયોગમાં લેવાતી પ્રક્રિયા સતત સુધારણા પર કેન્દ્રિત છે. ઉચ્ચ ગુણવત્તાવાળા કાસ્ટિંગ્સ માટે અમારી પાસે નિષ્ણાતોની ટીમ અને આધુનિક મશીનરી છે.',
      p2Title: 'ધોરણો અને નૈતિકતા',
      p2Desc:
        'એક્યુરેટ કાસ્ટિંગની નીતિ અમારી ઉચ્ચ સ્તરની ઉત્પાદન ક્ષમતા દર્શાવે છે. અમે ગ્રાહકોની જરૂરિયાતોને ધ્યાનમાં રાખીને સમયસર ઉત્કૃષ્ટ કાસ્ટિંગ્સ આપવા સમર્પિત છીએ.',
      p3Title: 'પર્યાવરણ અને કાર્યક્ષેત્ર',
      p3Desc:
        'કામનું વાતાવરણ ઉત્સાહ વધારવામાં ખૂબ મહત્વનું છે. અમારી પાસે કુશળ અને બુદ્ધિશાળી ટીમ માટે શ્રેષ્ઠ કાર્યક્ષેત્ર અને વાતાવરણ ઉપલબ્ધ છે.',
    },
    homeAbout: {
      badge: 'અમારા વિશે',
      title: 'એક્યુરેટ કાસ્ટિંગમાં આપનું સ્વાગત છે!',
      desc1:
        'એક્યુરેટ કાસ્ટિંગ સ્થાનિક અને આંતરરાષ્ટ્રીય બજારો માટે ઉચ્ચ ગુણવત્તાવાળા ઇન્વેસ્ટમેન્ટ કાસ્ટિંગ ઉત્પાદનોનું અગ્રણી ઉત્પાદક છે. ગ્રાહક સંતોષ અને શ્રેષ્ઠતા પ્રાપ્ત કરવાનો અમારો સંકલ્પ છે.',
      desc2:
        'અમે ઇન્ડક્શન ફર્નેસ, ઓટોમેટેડ વેક્સ ઇન્જેક્શન અને સ્પેક્ટ્રોમીટર દ્વારા આંતરરાષ્ટ્રીય ધોરણો (IS 11166, VDA P 690 D2 & ISO 2768) અનુસાર ચોક્કસ માપ સાથે ઉત્પાદન કરીએ છીએ.',
      readMore: 'વધુ વિગતો વાંચો',
      skills: [
        'ટાઇટેનિયમ વેલ્ડીંગ',
        'મોબાઇલ વેલ્ડીંગ',
        'સ્ટેનલેસ સ્ટીલ',
        'મેગ્નેશિયમ એલોય',
        'પાઇપ વેલ્ડીંગ',
        'ચોક્કસ ફિનિશિંગ',
      ],
    },
    stats: {
      projects: 'પૂર્ણ થયેલ પ્રોજેક્ટ્સ',
      equipment: 'અમારા સાધનો',
      clients: 'સંતુષ્ટ ગ્રાહકો',
      expertise: 'ઉદ્યોગ અનુભવ',
      years: '+ વર્ષ',
    },
    whyChoose: {
      badge: 'શા માટે અમને પસંદ કરો?',
      heading:
        'એક્યુરેટ કાસ્ટિંગ ખાતે અમારી અનુભવી ટીમ ગ્રાહકોને ખુશ રાખવા હંમેશા શ્રેષ્ઠ પ્રયાસ કરે છે!!',
      desc1:
        'વિશાળ આધુનિક ઇન્ફ્રાસ્ટ્રક્ચર, અદ્યતન મશીનરી અને અનુભવી ટીમના સહયોગથી અમે ગ્રાહકોની દરેક અપેક્ષા પૂર્ણ કરીએ છીએ.',
      desc2:
        'ઓટોમોબાઇલ, ફૂડ પ્રોસેસિંગ, સર્જિકલ, હાર્ડવેર, કૃષિ, પંપ અને વાલ્વ જેવા વિવિધ ઔદ્યોગિક ક્ષેત્રોના ગ્રાહકો સાથે કામ કરવાનો અમને ગર્વ છે.',
      btn: 'ક્ષમતાઓ જુઓ',
      trackRecord: 'અમારો રેકોર્ડ',
      expertiseTitle: 'આ અમારી નિપુણતા છે',
      expertiseDesc:
        'એક્યુરેટ કાસ્ટિંગ હંમેશા કાસ્ટિંગ પ્રક્રિયા માટે ગુણવત્તા વ્યવસ્થાપન, નિરીક્ષણ અને પ્રમાણપત્રને પ્રાધાન્ય આપે છે.',
      skills: [
        { title: 'ગુણવત્તા સંચાલન અને ધાતુશાસ્ત્ર', pct: 98 },
        { title: 'પરિમાણીય ચોકસાઈ અને પરીક્ષણ', pct: 95 },
        { title: 'ગ્રાહક સંતોષ અને સમયસર ડિલિવરી', pct: 99 },
        { title: 'સુરક્ષા અને પર્યાવરણીય ધોરણો', pct: 96 },
      ],
    },
    readyToServe: {
      badge: 'ગ્રાહક પ્રથમ',
      title: 'અમે સેવા આપવા માટે હંમેશા તૈયાર છીએ',
      desc:
        'અમે ગ્રાહકોને ખામીરહિત ઉત્પાદનો પહોંચાડવા સક્ષમ છીએ. અમારી ટીમના દરેક સભ્ય પાસે દાયકાઓનો અનુભવ છે અને કંપનીના ઉચ્ચ ધોરણો જાળવવા માટે તેઓ સતત પ્રયત્નશીલ રહે છે.',
      b1Title: 'અમારી પાસે વ્યાવસાયિક કારીગરો છે',
      b1Desc: 'ફાઉન્ડ્રી ઉદ્યોગમાં દાયકાઓનો અનુભવ',
      b2Title: 'સમયસર ઉત્પાદન પ્રગતિ',
      b2Desc: 'ચોક્કસ ઉત્પાદન અને ડિલિવરી શેડ્યૂલ',
      b3Title: 'ગ્રાહક-મૈત્રીપૂર્ણ સેવા',
      b3Desc: 'સીધું ટેકનિકલ માર્ગદર્શન અને સહાય',
      b4Title: 'શ્રેષ્ઠ અને વાજબી કિંમતો',
      b4Desc: 'પારદર્શક અને વ્યાજબી દર',
      hotlineTitle: 'સીધી પૂછપરછ હેલ્પલાઇન',
      hours: 'સોમ - શુક્ર : સવારે ૯ થી સાંજે ૫',
    },
    servicesSection: {
      badge: 'અમારી સેવાઓ.',
      title: 'અમે શ્રેષ્ઠ સેવા પૂરી પાડીએ છીએ',
      desc:
        'વિવિધ ધાતુ ગ્રેડમાં અદ્યતન લોસ્ટ-વેક્સ ઇન્વેસ્ટમેન્ટ કાસ્ટિંગ ટેકનોલોજી.',
      viewSpecs: 'વિશિષ્ટતાઓ જુઓ',
      s1Title: 'ઇન્વેસ્ટમેન્ટ કાસ્ટિંગ',
      s1Desc:
        'ઇન્વેસ્ટમેન્ટ કાસ્ટિંગ (લોસ્ટ-વેક્સ પદ્ધતિ) એક એવી પ્રક્રિયા છે જેમાં વેક્સ મોડેલ બનાવી તેના પર સિરામિક શેલ ચડાવીને ચોક્કસ કાસ્ટિંગ બનાવાય છે.',
      s1Tag: 'મુખ્ય વિશેષતા',
      s2Title: 'એલોય સ્ટીલ કાસ્ટિંગ',
      s2Desc:
        'એલોય સ્ટીલ કાસ્ટિંગમાં લોખંડ, કાર્બન અને અન્ય તત્વોનું મિશ્રણ કરીને ઉચ્ચ મજબૂતાઈ અને ઘસારો-પ્રતિરોધક ભાગો બનાવવામાં આવે છે.',
      s2Tag: 'ઉચ્ચ તાકાત',
      s3Title: 'કાર્બન સ્ટીલ કાસ્ટિંગ',
      s3Desc:
        'કાર્બન સ્ટીલ કાસ્ટિંગ ટકાઉ અને મજબૂત અંતિમ ઉત્પાદનો બનાવવા માટે લોખંડ અને કાર્બન એલોયનો ઉપયોગ કરે છે.',
      s3Tag: 'ટકાઉ અને મજબૂત',
      s4Title: 'સ્ટેનલેસ સ્ટીલ કાસ્ટિંગ',
      s4Desc:
        'ઓછામાં ઓછું ૧૦.૫% ક્રોમિયમ ધરાવતા સ્ટેનલેસ સ્ટીલ એલોય વડે કાટ-મુક્ત અને લાંબા આયુષ્યવાળા ભાગો બનાવવામાં આવે છે.',
      s4Tag: 'કાટ-પ્રતિરોધક',
    },
    productsSection: {
      badge: 'પ્રોડક્ટ પોર્ટફોલિયો',
      title: 'અમારા ઉત્પાદનો જુઓ',
      desc: 'અમારા ચોક્કસ ઇન્વેસ્ટમેન્ટ કાસ્ટિંગ ઉત્પાદનોની વિવિધ શ્રેણી જુઓ.',
      browseAll: 'તમામ ૯ ક્ષેત્રો જુઓ',
      quickView: 'ઝડપી ઝલક',
      inquire: 'પૂછપરછ કરો',
      modalBtn: 'વિગત અને ભાવ મેળવો',
      modalClose: 'બંધ કરો',
      customTitle: 'શું તમારી પાસે કોઈ ખાસ ડ્રોઇંગ કે પાર્ટ છે?',
      customDesc:
        'અમે ૧૦ ગ્રામથી લઈને ૬૦ કિલોગ્રામ સુધીના કસ્ટમ પાર્ટ્સ બનાવીએ છીએ. અમને તમારું CAD અથવા 2D ડ્રોઇંગ મોકલો.',
      customBtn: 'કસ્ટમ ક્વોટેશન મેળવો',
    },
    testimonialsSection: {
      badge: 'અભિપ્રાયો',
      title: 'અમારા ગ્રાહકો શું કહે છે તે જુઓ',
      desc:
        'કાસ્ટિંગમાં અમારી નિપુણતા અમને શ્રેષ્ઠ સેવા આપવા સક્ષમ બનાવે છે. પરિણામે અમારા ગ્રાહકો અમારો પરિચય આપે છે.',
      r1Name: 'મિતુલ પટેલ',
      r1Role: 'ગ્રાહક',
      r1Quote:
        'સ્ટાફનું ઉત્તમ વર્તન, ઉત્કૃષ્ટ એન્જિનિયરિંગ જ્ઞાન અને સેવાઓ. એક્યુરેટ કાસ્ટિંગે હંમેશા સમયસર અને ઉત્કૃષ્ટ ગુણવત્તાવાળા ઉત્પાદનો આપ્યા છે.',
      r2Name: 'અજય ચણિયારા',
      r2Role: 'ઔદ્યોગિક ભાગીદાર',
      r2Quote:
        'સબમર્સિબલ બુશ સાથે ખૂબ સારો અનુભવ રહ્યો. નવી ડિઝાઇન ડેવલપમેન્ટ અને એલ્યુમિનિયમ ડાઇ કાસ્ટિંગમાં તેમની શ્રેષ્ઠ કુશળતા છે.',
      r3Name: 'વિકાસ ગોધાણી',
      r3Role: 'મેન્યુફેક્ચરિંગ એક્ઝિક્યુટિવ',
      r3Quote:
        'તેમના સ્ટાફ અને ગુણવત્તાયુક્ત ઉત્પાદનો સાથે ખૂબ જ સારો અનુભવ. રાજકોટમાં ઘણા ઉત્પાદકો સાથે કામ કર્યું પણ આ કંપની ખરેખર અલગ તરી આવે છે.',
    },
    costEffective: {
      badge: 'શા માટે પસંદ કરો',
      title: 'મોંઘા ઉત્પાદનોથી કંટાળી ગયા છો?',
      desc:
        'કાસ્ટિંગ ઉદ્યોગમાં દાયકાઓનો અમારો અનુભવ ગ્રાહકોને વાજબી ખર્ચે અને સમયસર ઉત્કૃષ્ટ ગુણવત્તાવાળા ઉત્પાદનો પૂરા પાડવામાં મદદ કરે છે.',
      points: [
        'ઉત્તમ ગુણવત્તાવાળો કાચો માલ',
        'સંકલન સાથે પરિમાણીય ચોકસાઈ',
        'વાજબી ભાવે ઉચ્ચ ગુણવત્તાના ઉત્પાદનો',
        'ફોન પર ઝડપી ટેકનિકલ સપોર્ટ',
        'સંપૂર્ણ ગ્રાહક સંતોષ',
      ],
      btn: 'ભાવ સરખામણી માટે પૂછો',
    },
    cta: {
      badge: 'અમારો સંપર્ક કરો',
      title: 'વાજબી ભાવે શ્રેષ્ઠ કાસ્ટિંગ ઉત્પાદનો મેળવવા તૈયાર છો?',
      desc:
        'એક્યુરેટ કાસ્ટિંગ ભારત અને વિદેશમાં ઉચ્ચ ગુણવત્તાવાળા ઇન્વેસ્ટમેન્ટ કાસ્ટિંગ ઉત્પાદનોનું વિશ્વસનીય નામ છે. આજે જ સંપર્ક કરો.',
      btnContact: 'હમણાં સંપર્ક કરો',
      btnCall: 'કોલ કરો: (+91) 99096-10203',
    },
    footer: {
      aboutText:
        'એક્યુરેટ કાસ્ટિંગ દેશ અને વિદેશ માટે ઉચ્ચ ગુણવત્તાવાળા ઇન્વેસ્ટમેન્ટ કાસ્ટિંગ ઉત્પાદનોનું વિશ્વસનીય ઉત્પાદક છે.',
      followUs: 'અમારી સાથે જોડાઓ',
      quickLinks: 'ઝડપી લિંક્સ',
      contactInfo: 'સંપર્ક માહિતી',
      address:
        'પ્લોટ નં. ૧૧, ૧૨ અને ૧૩, સર્વે નં. ૫૭/૧, ગ્લોબલ ઇન્ડસ્ટ્રીયલ એસ્ટેટ, રીબડા રેલવે સ્ટેશન પાસે, રીબડા-ગોંડલ, રાજકોટ-૩૬૦૩૧૧, ગુજરાત, ભારત',
      hours: 'સોમ - શુક્ર : સવારે ૯ થી સાંજે ૫ (બુધવારે રજા)',
      rights: '©૨૦૨૬ એક્યુરેટ કાસ્ટિંગ. સર્વાધિકાર સુરક્ષિત.',
      tagline: 'ચોક્કસ ઇન્વેસ્ટમેન્ટ કાસ્ટિંગ ઉત્પાદક | રાજકોટ, ગુજરાત',
    },
    aboutPage: {
      bannerTitle: 'અમારા વિશે',
      bannerSub: 'કાસ્ટિંગમાં વિશ્વસનીયતા — ભારતનું અગ્રણી ઇન્વેસ્ટમેન્ટ કાસ્ટિંગ પ્લાન્ટ',
      meltInFidelity: 'કાસ્ટિંગમાં વિશ્વસનીયતા',
      title: 'એક્યુરેટ કાસ્ટિંગ વિશે',
      p1:
        'એક્યુરેટ કાસ્ટિંગ સ્થાનિક અને આંતરરાષ્ટ્રીય બજારો માટે ઉચ્ચ ગુણવત્તાવાળા ઇન્વેસ્ટમેન્ટ કાસ્ટિંગ ઉત્પાદનોનું ઉત્પાદક છે. ગુજરાતના ઔદ્યોગિક કેન્દ્ર રાજકોટમાં સ્થિત અમારી કંપની ઉત્કૃષ્ટતા માટે પ્રતિબદ્ધ છે.',
      p2:
        'અમે ગ્રાહકોની જરૂરિયાતો અનુસાર ઉચ્ચ ફિનિશિંગ, સચોટ ટોલરન્સ અને ગુણવત્તાયુક્ત ઉત્પાદનો બનાવીએ છીએ. અમારી વાર્ષિક ઉત્પાદન ક્ષમતા ૫૫૦ મેટ્રિક ટન છે.',
      keySpecsTitle: 'મુખ્ય ઉત્પાદન વિશિષ્ટતાઓ:',
      specCapacity: 'વાર્ષિક ૫૫૦ મેટ્રિક ટન',
      specWeight: '૧૦ ગ્રામથી ૬૦ કિલોગ્રામ પ્રતિ પીસ',
      specTolerance: 'IS 11166 : 1993, VDA P 690 D2 અને ISO 2768',
      specMetals: 'કાર્બન, એલોય, સ્ટેનલેસ સ્ટીલ, હેસ્ટેલોય, મોનેલ',
      p3:
        'અમારી અનુભવી ટીમ એક સુમેળભર્યા વાતાવરણમાં કામ કરીને રોજ ઉત્કૃષ્ટ પરિણામો આપવા પ્રયત્નશીલ રહે છે.',
      annualCapacity: 'વાર્ષિક ક્ષમતા',
      pedCertified: 'PED પ્રમાણિત',
      infraBadge: 'ઇન્ફ્રાસ્ટ્રક્ચર',
      infraTitle: 'અમારી સેવાઓ અને પ્રક્રિયાઓ',
      infraDesc: 'ડિઝાઇન સહાયથી લઈને ફિનિશ્ડ મશીનિંગ સુધીની સંપૂર્ણ કાસ્ટિંગ સેવાઓ.',
      futureReady: 'ભવિષ્ય માટે સજ્જ',
      visionTitle: 'અમારું વિઝન',
      visionP1:
        'ભવિષ્ય તરફ જોતાં, એક્યુરેટ કાસ્ટિંગે લિન મેન્યુફેક્ચરિંગ પહેલ શરૂ કરી છે. ગુણવત્તા, વાજબી કિંમત અને ગ્રાહક સંતોષ સાથે અમે નવા બજારો સુધી પહોંચવા કટિબદ્ધ છીએ.',
      visionP2:
        'નવી ટેકનોલોજી અને ઉદ્યોગના શ્રેષ્ઠ ઉત્પાદન સાધનોમાં રોકાણ કરીને અમે અમારી ક્ષમતાઓ સતત વધારી રહ્યા છીએ.',
      partnerBtn: 'અમારી સાથે ભાગીદારી કરો',
    },
    capabilitiesPage: {
      bannerTitle: 'ટેકનિકલ ક્ષમતાઓ',
      bannerSub: 'ફેરસ, સ્ટેનલેસ, ડુપ્લેક્સ અને સુપર એલોયની વિશાળ શ્રેણી',
      badge: 'ટેકનિકલ ક્ષમતાઓ',
      title: 'એક્યુરેટ કાસ્ટિંગ ખાતે વપરાતા મટીરીયલ્સ :',
      desc:
        'અમારું આધુનિક ફાઉન્ડ્રી પ્લાન્ટ ASTM, DIN, EN અને BS આંતરરાષ્ટ્રીય ધોરણો અનુસાર વિવિધ ગ્રેડનું કાસ્ટિંગ કરે છે.',
      astmTh: 'ASTM ગ્રેડ',
      dinTh: 'DIN સમકક્ષ',
      requestBtn: 'કેમિકલ વિશિષ્ટતાઓ મેળવો',
      foundrySpecBadge: 'ફાઉન્ડ્રી સ્પેસિફિકેશન',
      foundryTitle: 'કોઈ ખાસ એલોય અથવા નોન-સ્ટાન્ડર્ડ ગ્રેડ જોઈએ છે?',
      foundryDesc:
        'અમારું ૨૪-ચેનલ સ્પેક્ટ્રોમીટર અને ધાતુશાસ્ત્ર નિષ્ણાતો તમારી ચોક્કસ જરૂરિયાતો અનુસાર એલોય બનાવી આપે છે.',
      consultBtn: 'નિષ્ણાત સાથે વાત કરો',
    },
    qualityPage: {
      bannerTitle: 'ગુણવત્તા ખાતરી',
      bannerSub: 'અસમાધાનકારી ધાતુશાસ્ત્ર ધોરણો અને પ્રમાણિત પ્રયોગશાળા',
      badge: 'ધાતુશાસ્ત્ર ઉત્કૃષ્ટતા',
      title: 'ઝીરો-ડિફેક્ટ ગુણવત્તા નીતિ',
      desc:
        'અમારી ગુણવત્તા નીતિ ઉચ્ચ ઉત્પાદન ધોરણો દર્શાવે છે. દરેક મોલ્ટ ગ્રાહકની ચોક્કસ જરૂરિયાત અને આંતરરાષ્ટ્રીય કોડ અનુસાર તપાસવામાં આવે છે.',
      isoTitle: 'ISO 9001:2015',
      isoDesc: 'ચોક્કસ ઉત્પાદન માટે પ્રમાણિત ગુણવત્તા સંચાલન પ્રણાલી.',
      pedTitle: 'PED 2014/68/EU',
      pedDesc: 'યુરોપિયન અને વૈશ્વિક બજાર માટે પ્રેશર ઇક્વિપમેન્ટ ડાયરેક્ટિવ પ્રમાણિત.',
      adTitle: 'AD 2000-W0',
      adDesc: 'હાઈ-ટેમ્પરેચર પ્રેશર વેસલ્સ માટે જર્મન તકનીકી નિયમો સાથે સુસંગત.',
      infraBadge: 'પરીક્ષણ અને નિરીક્ષણ સુવિધાઓ',
      infraTitle: 'ઇન-હાઉસ લેબોરેટરી અને ચકાસણી પ્રક્રિયાઓ',
      certBadge: 'સત્તાવાર માન્યતા',
      certTitle: 'અમારા આંતરરાષ્ટ્રીય પ્રમાણપત્રો',
      certSub: 'વિગતો જોવા માટે કોઈપણ પ્રમાણપત્ર પર ક્લિક કરો.',
      cert1Title: 'ISO 9001:2015 પ્રમાણપત્ર',
      cert1Std: 'ગુણવત્તા વ્યવસ્થાપન સિસ્ટમ',
      cert2Title: 'PED 2014/68/EU પ્રમાણપત્ર',
      cert2Std: 'પ્રેશર ઇક્વિપમેન્ટ ડાયરેક્ટિવ (TUV)',
      cert3Title: 'AD 2000-Merkblatt W0',
      cert3Std: 'દબાણ પાત્રો માટે તકનીકી નિયમો',
      viewCert: 'સંપૂર્ણ પ્રમાણપત્ર જુઓ',
    },
    processPage: {
      bannerTitle: 'ઉત્પાદન પ્રક્રિયા',
      bannerSub: '૧૪-તબક્કાની ચોક્કસ લોસ્ટ-વેક્સ ઇન્વેસ્ટમેન્ટ કાસ્ટિંગ સાયકલ',
      badge: 'ગુણવત્તાયુક્ત એન્જિનિયરિંગ',
      title: 'અમારી ઇન્વેસ્ટમેન્ટ કાસ્ટિંગ પ્રક્રિયા',
      desc:
        'ટૂલ ડાઇ બનાવવાથી લઈને હીટ ટ્રીટમેન્ટ અને ૧૦૦% અંતિમ નિરીક્ષણ સુધીની સંપૂર્ણ સચોટ પ્રક્રિયા.',
      verifiedCheckpoint: 'ચકાસાયેલ ગુણવત્તા ચેકપોઇન્ટ',
      ctaTitle: 'ખામીરહિત અને મજબૂત કાસ્ટિંગ્સ શોધી રહ્યા છો?',
      ctaDesc:
        'અમારી એન્જિનિયરિંગ ટીમ તમારા ડ્રોઇંગની સમીક્ષા કરી ખામીરહિત ઉત્પાદન માટે યોગ્ય સલાહ આપશે.',
      ctaBtn: 'તમારું ડ્રોઇંગ મોકલો',
    },
    contactPage: {
      bannerTitle: 'સંપર્ક કરો',
      bannerSub: 'અમે સેવા આપવા હંમેશા તૈયાર છીએ — અમારી ટીમ સાથે વાત કરો',
      badge: 'સંપર્ક સાધો',
      title: 'એક્યુરેટ કાસ્ટિંગ વર્ક્સ',
      desc:
        'પ્રોડક્ટ ડ્રોઇંગ, ટૂલિંગ પૂછપરછ, મટીરીયલ સલાહ અને ક્વોટેશન માટે અમારી ટીમનો સંપર્ક કરો.',
      factoryAddr: 'ફેક્ટરી સરનામું',
      phoneNumbers: 'ફોન નંબર્સ',
      emailInquiries: 'ઈમેલ પૂછપરછ',
      operatingHours: 'કામકાજના કલાકો',
      wednesdayOff: '(અઠવાડિક રજા - બુધવાર)',
      plantLocation: 'પ્લાન્ટ સ્થાન — રાજકોટ, ગુજરાત',
      openMaps: 'ગૂગલ મેપ્સમાં જુઓ ↗',
      formTitle: 'અમને સંદેશ મોકલો',
      formDesc:
        'અમારા કાસ્ટિંગ સ્પષ્ટીકરણો, ભાવો કે ડિલિવરી વિશે કોઈ પ્રશ્ન છે? અમને લખો.',
      firstName: 'પ્રથમ નામ',
      lastName: 'અટક / છેલ્લું નામ',
      phone: 'ફોન નંબર',
      email: 'ઈમેલ',
      subject: 'વિષય',
      message: 'સંદેશ',
      messagePlaceholder:
        'મહેરબાની કરીને તમારા કાસ્ટિંગ સ્પેસિફિકેશન, મટીરીયલ અને જથ્થો જણાવો...',
      submitBtn: 'સંદેશ મોકલો',
      sendingBtn: 'મોકલી રહ્યું છે...',
      successMsg: 'તમારો સંદેશ સફળતાપૂર્વક મોકલાઈ ગયો છે. અમે જલ્દી સંપર્ક કરીશું!',
    },
  },

  // ----------------------------------------------------
  // HINDI (हिन्दी)
  // ----------------------------------------------------
  hi: {
    nav: {
      home: 'होम',
      aboutUs: 'हमारे बारे में',
      technicalCapabilities: 'तकनीकी क्षमताएं',
      qualityAssurance: 'गुणवत्ता आश्वासन',
      process: 'उत्पादन प्रक्रिया',
      product: 'उत्पाद',
      contactUs: 'संपर्क करें',
      getInTouch: 'संपर्क करें',
      callUs: 'कॉल करें',
      tagline: 'हम आपके लिए सर्वश्रेष्ठ सेवा प्रदान करते हैं।',
    },
    slider: {
      weAre: 'हम हैं',
      title: 'एक्यूरेट कास्टिंग',
      description: 'कास्टिंग में सटीकता और विश्वसनीयता प्रदान करने वाली अग्रणी भारतीय कंपनी।',
      contactNow: 'अभी संपर्क करें',
    },
    pillars: {
      p1Title: 'इंजीनियरिंग उत्कृष्टता',
      p1Desc:
        'हमारी टीम द्वारा अपनाई जाने वाली प्रक्रिया निरंतर सुधार पर केंद्रित है। उच्च गुणवत्ता वाली कास्टिंग के लिए हमारे पास विशेषज्ञों की टीम और आधुनिक मशीनरी है।',
      p2Title: 'मानक और नैतिकता',
      p2Desc:
        'एक्यूरेट कास्टिंग की नीति उच्च स्तर की निर्माण नीतियों को दर्शाती है। हम ग्राहकों की बदलती जरूरतों को ध्यान में रखते हुए समय पर गुणवत्तापूर्ण उत्पाद प्रदान करने के लिए प्रतिबद्ध हैं।',
      p3Title: 'पर्यावरण और कार्यक्षेत्र',
      p3Desc:
        'कार्य वातावरण काम को सुखद बनाने में अत्यंत महत्वपूर्ण है। हमारी कुशल टीम के लिए हमारे पास सर्वोत्तम कार्यक्षेत्र और आधुनिक वातावरण है।',
    },
    homeAbout: {
      badge: 'हमारे बारे में',
      title: 'एक्यूरेट कास्टिंग में आपका स्वागत है!',
      desc1:
        'एक्यूरेट कास्टिंग घरेलू और अंतरराष्ट्रीय दोनों बाजारों के लिए उच्च गुणवत्ता वाले इन्वेस्टमेंट कास्टिंग उत्पादों का निर्माता है। ग्राहक संतुष्टि और उत्कृष्टता हासिल करना हमारा प्राथमिक लक्ष्य है।',
      desc2:
        'हम प्रेरण भट्टियों, स्वचालित मोम इंजेक्शन प्रेसों और स्पेक्ट्रोमीटर मिश्र धातु नियंत्रण के साथ अंतरराष्ट्रीय मानकों (IS 11166, VDA P 690 D2 और ISO 2768) के अनुसार निर्माण करते हैं।',
      readMore: 'अधिक जानकारी पढ़ें',
      skills: [
        'टाइटेनियम वेल्डिंग',
        'मोबाइल वेल्डिंग',
        'स्टेनलेस स्टील',
        'मैग्नीशियम मिश्र धातु',
        'पाइप वेल्डिंग',
        'सटीक परिष्करण',
      ],
    },
    stats: {
      projects: 'पूर्ण परियोजनाएं',
      equipment: 'हमारे उपकरण',
      clients: 'संतुष्ट ग्राहक',
      expertise: 'उद्योग अनुभव',
      years: '+ वर्ष',
    },
    whyChoose: {
      badge: 'हमें क्यों चुनें?',
      heading:
        'एक्यूरेट कास्टिंग की अनुभवी टीम ग्राहकों को संतुष्ट रखने के लिए हमेशा तत्पर रहती है!!',
      desc1:
        'विशाल आधुनिक बुनियादी ढांचे, उन्नत मशीनरी और अनुभवी टीम के साथ हम अपने ग्राहकों को सर्वोत्तम गुणवत्ता प्रदान करते हैं।',
      desc2:
        'ऑटोमोबाइल, खाद्य प्रसंस्करण, सर्जिकल, हार्डवेयर, कृषि, पंप और वाल्व जैसे विभिन्न औद्योगिक क्षेत्रों के ग्राहकों के साथ काम करने पर हमें गर्व है।',
      btn: 'क्षमताएं देखें',
      trackRecord: 'हमारा ट्रैक रिकॉर्ड',
      expertiseTitle: 'यह हमारी विशेषज्ञता है',
      expertiseDesc:
        'एक्यूरेट कास्टिंग हमेशा कास्टिंग प्रक्रिया के लिए गुणवत्ता प्रबंधन, निरीक्षण और प्रमाणीकरण पर ध्यान केंद्रित करता है।',
      skills: [
        { title: 'गुणवत्ता प्रबंधन और धातु विज्ञान', pct: 98 },
        { title: 'आयामी सटीकता और निरीक्षण', pct: 95 },
        { title: 'ग्राहक संतुष्टि और समय पर डिलीवरी', pct: 99 },
        { title: 'सुरक्षा और पर्यावरण मानक', pct: 96 },
      ],
    },
    readyToServe: {
      badge: 'ग्राहक सर्वोपरि',
      title: 'हम सेवा के लिए हमेशा तैयार हैं',
      desc:
        'हम ग्राहकों को दोषरहित उत्पाद श्रृंखला वितरित करने में सक्षम हैं। हमारी टीम के सदस्यों के पास दशकों का अनुभव है और वे उच्चतम मानकों को पूरा करने के लिए समर्पित हैं।',
      b1Title: 'पेशेवर तकनीशियन',
      b1Desc: 'फाउंड्री उद्योग में दशकों का अनुभव',
      b2Title: 'समय पर उत्पादन',
      b2Desc: 'सख्त उत्पादन और डिलीवरी समय सारिणी',
      b3Title: 'ग्राहक-अनुकूल सहायता',
      b3Desc: 'प्रत्यक्ष तकनीकी परामर्श',
      b4Title: 'उचित और पारदर्शी मूल्य',
      b4Desc: 'प्रतिस्पर्धी एवं निष्पक्ष दरें',
      hotlineTitle: 'सीधी पूछताछ हेल्पलाइन',
      hours: 'सोम - शुक्र : सुबह 9 से शाम 5',
    },
    servicesSection: {
      badge: 'हमारी सेवाएं.',
      title: 'हम सर्वश्रेष्ठ सेवा प्रदान करते हैं',
      desc:
        'विभिन्न धातुकर्म ग्रेडों में अत्याधुनिक लॉस्ट-वैक्स इन्वेस्टमेंट कास्टिंग क्षमताएं।',
      viewSpecs: 'विशिष्टताएं देखें',
      s1Title: 'इन्वेस्टमेंट कास्टिंग',
      s1Desc:
        'इन्वेस्टमेंट कास्टिंग (लॉस्ट-वैक्स प्रक्रिया) मोम मॉडल बनाकर उस पर सिरेमिक खोल चढ़ाकर जटिल और सटीक कास्टिंग बनाने की विधि है।',
      s1Tag: 'मुख्य विशेषता',
      s2Title: 'अलॉय स्टील कास्टिंग',
      s2Desc:
        'अलॉय स्टील कास्टिंग में लोहे, कार्बन और अन्य तत्वों को मिलाकर उच्च शक्ति और घिसाव-प्रतिरोधी उत्पाद बनाए जाते हैं।',
      s2Tag: 'उच्च सामर्थ्य',
      s3Title: 'कार्बन स्टील कास्टिंग',
      s3Desc:
        'कार्बन स्टील कास्टिंग टिकाऊ और मजबूत औद्योगिक अनुप्रयोगों के लिए एक आदर्श विकल्प है।',
      s3Tag: 'टिकाऊ व सुदृढ़',
      s4Title: 'स्टेनलेस स्टील कास्टिंग',
      s4Desc:
        'न्यूनतम 10.5% क्रोमियम युक्त स्टेनलेस स्टील मिश्र धातुओं से जंग-रोधी और उत्कृष्ट फिनिश वाले उत्पाद बनाए जाते हैं।',
      s4Tag: 'जंग-प्रतिरोधी',
    },
    productsSection: {
      badge: 'उत्पाद पोर्टफोलियो',
      title: 'हमारे उत्पाद देखें',
      desc: 'सटीक इन्वेस्टमेंट कास्टिंग उत्पादों की विस्तृत श्रृंखला का अन्वेषण करें।',
      browseAll: 'सभी 9 क्षेत्र देखें',
      quickView: 'त्वरित विवरण',
      inquire: 'पूछताछ करें',
      modalBtn: 'विनिर्देश और मूल्य प्राप्त करें',
      modalClose: 'बंद करें',
      customTitle: 'क्या आपके पास कोई विशेष ड्राइंग या ओईएम पुर्जा है?',
      customDesc:
        'हम 10 ग्राम से लेकर 60 किलोग्राम प्रति पीस तक के कस्टम पार्ट्स बनाते हैं। हमें अपना सीएडी या 2डी ड्राइंग भेजें।',
      customBtn: 'कस्टम कोटेशन मांगें',
    },
    testimonialsSection: {
      badge: 'प्रशंसापत्र',
      title: 'देखें हमारे ग्राहक क्या कहते हैं',
      desc:
        'कास्टिंग में हमारी विशेषज्ञता हमें ग्राहकों को दोषरहित उत्पाद देने में सक्षम बनाती है। हमारे ग्राहक स्वयं इसकी गवाही देते हैं।',
      r1Name: 'मितुल पटेल',
      r1Role: 'ग्राहक',
      r1Quote:
        'स्टाफ का अच्छा व्यवहार, बेहतरीन इंजीनियरिंग ज्ञान और सेवाएं। एक्यूरेट कास्टिंग ने हमेशा उच्च गुणवत्ता के साथ समय पर डिलीवरी दी है।',
      r2Name: 'अजय चणियारा',
      r2Role: 'औद्योगिक भागीदार',
      r2Quote:
        'सबमर्सिबल बुश के साथ बहुत अच्छा अनुभव रहा। वे नए डिजाइन विकास और एल्युमीनियम डाई कास्टिंग में विशेषज्ञता रखते हैं।',
      r3Name: 'विकास गोधाणी',
      r3Role: 'विनिर्माण कार्यकारी',
      r3Quote:
        'उनके कर्मचारियों और गुणवत्तापूर्ण उत्पादों के साथ बहुत अच्छा अनुभव। राजकोट में कई कंपनियों के साथ काम किया लेकिन यह कंपनी वाकई बेमिसाल है।',
    },
    costEffective: {
      badge: 'हमें क्यों चुनें',
      title: 'क्या आप महंगे उत्पादों से परेशान हैं?',
      desc:
        'कास्टिंग उद्योग में दशकों का अनुभव हमें अपने ग्राहकों को उचित लागत और समय की बचत के साथ बेहतर उत्पाद देने में मदद करता है।',
      points: [
        'उत्कृष्ट गुणवत्ता वाला कच्चा माल',
        'समन्वय के साथ सटीक माप',
        'उचित मूल्य पर उच्च गुणवत्ता वाले उत्पाद',
        'फोन पर त्वरित तकनीकी सहायता',
        'उच्च ग्राहक संतुष्टि',
      ],
      btn: 'लागत तुलना का अनुरोध करें',
    },
    cta: {
      badge: 'संपर्क करें',
      title: 'लागत प्रभावी कास्टिंग उत्पाद ऑर्डर करने के लिए तैयार हैं?',
      desc:
        'एक्यूरेट कास्टिंग भारत और विदेशों के लिए उच्च गुणवत्ता वाले उत्पादों का निर्माता है। आज ही हमारी इंजीनियरिंग टीम से संपर्क करें।',
      btnContact: 'अभी संपर्क करें',
      btnCall: 'कॉल करें: (+91) 99096-10203',
    },
    footer: {
      aboutText:
        'एक्यूरेट कास्टिंग घरेलू और अंतरराष्ट्रीय बाजारों के लिए उच्च गुणवत्ता वाले इन्वेस्टमेंट कास्टिंग उत्पादों का निर्माता है।',
      followUs: 'हमसे जुड़ें',
      quickLinks: 'त्वरित लिंक',
      contactInfo: 'संपर्क जानकारी',
      address:
        'प्लॉट नं. 11, 12 और 13, सर्वे नं. 57/1, ग्लोबल इंडस्ट्रियल एस्टेट, रिबड़ा रेलवे स्टेशन के पास, रिबड़ा-गोंडल, राजकोट-360311, गुजरात, भारत',
      hours: 'सोम - शुक्र : सुबह 9:00 से शाम 5:00 (बुधवार अवकाश)',
      rights: '©2026 एक्यूरेट कास्टिंग। सर्वाधिकार सुरक्षित।',
      tagline: 'सटीक इन्वेस्टमेंट कास्टिंग निर्माता | राजकोट, गुजरात',
    },
    aboutPage: {
      bannerTitle: 'हमारे बारे में',
      bannerSub: 'कास्टिंग में विश्वसनीयता — भारत का प्रमुख इन्वेस्टमेंट कास्टिंग प्लांट',
      meltInFidelity: 'कास्टिंग में विश्वसनीयता',
      title: 'एक्यूरेट कास्टिंग के बारे में',
      p1:
        'एक्यूरेट कास्टिंग घरेलू और अंतरराष्ट्रीय बाजारों के लिए उच्च गुणवत्ता वाले इन्वेस्टमेंट कास्टिंग उत्पादों का निर्माता है। राजकोट, गुजरात के औद्योगिक केंद्र में स्थित हमारी कंपनी गुणवत्ता के लिए जानी जाती है।',
      p2:
        'हम ग्राहकों की आवश्यकताओं के अनुरूप निकटतम सहनशीलता, बेहतर फिनिश और उच्च मानकों के उत्पाद बनाते हैं। हमारी वार्षिक उत्पादन क्षमता 550 मीट्रिक टन है।',
      keySpecsTitle: 'मुख्य उत्पादन विनिर्देश:',
      specCapacity: 'वार्षिक 550 मीट्रिक टन',
      specWeight: '10 ग्राम से 60 किलोग्राम प्रति पीस',
      specTolerance: 'IS 11166 : 1993, VDA P 690 D2 और ISO 2768',
      specMetals: 'कार्बन, अलॉय, स्टेनलेस स्टील, हेस्टेलॉय, मोनेल',
      p3:
        'संस्था की रीढ़ के रूप में हमारी अनुभवी टीम सौहार्दपूर्ण वातावरण में काम करती है और हर दिन बेहतर करने का प्रयास करती है।',
      annualCapacity: 'वार्षिक क्षमता',
      pedCertified: 'PED प्रमाणित',
      infraBadge: 'बुनियादी ढांचा',
      infraTitle: 'हमारी सेवाएं और प्रक्रियाएं',
      infraDesc: 'डिजाइन सहायता से लेकर अंतिम मशीनीकृत डिलीवरी तक पूर्ण कास्टिंग सेवाएं।',
      futureReady: 'भविष्य के लिए तैयार',
      visionTitle: 'हमारा विजन',
      visionP1:
        'भविष्य को ध्यान में रखते हुए, एक्यूरेट कास्टिंग ने लीन मैन्युफैक्चरिंग पहल शुरू की है। गुणवत्ता, लागत और ग्राहक संतुष्टि के साथ हम नए बाजारों तक पहुंचने के लिए प्रयासरत हैं।',
      visionP2:
        'उद्योग की सर्वोत्तम उत्पादन प्रौद्योगिकियों में निवेश करके हम अपनी क्षमताओं का निरंतर विस्तार कर रहे हैं।',
      partnerBtn: 'हमारे साथ साझेदारी करें',
    },
    capabilitiesPage: {
      bannerTitle: 'तकनीकी क्षमताएं',
      bannerSub: 'फेरस, स्टेनलेस, डुप्लेक्स और सुपर अलॉय की विस्तृत श्रृंखला',
      badge: 'तकनीकी क्षमताएं',
      title: 'एक्यूरेट कास्टिंग में प्रयुक्त सामग्रियां :',
      desc:
        'हमारा आधुनिक फाउंड्री प्लांट अंतरराष्ट्रीय ASTM, DIN, EN और BS मानकों के अनुसार विभिन्न प्रकार के मिश्र धातुओं का उत्पादन करता है।',
      astmTh: 'ASTM ग्रेड',
      dinTh: 'DIN समतुल्य',
      requestBtn: 'रासायनिक विनिर्देश प्राप्त करें',
      foundrySpecBadge: 'फाउंड्री विनिर्देश',
      foundryTitle: 'क्या आपको कस्टम अलॉय या गैर-मानक ग्रेड चाहिए?',
      foundryDesc:
        'हमारा 24-चैनल स्पेक्ट्रोमीटर और धातुकर्म विशेषज्ञ आपकी आवश्यकताओं के अनुसार मिश्र धातुओं का निर्माण कर सकते हैं।',
      consultBtn: 'विशेषज्ञ से परामर्श लें',
    },
    qualityPage: {
      bannerTitle: 'गुणवत्ता आश्वासन',
      bannerSub: 'समझौतारहित धातुकर्म मानक और प्रमाणित प्रयोगशाला',
      badge: 'धातुकर्म उत्कृष्टता',
      title: 'शून्य-दोष गुणवत्ता नीति',
      desc:
        'हमारी गुणवत्ता नीति विनिर्माण के उच्चतम मानकों को दर्शाती है। हम सुनिश्चित करते हैं कि प्रत्येक उत्पाद ग्राहक की आवश्यकताओं और अंतरराष्ट्रीय कोड का पालन करे।',
      isoTitle: 'ISO 9001:2015',
      isoDesc: 'सटीक विनिर्माण के लिए प्रमाणित गुणवत्ता प्रबंधन प्रणाली।',
      pedTitle: 'PED 2014/68/EU',
      pedDesc: 'यूरोपीय और वैश्विक बाजारों के लिए प्रेशर इक्विपमेंट डायरेक्टिव प्रमाणित।',
      adTitle: 'AD 2000-W0',
      adDesc: 'उच्च तापमान और दबाव वाहिकाओं के लिए जर्मन तकनीकी नियमों के अनुरूप।',
      infraBadge: 'परीक्षण और निरीक्षण सुविधाएं',
      infraTitle: 'इन-हाउस प्रयोगशाला और सत्यापन प्रक्रियाएं',
      certBadge: 'आधिकारिक मान्यता',
      certTitle: 'हमारे अंतरराष्ट्रीय प्रमाण पत्र',
      certSub: 'विवरण देखने के लिए किसी भी प्रमाण पत्र पर क्लिक करें।',
      cert1Title: 'ISO 9001:2015 प्रमाण पत्र',
      cert1Std: 'गुणवत्ता प्रबंधन प्रणाली',
      cert2Title: 'PED 2014/68/EU प्रमाण पत्र',
      cert2Std: 'प्रेशर इक्विपमेंट डायरेक्टिव (TUV)',
      cert3Title: 'AD 2000-Merkblatt W0',
      cert3Std: 'दबाव पात्रों के लिए तकनीकी नियम',
      viewCert: 'पूरा प्रमाण पत्र देखें',
    },
    processPage: {
      bannerTitle: 'निर्माण प्रक्रिया',
      bannerSub: '14-चरणीय सटीक लॉस्ट-वैक्स इन्वेस्टमेंट कास्टिंग चक्र',
      badge: 'गुणवत्ता इंजीनियर',
      title: 'हमारी इन्वेस्टमेंट कास्टिंग प्रक्रिया',
      desc:
        'डाई निर्माण से लेकर हीट ट्रीटमेंट और 100% अंतिम निरीक्षण तक, हमारी प्रक्रिया पूर्ण विश्वसनीयता की गारंटी देती है।',
      verifiedCheckpoint: 'सत्यापित गुणवत्ता चेकपॉइंट',
      ctaTitle: 'दोषरहित और मजबूत कास्टिंग की तलाश है?',
      ctaDesc:
        'हमारी इंजीनियरिंग टीम आपके ड्रॉइंग की समीक्षा कर दोषरहित उत्पादन के लिए सर्वोत्तम सुझाव देगी।',
      ctaBtn: 'अपनी ड्राइंग जमा करें',
    },
    contactPage: {
      bannerTitle: 'संपर्क करें',
      bannerSub: 'हम हमेशा सेवा के लिए तैयार हैं — हमारी टीम से जुड़ें',
      badge: 'संपर्क में रहें',
      title: 'एक्यूरेट कास्टिंग वर्क्स',
      desc:
        'उत्पाद ड्रॉइंग, टूलिंग पूछताछ, सामग्री व्यवहार्यता और कोटेशन अनुरोध के लिए संपर्क करें।',
      factoryAddr: 'फैक्ट्री का पता',
      phoneNumbers: 'फ़ोन नंबर',
      emailInquiries: 'ईमेल पूछताछ',
      operatingHours: 'कार्य के घंटे',
      wednesdayOff: '(साप्ताहिक अवकाश - बुधवार)',
      plantLocation: 'प्लांट स्थान — राजकोट, गुजरात',
      openMaps: 'गूगल मैप्स में खोलें ↗',
      formTitle: 'हमें संदेश भेजें',
      formDesc:
        'कास्टिंग विनिर्देशों, कोटेशन या डिलीवरी के बारे में कोई प्रश्न है? हमें लिखें।',
      firstName: 'पहला नाम',
      lastName: 'अंतिम नाम',
      phone: 'फ़ोन नंबर',
      email: 'ईमेल',
      subject: 'विषय',
      message: 'संदेश',
      messagePlaceholder:
        'कृपया अपने कास्टिंग विनिर्देश, सामग्री ग्रेड, मात्रा या चित्र का विवरण दें...',
      submitBtn: 'संदेश भेजें',
      sendingBtn: 'भेजा जा रहा है...',
      successMsg: 'आपका संदेश सफलतापूर्वक भेज दिया गया है। हम जल्द ही संपर्क करेंगे!',
    },
  },

  // ----------------------------------------------------
  // GERMAN (DEUTSCH)
  // ----------------------------------------------------
  de: {
    nav: {
      home: 'Startseite',
      aboutUs: 'Über Uns',
      technicalCapabilities: 'Technische Kapazitäten',
      qualityAssurance: 'Qualitätssicherung',
      process: 'Fertigungsprozess',
      product: 'Produkte',
      contactUs: 'Kontakt',
      getInTouch: 'Kontakt Aufnehmen',
      callUs: 'Rufen Sie uns an',
      tagline: 'Wir bieten Ihnen den besten Service.',
    },
    slider: {
      weAre: 'WIR SIND',
      title: 'ACCURATE CASTING',
      description: 'Ein indisches Unternehmen für Präzisionsfeinguss mit höchster Zuverlässigkeit.',
      contactNow: 'Jetzt Kontaktieren',
    },
    pillars: {
      p1Title: 'INGENIEUR-EXZELLENZ',
      p1Desc:
        'Unser Prozess konzentriert sich auf kontinuierliche Verbesserung. Wir verfügen über ein hochqualifiziertes Team und modernste Maschinen für erstklassige Gussqualität.',
      p2Title: 'STANDARDS & ETHIK',
      p2Desc:
        'Die Ethikrichtlinie von Accurate Casting spiegelt unseren hohen Fertigungsstandard wider. Wir antizipieren Kundenanforderungen und liefern pünktlich innovative Gussstücke.',
      p3Title: 'ARBEITSUMFELD & UMWELT',
      p3Desc:
        'Ein erstklassiges Arbeitsumfeld ist entscheidend für Spitzenleistungen. Unser Team arbeitet in einer modernen, sicheren und motivierenden Umgebung.',
    },
    homeAbout: {
      badge: 'Über Uns',
      title: 'WILLKOMMEN BEI ACCURATE CASTING !',
      desc1:
        'Accurate Casting ist ein renommierter Hersteller von hochwertigen Feinguss-Produkten (Lost-Wax) für nationale und internationale Märkte. Unser Ziel ist höchste Kundenzufriedenheit.',
      desc2:
        'Wir arbeiten mit Induktionsschmelzöfen, vollautomatischen Wachsspritzpressen und optischer Spektrometrie nach internationalen Normen (IS 11166, VDA P 690 D2 & ISO 2768).',
      readMore: 'Mehr über uns erfahren',
      skills: [
        'Titan-Schweißen',
        'Mobiles Schweißen',
        'Edelstahl',
        'Magnesium-Legierungen',
        'Rohrschweißen',
        'Präzisions-Putzerei',
      ],
    },
    stats: {
      projects: 'Abgeschlossene Projekte',
      equipment: 'Produktionsanlagen',
      clients: 'Zufriedene Kunden',
      expertise: 'Branchenerfahrung',
      years: '+ Jahre',
    },
    whyChoose: {
      badge: 'Warum Accurate Casting?',
      heading:
        'Unser erfahrenes Team bei Accurate Casting gibt stets sein Bestes für zufriedene Kunden!!',
      desc1:
        'Mit moderner Infrastruktur, fortschrittlichen Maschinen und dem unübertroffenen Talent unseres Teams bieten wir beste Gusserzeugnisse.',
      desc2:
        'Wir beliefern weltweit führende Branchen wie Automobilbau, Lebensmittelverarbeitung, Medizintechnik, Armaturen, Landwirtschaft sowie Pumpen- und Ventilbau.',
      btn: 'Kapazitäten Erkunden',
      trackRecord: 'Unsere Bilanz',
      expertiseTitle: 'Das ist unsere Expertise',
      expertiseDesc:
        'Accurate Casting setzt auf rigoroses Qualitätsmanagement, maßliche Prüfung und internationale Zertifizierungen.',
      skills: [
        { title: 'Qualitätsmanagement & Metallurgie', pct: 98 },
        { title: 'Maßhaltigkeit & Toleranzprüfung', pct: 95 },
        { title: 'Kundenzufriedenheit & Termintreue', pct: 99 },
        { title: 'Sicherheits- & Umweltstandards', pct: 96 },
      ],
    },
    readyToServe: {
      badge: 'Kunde Zuerst',
      title: 'Wir sind jederzeit für Sie da',
      desc:
        'Wir liefern unseren Kunden fehlerfreie Produkte. Jedes Teammitglied bringt jahrzehntelange Erfahrung in der Gießereibranche ein und garantiert höchste Fertigungsqualität.',
      b1Title: 'Professionelle Fachkräfte',
      b1Desc: 'Jahrzehntelange Gießereierfahrung',
      b2Title: 'Termintreue Fertigung',
      b2Desc: 'Strikte Einhaltung von Lieferplänen',
      b3Title: 'Kundenfreundliche Beratung',
      b3Desc: 'Direkte technische Betreuung',
      b4Title: 'Faire & Transparente Preise',
      b4Desc: 'Hervorragendes Preis-Leistungs-Verhältnis',
      hotlineTitle: 'Direkte Anfrage-Hotline',
      hours: 'Mo - Fr : 9:00 - 17:00 Uhr',
    },
    servicesSection: {
      badge: 'Unsere Leistungen.',
      title: 'Wir bieten besten Service',
      desc:
        'Hochmoderne Wachsausschmelzverfahren (Feinguss) für verschiedenste metallurgische Legierungsklassen.',
      viewSpecs: 'Spezifikationen Ansehen',
      s1Title: 'Feinguss (Lost-Wax)',
      s1Desc:
        'Feinguss ist ein Präzisionsfertigungsverfahren, bei dem ein Wachsmodell hergestellt, mit einer keramischen Schale überzogen und anschließend ausgeschmolzen wird.',
      s1Tag: 'Kernkompetenz',
      s2Title: 'Legierter Stahlguss',
      s2Desc:
        'Legierter Stahlguss kombiniert Eisen, Kohlenstoff und Legierungselemente für hochfeste, verschleißfeste Endkomponenten.',
      s2Tag: 'Hochfest',
      s3Title: 'Kohlenstoffstahl-Guss',
      s3Desc:
        'Verlässlicher Guss aus unlegiertem und niedriglegiertem Stahl für zähe und hochbelastbare Maschinenbauteile.',
      s3Tag: 'Robust & Zäh',
      s4Title: 'Edelstahlguss',
      s4Desc:
        'Korrosions- und oxidationsbeständiger Feinguss aus austenitischen und ferritischen Edelstahllegierungen mit mindestens 10,5 % Chrom.',
      s4Tag: 'Korrosionsfest',
    },
    productsSection: {
      badge: 'Produktportfolio',
      title: 'Entdecken Sie unsere Produkte',
      desc: 'Entdecken Sie unser breites Spektrum an Präzisions-Feingussteilen.',
      browseAll: 'Alle 9 Branchen Anzeigen',
      quickView: 'Schnellansicht',
      inquire: 'Anfragen',
      modalBtn: 'Spezifikation & Angebot anfordern',
      modalClose: 'Schließen',
      customTitle: 'Haben Sie eine spezifische Zeichnung oder ein OEM-Bauteil?',
      customDesc:
        'Wir fertigen maßgeschneiderte Gussstücke von 10 Gramm bis 60 kg Stückgewicht nach Ihren CAD-Modellen oder 2D-Zeichnungen.',
      customBtn: 'Individuelles Angebot anfordern',
    },
    testimonialsSection: {
      badge: 'Kundenstimmen',
      title: 'Was unsere Kunden sagen',
      desc:
        'Unsere Kompetenz im Gussbereich ermöglicht es uns, makellose Produkte zu liefern. Unsere Kunden sprechen für uns.',
      r1Name: 'Mitul Patel',
      r1Role: 'Kunde',
      r1Quote:
        'Sehr gutes Auftreten des Personals, exzellentes Engineering und zuverlässiger Service. Accurate Casting hat unsere Liefertermine stets mit höchster Qualität eingehalten.',
      r2Name: 'Ajay Chaniyara',
      r2Role: 'Industriepartner',
      r2Quote:
        'Hervorragende Erfahrungen mit Tauchpumpen-Buchsen. Das Team verfügt über große Expertise in Neuentwicklungen und Druckguss.',
      r3Name: 'Vikash Godhani',
      r3Role: 'Produktionsleiter',
      r3Quote:
        'Sehr gute Erfahrung mit den Fachkräften und den Qualitätsprodukten. In Bezug auf Präzision und Lieferzeit sticht diese Gießerei deutlich hervor.',
    },
    costEffective: {
      badge: 'Warum Accurate Casting',
      title: 'Haben Sie genug von überteuerten Gussteilen?',
      desc:
        'Jahrzehntelange Erfahrung in der Feingussbranche ermöglicht es uns, unseren Kunden wirtschaftliche Vorteile und schnelle Durchlaufzeiten bei kompromissloser Qualität zu bieten.',
      points: [
        'Erstklassige Rohmaterialien',
        'Hohe Maßgenauigkeit durch präzise Prozessführung',
        'Qualitätsprodukte zu wettbewerbsfähigen Preisen',
        'Schneller technischer Telefonsupport',
        'Maximale Kundenzufriedenheit',
      ],
      btn: 'Kostenvergleich Anfordern',
    },
    cta: {
      badge: 'Kontakt Aufnehmen',
      title: 'Bereit für kosteneffizienten Präzisionsguss?',
      desc:
        'Accurate Casting liefert weltweit erstklassige Feingussprodukte. Sprechen Sie noch heute mit unserem Ingenieurteam.',
      btnContact: 'Jetzt Kontakt Aufnehmen',
      btnCall: 'Anrufen: (+91) 99096-10203',
    },
    footer: {
      aboutText:
        'Accurate Casting ist ein führender Hersteller von Feinguss-Produkten für anspruchsvolle nationale und internationale Kunden.',
      followUs: 'Folgen Sie uns',
      quickLinks: 'Schnelllinks',
      contactInfo: 'Kontaktinformationen',
      address:
        'Plot No. 11, 12 & 13, Sr.No. 57/1, Global Industrial Estate, nahe Bahnhof Ribda, Ribda-Gondal, Rajkot-360311, Gujarat, Indien',
      hours: 'Mo - Fr : 9:00 - 17:00 Uhr (Mittwoch Ruhetag)',
      rights: '©2026 Accurate Casting. Alle Rechte vorbehalten.',
      tagline: 'Präzisions-Feinguss-Hersteller | Rajkot, Gujarat',
    },
    aboutPage: {
      bannerTitle: 'Über Uns',
      bannerSub: 'Melt-In Fidelity — Indiens führende Feingießerei',
      meltInFidelity: 'MELT-IN FIDELITY',
      title: 'ÜBER ACCURATE CASTING',
      p1:
        'Accurate Casting ist ein Hersteller hochwertiger Feinguss-Komponenten für weltweite Industriemärkte. Mit Sitz in Rajkot, dem florierenden Industriezentrum Gujarats, stehen wir für kompromisslose Präzision.',
      p2:
        'Wir streben nach engsten Toleranzen, bester Oberflächengüte und Einhaltung internationaler Spezifikationen. Unsere Jahreskapazität beträgt 550 Tonnen für Eisen-, Edelstahl- und Sonderlegierungen.',
      keySpecsTitle: 'Wichtige Fertigungskennzahlen:',
      specCapacity: '550 Tonnen / Jahr',
      specWeight: '10 g bis 60 kg Stückgewicht',
      specTolerance: 'IS 11166 : 1993, VDA P 690 D2 & ISO 2768',
      specMetals: 'Kohlenstoffstahl, Edelstahl, Hastelloy, Monel',
      p3:
        'Unser engagiertes Team bildet das Rückgrat des Unternehmens und schafft ein harmonisches, werteorientiertes Arbeitsumfeld.',
      annualCapacity: 'Jahreskapazität',
      pedCertified: 'PED Zertifiziert',
      infraBadge: 'INFRASTRUKTUR',
      infraTitle: 'UNSERE LEISTUNGEN & PROZESSE',
      infraDesc:
        'Schlüsselfertige Gusslösungen von der ersten CAD-Konstruktion bis zur fertig bearbeiteten Komponente.',
      futureReady: 'ZUKUNFTSGERICHTET',
      visionTitle: 'UNSERE VISION',
      visionP1:
        'Für die Zukunft hat Accurate Casting eine umfassende Lean-Manufacturing-Initiative gestartet. Mit Fokus auf Qualität, Wirtschaftlichkeit und Kundennutzen erweitern wir stetig unsere internationalen Partnerschaften.',
      visionP2:
        'Durch Investitionen in modernste Gießereitechnologien und strenge Qualitätsstandards bauen wir unsere Marktführerschaft kontinuierlich aus.',
      partnerBtn: 'Partner Werden',
    },
    capabilitiesPage: {
      bannerTitle: 'Technische Kapazitäten',
      bannerSub: 'Breites Spektrum an Eisen-, Edelstahl-, Duplex- & Superlegierungen',
      badge: 'TECHNISCHE KAPAZITÄTEN',
      title: 'Vergossene Werkstoffe bei Accurate Casting :',
      desc:
        'Unsere moderne Gießerei vergießt ein breites Spektrum an Werkstoffen nach internationalen ASTM-, DIN-, EN- und BS-Normen.',
      astmTh: 'ASTM Güteklasse',
      dinTh: 'DIN Äquivalent',
      requestBtn: 'Chemische Spezifikation anfordern',
      foundrySpecBadge: 'Gießerei-Spezifikationen',
      foundryTitle: 'Benötigen Sie eine Sonderlegierung?',
      foundryDesc:
        'Mit unserem 24-Kanal-Spektrometer und Metallurgie-Experten können wir maßgeschneiderte Schmelzen für Ihre Einsatzbedingungen formulieren.',
      consultBtn: 'Metallurgen Konsultieren',
    },
    qualityPage: {
      bannerTitle: 'Qualitätssicherung',
      bannerSub: 'Kompromisslose metallurgische Standards & zertifizierte Labore',
      badge: 'METALLURGISCHE EXZELLENZ',
      title: 'Null-Fehler-Qualitätspolitik',
      desc:
        'Unsere Qualitätspolitik erfüllt höchste Industrieansprüche. Jede Schmelze wird exakt nach Kundenspezifikation und Druckbehälterrichtlinien geprüft.',
      isoTitle: 'ISO 9001:2015',
      isoDesc: 'Zertifiziertes Qualitätsmanagementsystem für reproduzierbare Präzision.',
      pedTitle: 'PED 2014/68/EU',
      pedDesc: 'Druckgeräterichtlinie (TÜV) zertifiziert für europäische und globale Märkte.',
      adTitle: 'AD 2000-W0',
      adDesc: 'Konform mit den technischen Regeln für Druckbehälter.',
      infraBadge: 'PRÜF- & INSPEKTIONS-INFRASTRUKTUR',
      infraTitle: 'Eigenes Prüflabor & Kontrollverfahren',
      certBadge: 'OFFIZIELLE AKKREDITIERUNGEN',
      certTitle: 'Unsere Internationalen Zertifikate',
      certSub: 'Klicken Sie auf ein Zertifikat, um die Prüfdetails einzusehen.',
      cert1Title: 'ISO 9001:2015 Zertifikat',
      cert1Std: 'Qualitätsmanagementsysteme',
      cert2Title: 'PED 2014/68/EU Zertifikat',
      cert2Std: 'Druckgeräterichtlinie (TÜV)',
      cert3Title: 'AD 2000-Merkblatt W0',
      cert3Std: 'Technische Regeln für Druckbehälter',
      viewCert: 'Vollständiges Zertifikat anzeigen',
    },
    processPage: {
      bannerTitle: 'Fertigungsprozess',
      bannerSub: '14-stufiger Präzisions-Wachsausschmelzguss (Lost-Wax-Verfahren)',
      badge: 'Qualitätsgeprüft',
      title: 'Unser Feingussprozess',
      desc:
        'Vom Werkzeugbau über die kalibrierte Wärmebehandlung bis zur 100%-Endprüfung garantiert unser Prozess vollkommene Zuverlässigkeit.',
      verifiedCheckpoint: 'Geprüfter Qualitäts-Prüfpunkt',
      ctaTitle: 'Suchen Sie lunkerfreie, hochbelastbare Gussteile?',
      ctaDesc:
        'Unser Ingenieurteam prüft Ihre Zeichnungen und berät Sie zur optimalen Werkstoff- und Angussauslegung.',
      ctaBtn: 'Zeichnungen Einreichen',
    },
    contactPage: {
      bannerTitle: 'Kontakt',
      bannerSub: 'Wir sind jederzeit für Sie erreichbar — Sprechen Sie mit unseren Experten',
      badge: 'KONTAKT AUFNEHMEN',
      title: 'Accurate Casting Works',
      desc:
        'Kontaktieren Sie unseren Vertrieb und unsere Techniker für Zeichnungsprüfungen, Werkzeuganfragen und Angebote.',
      factoryAddr: 'Werkssitz / Adresse',
      phoneNumbers: 'Telefonnummern',
      emailInquiries: 'E-Mail-Anfragen',
      operatingHours: 'Öffnungszeiten',
      wednesdayOff: '(Mittwoch Ruhetag)',
      plantLocation: 'Standort — Rajkot, Gujarat',
      openMaps: 'In Google Maps öffnen ↗',
      formTitle: 'Senden Sie uns eine Nachricht',
      formDesc:
        'Haben Sie Fragen zu Spezifikationen, Angeboten oder Lieferzeiten? Schreiben Sie uns.',
      firstName: 'Vorname',
      lastName: 'Nachname',
      phone: 'Telefonnummer',
      email: 'E-Mail-Adresse',
      subject: 'Betreff',
      message: 'Ihre Nachricht',
      messagePlaceholder:
        'Bitte beschreiben Sie Werkstoff, Abmessungen, Stückzahl oder technische Anforderungen...',
      submitBtn: 'Nachricht Senden',
      sendingBtn: 'Wird gesendet...',
      successMsg:
        'Ihre Nachricht wurde erfolgreich versendet. Unser Team meldet sich umgehend bei Ihnen!',
    },
  },
};

export function getTranslations(lang: Language): TranslationSchema {
  return translations[lang] || translations.en;
}
