import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
function Cliente() {
    return (
        <>
            <NavBar/>
            <Outlet />
        </>
    );
}
export default Cliente;