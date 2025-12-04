import  {Poppins} from 'next/font/google';
import { Button } from "@/registration/components/ui/button";
import { cn } from '@/lib/utils';
import { LoginButton } from '@/components/ui/auth/login-button';

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center 
      bg-[radial-gradient(ellipse_at_top,_#0ea5e9,_#1e3a8a)]">
        <div className="space-y-6 text-center">
          <h1 className={cn(
            'text-6xl font-semibold text-white drop-shadow-md',
            font.className,
            )}>
            Login to My Website 
          </h1>
          <p className="text-white text-lg">
            Please Sign Up to My site.
          </p>
          <div>
            <LoginButton>
              <Button variant='secondary' size='lg'>
                Sign In
              </Button>
            </LoginButton>
          </div>
        </div>
        <div className="text-white text-xs absolute bottom-4 opacity-70 ">
            <p>©2025 Made by Zhenis Magzhan</p>
        </div>
    </main>

)}