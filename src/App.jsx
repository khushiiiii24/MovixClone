import React from "react";
// import link from react
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../src/pages/Home";
import Movies from "../src/pages/Movies";
import Tvshows from "../src/pages/Tvshows";
import First from "./pages/First";

const router=createBrowserRouter([{
    path:"/",
    element:<First/>,
    children:[
        {
            index:true,
            element:<Home/>
        },{
            path:"/Movies",
            element:<Movies/>
        },{
            path:"/Tvshows",
            element:<Tvshows/>
        }
    ]
}])
function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
