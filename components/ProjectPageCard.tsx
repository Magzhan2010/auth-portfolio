"use client";

import {
    Card,
    CardFooter,
    CardHeader,
    
} from "@/components/ui/card";
import { Button } from "@/registration/components/ui/button"; 
import { Header } from "@/components/ui/auth/header";
import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
})

export const ProjectPageCard = () => {
    const router = useRouter()
    const onClick = () => {
        router.push("/settings")
    }
    return (
        <div>
            <div className="text-center mb-16 relative">
                <h1 className={`text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#5c62ec] to-[#6468ef] bg-clip-text text-transparent ${font.className}`}>
                    My Projects
                </h1>
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 block w-24 h-1 bg-[#5c62ec] rounded-full animate-pulse"></span>
            </div>

            <Card className="shadow-md w-[400px] flex flex-col items-center gap-4">
            
                <img src="/images/EmptyState.png" />

                <h3 className={`font-semibold text-2xl ${font.className}`}>
                        This project page is empty
                </h3>
                <p className="text-lg font-medium">
                    There will be my project soon!
                </p>
                <CardFooter>
                    <Button type="submit" variant="custom" onClick={onClick}>Go Home</Button>
                </CardFooter>
            
            </Card>
        </div>
    );
}

export default ProjectPageCard