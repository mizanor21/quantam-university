import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/HomePage/Home/Home";
import History from "../Pages/OthersPages/About/History/History";
import MissionandObjectives from "../Pages/OthersPages/About/MissionandObjectives/MissionandObjectives";
import Campus from "../Pages/OthersPages/About/Campus/Campus";
import GeneralRulesandRegulations from "../Pages/OthersPages/About/GeneralRulesandRegulations/GeneralRulesandRegulations";
import Career from "../Pages/OthersPages/About/Career/Career";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/history",
        element: <History></History>,
      },
      {
        path: "/missionandobjectives",
        element: <MissionandObjectives></MissionandObjectives>,
      },
      {
        path: "/campus",
        element: <Campus></Campus>,
      },
      {
        path: "/GeneralRulesandRegulations",
        element: <GeneralRulesandRegulations></GeneralRulesandRegulations>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
    ],
  },
]);

export default router;
