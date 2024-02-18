import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import MyCalendar from "../components/Calendar/myCalendar/myCalendar";
import path from "path";
import WorkingDays from "../components/Calendar/workingDays/WorkingDays";
import Index from "../components/Calendar/index";
import AddersRates from "../components/addersRates";
import JobsOrders from "../components/jobOrders";
import WorkOrder from "../components/jobOrders/workOrderDetails/workOrder";
import Activities from "../components/jobOrders/workOrderDetails/activities";
import Attachments from "../components/jobOrders/workOrderDetails/attachments";
import TimeFrame from "../components/jobOrders/workOrderDetails/timeFrame";
import Reporting from "../components/reporting";
import Collections from "../components/reporting/collections";
import Jobs from "../components/reporting/Jobs";
import Profile from "../components/profile";
import Licenses from "../components/profile/licenses";
import Company from "../components/profile/company";
import Team from "../components/profile/team";
import Payment from "../components/profile/payment";
import Reviews from "../components/profile/reviews";
import Portfolio from "../components/profile/portfolio";
import Achievements from "../components/profile/achievements";
import Challenges from "../components/profile/challenges";
import Services from "../components/profile/services";
import Invitations from "../components/profile/invitations";
import LoginPage from "../pages/login/loginPage";
import ProtectedRoutes from "./ProtectedRoutes";
import { Anonymous } from "./AnimnousRoutes";
import NotFoundPage from "../components/notFoundPage";
import AddersRate from "../components/addersRates/adderRates";
import RequiredAdders from "../components/addersRates/requiredAdders";
import CreateAdders from "../components/addersRates/createAdders";
import BatteryForm from "../components/addersRates/createAdders/batteriesForm";
import Roofingform from "../components/addersRates/createAdders/RoofingAdders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/home",
        element: <App />,
        children: [
          {
            path: "calendar-events",
            element: <Index />,
            children: [
              {
                path: "working-dayes",
                element: <WorkingDays />,
              },

              {
                path: "my-calendar",
                element: <MyCalendar />,
              },
              {
                element: <Navigate to="my-calendar" />,
                index: true,
              },
            ],
          },
          {
            path: "adders",
            element: <AddersRates />,
            children: [
              {
                path: "required-adders",
                element: <RequiredAdders></RequiredAdders>,
              },
              {
                path: "create-adders",
                // element: <CreateAdders></CreateAdders>,
                children: [
                  {
                    element: <CreateAdders />,
                    index: true,
                  },
                  {
                    path: "battery-form",
                    element: <BatteryForm />,
                  },
                  {
                    path: "Roofing-form",
                    element: <Roofingform />,
                  },
                ],
              },
              {
                path: "my-adders",
                element: <AddersRate></AddersRate>,
              },
              {
                element: <Navigate to="my-adders" />,
                index: true,
              },
            ],
          },
          {
            path: "profile",
            element: <Profile />,
            children: [
              {
                path: "licenses",
                element: <Licenses />,
              },
              {
                path: "company",
                element: <Company />,
              },
              {
                path: "team",
                element: <Team />,
              },
              {
                path: "invitations",
                element: <Invitations />,
              },
              {
                path: "payment",
                element: <Payment />,
              },
              {
                path: "reviews",
                element: <Reviews />,
              },
              {
                path: "portfolio",
                element: <Portfolio />,
              },
              {
                path: "services",
                element: <Services />,
              },
              {
                path: "achievements",
                element: <Achievements />,
              },
              {
                path: "challenges",
                element: <Challenges />,
              },
              {
                element: <Navigate to="licenses" />,
                index: true,
              },
            ],
          },
          {
            path: "jobs-orders",
            element: <JobsOrders />,
            children: [
              {
                path: "work_Order/:id",
                element: <WorkOrder></WorkOrder>,
              },
              {
                path: "activities/:id",
                element: <Activities></Activities>,
              },
              {
                path: "attachments/:id",
                element: <Attachments></Attachments>,
              },
              {
                path: "time Frame/:id",
                element: <TimeFrame></TimeFrame>,
              },
              {
                element: <Navigate to="work_Order/:job_order_id" />,
                index: true,
              },
            ],
          },
          {
            path: "reporting",
            element: <Reporting />,
            children: [
              {
                path: "collections",
                element: <Collections></Collections>,
              },
              {
                path: "jobs",
                element: <Jobs></Jobs>,
              },
              {
                element: <Navigate to="collections" />,
                index: true,
              },
            ],
          },
        ],
      },
      {
        path: "contact",
        element: <h1>contact</h1>,
      },
      {
        path: "/",
        element: (
          <Navigate to="/home/calendar-events/my-calendar" replace={true} />
        ),
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    element: <Anonymous></Anonymous>,
    children: [
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
    ],
  },
]);
