import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto py-8 border-t border-border">
      <div className="max-w-md mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <nav className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <Link 
              href="/about" 
              className="hover:text-foreground transition-colors"
              data-testid="link-about"
            >
              عن الدرعية
            </Link>
            <span className="text-border">|</span>
            <Link 
              href="/terms" 
              className="hover:text-foreground transition-colors"
              data-testid="link-terms"
            >
              الشروط والأحكام
            </Link>
            <span className="text-border">|</span>
            <Link 
              href="/privacy" 
              className="hover:text-foreground transition-colors"
              data-testid="link-privacy"
            >
              سياسة الخصوصية
            </Link>
            <span className="text-border">|</span>
            <a 
              href="https://www.diriyah.sa/ar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              data-testid="link-website"
            >
              الموقع الرسمي
            </a>
          </nav>
          
          <p className="text-xs text-muted-foreground">
            © {currentYear} الدرعية. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
