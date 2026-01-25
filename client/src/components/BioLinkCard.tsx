import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import type { BioLink } from "@shared/schema";

interface BioLinkCardProps {
  link: BioLink;
  icon: React.ReactNode;
}

export function BioLinkCard({ link, icon }: BioLinkCardProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
      data-testid={`link-${link.id}`}
    >
      <Card className="p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-card-border group-hover:border-primary/30">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 p-3 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground truncate">{link.titleAr}</h3>
            <p className="text-sm text-muted-foreground truncate">{link.title}</p>
          </div>
          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
        </div>
      </Card>
    </a>
  );
}
