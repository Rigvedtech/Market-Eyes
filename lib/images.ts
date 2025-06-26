// Image Configuration for Market Eyes Website
// Following WebFX best practices for website images

export interface ImageData {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  category: string;
  priority?: boolean;
  width?: number;
  height?: number;
}

// Hero Section Images - High-quality banners for main sections
export const heroImages: ImageData[] = [
  {
    src: "/images/hero/digital-transformation-hero.jpg",
    alt: "Modern IT professionals collaborating in a digital office environment",
    title: "Digital Transformation Excellence",
    description: "Leading enterprise digital transformation with cutting-edge technology solutions",
    category: "hero",
    priority: true,
    width: 1920,
    height: 1080
  },
  {
    src: "/images/hero/sap-consulting-hero.jpg", 
    alt: "SAP consultants implementing enterprise solutions for Fortune 500 companies",
    title: "SAP Implementation Experts",
    description: "Fastest growing SAP partner delivering comprehensive enterprise solutions",
    category: "hero",
    priority: true,
    width: 1920,
    height: 1080
  },
  {
    src: "/images/hero/cloud-infrastructure-hero.jpg",
    alt: "Modern data center with cloud computing infrastructure and server racks",
    title: "Cloud Innovation Leaders",
    description: "Multi-cloud expertise across AWS, Azure, and Google Cloud platforms",
    category: "hero",
    priority: true,
    width: 1920,
    height: 1080
  }
];

// Technology Images - Data centers, cloud computing, infrastructure
export const technologyImages: ImageData[] = [
  {
    src: "/images/technology/modern-data-center.jpg",
    alt: "State-of-the-art data center with blue LED lighting and server racks",
    title: "Enterprise Data Centers",
    description: "99.9% uptime guarantee with enterprise-grade infrastructure",
    category: "technology",
    width: 800,
    height: 600
  },
  {
    src: "/images/technology/cloud-computing-network.jpg",
    alt: "Cloud computing visualization with interconnected networks and data flow",
    title: "Multi-Cloud Excellence", 
    description: "Seamless integration across all major cloud platforms",
    category: "technology",
    width: 800,
    height: 600
  },
  {
    src: "/images/technology/ai-analytics-dashboard.jpg",
    alt: "AI-powered analytics dashboard displaying real-time business intelligence",
    title: "AI-Powered Analytics",
    description: "Advanced machine learning and predictive analytics solutions",
    category: "technology",
    width: 800,
    height: 600
  },
  {
    src: "/images/technology/cybersecurity-operations.jpg",
    alt: "Cybersecurity operations center with multiple monitoring screens",
    title: "Enterprise Security",
    description: "Comprehensive cybersecurity protecting critical business assets",
    category: "technology",
    width: 800,
    height: 600
  }
];

// Team Images - Professional consultation, collaboration, expertise
export const teamImages: ImageData[] = [
  {
    src: "/images/team/development-team-collaboration.jpg",
    alt: "Diverse team of software developers collaborating on enterprise solutions",
    title: "Expert Development Teams",
    description: "200+ certified professionals delivering world-class solutions",
    category: "team",
    width: 600,
    height: 400
  },
  {
    src: "/images/team/client-consultation-meeting.jpg",
    alt: "Professional consultants presenting solutions to Fortune 500 executives",
    title: "Client Partnership",
    description: "Strategic consulting for Fortune 500 companies worldwide",
    category: "team",
    width: 600,
    height: 400
  },
  {
    src: "/images/team/innovation-lab-research.jpg",
    alt: "Innovation center with researchers working on cutting-edge technology",
    title: "Innovation Centers", 
    description: "R&D facilities driving next-generation technology solutions",
    category: "team",
    width: 600,
    height: 400
  },
  {
    src: "/images/team/global-team-meeting.jpg",
    alt: "International team meeting via video conference across multiple time zones",
    title: "Global Expertise",
    description: "24/7 support with teams across multiple continents",
    category: "team",
    width: 600,
    height: 400
  }
];

