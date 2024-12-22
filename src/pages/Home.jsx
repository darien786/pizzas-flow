import CardProduct from "../components/CardProduct"
import Hamburguesa from "../assets/hamburguesa-flow.jpg"
import Pizza from "../assets/pizzas-flow.jpg"
import HotDog from "../assets/hot-dog-flow.jpg"

export default function Home(){

    return(
        <div className="flex flex-col h-full w-full bg-gradient-to-r from-black via-black to-orange-400">
            <div className="flex flex-col h-full mt-4 mx-4 text-white pt-4 px-8 text-center ">
                <h1 className="text-5xl font-bold font-cursive">¡Bienvenidos a Pizzas Flow!</h1>
                <div className="mt-4 font-quicksand space-y-4">
                    <p className="text-2xl font-bold"> En <span className="font-cursive text-orange-400 text-3xl">Pizzas Flow</span> nos especializamos en la preparación de deliciosas pizzas, jugosas hamburguesas y exquisitos hot dogs. </p>
                    <p className="text-2xl font-bold"> Disfruta de nuestras promociones especiales diseño para cada categoría: pizzas irresistibles, hamburguesas únicas y hot dogs llenos de sabor. </p>
                    <p className="text-2xl font-bold"> Nuestra misión es ofrecerte calidad, frescura y el mejor servicio. </p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-full rounded-lg p-4 space-y-4 mt-6">
                    <div className="flex flex-col justify-center items-center text-white">
                        <p className="text-4xl font-bold mb-2">Pizzas</p>
                        <CardProduct image={Pizza} title="Pizza" price={95} height={258} width={300} />
                    </div>
                    <div className="flex flex-col justify-center items-center text-white">
                        <p className="text-4xl font-bold mb-2">Hamburguesas</p>
                        <CardProduct image={Hamburguesa} title="Hamburguesa" price={45} height={258} width={300} />
                    </div>
                    <div className="flex flex-col justify-center items-center text-white">
                        <p className="text-4xl font-bold mb-2">Hot Dogs</p>
                        <CardProduct image={HotDog} title="Hot Dog" price={15} height={258} width={300} />
                    </div>
                </div>
        </div>
    )
}