/*--------------------------------------------------------------------------------*/
/*                                  starter                                    */
/*--------------------------------------------------------------------------------*/
import FirstDashboard from "../views/starter/starter.jsx";
import Project from "../views/ui-components/admin-component/Project.jsx";
import Study from "../views/ui-components/admin-component/Study.jsx";
import Skills from "../views/ui-components/admin-component/Skills.jsx";

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
    path: "/panel/study",
    name: "Study",
    icon: "mdi mdi-adjust",
    component: Study,
  },
  {
    path: "/panel/skills",
    name: "Skills",
    icon: "mdi mdi-adjust",
    component: Skills,
  },
  {
    path: "/panel",
    pathTo: "/panel/welcome",
    name: "Dashboard",
    redirect: true,
  },
];

export default AdminRoutes;