// Service-specific Images - SAP, Cloud, Infrastructure
export const serviceImages: ImageData[] = [
  {
    src: "/images/services/sap-implementation.jpg",
    alt: "SAP consultants configuring enterprise resource planning system",
    title: "SAP Implementation",
    description: "End-to-end SAP deployment and optimization services",
    category: "services",
    width: 600,
    height: 400
  },
  {
    src: "/images/services/cloud-migration.jpg",
    alt: "IT professionals managing cloud migration process with multiple screens",
    title: "Cloud Migration",
    description: "Seamless cloud transformation with zero downtime",
    category: "services", 
    width: 600,
    height: 400
  },
  {
    src: "/images/services/it-infrastructure.jpg",
    alt: "Network engineers configuring enterprise IT infrastructure",
    title: "IT Infrastructure",
    description: "Complete IT backbone solutions and strategic planning",
    category: "services",
    width: 600,
    height: 400
  },
  {
    src: "/images/services/data-analytics.jpg",
    alt: "Data scientists analyzing business intelligence dashboards",
    title: "Data & Analytics",
    description: "Advanced analytics and machine learning implementations",
    category: "services",
    width: 600,
    height: 400
  }
];

// About/Company Images - Office, culture, achievements
export const aboutImages: ImageData[] = [
  {
    src: "/images/about/company-headquarters.jpg",
    alt: "Modern Market Eyes headquarters building with glass facade",
    title: "Market Eyes Headquarters",
    description: "CMMI Level 5 and ISO 27001 certified technology center",
    category: "about",
    width: 800,
    height: 600
  },
  {
    src: "/images/about/team-culture.jpg",
    alt: "Diverse Market Eyes team celebrating project success in modern office",
    title: "Our Culture",
    description: "Passion, talent, and can-do attitude - the Market Eyes way",
    category: "about",
    width: 600,
    height: 400
  },
  {
    src: "/images/about/awards-certifications.jpg",
    alt: "Display of industry awards and certifications including CMMI and ISO",
    title: "Industry Recognition",
    description: "Recognized leader in technology excellence and innovation",
    category: "about",
    width: 600,
    height: 400
  }
];

// Client/Case Study Images
export const clientImages: ImageData[] = [
  {
    src: "/images/clients/fortune-500-meeting.jpg",
    alt: "Executive meeting with Fortune 500 company leadership",
    title: "Fortune 500 Partnerships",
    description: "Trusted by industry leaders for mission-critical solutions",
    category: "clients",
    width: 600,
    height: 400
  },
  {
    src: "/images/case-studies/successful-implementation.jpg",
    alt: "Successful project implementation celebration with client team",
    title: "Project Success",
    description: "Delivering results that exceed client expectations",
    category: "case-studies",
    width: 600,
    height: 400
  }
];

// Icon Images for UI Elements
export const iconImages: ImageData[] = [
  {
    src: "/images/icons/sap-logo.svg",
    alt: "SAP official partner logo",
    title: "SAP Partnership",
    category: "icons",
    width: 120,
    height: 60
  },
  {
    src: "/images/icons/aws-logo.svg", 
    alt: "Amazon Web Services certified partner logo",
    title: "AWS Partnership",
    category: "icons",
    width: 120,
    height: 60
  },
  {
    src: "/images/icons/azure-logo.svg",
    alt: "Microsoft Azure certified partner logo", 
    title: "Azure Partnership",
    category: "icons",
    width: 120,
    height: 60
  },
  {
    src: "/images/icons/google-cloud-logo.svg",
    alt: "Google Cloud Platform partner logo",
    title: "Google Cloud Partnership", 
    category: "icons",
    width: 120,
    height: 60
  }
];

// Helper function to get images by category
export function getImagesByCategory(category: string): ImageData[] {
  const allImages = [
    ...heroImages,
    ...technologyImages, 
    ...teamImages,
    ...serviceImages,
    ...aboutImages,
    ...clientImages,
    ...iconImages
  ];
  
  return allImages.filter(image => image.category === category);
}

// Helper function to get image by filename
export function getImageByFilename(filename: string): ImageData | undefined {
  const allImages = [
    ...heroImages,
    ...technologyImages,
    ...teamImages, 
    ...serviceImages,
    ...aboutImages,
    ...clientImages,
    ...iconImages
  ];
  
  return allImages.find(image => image.src.includes(filename));
}

// Fallback images for development
export const fallbackImages = {
  hero: "/placeholder.svg?height=1080&width=1920",
  service: "/placeholder.svg?height=400&width=600",
  team: "/placeholder.svg?height=300&width=400",
  technology: "/placeholder.svg?height=400&width=600",
  about: "/placeholder.svg?height=600&width=800",
  icon: "/placeholder-logo.svg"
}; 