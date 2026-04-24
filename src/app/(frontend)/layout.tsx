import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getPayload } from "payload";
import config from "@payload-config";
import WehelpWidget from "./components/wehelp-widget";
import { personalInfo, siteConfig } from "./data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const payload = await getPayload({ config });
  const wehelpConfig = await payload.findGlobal({ slug: "wehelp-config" });

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {wehelpConfig.surveyToken && (
          <WehelpWidget
            surveyToken={wehelpConfig.surveyToken}
            type={wehelpConfig.type ?? "box"}
            messageOpen={wehelpConfig.messageOpen ?? 0}
            language={wehelpConfig.language ?? "PORTUGUESE"}
            experienceId={wehelpConfig.experienceId ?? null}
            internalCode={wehelpConfig.internalCode ?? ""}
            name={wehelpConfig.name ?? ""}
            email={wehelpConfig.email ?? ""}
            phone={wehelpConfig.phone ?? ""}
            dateOfBirth={wehelpConfig.dateOfBirth ?? ""}
            state={wehelpConfig.state ?? ""}
            country={wehelpConfig.country ?? ""}
            gender={wehelpConfig.gender ?? ""}
            document={wehelpConfig.document ?? ""}
            companyUnit={wehelpConfig.companyUnit ?? ""}
            debug={wehelpConfig.debug ?? 0}
            customFields={wehelpConfig.customFields ?? []}
          />
        )}
        <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <a href="#" className="text-xl font-bold">
              {personalInfo.name}
            </a>
            <nav>
              <ul className="flex space-x-8">
                <li>
                  <a
                    href="#about"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
