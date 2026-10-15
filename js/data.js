/**
 * Elite Digital - Core Data Store (Mobile-First & Zero Repetition)
 * All pricing removed. Contextual WhatsApp Quote Triggers.
 */

const ELITE_DATA = {
  company: {
    name: "Elite Digital",
    tagline: "Truly Personalized Service",
    descriptor: "Premier Out-Of-Home (OOH) Advertising & Wide-Format Printing",
    phone: "+91 739 735 5095",
    phoneClean: "917397355095",
    officePhone: "+91 739 735 5095",
    officePhoneClean: "917397355095",
    enquiryPhone: "+91 904 292 0720",
    enquiryPhoneClean: "919042920720",
    email: "elitedigitalvdm@gmail.com",
    address: "Aaladi Road, (Bus stand Backside), Near Shanmugam Mahalakshmi Thirumana Mahal, Vriddhachalam – 606 001, Tamil Nadu",
    city: "Vriddhachalam",
    state: "Tamil Nadu",
    pincode: "606001",
    googleMapsUrl: "https://maps.app.goo.gl/tP7YPDEpNvVDnAdv5",
    socialHandle: "@elitedigitalvdm",
    instagramUrl: "https://www.instagram.com/elitedigitalvdm/",
    rating: 5.0,
    reviewCount: 13,
    experienceYears: 12,
    campaignsCompleted: 4800,
    dailyReach: "250K+"
  },

  /* 1. OOH Boards Hero Showcase */
  oohBoards: [
    {
      id: "unipole",
      tag: "Arterial Highway Unipole",
      title: "Dominating Highway Unipoles & Billboards",
      subtitle: "Engineered for maximum line-of-sight visibility across major arterial corridors and high-speed junctions in Tamil Nadu.",
      image: "assets/images/outdoor_hoardings.jpg",
      metrics: [
        { label: "Daily Reach", val: "100K+ Eyeballs" },
        { label: "Night Illumination", val: "400W LED Floodlights" },
        { label: "Structure", val: "Heavy Wind-Resistant Steel" }
      ],
      quoteTopic: "Highway Unipoles & Billboards"
    },
    {
      id: "junction",
      tag: "City Center Hotspots",
      title: "Prime Bus Terminus & Urban Hoardings",
      subtitle: "Unmissable brand placements right at pedestrian epicenters, bus terminals, and busy retail commercial intersections.",
      image: "assets/images/hero_hoardings_roadshow.jpg",
      metrics: [
        { label: "Urban Footfall", val: "Maximum Daily Traffic" },
        { label: "Print Quality", val: "1440 DPI Star Flex" },
        { label: "Maintenance", val: "24/7 Monitoring & Rapid Skinning" }
      ],
      quoteTopic: "Urban Junction Hoardings"
    },
    {
      id: "roadshow",
      tag: "Mobile Campaign Media",
      title: "Promotional Roadshows & Sound Horn Vans",
      subtitle: "Take your message directly to doorsteps across multiple districts with turnkey branded campaign vehicles and PA sound systems.",
      image: "assets/images/mobile_roadshow.jpg",
      metrics: [
        { label: "Coverage", val: "Multi-Town Route Plans" },
        { label: "Equipment", val: "Crystal Clear PA Horns" },
        { label: "Power", val: "Onboard Silent Generator" }
      ],
      quoteTopic: "Mobile Campaign Roadshows"
    }
  ],

  /* 2. Featured Works & Production (100% Unique Images - Zero Repetition) */
  projects: [
    {
      id: "p1",
      title: "Highway Mega Unipole Hoarding",
      category: "hoardings",
      categoryLabel: "Highway Unipoles",
      image: "assets/images/outdoor_hoardings.jpg",
      client: "Gold & Diamond Retail Showroom",
      location: "Vriddhachalam – Cuddalore Highway",
      highlight: "40ft × 20ft Unipole • 400W LED Spotlights",
      quoteSubject: "Highway Mega Unipole Project"
    },
    {
      id: "p2",
      title: "Statewide Admissions Roadshow Van",
      category: "roadshow",
      categoryLabel: "Mobile Campaigns",
      image: "assets/images/mobile_roadshow.jpg",
      client: "Engineering & Medical Institutions",
      location: "Across Cuddalore & Villupuram",
      highlight: "Custom Van Wrap • 1200W PA Horns • 5kVA Generator",
      quoteSubject: "Admissions Roadshow Van Project"
    },
    {
      id: "p3",
      title: "Supermarket Wide-Format Flex Launch",
      category: "printing",
      categoryLabel: "1440 DPI Printing",
      image: "assets/images/flex_vinyl_printing.jpg",
      client: "Textile & Retail Supermarket",
      location: "Vriddhachalam Town Center",
      highlight: "1440 DPI Japanese Print • 50,000 Sq.Ft Production",
      quoteSubject: "Wide-Format Flex Print Production"
    },
    {
      id: "p4",
      title: "Commercial Fleet & Bus Wrap",
      category: "vehicle",
      categoryLabel: "Vehicle Wraps",
      image: "assets/images/vehicle_wrapping.jpg",
      client: "Matriculation Higher Secondary School",
      location: "Neyveli & Vriddhachalam Routes",
      highlight: "Premium Cast Vinyl • One-Way Vision Glass Film",
      quoteSubject: "School Fleet Vehicle Wrap Project"
    },
    {
      id: "p5",
      title: "Architectural LED Glow Signboard",
      category: "signage",
      categoryLabel: "LED Signboards",
      image: "assets/images/led_signboards.jpg",
      client: "Commercial Shopping Complex",
      location: "Vriddhachalam Main Road",
      highlight: "Custom Acrylic Letters • High-Efficiency Waterproof LEDs",
      quoteSubject: "LED Signboard Project"
    },
    {
      id: "p6",
      title: "Grand Branded Rental Entrance Arch",
      category: "events",
      categoryLabel: "Event Production",
      image: "assets/images/rental_entrance_arch.jpg",
      client: "Luxury Showroom Inauguration",
      location: "Shanmugam Mahalakshmi Thirumana Mahal",
      highlight: "30ft Modular Heavy Truss • Glow Flex Wrapping",
      quoteSubject: "Rental Entrance Arch Project"
    },
    {
      id: "p7",
      title: "District-Wide Sunpack Pole Campaign",
      category: "hoardings",
      categoryLabel: "Mass Media",
      image: "assets/images/sunpack_advertising.jpg",
      client: "Electronics Mega Festival Sale",
      location: "15 Towns Across Cuddalore District",
      highlight: "3,000 Flute Boards Printed & Mounted in 48 Hours",
      quoteSubject: "Sunpack Mass Pole Campaign Project"
    },
    {
      id: "p8",
      title: "Customized Laser Mementos & Awards",
      category: "events",
      categoryLabel: "Craft & Awards",
      image: "assets/images/custom_mementos.jpg",
      client: "District Sports Association",
      location: "Vriddhachalam Stadium",
      highlight: "Laser-Cut Gold Mirror Acrylic • Teak Wood Base",
      quoteSubject: "Custom Mementos & Awards"
    }
  ],

  /* 3. Clients Fallback (Used when data/clients.json cannot be fetched) */
  fallbackClients: [
    { id: "c1", name: "Kalyan Jewellers", category: "Jewellery & Retail", location: "Tamil Nadu", tag: "Highway Unipoles" },
    { id: "c2", name: "Arun Excello", category: "Real Estate & Housing", location: "Cuddalore & Chennai", tag: "Gantry Billboards" },
    { id: "c3", name: "Aavin Dairy", category: "FMCG & Consumer Goods", location: "Regional Belts", tag: "Transit Vehicle Wraps" },
    { id: "c4", name: "Apollo Hospitals", category: "Healthcare & Wellness", location: "Central Tamil Nadu", tag: "Arterial Hoardings" },
    { id: "c5", name: "Annamalai University", category: "Higher Education", location: "Chidambaram", tag: "Admissions Roadshows" },
    { id: "c6", name: "Poorvika Mobiles", category: "Electronics Retail", location: "Multi-Town Outlets", tag: "Sunpack Campaigns" },
    { id: "c7", name: "Vasanth & Co", category: "Home Appliances", location: "Vriddhachalam & Neyveli", tag: "Festival Signage" },
    { id: "c8", name: "MRF Tyres", category: "Automotive Fleet", location: "Highway Corridors", tag: "Prime Steel Hoardings" }
  ],

  /* 4. Instagram Feed Fallback */
  fallbackInstagram: [
    {
      id: "ig1",
      postUrl: "https://www.instagram.com/elitedigitalvdm/",
      image: "assets/images/outdoor_hoardings.jpg",
      caption: "Prime highway unipole installation in Virudhachalam. Dominating the skyline with 24/7 night floodlights! 🚀✨ #OOH #EliteDigital",
      type: "photo",
      date: "Recent Post"
    },
    {
      id: "ig2",
      postUrl: "https://www.instagram.com/elitedigitalvdm/",
      image: "assets/images/mobile_roadshow.jpg",
      caption: "Turnkey campaign roadshow vehicle hitting the road with crystal PA sound horn arrays across Tamil Nadu 📢🔥 #RoadShow",
      type: "reel",
      date: "Recent Reel"
    },
    {
      id: "ig3",
      postUrl: "https://www.instagram.com/elitedigitalvdm/",
      image: "assets/images/led_signboards.jpg",
      caption: "Architectural LED illumination & ACP 3D letter elevation for showroom launch ✨ #Signage #EliteDigitalVDM",
      type: "photo",
      date: "Recent Post"
    },
    {
      id: "ig4",
      postUrl: "https://www.instagram.com/elitedigitalvdm/",
      image: "assets/images/vehicle_wrapping.jpg",
      caption: "Full fleet branding on commercial vehicles with bubble-free cast automotive vinyl & UV protection 🚚💨 #VehicleWrap",
      type: "reel",
      date: "Recent Reel"
    }
  ]
};

/**
 * Build contextual WhatsApp Quote URL
 */
function buildWhatsAppQuoteUrl(topic) {
  const number = ELITE_DATA.company.phoneClean;
  const cleanTopic = topic ? topic.trim() : "Billboard & Outdoor Advertising";
  const message = `Hello Elite Digital, I would like to get a quote for ${cleanTopic}. Please share the details.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
