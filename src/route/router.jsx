import { createBrowserRouter, redirect } from "react-router-dom";
import RootLayout from "../layout/root";

const lazyPage = (importer) => async () => ({
    Component: (await importer()).default,
});

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        handle: {
            title: "Sites e sistemas sob medida | Vinicius Santos",
            description: "Landing pages, sites, sistemas e automações sob medida para ajudar empresas a vender mais e trabalhar melhor.",
        },
        children: [
            {
                index: true,
                lazy: lazyPage(() => import("../pages/home")),
            },
            {
                path: "services",
                lazy: lazyPage(() => import("../pages/service")),
                handle: {
                    title: "Serviços | Vinicius Santos",
                    description: "Desenvolvimento de aplicações web, APIs, integrações e interfaces responsivas.",
                },
            },
            {
                path: "contact",
                lazy: lazyPage(() => import("../pages/contact")),
                handle: {
                    title: "Contato | Vinicius Santos",
                    description: "Entre em contato para projetos, oportunidades e desenvolvimento de soluções web.",
                },
            },
            {
                path: "works",
                lazy: lazyPage(() => import("../pages/works")),
                handle: {
                    title: "Projetos | Vinicius Santos",
                    description: "Projetos selecionados de desenvolvimento web, aplicações, landing pages e design digital.",
                },
            },
            ...[
                ["despachantejoia", () => import("../pages/pagesProject/despachantejoia"), "Despachante Joia"],
                ["errevedigital", () => import("../pages/pagesProject/errevedigital"), "Erreve Digital"],
                ["vempazul", () => import("../pages/pagesProject/vempazul"), "Vem Pro Azul"],
                ["nitro-pecas", () => import("../pages/pagesProject/nitroPecas"), "Nitro Peças"],
                ["onepiece", () => import("../pages/pagesProject/onepiece"), "Anime Blog"],
                ["auraimoveis", () => import("../pages/pagesProject/auraimoveis"), "Aura Imóveis"],
                ["dn-soldas", () => import("../pages/pagesProject/dnSoldas"), "DN Soldas"],
                ["kontrol-finance", () => import("../pages/pagesProject/kontrolFinance"), "Kontrol Finance"],
            ].map(([path, importer, project]) => ({
                path,
                lazy: lazyPage(importer),
                handle: {
                    title: `${project} | Case de projeto`,
                    description: `Detalhes do projeto ${project}, desenvolvido por Vinicius Santos.`,
                },
            })),
            {
                path: "nitroPecas",
                loader: () => redirect("/nitro-pecas"),
            },
            {
                path: "*",
                lazy: lazyPage(() => import("../pages/notFound")),
                handle: {
                    title: "Página não encontrada | Vinicius Santos",
                    description: "A página solicitada não foi encontrada.",
                },
            },
        ],
    },
]);
