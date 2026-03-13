import HeroContent from "./_components/HeroContent";
import HeroImage from "./_components/HeroImage";

export default function HomePage() {
    return (
        <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
            <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
                <HeroContent />
                <HeroImage />
            </div>
        </div>
    );
}
