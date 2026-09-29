/**
 * Elite Digital - Core Data Store
 * Outdoor Advertising, Road Shows, Wide-Format Printing & Complete Service Catalog
 */

const WELCOME_DATA = {
  company: {
    name: "Elite Digital",
    tagline: "Truly Personalized Service",
    descriptor: "Premier Advertising Agency, Hoardings, Road Shows & Digital Printing",
    phone: "+91 739 735 5095",
    phoneClean: "917397355095",
    officePhone: "+91 739 735 5095",
    officePhoneClean: "917397355095",
    enquiryPhone: "+91 904 292 0720",
    enquiryPhoneClean: "919042920720",
    email: "elitedigitalvdm@gmail.com",
    address: "Aaladi Road, (Bus stand Backside), Near Shanmugam Mahalakshmi Thirumana Mahal, Vriddhachalam - 606001",
    city: "Vriddhachalam",
    state: "Tamil Nadu",
    pincode: "606001",
    googleMapsUrl: "https://maps.app.goo.gl/tP7YPDEpNvVDnAdv5",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=ELITE+Digital,+Bus+stand,+Aladi+Rd,+College+Nagar,+Backside,+Virudhachalam,+Tamil+Nadu+606001&t=&z=15&ie=UTF8&iwloc=&output=embed",
    socialHandle: "@elitedigitalvdm",
    instagramUrl: "https://www.instagram.com/elitedigitalvdm/",
    instagramHandle: "@elitedigitalvdm",
    hours: "Open 24 Hours • 7 Days a Week",
    rating: 5.0,
    reviewCount: 13,
    experienceYears: 12,
    projectsCompleted: 4800,
    clientSatisfaction: 99.6,
    corporateClients: 1450
  },

  /* Primary Three Showcases */
  primaryShowcases: [
    {
      id: "hoardings",
      title: "Outdoor Hoardings & Billboards",
      badge: "Flagship Service",
      image: "assets/images/outdoor_hoardings.jpg",
      tagline: "Unmissable Visibility Across High-Traffic Highways & Urban Hotspots",
      description: "Elite Digital delivers prime highway billboards, arterial junction hoardings, and urban unipoles engineered for 24/7 visibility with heavy-duty weather-sealed night floodlighting.",
      metrics: ["100k+ Daily Footfalls", "Certified Heavy Steel Structures", "High-Intensity Night Spotlights"],
      link: "#estimator"
    },
    {
      id: "roadshow",
      title: "Mobile Campaign Road Shows",
      badge: "High Impact Reach",
      image: "assets/images/mobile_roadshow.jpg",
      tagline: "Bringing Your Brand Directly to Customers Across Towns & Rural Belts",
      description: "Turnkey promotional vehicle road shows equipped with high-clarity PA horn systems, stage setups, generator backup, full vehicle vinyl branding, and experienced route drivers.",
      metrics: ["Full Route Planning Across TN", "Crystal Clear Sound Horns", "Interactive Campaign Setup"],
      link: "#estimator"
    },
    {
      id: "printing",
      title: "Wide-Format Flex & Vinyl Printing",
      badge: "Direct Factory Speed",
      image: "assets/images/flex_vinyl_printing.jpg",
      tagline: "Ultra-Sharp 1440 DPI Japanese Eco-Solvent & UV Roll-to-Roll Printing",
      description: "State-of-the-art wide format digital printing on Star Flex, Backlit Lightbox substrate, Blackout Vinyl, One-Way Vision glass film, and durable exhibition standees with same-day dispatch.",
      metrics: ["1440 DPI Photographic Clarity", "Fade & Rain Proof Inks", "Up to 10ft Seamless Width"],
      link: "#estimator"
    }
  ],

  /* Full Catalog from Client Image */
  services: [
    {
      id: "outdoor-hoardings",
      category: "Outdoor Advertising",
      title: "Outdoor Hoardings & Billboards",
      badge: "Primary Showcase",
      image: "assets/images/outdoor_hoardings.jpg",
      description: "Heavy structural steel frame hoardings and highway unipoles erected at high-traffic vantage points across Vriddhachalam, Cuddalore, Neyveli, and surrounding highways with brilliant night floodlights.",
      features: [
        "Prime vantage highway & bus terminus locations",
        "Heavy-duty wind-resistant structural fabrication",
        "Night floodlighting with automatic timer switches",
        "Regular maintenance & quick skin changes"
      ],
      idealFor: "Real estate launches, jewellery showrooms, FMCG brands, educational institutions",
      priceGuide: "Custom monthly & yearly rental"
    },
    {
      id: "mobile-roadshow",
      category: "BTL Marketing",
      title: "Mobile Campaign Road Shows",
      badge: "Primary Showcase",
      image: "assets/images/mobile_roadshow.jpg",
      description: "Fully customized promotional campaign vans and trucks featuring high-fidelity sound systems, generator power, microphone stage setups, and high-impact flex banners for aggressive on-ground awareness.",
      features: [
        "Turnkey roadshow van with certified audio system",
        "Onboard silent generator for uninterrupted power",
        "Experienced route drivers covering multiple towns",
        "Promotional product distribution staging"
      ],
      idealFor: "College admissions, brand roadshows, political campaigns, festival promotions",
      priceGuide: "From ₹6,500 / day"
    },
    {
      id: "flex-vinyl-printing",
      category: "Digital Printing",
      title: "Wide-Format Flex & Vinyl Printing",
      badge: "Primary Showcase",
      image: "assets/images/flex_vinyl_printing.jpg",
      description: "High-speed industrial Japanese roll-to-roll printing delivering photographic quality on Frontlit Star Flex, Backlit Glow Flex, Matte Vinyl, Gloss Vinyl, and One-Way Vision films.",
      features: [
        "1440 DPI high-definition Japanese printheads",
        "UV and rain resistant eco-solvent inks",
        "Seamless banner widths up to 10.5 feet",
        "Fast same-day turnaround for urgent campaigns"
      ],
      idealFor: "Storefront banners, exhibition backdrops, stage flex, temporary event signage",
      priceGuide: "From ₹12 / sq.ft."
    },
    {
      id: "vehicle-wrapping",
      category: "Transit Branding",
      title: "Vehicle Fleet & Bus Wrapping",
      badge: "High RoI",
      image: "assets/images/vehicle_wrapping.jpg",
      description: "Turn your school buses, commercial delivery trucks, vans, and auto-rickshaws into moving billboards with cast automotive vinyl, protective laminate, and seamless bubble-free installation.",
      features: [
        "Premium automotive grade cast vinyl with UV lamination",
        "One-way vision perforated film for vehicle windows",
        "Full wraps, half wraps, and custom door/tailgate decals",
        "Durable against harsh sunlight and highway washing"
      ],
      idealFor: "School & college buses, courier fleets, logistics trucks, retail delivery vans",
      priceGuide: "From ₹4,500 / vehicle"
    },
    {
      id: "sunpack-advertising",
      category: "Mass Media",
      title: "Sunpack Print & On-Site Pole Fixing",
      badge: "Bulk Value",
      image: "assets/images/sunpack_advertising.jpg",
      description: "High-volume screen and digital printing on waterproof corrugated plastic sunpack sheets, complete with experienced field crews for swift mounting on electric poles, trees, and street walls.",
      features: [
        "Lightweight, durable 3mm / 4mm flute sunpack sheets",
        "Bright, high-contrast weatherproof screen / digital printing",
        "Complete field manpower for rapid pole tying & fixing",
        "Massive urban and rural street coverage in days"
      ],
      idealFor: "Tuition centers, school admissions, retail sales announcements, seasonal offers",
      priceGuide: "From ₹18 / sheet (inc. fixing)"
    },
    {
      id: "rental-entrance-arch",
      category: "Event Production",
      title: "Rental Entrance Arches",
      badge: "Event Specialist",
      image: "assets/images/rental_entrance_arch.jpg",
      description: "Grand rental entrance truss arches and decorative gateway structures custom fabricated and dressed with vibrant branded flex skins for marriages, showroom launches, and public festivals.",
      features: [
        "Heavy truss modular framing in standard 20ft to 40ft spans",
        "Complete customized frontlit & backlit flex skin wrapping",
        "Includes rapid on-site erection and same-night dismantling",
        "Integrated lighting mounts for grand evening entrance"
      ],
      idealFor: "Weddings, showroom inaugurations, government functions, political conferences",
      priceGuide: "From ₹4,000 / event day"
    },
    {
      id: "custom-mementos",
      category: "Corporate Gifts",
      title: "Customized Mementos & Awards",
      badge: "Artisan Quality",
      image: "assets/images/custom_mementos.jpg",
      description: "Prestigious laser-cut wooden trophies, crystal acrylic plaques, brass plates, and metallic shields tailored with your organization's logo, event title, and recipient citation.",
      features: [
        "Premium teak wood, golden mirror acrylic, and optical crystal",
        "Sub-millimeter laser engraving & color UV direct printing",
        "Custom shaped silhouettes matching your logo or deity",
        "Individual gift box packing for dignitary presentations"
      ],
      idealFor: "School annual days, sports tournaments, corporate awards, retirement honors",
      priceGuide: "From ₹150 / piece"
    },
    {
      id: "calendars",
      category: "Stationery Branding",
      title: "Custom Wall & Desk Calendars",
      badge: "Year-Round Impact",
      image: "assets/images/calendars.jpg",
      description: "High-volume customized daily tear-off calendars, monthly sheet wall calendars, and executive desk triangular calendars branded with your business contact information and auspicious dates.",
      features: [
        "Vibrant multi-color offset & digital gloss print",
        "Thick art paper with tin mounting / wiro spiral binding",
        "Auspicious Tamil / English calendar dates with festive marks",
        "Bulk wholesale dispatch across Tamil Nadu"
      ],
      idealFor: "Jewellers, textiles, finance companies, grocery distributors, annual client gifts",
      priceGuide: "From ₹25 / calendar"
    },
    {
      id: "invitations",
      category: "Print Craft",
      title: "Premium Invitations & Wedding Cards",
      badge: "Fine Finishes",
      image: "assets/images/invitations.jpg",
      description: "Exquisite wedding cards, house warming invites, and showroom opening cards crafted with gold foil stamping, deep letterpress embossing, laser cutaways, and metallic cardstocks.",
      features: [
        "Rich metallic, textured, and handmade imported sheets",
        "Hot foil stamping (Gold, Rose Gold, Silver, Copper)",
        "Bespoke laser-cut filigree jackets & matching envelopes",
        "Personalized Tamil and English calligraphy typesetting"
      ],
      idealFor: "Grand weddings, corporate anniversaries, house warming ceremonies, retail openings",
      priceGuide: "From ₹15 / card"
    },
    {
      id: "artboard-shape-cutting",
      category: "Specialty Fabrication",
      title: "Art Board & CNC Shape Cutting",
      badge: "Precision Cutting",
      image: "assets/images/artboard_shape_cutting.jpg",
      description: "High-precision computer-numerical router and laser profile contour cutting on art board, foam PVC, sunboard, acrylic, and MDF for standouts, character cutouts, and decorative panels.",
      features: [
        "Precision robotic contour knife and router bit cutting",
        "Direct-to-board UV printing with life-size standee easel stands",
        "Custom shapes, silhouettes, product mockups, and lettering",
        "Clean, burr-free edges ready for immediate assembly"
      ],
      idealFor: "Selfie booths, product launch displays, retail POP standees, decorative wall art",
      priceGuide: "From ₹45 / running foot"
    },
    {
      id: "photo-frames",
      category: "Personal & Studio",
      title: "Custom Photo Framing & Canvas Art",
      badge: "Studio Grade",
      image: "assets/images/photo_frames.jpg",
      description: "High-grade wooden, synthetic, and floating acrylic photo framing with matte lamination, textured canvas printing, and glass/acrylic covers for preserving cherished portraits.",
      features: [
        "Extensive selection of classic antique, modern gold, and minimalist black moldings",
        "Non-fading photographic lamination resistant to moisture",
        "Sturdy MDF backing with heavy-duty hanging hardware",
        "Available in miniature desk sizes to massive family portrait sizes"
      ],
      idealFor: "Wedding portraits, family memories, corporate leader galleries, temple deity frames",
      priceGuide: "From ₹250 / frame"
    },
    {
      id: "social-media-ads",
      category: "Digital Agency",
      title: "Social Media Ads & Creative Design",
      badge: "Viral Graphics",
      image: "assets/images/social_media_ads.jpg",
      description: "Eye-catching graphic design for WhatsApp status promotions, Instagram posts/reels, Facebook flyers, and digital marketing banners crafted to boost online customer inquiries.",
      features: [
        "Tailored typography and high-converting visual hierarchy",
        "Optimized dimensions for Instagram, Facebook, and WhatsApp",
        "Fast 24-hour turnaround for festival greetings & flash sales",
        "Includes source editable files and web-ready formats"
      ],
      idealFor: "Local retail shops, bakeries, clothing showrooms, coaching centers, doctor clinics",
      priceGuide: "From ₹350 / creative"
    }
  ],

  /* Portfolio Case Studies Matching the New Business Scope */
  portfolio: [
    {
      id: "p1",
      title: "Highway Mega Unipole Hoarding",
      category: "hoardings",
      categoryName: "Outdoor Hoardings",
      image: "assets/images/outdoor_hoardings.jpg",
      client: "Gold & Diamond Showroom",
      location: "Vriddhachalam - Cuddalore Highway",
      specs: "40ft × 20ft Unipole • Double-Sided Frontlit Star Flex • 400W LED Spotlights"
    },
    {
      id: "p2",
      title: "Statewide Mobile Campaign Roadshow",
      category: "roadshow",
      categoryName: "Road Shows",
      image: "assets/images/mobile_roadshow.jpg",
      client: "Engineering College Admissions Drive",
      location: "Across Cuddalore & Villupuram Districts",
      specs: "Custom Van Body Wrap • 1200W PA Horn System • 5kVA Onboard Generator"
    },
    {
      id: "p3",
      title: "Mega Wide-Format Print Production",
      category: "printing",
      categoryName: "Flex & Vinyl Printing",
      image: "assets/images/flex_vinyl_printing.jpg",
      client: "Textile Supermarket Launch",
      location: "Vriddhachalam Main Town",
      specs: "1440 DPI Japanese Eco-Solvent • 50,000 Sq.Ft Frontlit Flex • 24hr Turnaround"
    },
    {
      id: "p4",
      title: "Commercial Fleet Vehicle Wrap",
      category: "vehicle",
      categoryName: "Vehicle Wrapping",
      image: "assets/images/vehicle_wrapping.jpg",
      client: "Matriculation Higher Secondary School",
      location: "Vriddhachalam & Neyveli Routes",
      specs: "Cast Vehicle Vinyl • Bubble-Free Air Release • One-Way Vision Perforated Glass"
    },
    {
      id: "p5",
      title: "Rental Entrance Arches",
      category: "branding",
      categoryName: "Event Branding",
      image: "assets/images/rental_entrance_arch.jpg",
      client: "Luxury Wedding Reception",
      location: "Shanmugam Mahalakshmi Thirumana Mahal",
      specs: "30ft Modular Heavy Truss • Frontlit Branded Glow Flex • Quick Same-Day Erection"
    },
    {
      id: "p6",
      title: "Mass Sunpack Electric Pole Campaign",
      category: "branding",
      categoryName: "Sunpack Campaign",
      image: "assets/images/sunpack_advertising.jpg",
      client: "Retail Electronics Super Sale",
      location: "15 Towns Across Cuddalore District",
      specs: "3mm High-Flute Plastic Sheets • 3,000 Units Printed & Tied On-Site in 48 Hours"
    },
    {
      id: "p7",
      title: "Customized Mementos & Awards",
      category: "craft",
      categoryName: "Mementos & Awards",
      image: "assets/images/custom_mementos.jpg",
      client: "District Sports Championship Meet",
      location: "Vriddhachalam Stadium",
      specs: "Teak Wood Base • Gold Mirror Acrylic Cutout • Laser Engraved Citation"
    },
    {
      id: "p8",
      title: "Premium Invitations & Wedding Cards",
      category: "craft",
      categoryName: "Invitations & Cards",
      image: "assets/images/invitations.jpg",
      client: "Elite Family Wedding Invitation",
      location: "Vriddhachalam",
      specs: "350 GSM Pearl Board • Metallic Gold Hot Foil Stamping • Bespoke Laser Silhouette"
    },
    {
      id: "p9",
      title: "Art Board & CNC Shape Cutting",
      category: "craft",
      categoryName: "CNC & Laser Cutting",
      image: "assets/images/artboard_shape_cutting.jpg",
      client: "Architectural Signage Project",
      location: "Vriddhachalam Commercial Complex",
      specs: "Computerized CNC Router • Precision Acrylic & MDF Cutting • Smooth Edge Polish"
    },
    {
      id: "p10",
      title: "Custom Wall & Desk Calendars",
      category: "craft",
      categoryName: "Calendars & Stationery",
      image: "assets/images/calendars.jpg",
      client: "Annual Corporate Gifting Campaign",
      location: "Neyveli & Cuddalore Business Clients",
      specs: "Wiro Spiral Bound • Multi-Color Gloss Print • Auspicious Tamil & English Dates"
    },
    {
      id: "p11",
      title: "Custom Photo Framing & Canvas Art",
      category: "craft",
      categoryName: "Framing & Canvas",
      image: "assets/images/photo_frames.jpg",
      client: "Modern Home & Studio Decor",
      location: "Vriddhachalam",
      specs: "Matte Black & Teak Wood Frames • Archival Canvas Print • Anti-Glare Glass"
    },
    {
      id: "p12",
      title: "Social Media Ads & Creative Design",
      category: "branding",
      categoryName: "Creative Design",
      image: "assets/images/social_media_ads.jpg",
      client: "Local Retailer Festival Campaign",
      location: "Instagram & Facebook Campaigns",
      specs: "High-Engagement Visuals • Tamil & English Typography • Festive Promo Templates"
    }
  ],

  testimonials: [
    {
      name: "Dinesh Kumar",
      position: "Local Business Owner",
      company: "Google Verified Reviewer",
      rating: 5,
      date: "1 month ago",
      text: "Elite Digital provides excellent advertising and printing services in Virudhachalam. Their flex banners, vehicle advertisements, and roadshow setups are super clear and high quality. The finishing and colors are top notch."
    },
    {
      name: "Brindha Senthil kumar",
      position: "Verified Client",
      company: "Google Verified Reviewer",
      rating: 5,
      date: "2 months ago",
      text: "Sincere, dedicated, and timely service with the latest technology. Elite Digital always delivers top notch printing, hoardings and banners with great attention to detail."
    },
    {
      name: "Vendhan Balu",
      position: "Entrepreneur",
      company: "Google Verified Reviewer",
      rating: 5,
      date: "3 weeks ago",
      text: "Good work, friendly manner, and on-time delivery! The team handles flex banners, roadshows, and sunpack pole advertising with great professionalism."
    },
    {
      name: "K Vasantha",
      position: "Store Manager",
      company: "Google Verified Reviewer",
      rating: 5,
      date: "4 months ago",
      text: "Such kind and nice service to customers. Fast turnaround time and transparent pricing for all our highway hoardings and printed advertising needs."
    }
  ],

  /* Pricing matrix adapted to Printing, Hoardings, Vehicle Wraps & Advertising */
  pricingRules: {
    "flex-banner": {
      name: "Frontlit Star Flex Printing",
      category: "Printing",
      baseSqFtRate: 15,
      outdoorMultiplier: 1.0,
      fixedCost: 100,
      minPrice: 300,
      unitLabel: "Sq.Ft"
    },
    "backlit-flex": {
      name: "Backlit Glow Lightbox Flex",
      category: "Printing",
      baseSqFtRate: 35,
      outdoorMultiplier: 1.1,
      fixedCost: 300,
      minPrice: 600,
      unitLabel: "Sq.Ft"
    },
    "vinyl-print": {
      name: "Eco-Solvent Vinyl + Sunboard Mount",
      category: "Printing",
      baseSqFtRate: 85,
      outdoorMultiplier: 1.15,
      fixedCost: 200,
      minPrice: 850,
      unitLabel: "Sq.Ft"
    },
    "hoarding-display": {
      name: "Highway Hoarding Display (Monthly)",
      category: "Hoardings",
      baseSqFtRate: 55,
      outdoorMultiplier: 1.25,
      fixedCost: 5000,
      minPrice: 15000,
      unitLabel: "Sq.Ft"
    },
    "vehicle-wrap": {
      name: "Vehicle Wrap / Auto / Bus Branding",
      category: "Transit",
      baseSqFtRate: 95,
      outdoorMultiplier: 1.2,
      fixedCost: 1500,
      minPrice: 4500,
      unitLabel: "Sq.Ft"
    },
    "sunpack-bulk": {
      name: "Sunpack Sheets (Printing + Pole Fixing)",
      category: "Mass Media",
      baseSqFtRate: 18,
      outdoorMultiplier: 1.0,
      fixedCost: 500,
      minPrice: 1800,
      unitLabel: "Units"
    },
    "rental-arch": {
      name: "Rental Entrance Arch (Per Event Day)",
      category: "Event",
      baseSqFtRate: 40,
      outdoorMultiplier: 1.1,
      fixedCost: 2500,
      minPrice: 4500,
      unitLabel: "Truss Sq.Ft"
    }
  }
};
