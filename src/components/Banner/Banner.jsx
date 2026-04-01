import { Play } from "lucide-react";
import BannerImage from "../../assets/banner.png";

const Banner = () => {
    return (
        <div className="w-11/12 mx-auto relative md:min-h-screen  flex items-center overflow-hidden">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10 py-16 lg:py-0">
                
                <div className="space-y-4 text-center lg:text-left">
                    <div className="badge badge-soft badge-primary py-4 rounded-2xl text-base font-medium">
                        <div className="relative flex items-center justify-center w-4 h-4 rounded-full bg-[#c7b8ff]">
                            <div className="absolute w-2.75 h-2.75 rounded-full bg-[#9e6df2]"></div>
                            <div className="absolute w-1.5 h-1.5 rounded-full bg-[#7c3aed]"></div>
                        </div>
                        <span className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">
                            New: AI-Powered Tools Available
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-black leading-tight">
                        Supercharge Your
                        <br />
                        <span className="text-4xl sm:text-5xl lg:text-5xl font-bold bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] bg-clip-text text-transparent">
                            Digital Workflow
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg text-[#627382] max-w-lg mx-auto lg:mx-0">
                        Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                        <button className="btn btn-primary bg-linear-to-r from-[#4f39f6] to-[rgb(149,20,250)] outline-none border-none px-4 py-6 rounded-4xl font-semibold text-lg text-white hover:scale-[1.02] transition-all duration-200">
                            Explore Products
                        </button>
                        <button className="btn btn-primary btn-outline px-4 py-6 rounded-4xl font-semibold text-lg flex items-center gap-3 border-2 hover:bg-linear-to-r from-[#4f39f6] to-[rgb(149,20,250)] transition hover:text-white group">
                            <Play className="w-5 h-5 text-[#4f39f6] group-hover:text-white" />
                            <span className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent group-hover:text-white hover:scale-[1.02] transition-all duration-200">
                                Watch Demo
                            </span>
                        </button>
                    </div>
                </div>

                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative">
                        <img
                            className="relative h-64 sm:h-96 lg:h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
                            src={BannerImage}
                            alt="AI Models Banner"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;