"use client";

import { Header } from "@/components/ui/auth/header";
import { ScaleLoader } from "react-spinners";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from "@/components/ui/card";
import { Button } from "@/registration/components/ui/button";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { newVerification } from "@/actions/new-verification";
import { FormError } from "@/components/form-error";
import { FormSucces } from "@/components/form-success";

export const NewVerificationForm = () => {
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();

    const searchParams = useSearchParams();

    const token = searchParams.get("token");
    const onSubmit = useCallback(() => {
        if (success || error) return;
        if (!token){
            setError("Missing token!");
            return;
        };
        newVerification(token)
            .then((data) => {
                setSuccess(data.success);
                setError(data.error)
            })
            .catch(() => {
                setError("Something went wrong!")
            })
    }, [token,success,error]);

    useEffect(() => {
        onSubmit();
    }, [onSubmit])

    const router = useRouter();
    const onClick = () => {
        router.push("/auth/login");
    };

    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label="Confirming your email." />
            </CardHeader>

            <CardContent className="flex w-full items-center justify-center">
                {!success && !error && (
                    <ScaleLoader />
                )}
                <FormSucces message={success} />
                {!success && (
                    <FormError message={error} />
                )}

            </CardContent>

            <CardFooter className="flex w-full items-center justify-center">
                <Button
                    type="button"
                    variant="default"
                    onClick={onClick}
                >
                    Back to login
                </Button>
            </CardFooter>
        </Card>
    );
};

export default NewVerificationForm;
