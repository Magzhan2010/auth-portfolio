import { Poppins } from "next/font/google";


const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
});


export const Contacts = () => {
    return (
        <div className="text-center flex items-center justify-center py-[40px] px-[40px]">
            <div className="w-[570px]">
                <div className="text-center mb-16 relative">
                    <h1 className={`text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#5c62ec] to-[#6468ef] bg-clip-text text-transparent ${font.className}`}>
                        Contacts
                    </h1>
                    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 block w-24 h-1 bg-[#5c62ec] rounded-full animate-pulse"></span>
                </div>
                <div className="mb-[20px]">
                    <h3 className="text-[40px] font-bold text-[#171718]">Location</h3>
                    <p className="font-normal text-[18px] text-[#171718] opacity-85 py-[20px]">Kazakhstan, Zhezkazgan</p>
                </div>
                <div className="mb-[20px]">
                    <h3 className="text-[40px] font-bold text-[#171718]">Telegram / WhatsApp</h3>
                    <p className="font-normal text-[18px] text-[#171718] opacity-85 py-[20px]">+7 705 571 ** **</p>
                </div>
                <div>
                    <h3 className="text-[40px] font-bold text-[#171718]">Email</h3>
                    <p className="font-normal text-[18px] text-[#171718] opacity-85 py-[20px]"><a href="#!">magzanzeis798@gmail.com</a></p>
                </div>
            </div>
        </div>
    );
}

export default Contacts