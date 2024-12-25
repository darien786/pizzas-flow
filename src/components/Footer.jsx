import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export default function Footer() {

    return(
        <div className="flex flex-col items-center justify-center w-full h-full bg-orange-400 text-white font-bold font-cursive text-2xl">
            <div className="justify-items-center p-4">
                <p className="text-black font-quicksand text-center">&copy; 2024 Pizzas Flow</p>
                <div className="mt-8 text-black"> 
                    <p className="text-2xl font-quicksand text-center font-bold">Contactanos</p>
                    <p className="text-sm font-quicksand "> Sigue disfrutando en nuestras redes sociales </p>
                    <div className="flex flex-wrap gap-3 mt-4 justify-center">
                        <p>
                            <a href="https://www.facebook.com/EddyFloresBloqueFam" target="_blank" rel="noopener noreferrer">
                                <FaFacebook /> 
                            </a>
                        </p>
                        <p>
                            <a href="https://wa.me/522282198088" target="_blank" rel="noopener noreferrer">
                                <IoLogoWhatsapp /> 
                            </a>
                        </p>
                        <p>
                            <a href="mailto:edyfloe@gmail.com" target="_blank" rel="noopener noreferrer">
                                <MdEmail /> 
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}