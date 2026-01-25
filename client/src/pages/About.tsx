import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { ArrowRight, MapPin, Calendar, Award, Building2 } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2" data-testid="button-back-home">
              <ArrowRight className="h-4 w-4" />
              العودة
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-8 px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Hero Section */}
          <Card className="p-6 sm:p-8 border-card-border">
            <div className="space-y-6">
              <div className="text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-primary/10">
                  <Building2 className="h-12 w-12 text-primary" />
                </div>
                <h1 className="text-3xl font-bold text-foreground" data-testid="text-about-title">
                  عن الدرعية
                </h1>
                <p className="text-lg text-primary font-medium">
                  الوجهة التاريخية والثقافية للمملكة العربية السعودية
                </p>
              </div>

              <div className="prose prose-sm dark:prose-invert max-w-none space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  الدرعية هي مهد الدولة السعودية الأولى، وتقع على ضفاف وادي حنيفة شمال غرب مدينة الرياض. 
                  تأسست في القرن الخامس عشر الميلادي، وأصبحت عاصمة الدولة السعودية الأولى عام 1727م على يد 
                  الإمام محمد بن سعود.
                </p>
                <p>
                  تُعد الدرعية اليوم من أبرز المشاريع الثقافية والسياحية في المملكة، حيث تم تسجيل حي الطريف 
                  التاريخي ضمن قائمة التراث العالمي لليونسكو عام 2010م، ليصبح أول موقع سعودي يُدرج في هذه القائمة.
                </p>
              </div>
            </div>
          </Card>

          {/* Features Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="p-5 border-card-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10 flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">الموقع</h3>
                  <p className="text-sm text-muted-foreground">
                    شمال غرب الرياض، على ضفاف وادي حنيفة التاريخي
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-5 border-card-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10 flex-shrink-0">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">التأسيس</h3>
                  <p className="text-sm text-muted-foreground">
                    تأسست في القرن الخامس عشر الميلادي
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-5 border-card-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10 flex-shrink-0">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">تراث عالمي</h3>
                  <p className="text-sm text-muted-foreground">
                    حي الطريف مُسجل في قائمة التراث العالمي لليونسكو منذ 2010
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-5 border-card-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10 flex-shrink-0">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">العمارة النجدية</h3>
                  <p className="text-sm text-muted-foreground">
                    طراز معماري أصيل من الطين والحجر يعكس البيئة المحلية
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Vision Section */}
          <Card className="p-6 sm:p-8 border-card-border">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">رؤية الدرعية</h2>
              <p className="text-muted-foreground leading-relaxed">
                تسعى الدرعية لتكون واحدة من أهم الوجهات الثقافية والتراثية في العالم، حيث تجمع بين 
                الأصالة والمعاصرة. من خلال مشروع الدرعية التاريخي، يتم إحياء هذه المنطقة لتصبح وجهة 
                سياحية عالمية تضم متاحف ومعارض ومطاعم وفنادق فاخرة، مع الحفاظ على طابعها التاريخي الأصيل.
              </p>
            </div>
          </Card>

          {/* Experiences Section */}
          <Card className="p-6 sm:p-8 border-card-border">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">ماذا تجد في الدرعية؟</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">حي الطريف:</strong> موقع التراث العالمي مع قصر سلوى والمباني التاريخية</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">مطل البجيري:</strong> وجهة راقية للمطاعم العالمية والمحلية</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">وادي حنيفة:</strong> منتزه طبيعي خلاب للمشي والتنزه</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">المتاحف والمعارض:</strong> معرض الخيل العربي، معرض العمارة النجدية، وغيرها</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">الفعاليات:</strong> حفلات موسيقية وعروض ثقافية على مدار العام</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Link href="/">
              <Button size="lg" data-testid="button-explore-links">
                استكشف روابطنا
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
