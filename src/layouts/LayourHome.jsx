import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function LayourHome() {

    return (
            <main >
                <NavBar />
                <section >
                    <Outlet />
                </section>
                <footer>
                    <Footer />
                </footer>
            </main>
    )
}