import CardProduct from "../components/CardProduct";
import PizzaHawuiana from "../assets/hamburguesa-flow.jpg";

export default function PageHamburguer() {
    
    return(
        <div className="w-full h-full flex flex-col items-center space-y-8 bg-gradient-to-r from-black via-black to-orange-400">
                        <div className="bg-gradient-to-r from-black via-black to-orange-400 mt-4 w-full p-4">
                            <p className="text-6xl font-bold font-cursive text-white text-center">Pizza individual $95</p>
                            <p className="text-5xl font-bold font-quicksand text-white text-center">Elige 2 ingredientes a tu gusto para personalizar tu pizza </p>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
                                <CardProduct image={PizzaHawuiana} title="Hawuiana" price={95} />
                                <CardProduct image={PizzaHawuiana} title="Pepperoni" price={95} />
                                <CardProduct image={PizzaHawuiana} title="3 Quesos" price={95} />
                                <CardProduct image={PizzaHawuiana} title="Champiñones" price={95} />
                                <CardProduct image={PizzaHawuiana} title="Salchicha" price={95} />
                            </div>
                        </div>
                </div>
    );
}