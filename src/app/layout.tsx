import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import { CustomCursor } from "@/components/ui/CustomCursor";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Sujoy Roy | Software Developer",
  description: "Software Developer experienced in building real-world applications using modern frontend and backend technologies. Specializing in React, Node.js, and cloud solutions.",
  keywords: ["Software Developer", "Full-Stack Developer", "React", "Node.js", "TypeScript", "Bangladesh"],
  authors: [{ name: "Sujoy Roy" }],
  openGraph: {
    title: "Sujoy Roy | Software Developer",
    description: "Building scalable web applications & efficient backend systems",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className="antialiased overflow-x-hidden">
          <div className="noise" />
          <CustomCursor />

          <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="02b76ba9-3ac3-466e-b65d-a26397b08d3c"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
