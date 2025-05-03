import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root";
import Home from "../pages/home";
import Contact from "../pages/contact";
import About from "../pages/about";
import Service from "../pages/service";
import Works from "../pages/works";


import VempAzul from "../pages/pagesProject/vempazul";
import GerenciadorTarefas from "../pages/pagesProject//gerenciadorTarefas";
import NitroPecas from "../pages/pagesProject/nitroPecas";
import DespachanteJoia from "../pages/pagesProject/despachantejoia";
import OnePiece from "../pages/pagesProject/onepiece";
import ErreveDigital from "../pages/pagesProject/errevedigital";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            // {
            //     path: "/about",
            //     element: <About />
            // },
            // {
            //     path: "/service",
            //     element: <Service />
            // },
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/works",
                element: <Works />
            },

            //PROJETOS
            {
                path: "/despachantejoia",
                element: <DespachanteJoia />
            },
            {
                path: "/errevedigital",
                element: <ErreveDigital />
            },
            {
                path: "/vempazul",
                element: <VempAzul />
            },
            {
                path: "/gerenciadorTarefas",
                element: <GerenciadorTarefas />
            },
            {
                path: "/nitroPecas",
                element: <NitroPecas />
            },
            {
                path: "/onepiece",
                element: <OnePiece />
            }
        ]
    }
])