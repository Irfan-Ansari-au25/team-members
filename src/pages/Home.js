import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../redux/actions";

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // auth handler
  const authHandler = (e) => {
    if (currentUser) {
      logoutInitiate()(dispatch);
    }
  };

  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={authHandler}>LogOut</button>
    </div>
  );
};

export default Home;
