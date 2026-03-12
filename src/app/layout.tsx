import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
    subsets: ["latin", "vietnamese"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: {
        default: "Notion Clone",
        template: "%s | Notion Clone",
    },
    description: "A collaborative workspace for notes, docs and projects",
    keywords: ["notion", "notion clone", "notes", "workspace"],
    authors: [{ name: "Mai Tất Duy" }],

    icons: {
        icon: [
            {
                url: "/logo-light.svg",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/logo-dark.svg",
                media: "(prefers-color-scheme: dark)",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={beVietnamPro.className}>{children}</body>
        </html>
    );
}
