import CardProduct from "../components/CardProduct";
import HotDogClasic from "../assets/hotdog-clasico.jpg"
import HotDogHawaiano from "../assets/hotdog-hawaiano.jpg"
import HotDogTocino from "../assets/hotdog-tocino.jpg"

export default function PageHotDog() {

    return (
            <div className="w-full h-full flex flex-col items-center space-y-8 bg-gradient-to-r from-black via-black to-orange-400 pb-4">
                <p className="text-6xl font-bold font-cursive text-white text-center">Hot Dogs</p>
                <div className="w-full p-4 grid sm:grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="flex flex-col mt-4 w-full items-center space-y-2">
                        <p className="text-5xl font-bold font-cursive text-white text-center">Hot Dog <span className="text-danger">[clásica]</span></p>
                        <p className="text-3xl font-bold font-quicksand text-white text-center">Salchicha, Vegetales, Mayonesa, Cat sup, Mostaza</p>
                        <CardProduct image={HotDogClasic} title="3 por " price={40} height={350} width={400} />
                    </div>
                    <div className="flex flex-col mt-4 w-full items-center space-y-2">
                        <p className="text-5xl font-bold font-cursive text-white text-start">Hot Dog <span className="text-danger">[Hawaiano]</span></p>
                        <p className="text-3xl font-bold font-quicksand text-white text-center">Salchicha, Vegetales, Piña, Queso de hebra, Mayonesa, Cat sup, Mostaza, Chiles</p>
                        <CardProduct image={HotDogHawaiano} title="3 por " price={60} height={350} width={400} />
                    </div>
                </div>
                <div className="flex flex-col mt-4 w-full items-center space-y-2 px-4">
                        <p className="text-5xl font-bold font-cursive text-white text-start">Hot Dog con <span className="text-danger">[Tocino]</span></p>
                        <p className="text-3xl font-bold font-quicksand text-white text-center">Salchicha, Vegetales, Tocino, Queso de hebra, Cat sup, Mostaza, Chiles </p>
                        <CardProduct image={HotDogTocino} title="3 por " price={60} height={350} width={400} />
                </div>
            </div>
        );
}