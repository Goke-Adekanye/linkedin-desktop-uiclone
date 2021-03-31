import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Sidebar, Header, Feed, Widget } from "./components";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase/firebase";
import Login from "./pages/login";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //USER IS LOGGED IN
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //USER IS LOGGED OUT
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      {/* HEADER */}
      <Header />
      {!user ? (
        <Login />
      ) : (
        //BODY
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      )}
    </div>
  );
}

export default App;
