import Index from "../pages/404";
import Login from "../pages/login/login";
import AddressMap from "../pages/chart";

export const routerList =[
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/404',
    element: <Index/>
  },
  {
    path: '/addressMap',
    element: <AddressMap/>
  }
]