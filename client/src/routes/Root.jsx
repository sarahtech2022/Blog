import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div id="titlediv">
        <h1 className="title"> Sarah's Blog</h1>
        <img
          id="titlepic"
          src="https://cdn-icons-png.flaticon.com/512/8277/8277582.png"
        ></img>
      </div>
      <Outlet />
    </div>
  );
};

export default Root;
