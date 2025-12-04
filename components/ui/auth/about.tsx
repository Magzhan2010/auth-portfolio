import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
});


export const AboutMe = () => {
  return (
    <div className="relative mt-16 md:mt-20 py-20 overflow-hidden">
      <div className="max-w-[1170px] mx-auto px-4">

        <div className="text-center mb-16 relative">
          <h1 className={`text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#5c62ec] to-[#6468ef] bg-clip-text text-transparent ${font.className}`}>
            About Me
          </h1>
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 block w-24 h-1 bg-[#5c62ec] rounded-full animate-pulse"></span>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 leading-[1.5] tracking-normal">

          <p className="font-medium text-lg md:text-2xl text-gray-800 max-w-[700px] text-center md:text-left leading-relaxed">
            I’m Magzhan, a 14-year-old passionate about technology and programming. I enjoy learning new skills,
            building small projects, and improving step by step every day. I’m curious, creative, and always seeking 
            challenges that help me grow. My goal is to continue developing in AI and web development and to 
            build meaningful projects that can make a difference. I’m still shaping my future, 
            but I’m determined to keep learning and improving as a young developer.
          </p>

          <img 
            src="/images/myPhoto.jpg" 
            alt="Magzhan" 
            className="w-[300px] md:w-[350px] rounded-3xl shadow-lg hover:scale-110 hover:shadow-2xl transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
