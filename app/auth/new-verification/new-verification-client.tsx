'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { NewVerificationForm } from "@/components/ui/auth/new-verification-form";

export default function NewVerificationClient() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Тек клиентте рендер жасаймыз
    setReady(true);
  }, []);

  if (!ready) return null;

  return <NewVerificationForm token={token || undefined} />;
}
