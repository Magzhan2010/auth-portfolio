"use client"; // <- міндетті түрде ең басында

import { useRouter } from 'next/navigation';
import { logoutUser } from "@/actions/logout"; 
import { Poppins } from 'next/font/google';
import { Button } from '@/registration/components/ui/button';

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
});

export const Navbar = () => {
    const router = useRouter();

    const handleSignOut = async () => {
        await logoutUser(); 
        router.push('/auth/login'); 
    };
    
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
                    <form onSubmit={async (e) => {
                        e.preventDefault(); 
                        await handleSignOut(); 
                    }}>
                        <Button type="submit" onClick={handleSignOut} variant="ghost" >
                            Sign Out
                        </Button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
