import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroContent() {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
                <span className="underline">Notion</span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl font-medium">
                Notion is the connected workspace where <br /> better, faster work happens.
            </p>
            <Button className="cursor-pointer rounded-sm text-sm font-medium hover:bg-primary/90 h-10 px-4 py-2">
                Get Notion Free
                <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
        </div>
    );
}
