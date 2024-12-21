import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Image, Link } from "@nextui-org/react"
import Logo from "../assets/pizzas-eddy.jpg"
import { useState } from "react"

export default function NavBar() {
    const [activeItem, setActiveItem] = useState("Inicio"); // Estado para el elemento activo

    const handleSetActive = (item) => {
        setActiveItem(item); // Actualizar el estado con el elemento clickeado
    };

    return (
        <Navbar
            className="bg-gradient-to-r from-black from-10% via-black via-40% to-orange-400"
            classNames={{
                item: [
                    "flex",
                    "relative",
                    "h-full",
                    "items-center",
                    "data-[active=true]:after:content-['']",
                    "data-[active=true]:after:absolute",
                    "data-[active=true]:after:bottom-0",
                    "data-[active=true]:after:left-0",
                    "data-[active=true]:after:right-0",
                    "data-[active=true]:after:h-[2px]",
                    "data-[active=true]:after:rounded-[2px]",
                    "data-[active=true]:after:bg-white",
                ],
            }}
            shouldHideOnScroll
        >
            <NavbarBrand>
                <Image src={Logo} alt="Logo" width={65} height={65} />
                <h1 className="mx-4 text-white font-bold text-3xl font-cursive">Pizzas Flow</h1>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                {["Inicio", "Pizzas", "Hamburguesas", "Hot Dogs", "Contacto"].map((item) => (
                    <NavbarItem
                        key={item}
                        isActive={activeItem === item} // Controlar si el elemento es activo
                        className={`text-white ${activeItem === item ? "font-bold" : ""}`} // Clase adicional para resaltar el activo
                        onClick={() => handleSetActive(item)} // Establecer activo al hacer clic
                    >
                        <Link className="font-cursive text-white text-2xl" underline="active" onClick={() => handleSetActive(item)}>
                            {item}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
        </Navbar>
    );
}