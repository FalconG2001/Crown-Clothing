import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";

type categories = { id: Number; title: String; imageUrl: String }[];

const Home = () => {
  return (
    <div>
      <Outlet />
      <Directory />
    </div>
  );
};

export default Home;
