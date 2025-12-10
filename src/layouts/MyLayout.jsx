import { Outlet } from "react-router-dom";

const MyLayout = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default MyLayout;
