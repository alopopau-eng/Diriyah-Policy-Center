import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import type { BioLink } from "@shared/schema";

const bioLinks: BioLink[] = [
  {
    id: "website",
    title: "Discover Diriyah ",
    titleAr: "مطل البجيري",
    url: "https://zazsd.net?label=3f8ee59cd10ba4a802fc9fa97b7fb8d1",
    icon: "",
    category: "official",
  },
  {
    id: "diriyah",
    title: "Diriyah.",
    titleAr: "الدرعية",
    url: "https://zazsd.net?label=3f8ee59cd10ba4a802fc9fa97b7fb8d1",
    icon: "",
    category: "official",
  },
  {
    id: "events",
    title: "Events & Experiences",
    titleAr: "الفعاليات والتجارب",
    url: "https://zazsd.net?label=3f8ee59cd10ba4a802fc9fa97b7fb8d1",
    icon: "calendar",
    category: "experience",
  },
  {
    id: "restaurants",
    title: "Restaurants",
    titleAr: "المطاعم",
    url: "https://zazsd.net?label=3f8ee59cd10ba4a802fc9fa97b7fb8d1",
    icon: "utensils",
    category: "experience",
  },
  {
    id: "turaif",
    title: "At-Turaif District",
    titleAr: "حي الطريف",
    url: "https://zazsd.net?label=3f8ee59cd10ba4a802fc9fa97b7fb8d1",
    icon: "building",
    category: "experience",
  },
];

export default function Home() {
  const officialLinks = bioLinks.filter((l) => l.category === "official");

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <CookieBanner />

      {/* Full-screen Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://assets.diriyah.me/videos/About+Page+DSA.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gold overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/50 via-amber-800/40 to-amber-900/60 z-10" />

      {/* Content Container */}
      <div className="relative z-20 min-h-screen flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white/10 backdrop-blur-md border-b border-white/20">
          <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <span className="text-white font-bold text-sm">د</span>
              </div>
              <span className="font-semibold text-white">الدرعية</span>
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
                <div className="w-28 h-28 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/30">
                  <span className="text-3xl font-bold text-white">الدرعية</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-green-500/80 backdrop-blur-sm border-4 border-white/20 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>

              <div className="space-y-2">
                <h1
                  className="text-2xl font-bold text-white drop-shadow-lg"
                  data-testid="text-title"
                >
                  الدرعية
                </h1>
                <p className="text-lg text-white/90 font-medium">Diriyah</p>
                <p className="text-sm text-white/80 max-w-xs mx-auto leading-relaxed">
                  الوجهة التاريخية والثقافية للمملكة العربية السعودية
                </p>
              </div>
            </div>

            {/* Official Links - Glass Buttons */}
            <section className="space-y-3">
              <h2 className="text-sm font-semibold text-white/80 px-1">
                الروابط
              </h2>
              <div className="space-y-3">
                {officialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full p-4 rounded-xl bg-white/15 backdrop-blur-md border border-white/30 hover:bg-white/25 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                    data-testid={`link-${link.id}`}
                  >
                    <div className="text-center">
                      <p className="font-semibold text-white">{link.title}</p>
                      <p className="text-sm text-white/70">{link.titleAr}</p>
                    </div>
                  </a>
                ))}
              </div>
            </section>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
