import { ScrollShadow } from "@nextui-org/react"
import CardProduct from "../components/CardProduct"
import Hamburguesa from "../assets/hamburguesas.jpg"
import Pizza from "../assets/pizzas-amor.jpg"
import HotDog from "../assets/hotdog-eddy.jpg"

export default function Home(){

    return(
        <div className="flex flex-col ">
            <ScrollShadow hideScrollBar className="flex flex-col justify-start items-center space-y-8 h-full w-full">
            <div className="flex flex-col h-full mt-4 mx-4 text-white pt-4 px-8 text-center">
                <h1 className="text-4xl font-bold font-cursive">¡Bienvenidos a Pizzas Flow!</h1>
                <div className="mt-4 font-quicksand space-y-4">
                    <p className="text-xl font-bold"> En <span className="font-cursive text-orange-400 text-3xl">Pizzas Flow</span> nos especializamos en la preparación de deliciosas pizzas, jugosas hamburguesas y exquisitos hot dogs. </p>
                    <p className="text-xl font-bold"> Disfruta de nuestras promociones especiales diseño para cada categoría: pizzas irresistibles, hamburguesas únicas y hot dogs llenos de sabor. </p>
                    <p className="text-xl font-bold"> Nuestra misión es ofrecerte calidad, frescura y el mejor servicio. </p>
                </div>
            </div>
            <div className="flex grid grid-cols-3 bg-gradient-to-r from-orange-400 via-black via-50% to-orange-400 w-full h-full rounded-lg space-y-4 mb-4">
                <div className="flex flex-col justify-center items-center text-white">
                    <p className="text-4xl font-bold mb-2">Pizzas</p>
                    <CardProduct image={Pizza} title="Pizza" price={59} />
                </div>
                <div className="flex flex-col justify-center items-center text-white">
                    <p className="text-4xl font-bold mb-2">Hamburguesas</p>
                    <CardProduct image={Hamburguesa} title="Hamburguesa" price={59} />
                </div>
                <div className="flex flex-col justify-center items-center text-white">
                    <p className="text-4xl font-bold mb-2">Hot Dogs</p>
                    <CardProduct image={HotDog} title="Hot Dog" price={59} />
                </div>
            </div>
            </ScrollShadow>
        </div>
    )
}