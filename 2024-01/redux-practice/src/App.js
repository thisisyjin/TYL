import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { Fragment } from "react";

function App() {
  const isLogined = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {isLogined ? <UserProfile /> : <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
