import BookLayout from "pages/Book";
import BookDetails from "pages/Book/BookDetails";
import Books from "pages/Book/Books";
import AppLayout from "pages/Layout";
import NotFound from "pages/NotFound";
import Profile from "pages/Profile";
import PrivateRoute from "components/PrivateRoute";
import AuthLayout from "pages/Auth/Layout";
import Login from "pages/Auth/Login";
import Home from "pages/Home";

export const Routes = 
[
    {
        path: "/",
        element: <AppLayout />,
        auth: true,
        roles: ["ADMIN"],
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "book",
                element: <BookLayout />,
                children: [
                    {
                        index: true,
                        element: <Books />
                    },
                    {
                        path: "details/:id",
                        element: <BookDetails />
                    }
                ]
            },
            {
                path: "profile",
                element: <Profile />
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />,
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
];

const routesMapper = (routes) => 
{
    return routes.map(route => {
        if(route.auth)
        {
            route.element = (
                <PrivateRoute roles={route.roles || undefined}>{route.element}</PrivateRoute>
            )
        }
        if(route.children)
        {
            route.children = routesMapper(route.children);
        }
        return route;
    });
}

routesMapper(Routes);