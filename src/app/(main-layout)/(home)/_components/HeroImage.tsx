import Image from "next/image";

export default function HeroImage() {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-75 h-75 sm:w-87.5 sm:h-87.5 md:w-100 md:h-100">
                    <Image
                        src="/documents.webp"
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-contain dark:hidden"
                        alt="Documents"
                    />
                    <Image
                        src="/documents-dark.webp"
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-contain hidden dark:block"
                        alt="Documents"
                    />
                </div>

                <div className="relative h-100 w-100 hidden md:block">
                    <Image
                        src="/reading.webp"
                        fill
                        sizes="400px"
                        className="object-contain dark:hidden"
                        alt="Reading"
                    />
                    <Image
                        src="/reading-dark.webp"
                        fill
                        sizes="400px"
                        className="object-contain hidden dark:block"
                        alt="Reading"
                    />
                </div>
            </div>
        </div>
    );
}
