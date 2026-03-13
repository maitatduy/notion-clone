import Header from "./_components/Header";
import Footer from "./_components/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-full dark:bg-[#1F1F1F]">
            <main className="h-full pt-40">
                <Header />
                {children}
                <Footer />
            </main>
        </div>
    );
}
