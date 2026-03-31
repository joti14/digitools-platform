import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-zinc-950 border-t pt-16 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <div className="text-white font-extrabold text-3xl mb-4">
                            DigiTools
                        </div>

                        <p className="text-zinc-400 text-lg max-w-md">
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Fetures
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Templates
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Integrations
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Press
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Community
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className=" flex gap- text-2xl  md:col-span-2 flex-col">
                        <h3 className="text-white font-semibold mb-6 text-lg">Social Links</h3>
                        <div className="flex gap-2">
                            <a href="#" className="transition-colors bg-white p-2 rounded-full"><AiFillInstagram /></a>
                            <a href="#" className="transition-colors bg-white p-2 rounded-full"><FaFacebook /></a>
                            <a href="#" className="transition-colors bg-white p-2 rounded-full"><FaXTwitter /></a>
                        </div>

                    </div>
                </div>

                
                <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
                    <div>© {new Date().getFullYear()} Digitools. All rights reserved.</div>

                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-white transition">
                            Terms of Service
                        </a>
                        <a href="#" className="hover:text-white transition">
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;