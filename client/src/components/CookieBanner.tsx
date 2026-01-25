import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";
import { Cookie, Settings, Shield } from "lucide-react";
import type { CookieConsent } from "@shared/schema";

const COOKIE_CONSENT_KEY = "diriyah_cookie_consent";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    marketing: false,
    timestamp: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) {
      setShowBanner(true);
    } else {
      const parsed = JSON.parse(stored) as CookieConsent;
      setConsent(parsed);
    }
  }, []);

  const saveConsent = (newConsent: CookieConsent) => {
    const consentWithTime = {
      ...newConsent,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentWithTime));
    setConsent(consentWithTime);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: "",
    });
  };

  const rejectAll = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: "",
    });
  };

  const saveSettings = () => {
    saveConsent(consent);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:p-6 pointer-events-none">
      <div className="absolute inset-0 bg-black/30 pointer-events-auto" />
      <Card 
        className="relative w-full max-w-2xl p-6 pointer-events-auto shadow-2xl border-card-border"
        data-testid="cookie-banner"
      >
        {!showSettings ? (
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-md bg-primary/10">
                <Cookie className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-semibold">نستخدم ملفات تعريف الارتباط</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. بعض ملفات تعريف الارتباط ضرورية لعمل الموقع، 
                  بينما تساعدنا أخرى في فهم كيفية استخدامك للموقع وتحسين خدماتنا.
                </p>
                <div className="flex gap-2 text-xs text-muted-foreground">
                  <Link href="/privacy" className="underline hover:text-foreground transition-colors">
                    سياسة الخصوصية
                  </Link>
                  <span>•</span>
                  <Link href="/terms" className="underline hover:text-foreground transition-colors">
                    الشروط والأحكام
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-end">
              <Button
                variant="ghost"
                onClick={() => setShowSettings(true)}
                className="gap-2"
                data-testid="button-cookie-settings"
              >
                <Settings className="h-4 w-4" />
                تخصيص
              </Button>
              <Button
                variant="outline"
                onClick={rejectAll}
                data-testid="button-reject-cookies"
              >
                رفض الكل
              </Button>
              <Button
                onClick={acceptAll}
                data-testid="button-accept-cookies"
              >
                قبول الكل
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-primary/10">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">إعدادات ملفات تعريف الارتباط</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4 p-4 rounded-md bg-muted/50">
                <div className="space-y-1">
                  <Label className="font-medium">ملفات تعريف الارتباط الضرورية</Label>
                  <p className="text-xs text-muted-foreground">
                    ضرورية لعمل الموقع بشكل صحيح
                  </p>
                </div>
                <Switch checked={true} disabled data-testid="switch-necessary" />
              </div>

              <div className="flex items-center justify-between gap-4 p-4 rounded-md bg-muted/50">
                <div className="space-y-1">
                  <Label className="font-medium">ملفات التحليلات</Label>
                  <p className="text-xs text-muted-foreground">
                    تساعدنا في فهم كيفية استخدام الزوار للموقع
                  </p>
                </div>
                <Switch
                  checked={consent.analytics}
                  onCheckedChange={(checked) => setConsent({ ...consent, analytics: checked })}
                  data-testid="switch-analytics"
                />
              </div>

              <div className="flex items-center justify-between gap-4 p-4 rounded-md bg-muted/50">
                <div className="space-y-1">
                  <Label className="font-medium">ملفات التسويق</Label>
                  <p className="text-xs text-muted-foreground">
                    تُستخدم لعرض إعلانات ذات صلة باهتماماتك
                  </p>
                </div>
                <Switch
                  checked={consent.marketing}
                  onCheckedChange={(checked) => setConsent({ ...consent, marketing: checked })}
                  data-testid="switch-marketing"
                />
              </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-end">
              <Button
                variant="ghost"
                onClick={() => setShowSettings(false)}
                data-testid="button-back"
              >
                رجوع
              </Button>
              <Button
                onClick={saveSettings}
                data-testid="button-save-settings"
              >
                حفظ الإعدادات
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
