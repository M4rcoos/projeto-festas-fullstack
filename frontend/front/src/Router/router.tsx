import { RouterProvider, createBrowserRouter } from "react-router-dom"
import {Home} from "../pages/home"
import {CreateParty} from "../pages/createParty"
import {Details} from "../pages/details"

export const Routes = () =>{
    const routes = createBrowserRouter([{
        path : '/',
        element : <Home/>

    },
    {
        path : '/criar-festa',
        element : <CreateParty/>
    },
    {
        path : '/atualizar',
        element : <Details/>
    },
    ]);

    return(
        <>
        <RouterProvider 
        router={routes}
        />
        </>
    )
}
