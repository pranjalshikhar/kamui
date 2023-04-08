import React from "react";
import useAuth from "./hooks/useAuth";
import Authenticate from "./pages/Authenticate";
import loader from "./assets/loader.gif";
import { Home } from "./components/Icons";

const App = () => {
  const [user, loginWithgoogle, logOut, error, anon] = useAuth();

  if (navigator.onLine !== true) {
    return (
      <div className="p-12">
        <div className="my-12">
          <h1 className="text-xl text-red-800">
            The network is disconnected. Connect and try again.
          </h1>
        </div>
      </div>
    );
  }

  // error while logging in
  if (error) {
    return (
      <div>
        <h1>{error}</h1>
        <button
          className="bg-blue-600 text-3xl px-2 py-1"
          onClick={loginWithgoogle}
        >
          Try Again!
        </button>
      </div>
    );
  }
  // not logged in
  if (user === false) {
    return <Authenticate loginWithGoogle={loginWithgoogle} signInAnon={anon} />;
  }

  // state of loading
  if (user === null) {
    return (
      <div className="h-screen w-screen grid place-content-center">
        <img src={loader} alt="Loader" />
      </div>
    );
  }
  // logged in
  else {
    return (
      <Home
        logOut={logOut}
        userId={user.uid}
        name={user.displayName}
        isAnon={user.isAnonymous}
      />
    );
  }
};

export default App;
