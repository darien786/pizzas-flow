import CardCombo from "../components/CardCombo"
import CardProduct from "../components/CardProduct"
import PizzaSalchicha from "../assets/pizza-salchicha.jpg"
import PizzaPeperonni from "../assets/pizza-peperonni.jpg"
import PizzaQuesos from "../assets/pizza-3quesos.jpg"
import PizzaChampinones from "../assets/pizza-champiñon.jpg"
import PizzaHawaiana from "../assets/pizza-hawuaiana.jpg"

export default function PagePizza() {

    return (
        <div className="w-full h-full flex flex-col items-center space-y-8 bg-gradient-to-r from-black via-black to-orange-400">
                <div className="flex flex-col mt-4 w-full">
                    <p className="text-6xl font-bold font-cursive text-white text-center mb-4">Pizzas</p>
                    <p className="text-6xl font-bold font-cursive text-white text-center">Super promoción</p>
                    <p className="text-5xl font-bold font-quicksand text-white text-center">2 Pizzas por $185</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <CardCombo image={PizzaHawaiana} image2={PizzaPeperonni} title="Combo #1 Hawaiana y Pepperoni" price={185} />
                        <CardCombo image={PizzaHawaiana} image2={PizzaQuesos} title="Combo #2 Hawaiana y 3 Quesos" price={185} />
                        <CardCombo image={PizzaHawaiana} image2={PizzaChampinones} title="Combo #3 Hawaiana y Champiñones" price={185} />
                        <CardCombo image={PizzaHawaiana} image2={PizzaSalchicha} title="Combo #4 Hawaiana y Salchicha" price={185} />
                    </div>
                </div>

                <div className="bg-gradient-to-r from-black via-black to-orange-400 mt-4 w-full p-4">
                    <p className="text-6xl font-bold font-cursive text-white text-center">Pizza individual $95</p>
                    <p className="text-5xl font-bold font-quicksand text-white text-center">Elige 2 ingredientes a tu gusto para personalizar tu pizza </p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4 mt-4">
                        <CardProduct image={PizzaHawaiana} title="Hawaiana" price={95} height={220} width={250} />
                        <CardProduct image={PizzaPeperonni} title="Pepperoni" price={95} height={220} width={250} />
                        <CardProduct image={PizzaQuesos} title="3 Quesos" price={95} height={220} width={250} />
                        <CardProduct image={PizzaChampinones} title="Champiñones" price={95} height={220} width={250} />
                        <CardProduct image={PizzaSalchicha} title="Salchicha" price={95} height={220} width={250} />
                    </div>
                </div>
        </div>
    );
}