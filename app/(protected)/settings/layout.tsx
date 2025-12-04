import { Navbar } from "@/components/ui/auth/navbar";
import { FooterTitle } from "@/components/ui/auth/footer";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow">
                {children}
            </main>

            <FooterTitle />
        </div>
    );
}
