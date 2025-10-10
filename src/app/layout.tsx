import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WehelpWidget
          surveyToken="MmY5OWU0MjA3ZGFhN2Y3YTQ1ZGVmMjAwZmJjZmRiMDU0YjNiNjIzNTI4ZTI3MjNhMTI1ZjBkNmI0OTRjYTQ4Zml2l_19q77Ew7hGo0bo38gqU-kJ7Qwot-YUjb0rhxOr"
          type="box"
          messageOpen={0}
          language="PORTUGUESE"
          experienceId={null}
          internalCode="id.unico.do.seu.cliente"
          name="Bruno Eduardo"
          email="bruno.139737@gmail.com"
          phone="11999999999"
          dateOfBirth="1990-01-01"
          state="SP"
          country="BR"
          gender="M"
          document="1234567890"
          companyUnit="1"
          debug={1}
          customFields={[
            { name: "custom_field_1", value: "value_1" },
            { name: "custom_field_2", value: "value_2" },
          ]}
        />
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
