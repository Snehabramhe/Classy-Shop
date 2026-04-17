import { Outlet } from "react-router-dom";

const FullPageLayout = () => {
  return (
    <div className="w-full h-screen bg-white">
      <Outlet />
    </div>
  );
};

export default FullPageLayout;