
import { MdOutlineAlternateEmail } from "react-icons/md";
import { GoPaperAirplane } from "react-icons/go";
import { FaFacebookF, FaInstagram, FaPinterest, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaThreads, FaXTwitter } from "react-icons/fa6";


export default function Footer() {
    return (
        <footer className="w-full flex flex-col md:flex-row justify-around md:items-center gap-8 p-6">
            <div className="flex flex-col gap-4">
                <div className="flex flex-row w-full gap-2 items-center justify-center md:justify-start">
                    <MdOutlineAlternateEmail size={35} />
                    <span className="text-black font-bold md:text-lg">
                        Contacto
                    </span>
                </div>
                <div className="flex flex-row w-full gap-2 items-center justify-center">
                    <GoPaperAirplane size={35} />
                    <span className="text-black font-bold md:text-lg">
                        Información de eventos
                    </span>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-4">
                <span>Redes sociales</span>
                <div className="grid grid-cols-4 gap-8">
                    <FaFacebookF size={30}/>
                    <FaXTwitter size={30}/>
                    <FaPinterest size={30}/>
                    <FaYoutube size={30}/>
                    <FaInstagram size={30}/>
                    <FaThreads size={30}/>
                    <FaTiktok size={30}/>
                </div>
            </div>


            <div>
                <nav className="h-full w-full flex flex-col justify-center items-center">
                    <span>Educación Inicial. Fundación Carlos Slim.</span>
                    <span>Aviso de privacidad</span>
                </nav>
            </div>
        </footer>

    );
}
