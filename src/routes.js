/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import {
  SupervisorAccount,
  Person,
  Dashboard,
  AttachMoney,
} from "@material-ui/icons";
/* import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language"; */
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import ShipmentDetail from "views/ShipmentDetail/ShipmentDetail.js";
import AddShipment from "views/AddShipment/AddShipment.js";
import Providers from "views/Providers/Providers";
import Finance from "views/Finance/Finance.js";
/* import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js"; */

export const RoutesInMenu = [
  {
    path: "/dashboard",
    name: "Inicio",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
    isMenu: true,
  },
  {
    path: "/table",
    name: "Embarques",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
    isMenu: true,
  },
  {
    path: "/user",
    name: "Perfil",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
    isMenu: true,
  },
  {
    path: "/providers",
    name: "Proveedores",
    rtlName: "الرموز",
    icon: SupervisorAccount,
    component: Providers,
    layout: "/admin",
    isMenu: true,
  },
  {
    path: "/finance",
    name: "Financiero",
    rtlName: "الرموز",
    icon: AttachMoney,
    component: Finance,
    layout: "/admin",
    isMenu: true,
  },
];

const Routes = [
  {
    path: "/dashboard",
    name: "Inicio",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
    isMenu: true,
  },
  {
    path: "/table/shipment",
    name: "Embarques",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: ShipmentDetail,
    layout: "/admin",
    isMenu: false,
  },
  {
    path: "/table/newshipment",
    name: "Añadir nuevo embarque",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: AddShipment,
    layout: "/admin",
    isMenu: false,
  },
  {
    path: "/table",
    name: "Embarques",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
    isMenu: true,
  },
  {
    path: "/user",
    name: "Perfil",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
    isMenu: true,
  },
  {
    path: "/finance",
    name: "Financiero",
    rtlName: "الرموز",
    icon: AttachMoney,
    component: Finance,
    layout: "/admin",
    isMenu: true,
  },
  {
    path: "/providers",
    name: "Proveedores",
    rtlName: "الرموز",
    icon: SupervisorAccount,
    component: Providers,
    layout: "/admin",
    isMenu: true,
  },
  /* {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    rtlName: "التطور للاحترافية",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin"
  } */
];

export default Routes;
