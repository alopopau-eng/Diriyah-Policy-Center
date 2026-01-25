import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Analytics endpoint for cookie consent tracking (optional server-side logging)
  app.post("/api/analytics/consent", (req, res) => {
    const { necessary, analytics, marketing, timestamp } = req.body;
    
    // Log consent for compliance purposes (in production, store in database)
    console.log("Cookie consent received:", {
      necessary,
      analytics,
      marketing,
      timestamp,
      ip: req.ip,
      userAgent: req.get("User-Agent"),
    });
    
    res.json({ success: true });
  });

  // Page view tracking (for analytics if consent given)
  app.post("/api/analytics/pageview", (req, res) => {
    const { page, referrer } = req.body;
    
    console.log("Page view:", {
      page,
      referrer,
      timestamp: new Date().toISOString(),
    });
    
    res.json({ success: true });
  });

  return httpServer;
}
