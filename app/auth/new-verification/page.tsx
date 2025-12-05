import dynamic from "next/dynamic";

// Client-only component
const NewVerificationForm = dynamic(
  () => import("@/components/ui/auth/new-verification-form"),
  { ssr: false } // серверде рендерлемейді
);

export default function NewVerificationPage() {
  return <NewVerificationForm />;
}