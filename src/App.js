import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUserFromAuth, authStateChangeObserver } from "./utilities/firebase/firebase.utils";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

import { setCurrentUser } from "./store/user/user.actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = authStateChangeObserver((user) => {
      if (user) {
        addUserFromAuth(user)
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
