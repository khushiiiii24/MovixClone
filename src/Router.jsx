import React from "react";
// import link from react
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../src/pages/Home";
import Movies from "../src/pages/Movies";
import Tvshows from "../src/pages/Tvshows";
import First from "./pages/First";
import App from "./App";
import SinglePages from "./pages/SinglePages";
import { urls } from "./Urls";

const router=createBrowserRouter([{
    path:"/",
    element:<First/>,
    children:[
        {
            index:true,
            element:<App/>
        },{
            path:"/Movies",
            element:<Movies        
              heading="Explore Movies"
               urls={[urls.trendingMoviesDay, urls.trendingMoviesWeek,urls.popularMovies,urls.topRatedMovies]}/>
        },{
            path:"/Tvshows",
            element:<Tvshows
            heading="Explore Tvshows"
               urls={[urls.popularTvshows,urls.topRatedTvshows]}/>
        },{
            path:"/SinglePages/:id",
            element:<SinglePages/>
        }
    ]
}])
function Router() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default Router;
