import { Poppins } from "next/font/google";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
  });

export const HeaderBasicPage = () => {
    
    return (
        <header className="bg-[#171718] text-white min-h-[100vh] 
        flex items-center justify-center text-center 
        bg-[url('/images/Abstract.png')] bg-no-repeat bg-center
        ">

            <div className='max-w-[1170px] mx-auto px-4'>

                <div className="max-w-[730px] py-0 px-[3px] text-[34px] 
                font-bold leading-[1.5] tracking-normal mb-7">
                    <h1 className="text-[60px]">Hi, my name is <span className={`text-[#5c62ec] ${font.className}`}>Magzhan</span></h1>
                    <p>A young developer growing step by step in <span className="text-[#6468ef]">AI</span> and <span className="text-[#6468ef]">Web Development.</span></p>
                </div>
                <div className="text-lg leading-[1.4]">
                    <p>Skills: JavaScript, Python, React, Node.js.</p>
                </div>

            </div>
        </header>
    );

};

export default HeaderBasicPage;