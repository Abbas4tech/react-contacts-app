import Grid from "./Grid";
import NavBar from "./NavBar";
import SidebarItems from "./SidebarItems";

const SideBar = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <NavBar />
        <Grid />
      </div>
      <SidebarItems />
    </div>
  );
};

export default SideBar;
