import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <h1 className="title"> Sarah's Blog</h1>
      <Outlet />
    </div>
  );
};

export default Root;
