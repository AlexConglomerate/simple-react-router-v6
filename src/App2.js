import {useLocation, useRoutes} from "react-router-dom";
import Navbar from "./page/navbar";
import routes from "./routes";

const App2 = () => {
    const isLoggedIn = false
    const location = useLocation()
    const element = useRoutes(routes(isLoggedIn, location))
    return (
        <>
            <Navbar isLoggedIn={isLoggedIn}/>
            {element}
        </>
    )
}

export default App2;