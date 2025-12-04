"use client";
import { Header } from "@/components/ui/auth/header";
import {
    Card,
    CardFooter,
    CardHeader,
    
} from "@/components/ui/card";
import { Button } from "@/registration/components/ui/button";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";


export const ErrorCard = () => {
    const router = useRouter()
    const onClick = () => {
        router.push("/auth/login")
    }
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label="Oops! Something went wrong!"/>
            </CardHeader>
            <div className="w-full flex items-center justify-center">
                <ExclamationTriangleIcon className='text-destructive'/>
            </div>
            <CardFooter className="w-full flex justify-center items-center">
                <Button type="submit" variant="default" onClick={onClick}>Back to login</Button>
            </CardFooter>
        </Card>
    );
}