/*--------------------------------------------------------------------------------*/
/*                                  starter                                    */
/*--------------------------------------------------------------------------------*/
import FirstDashboard from "../views/starter/starter.jsx";
/*--------------------------------------------------------------------------------*/
/*                           Ui-components Dropdown                               */
/*--------------------------------------------------------------------------------*/


export var AdminRoutes = [
  {
    path: "/panel/welcome",
    name: "Accueil",
    icon: "mdi mdi-adjust",
    component: FirstDashboard,
  },
  {
    path: "/panel",
    pathTo: "/panel/welcome",
    name: "Dashboard",
    redirect: true,
  },
];

export default AdminRoutes;
