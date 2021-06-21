import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { authRequestCreator } from "../redux/authReducer";
import { path } from "../provider/path";

export function useAuth() {
  const [init, setInit] = useState(false);
  const { isFetching, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(authRequestCreator());
  }, []);

  useEffect(() => {
    if (isFetching) return;

    const pathname = history.location.pathname;
    if (user) {
      if (path.authPath.includes(pathname)) {
        history.push(path.home);
      }
    } else {
      console.log("reject", pathname, path.authPath);
      if (!path.authPath.includes(pathname)) {
        history.push(path.login);
      }
    }

    setInit(true);
  }, [user, isFetching]);

  return [init, user];
}
