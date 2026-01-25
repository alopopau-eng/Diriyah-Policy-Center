import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { ArrowRight, Shield } from "lucide-react";

export default function Privacy() {
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
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold text-foreground" data-testid="text-privacy-title">
                    سياسة الخصوصية
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
                    نحن في الدرعية نلتزم بحماية خصوصيتك. توضح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك الشخصية 
                    عند استخدام موقعنا الإلكتروني وخدماتنا.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">2. المعلومات التي نجمعها</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    قد نقوم بجمع المعلومات التالية:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 pr-4">
                    <li>معلومات التصفح (عنوان IP، نوع المتصفح، الصفحات المزارة)</li>
                    <li>معلومات الجهاز (نوع الجهاز، نظام التشغيل)</li>
                    <li>بيانات ملفات تعريف الارتباط (Cookies)</li>
                    <li>المعلومات التي تقدمها طوعاً عند التواصل معنا</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">3. ملفات تعريف الارتباط (Cookies)</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    نستخدم ملفات تعريف الارتباط لتحسين تجربتك. هناك ثلاثة أنواع من ملفات تعريف الارتباط:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 pr-4">
                    <li><strong>ضرورية:</strong> لازمة لعمل الموقع بشكل صحيح</li>
                    <li><strong>تحليلية:</strong> تساعدنا في فهم كيفية استخدام الزوار للموقع</li>
                    <li><strong>تسويقية:</strong> تُستخدم لعرض إعلانات مخصصة</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    يمكنك إدارة تفضيلات ملفات تعريف الارتباط من خلال بانر الموافقة عند زيارتك الأولى للموقع.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">4. كيف نستخدم معلوماتك</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    نستخدم المعلومات المجمعة للأغراض التالية:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 pr-4">
                    <li>تحسين تجربة المستخدم على موقعنا</li>
                    <li>تحليل أنماط استخدام الموقع</li>
                    <li>تقديم محتوى وإعلانات مخصصة</li>
                    <li>الامتثال للمتطلبات القانونية</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">5. مشاركة المعلومات</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك مع:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 pr-4">
                    <li>مقدمي خدمات التحليلات (مثل Google Analytics)</li>
                    <li>منصات الإعلانات (وفقاً لموافقتك)</li>
                    <li>السلطات القانونية عند الضرورة</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">6. الامتثال لسياسات جوجل الإعلانية</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    نلتزم بسياسات جوجل الإعلانية ومتطلبات الخصوصية، بما في ذلك:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 pr-4">
                    <li>الحصول على موافقة المستخدم قبل استخدام ملفات تعريف الارتباط التسويقية</li>
                    <li>توفير آلية واضحة للمستخدمين لإدارة تفضيلاتهم</li>
                    <li>الشفافية في كيفية استخدام البيانات</li>
                    <li>حماية خصوصية الأطفال والقُصّر</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">7. حماية البيانات</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    نتخذ إجراءات أمنية مناسبة لحماية معلوماتك من الوصول غير المصرح به أو الإفصاح أو التعديل أو الإتلاف. 
                    تشمل هذه الإجراءات التشفير وجدران الحماية والتحكم في الوصول.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">8. حقوقك</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    لديك الحق في:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 pr-4">
                    <li>الوصول إلى معلوماتك الشخصية</li>
                    <li>تصحيح المعلومات غير الدقيقة</li>
                    <li>طلب حذف معلوماتك</li>
                    <li>الاعتراض على معالجة بياناتك</li>
                    <li>سحب موافقتك في أي وقت</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">9. الاحتفاظ بالبيانات</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    نحتفظ بمعلوماتك فقط للمدة اللازمة لتحقيق الأغراض الموضحة في هذه السياسة، 
                    أو وفقاً لما يقتضيه القانون.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">10. التحديثات على هذه السياسة</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    قد نقوم بتحديث هذه السياسة من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة مع تحديث تاريخ "آخر تحديث".
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">11. التواصل معنا</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا عبر:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 pr-4">
                    <li>الموقع الإلكتروني: www.diriyah.sa</li>
                    <li>البريد الإلكتروني: privacy@diriyah.sa</li>
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
