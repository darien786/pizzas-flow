
import CardProduct from "../components/CardProduct";
import HamburguesaClasic from "../assets/hamburguesa clasica.jpg";
import HamburguesaHawaiana from "../assets/hamburguesa hawaiana.jpg";
import HamburguerSpecial from "../assets/hamburguesa mega especial.jpg";

export default function PageHamburguer() {
    
    return (
        <div className="w-full h-full flex flex-col items-center space-y-8 bg-gradient-to-r from-black via-black to-orange-400">
            <p className="text-6xl font-bold font-cursive text-white text-center">Hamburguesas</p>
            <div className="w-full p-4 grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col mt-4 w-full items-center space-y-2">
                    <p className="text-5xl font-bold font-cursive text-white text-center">Hamburguesa <span className="text-danger">[clásica]</span></p>
                    <p className="text-3xl font-bold font-quicksand text-white text-center">Carne, Queso amarillo, Jamón, Lechuga, Tomate, Cebolla, Catsup y Mostaza</p>
                    <CardProduct image={HamburguesaClasic} title="" price={45} height={350} width={400} />
                </div>
                <div className="flex flex-col mt-4 w-full items-center space-y-2">
                    <p className="text-5xl font-bold font-cursive text-white text-center">Hamburguesa <span className="text-danger">[Hawaiana]</span></p>
                    <p className="text-3xl font-bold font-quicksand text-white text-center">Carne, Queso de hembra,Queso amarillo, Jamón, Piña, Lechuga, Tomate, Cebolla, Catsup y Mostaza</p>
                    <CardProduct image={HamburguesaHawaiana} title="" price={55} height={350} width={400} />
                </div>
            </div>
            <div className="flex flex-col mt-4 w-full items-center space-y-2 px-4">
                    <p className="text-5xl font-bold font-cursive text-white text-center">Hamburguesa <span className="text-danger">[Mega especial]</span></p>
                    <p className="text-3xl font-bold font-quicksand text-white text-center">Carne, Queso amarillo, Queso de hembra, Tocino, Salchicha asadas, Jamón, Lechuga, Tomate, Cebolla, Catsup y Mostaza</p>
                    <CardProduct image={HamburguerSpecial} title="" price={65} height={350} width={400} />
            </div>
            <div className="flex flex-col mt-4 w-full items-center space-y-2 px-4 py-4">
                <p className="font-bold font-quicksand text-white text-5xl text-center">Orden de papas gratis</p>
                <p className="font-bold font-quicksand text-white text-5xl text-center">En la compra de 2 promociones <span className="text-danger font-bold font-cursive">[Mega Especial]</span></p>
            </div>
        </div>
    );
}