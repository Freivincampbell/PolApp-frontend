
import DashboardPage from "views/Dashboard.js";
import LoginPage from "views/Login.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardPage
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage
  }

];

export default dashboardRoutes;
