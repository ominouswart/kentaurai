import { useContext } from "react"
import { RouterCountext } from "../../Contexts/Router"

export default function UserEdit() {

    const { params } = useContext(RouterCountext);

    return (
        <>
            <section id="banner">
                <div className="content">
                    <header>
                        <h1>Vartotojo redagavimas</h1>
                    </header>
                </div>
            </section>
            <section>

            </section>
        </>
    )
}