import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/home">Home</Link>
        <Link to="/pag1">Pág1</Link>
        <Link to="/pag2">Pág2</Link>
        <Link to="/about">About us</Link>
      </nav>
      <Outlet></Outlet>
    </>
  );
};

export default Layout;