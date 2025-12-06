"use client"; 


import { logoutUser } from "@/actions/logout"; 
import { Poppins } from 'next/font/google';
import { Button } from '@/registration/components/ui/button';
import { useFormStatus } from 'react-dom';

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
});

const SignOutButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button 
      type="submit" 
      variant="ghost" 
      disabled={pending}
    >
      {pending ? 'Sign out...' : 'Sign Out'} 
    </Button>
  );
};

export const Navbar = () => {
    
    return (
        <nav className="py-5 border-b border-[#26292D] bg-[#171718] text-white">
            <div className='max-w-[1170px] mx-auto px-4'>
                <div className='flex items-center justify-around w-full'>
                    <a href="/settings" className={`text-white text-2xl ${font.className}`}>
                        MagNet
                    </a>
                    <ul className='flex items-center justify-center gap-[40px] w-full font-medium'>
                        <li>
                            <a href="/" className="relative after:block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#5c62ec] after:transition-all after:duration-300 hover:after:w-full">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/settings/project" className="relative after:block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#5c62ec] after:transition-all after:duration-300 hover:after:w-full">
                                My projects
                            </a>
                        </li>
                        <li>
                            <a href="/settings/contacts" className="relative after:block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#5c62ec] after:transition-all after:duration-300 hover:after:w-full">
                                Contacts
                            </a>
                        </li>
                    </ul>
                    
                    <form action={logoutUser}>
                        <SignOutButton />
                    </form>

                </div>
            </div>
        </nav>
    );
}
