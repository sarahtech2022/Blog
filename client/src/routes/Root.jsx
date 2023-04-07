import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <h1 className="title"> Sarah's Bloggg</h1>
      <img src="https://cdn-icons-png.flaticon.com/512/8277/8277582.png"></img>
      <Outlet />
    </div>
  );
};

export default Root;
