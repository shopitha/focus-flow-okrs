
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50">
      <Navigation />
      <main className="transition-all duration-300">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
