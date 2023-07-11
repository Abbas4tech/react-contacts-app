import ChartsAndMapsScreen from "../screens/ChartsAndMapsScreen";
import ContactDetailScreen from "../screens/ContactDetailScreen";
import ContactsScreen from "../screens/ContactsScreen";
import PageNotFoundScreen from "../screens/PageNotFoundScreen";

export enum Route {
  HOME = "/",
  CONTACTS = "/contacts",
  CONTACTDETAILS = "/contacts/details/:contactId",
  CHARTSANDMAPS = "/charts-and-maps",
  PAGENOTFOUND = "*",
}

export interface IRoute {
  name: string;
  path: Route;
  element: React.FC;
}

const routes: IRoute[] = [
  { name: "Home", path: Route.HOME, element: ContactsScreen },
  { name: "Contacts", path: Route.CONTACTS, element: ContactsScreen },
  {
    name: "Contact Details",
    path: Route.CONTACTDETAILS,
    element: ContactDetailScreen,
  },
  {
    name: "Charts and Map",
    path: Route.CHARTSANDMAPS,
    element: ChartsAndMapsScreen,
  },
  {
    name: "Page Not Found",
    path: Route.PAGENOTFOUND,
    element: PageNotFoundScreen,
  },
];

export default routes;
