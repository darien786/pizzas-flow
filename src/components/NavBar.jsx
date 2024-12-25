import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Image, Link, NavbarMenu, NavbarMenuToggle, NavbarMenuItem } from "@nextui-org/react";
import Logo from "../assets/pizzas-eddy.jpg";
import { useState, useEffect } from "react";

export default function NavBar() {
    const [activeItem, setActiveItem] = useState("Inicio");
    const items = [
        { name: "Inicio", path: "/" },
        { name: "Pizzas", path: "/pizzas" },
        { name: "Hamburguesas", path: "/hamburguesas" },
        { name: "Hot Dogs", path: "/hot-dogs" },
    ];

    useEffect(() => {
        // Establecer el item activo según la ruta actual
        const currentPath = window.location.pathname;
        const currentItem = items.find(item => item.path === currentPath);
        if (currentItem) {
            setActiveItem(currentItem.name);
        }
    }, []);

    const handleSetActive = (name) => {
        setActiveItem(name);
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
            <NavbarContent className="sm:hidden text-white" justify="start" >
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <Image src={Logo} alt="Logo" width={65} height={65} />
                    <h1 className="mx-4 text-white font-bold text-3xl font-cursive">Pizzas Flow</h1>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="start">
                <NavbarBrand>
                    <Image src={Logo} alt="Logo" width={65} height={65} />
                    <h1 className="mx-4 text-white font-bold text-3xl font-cursive">Pizzas Flow</h1>
                </NavbarBrand>
                {items.map((item) => (
                    <NavbarItem
                        key={item.name}
                        isActive={activeItem === item.name}
                        className={`text-white ${activeItem === item.name ? "font-bold" : ""}`}
                        onClick={() => handleSetActive(item.name)}
                        href={item.path}
                    >
                        <Link
                            className="font-cursive text-white text-2xl"
                            underline="active"
                            onClick={() => handleSetActive(item.name)}
                            href={item.path}
                        >
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarMenu className="bg-gradient-to-r from-black via-black to-orange-400 text-white">
                {items.map((item) => (
                    <NavbarMenuItem key={item.name}>
                        <Link
                            className="w-full text-white font-cursive text-2xl text-center"
                            href={item.path}
                            onClick={() => handleSetActive(item.name)}
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}