export interface CampaignCard {
  icon: string;
  title: string;
  description: string;
  metrics: {
    value: string;
    label: string;
  }[];
}

export interface TimelineItem {
  quarter: string;
  title: string;
  content: string;
}

export interface Package {
  name: string;
  price: string;
  highlight: string;
  features: string[];
  featured?: boolean;
}

export interface ROIMetric {
  number: string;
  label: string;
}

export const heroStats = [
  { number: "6", label: "Print Issues" },
  { number: "3M+", label: "Digital Reach" },
  { number: "160", label: "Content Pieces" },
  { number: "12", label: "Month Campaign" },
];

export const campaignCards: CampaignCard[] = [
  {
    icon: "📖",
    title: "Print Domination",
    description: "Revolutionary 12-page back cover flip in Top 25 Issue plus year-long presence across all 6 issues. Editorial-grade storytelling that commands attention.",
    metrics: [
      { value: "500K", label: "Print Reach" },
      { value: "6x", label: "Frequency" },
    ],
  },
  {
    icon: "🎯",
    title: "Programmatic Precision",
    description: "Advanced audience targeting reaching cigar enthusiasts across the web. First-party data activation with lookalike modeling for maximum efficiency.",
    metrics: [
      { value: "10M", label: "Impressions" },
      { value: "2.5%", label: "CTR Target" },
    ],
  },
  {
    icon: "💫",
    title: "#160Moments Hub",
    description: "Interactive digital experience with 160 bite-sized stories. Video content, user-generated campaigns, and social amplification driving year-long engagement.",
    metrics: [
      { value: "30K", label: "UGC Posts" },
      { value: "5M", label: "Social Reach" },
    ],
  },
  {
    icon: "🎪",
    title: "Big Smoke VIP",
    description: "Exclusive sponsorship at premier industry event. Direct engagement with 300+ ultra-premium consumers, meet-the-family experiences, limited editions.",
    metrics: [
      { value: "300", label: "VIP Contacts" },
      { value: "95%", label: "HHI $250K+" },
    ],
  },
  {
    icon: "📧",
    title: "Email & CRM",
    description: "Dedicated email blasts to 250K+ verified enthusiasts. Custom nurture sequences, personalized content delivery, and automated journey mapping.",
    metrics: [
      { value: "250K", label: "Subscribers" },
      { value: "35%", label: "Open Rate" },
    ],
  },
  {
    icon: "🎥",
    title: "Content Studio",
    description: "Professional video production, podcast integrations, influencer partnerships. Celebrity ambassador program with Nicaragua farm experiences.",
    metrics: [
      { value: "50", label: "Video Assets" },
      { value: "1M", label: "Video Views" },
    ],
  },
];

export const timelineData: TimelineItem[] = [
  {
    quarter: "Q1",
    title: "Q1 2026: Launch",
    content: "January: 12-page flip cover in Top 25 Issue unveils campaign\nFebruary: #160Moments digital hub goes live\nMarch: Celebrity ambassador announcement",
  },
  {
    quarter: "Q2",
    title: "Q2 2026: Amplification",
    content: "April: PCA activation and industry engagement\nMay: Nicaragua experience content series launches\nJune: Father's Day premium gift guide integration",
  },
  {
    quarter: "Q3",
    title: "Q3 2026: Momentum",
    content: "July: Summer luxury lifestyle integrations\nAugust: Harvest season content from the fields\nSeptember: Pre-Big Smoke build-up campaign",
  },
  {
    quarter: "Q4",
    title: "Q4 2026: Crescendo",
    content: "October: Big Smoke VIP event activation\nNovember: Holiday luxury positioning\nDecember: Year-end celebration and legacy content",
  },
];

export const packages: Package[] = [
  {
    name: "Select Package",
    price: "$357,400",
    highlight: "Strategic Presence: Consistent visibility across all major touchpoints with proven ROI metrics",
    features: [
      "6 Premium Spreads: Double-page spreads in every 2026 issue ensuring year-long top-of-mind awareness",
      "Digital Content Package: 1-month sponsored hub with dedicated landing page and content distribution",
      "Programmatic Extension: 5M impressions targeting verified cigar enthusiasts",
      "Email Marketing: 2 dedicated blasts to 250K+ subscribers",
      "Big Smoke VIP Access: Premium positioning at industry's premier event",
      "Performance Dashboard: Real-time analytics and monthly reporting",
      "Added Value: $50K in bonus placements and integrations",
    ],
  },
  {
    name: "Signature Package",
    price: "$535,900+",
    highlight: "Category Ownership: Unprecedented integration making Plasencia THE heritage story of 2026",
    featured: true,
    features: [
      "Revolutionary 12-Page Flip: First-ever back cover takeover in Top 25 Issue - editorial-quality brand manifesto",
      "Year-Long Print Domination: Full pages in 5 subsequent issues maintaining narrative momentum",
      "3-Month Digital Experience: Extended #160Moments hub with 160 content pieces and interactive journey",
      "Programmatic Powerhouse: 10M+ impressions with advanced targeting and sequential messaging",
      "Content Production: Professional video series, podcast integration, influencer partnerships",
      "Celebrity Ambassador: High-profile personality Nicaragua experience with content amplification",
      "Custom NYC Event: Exclusive gathering for 50 ultra-VIPs with Plasencia family",
      "Social Media Campaign: $15K dedicated budget for paid amplification",
      "CRM Integration: Custom data capture and nurture program",
      "Added Value: $100K+ in editorial features and bonus placements",
    ],
  },
];

export const roiMetrics: ROIMetric[] = [
  { number: "15M+", label: "Total Impressions" },
  { number: "500K", label: "Qualified Reach" },
  { number: "50K", label: "Data Captures" },
  { number: "3.2X", label: "Projected ROI" },
  { number: "85%", label: "Brand Lift" },
  { number: "$18M", label: "Media Value" },
];
