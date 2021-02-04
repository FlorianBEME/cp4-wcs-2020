/*--------------------------------------------------------------------------------*/
/*                                  starter                                    */
/*--------------------------------------------------------------------------------*/
import FirstDashboard from "../views/starter/starter.jsx";
import Project from "../views/ui-components/admin-component/Project.jsx";
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
    path: "/panel/project",
    name: "Projet",
    icon: "mdi mdi-adjust",
    component: Project,
  },
  {
    path: "/panel",
    pathTo: "/panel/welcome",
    name: "Dashboard",
    redirect: true,
  },
];

export default AdminRoutes;
