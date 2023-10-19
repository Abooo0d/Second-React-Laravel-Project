import { Navigate, createBrowserRouter } from "react-router-dom";
import Dashboard from "./Views/Dashboard";
import Login from "./Views/Login";
import SignUp from "./Views/Signup";
import Survay from "./Views/Survay";
import GustLayout from "./Components/GustLayout";
import DefaultLayout from "./Components/DefaultLayout";
import SurvayView from "./Views/SurvayView";
const router = createBrowserRouter ([
  {
    path:"/",
    element:<DefaultLayout/>,
    children:[
      {
        path:"/dashboard",
        element:<Navigate to="/"/>
      },
      {
        path:"/",
        element:<Dashboard/>
      },
      {
        path:"/survay",
        element:<Survay/>
      },
      {
        path:"/survay/create",
        element:<SurvayView/>
      },
    ]
  },
  {
    path:"/",
    element:<GustLayout />,
    children:[
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/signup",
        element:<SignUp/>
      }
    ]
  }
]);
export default router;
