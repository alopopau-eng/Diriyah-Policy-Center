import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { ArrowRight, FileText } from "lucide-react";

export default function Terms() {
  const lastUpdated = "25 يناير 2026";

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
        <div className="max-w-3xl mx-auto">
          <Card className="p-6 sm:p-8 border-card-border">
            <div className="space-y-8">
              {/* Header */}
              <div className="flex items-start gap-4 pb-6 border-b border-border">
                <div className="p-3 rounded-md bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold text-foreground" data-testid="text-terms-title">
                    الشروط والأحكام
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    آخر تحديث: {lastUpdated}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-sm dark:prose-invert max-w-none space-y-6 text-foreground">
                <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">1. مقدمة</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    مرحباً بكم في الموقع الرسمي للدرعية. باستخدامك لهذا الموقع، فإنك توافق على الالتزام بهذه الشروط والأحكام. 
                    يرجى قراءتها بعناية قبل استخدام خدماتنا.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">2. استخدام الموقع</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    يُسمح لك باستخدام هذا الموقع للأغراض المشروعة فقط. يُحظر استخدام الموقع بأي طريقة قد تتسبب في:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 pr-4">
                    <li>إلحاق الضرر بالموقع أو إعاقة توفره للآخرين</li>
                    <li>انتهاك حقوق الملكية الفكرية</li>
                    <li>نشر محتوى غير قانوني أو مسيء</li>
                    <li>محاولة الوصول غير المصرح به إلى أنظمتنا</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">3. الملكية الفكرية</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    جميع المحتويات المعروضة على هذا الموقع، بما في ذلك النصوص والصور والشعارات والتصاميم، 
                    هي ملك للدرعية أو مرخصة لها. لا يجوز نسخ أو توزيع أي محتوى دون إذن كتابي مسبق.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">4. الروابط الخارجية</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    قد يحتوي هذا الموقع على روابط لمواقع خارجية. نحن لا نتحمل مسؤولية محتوى هذه المواقع 
                    أو سياسات الخصوصية الخاصة بها. استخدامك لهذه الروابط على مسؤوليتك الخاصة.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">5. إخلاء المسؤولية</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    يُقدم هذا الموقع والمحتوى المتاح عليه "كما هو" دون أي ضمانات من أي نوع، صريحة أو ضمنية. 
                    لا نضمن دقة المعلومات أو اكتمالها أو توفر الخدمة دون انقطاع.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">6. حجز التذاكر والخدمات</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    تخضع عمليات حجز التذاكر والخدمات لشروط إضافية يتم عرضها عند الحجز. يرجى قراءة هذه الشروط 
                    بعناية قبل إتمام أي عملية حجز.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">7. التعديلات</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. ستكون التعديلات سارية فور نشرها على الموقع. 
                    استمرارك في استخدام الموقع يعني موافقتك على الشروط المعدلة.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">8. القانون الساري</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    تخضع هذه الشروط والأحكام لقوانين المملكة العربية السعودية وتُفسر وفقاً لها. 
                    أي نزاع ينشأ عن استخدام هذا الموقع يخضع للاختصاص القضائي للمحاكم السعودية.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">9. التواصل معنا</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    إذا كانت لديك أي أسئلة حول هذه الشروط والأحكام، يرجى التواصل معنا عبر:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 pr-4">
                    <li>الموقع الإلكتروني: www.diriyah.sa</li>
                    <li>البريد الإلكتروني: info@diriyah.sa</li>
                  </ul>
                </section>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
