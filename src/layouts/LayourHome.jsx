import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
export default function LayourHome() {

    return (
            <main className="flex flex-col w-full h-screen ">
                <NavBar />
                <section className="flex flex-col w-full h-full">
                    <Outlet />
                </section>
            </main>
    )
}