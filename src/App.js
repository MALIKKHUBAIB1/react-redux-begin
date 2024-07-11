import { useSelector } from "react-redux";
import { Fragment } from "react";
import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Headers from "./components/Header";
import UserProfile from "./components/UserProfile";
function App() {
  const isAuth = useSelector((state) => state.auth.isAuthentication);

  return (
    <Fragment>
      <Headers />
      {isAuth ? <UserProfile /> : <Auth  />}
      <Counter />
    </Fragment>
  );
}

export default App;
