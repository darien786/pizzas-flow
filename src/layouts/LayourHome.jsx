import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
export default function LayourHome() {

    return (
            <main className="">
                <NavBar />
                <section className="">
                    <Outlet />
                </section>
            </main>
    )
}