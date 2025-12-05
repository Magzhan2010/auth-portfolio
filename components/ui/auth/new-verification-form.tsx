"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScaleLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { newVerification } from "@/actions/new-verification";
import { FormError } from "@/components/form-error";
import { FormSucces } from "@/components/form-success";
import { Header } from "@/components/ui/auth/header";

interface NewVerificationFormProps {
  token: string | null;
}

export const NewVerificationForm = ({ token }: NewVerificationFormProps) => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  useEffect(() => {
    if (!token) {
      setError("Missing token!");
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  }, [token]);

  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label="Confirming your email." />
      </CardHeader>

      <CardContent className="flex w-full items-center justify-center">
        {!success && !error && <ScaleLoader />}
        <FormSucces message={success} />
        {!success && <FormError message={error} />}
      </CardContent>

      <CardFooter className="flex w-full items-center justify-center">
        <Button
          type="button"
          variant="default"
          onClick={() => (window.location.href = "/auth/login")}
        >
          Back to login
        </Button>
      </CardFooter>
    </Card>
  );
};
