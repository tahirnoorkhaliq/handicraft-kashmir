import Home from "./routes/home/home.component";
import { useState } from "react";
import { Routes, Route ,Navigate} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authenticarion.component";

const Shop = () => {
  return (
    <div>
      <div>
        <h1>Shopping</h1>
      </div>
    </div>
  );
};
const ContactUs = () => {
  return (
    <div>
      <div>
        <h1>Call us on +9134434242</h1>
      </div>
    </div>
  );
};


const App = () => {
  const [auth, setAuth] = useState(false);

  const authHandler = () => {
    setAuth({auth:!auth});
  };
console.log("auth",auth);
  return (
    <Routes>
      <Route path="/" element={<Navigation login={authHandler} status={auth}/>}>
        <Route path="shop" element={auth?<Home/>:<Navigate to="/"/>} />
        <Route path="contactus" element={<ContactUs />} />
        <Route index element={<Authentication changeState={authHandler}/>} />
      </Route>
    </Routes>
  );
};

export default App;
