/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";

var routes = [

  {
    path: "/tables",
    name: "Notice",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/home",
  },

  {
    path: "/index",
    name: "Components",
    icon: "ni ni-archive-2 text-primary",
    component: Index,
    layout: "/home",
  },
  {
    path: "/icons",
    name: "Service",
    icon: "ni ni-planet text-info",
    component: Icons,
    layout: "/home",
  },

  {
    path: "/user-profile",
    name: "Contributors",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/home",
  },

  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: Login,
  //   layout: "/auth",
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth",
  // },

  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Maps,
  //   layout: "/home",
  // },
];
export default routes;
