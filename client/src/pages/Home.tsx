import { ThemeToggle } from "@/components/ThemeToggle";
import { BioLinkCard } from "@/components/BioLinkCard";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import type { BioLink } from "@shared/schema";
import {
  Globe,
  MapPin,
  Calendar,
  Utensils,
  Building2,
  Ticket,
  Phone,
} from "lucide-react";

const bioLinks: BioLink[] = [
  {
    id: "website",
    title: "Discover Diriyah ",
    titleAr: "مطل البجيري",
    url: "https://zzser.com?label=3f8ee59cd10ba4a802fc9fa97b7fb8d1",
    icon: "globe",
    category: "official",
  },
  {
    id: "diriyah",
    title: "Diriyah.",
    titleAr: "الدرعية",
    url: "https://zzser.com?label=3f8ee59cd10ba4a802fc9fa97b7fb8d1",
    icon: "ticket",
    category: "official",
  },
  {
    id: "events",
    title: "Events & Experiences",
    titleAr: "الفعاليات والتجارب",
    url: "https://zzser.com?label=3f8ee59cd10ba4a802fc9fa97b7fb8d1",
    icon: "calendar",
    category: "experience",
  },
  {
    id: "restaurants",
    title: "Restaurants",
    titleAr: "المطاعم",
    url: "https://zzser.com?label=3f8ee59cd10ba4a802fc9fa97b7fb8d1",
    icon: "utensils",
    category: "experience",
  },
  {
    id: "turaif",
    title: "At-Turaif District",
    titleAr: "حي الطريف",
    url: "https://zzser.com?label=3f8ee59cd10ba4a802fc9fa97b7fb8d1",
    icon: "building",
    category: "experience",
  },
];

const getIcon = (iconName: string) => {
  const iconProps = { className: "h-5 w-5" };
  switch (iconName) {
    case "globe":
      return <Globe {...iconProps} />;
    case "ticket":
      return <Ticket {...iconProps} />;
    case "calendar":
      return <Calendar {...iconProps} />;
    case "utensils":
      return <Utensils {...iconProps} />;
    case "building":
      return <Building2 {...iconProps} />;
    case "mappin":
      return <MapPin {...iconProps} />;
    case "phone":
      return <Phone {...iconProps} />;
    default:
      return <Globe {...iconProps} />;
  }
};

export default function Home() {
  const officialLinks = bioLinks.filter((l) => l.category === "official");
  const experienceLinks = bioLinks.filter((l) => l.category === "experience");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <CookieBanner />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                د
              </span>
            </div>
            <span className="font-semibold text-foreground">الدرعية</span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-8 px-4">
        <div className="max-w-md mx-auto space-y-8">
          {/* Profile Section */}
          <div className="text-center space-y-4">
            <div className="relative inline-block">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center shadow-lg">
                <span className="text-4xl font-bold text-primary-foreground">
                  الدرعية
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-green-500 border-4 border-background flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            </div>

            <div className="space-y-2">
              <h1
                className="text-2xl font-bold text-foreground"
                data-testid="text-title"
              >
                الدرعية
              </h1>
              <p className="text-lg text-primary font-medium">Diriyah</p>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">
                الوجهة التاريخية والثقافية للمملكة العربية السعودية
              </p>
            </div>
          </div>

          {/* Official Links */}
          <section className="space-y-3">
            <h2 className="text-sm font-semibold text-muted-foreground px-1">
              الروابط الرسمية
            </h2>
            <div className="space-y-3">
              {officialLinks.map((link) => (
                <BioLinkCard
                  key={link.id}
                  link={link}
                  icon={getIcon(link.icon)}
                />
              ))}
            </div>
          </section>

          {/* Experience Links */}
          <section className="space-y-3">
            <h2 className="text-sm font-semibold text-muted-foreground px-1">
              اكتشف الدرعية
            </h2>
            <div className="space-y-3">
              {experienceLinks.map((link) => (
                <BioLinkCard
                  key={link.id}
                  link={link}
                  icon={getIcon(link.icon)}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
