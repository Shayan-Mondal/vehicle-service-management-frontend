import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { UserRegister } from "./components/UserRegister";
import { AppNavBar } from "./common/AppNavBar";
import { UserList } from "./components/UserList";
import { MechanicUpsert } from "./components/MechanicUpsert";
import { MechanicList } from "./components/MechanicList";
import { Vehicle } from "./components/Vehicle";
import { Enquiry } from "./components/Enquiry";
import { ServiceType } from "./components/ServiceType";
import { VehicleType } from "./components/VehicleType";
import { ServiceRequest } from "./components/ServiceRequest";
import { EnquiryList } from "./components/EnquiryList";
import { ServiceRequestList } from "./components/ServiceRequestList";
import { VehicleList } from "./components/VehicleList";
import { UserUpsert } from "./components/UserUpsert";
import { HomePage } from "./components/HomePage";
import { AppNavBar1 } from "./common/AppNavBar1";
import { UserLogin } from "./components/UserLogin";
import { AdminLogin } from "./components/AdminLogin";
function App() {
  return (
    <div>
      <Router>
        <switch>
          <Route exact path="/">
            <AppNavBar1 />
            <HomePage />
          </Route>
          <Route exact path="/userlogin">
            <UserLogin />
          </Route>
          <Route exact path="/adminlogin">
            <AdminLogin />
          </Route>
          <Route exact path="/create-user">
            <AppNavBar />
            <UserUpsert />
          </Route>
          <Route exact path="/list-user">
            <AppNavBar />
            <UserList />
          </Route>
          <Route exact path="/vehicle">
            <AppNavBar />
            <Vehicle />
          </Route>
          <Route exact path="/enquiry">
            <AppNavBar />
            <Enquiry />
          </Route>
          <Route exact path="/servicetype">
            <AppNavBar />
            <ServiceType />
          </Route>
          <Route exact path="/vehicletype">
            <AppNavBar />
            <VehicleType />
          </Route>
          <Route exact path="/servicerequest">
            <AppNavBar />
            <ServiceRequest />
          </Route>
          <Route exact path="/enquirylist">
            <AppNavBar />
            <EnquiryList />
          </Route>
          <Route exact path="/servicerequestlist">
            <AppNavBar />
            <ServiceRequestList />
          </Route>
          <Route exact path="/vehiclelist">
            <AppNavBar />
            <VehicleList />
          </Route>
          <Route exact path="/create-mechanic">
            <AppNavBar />
            <MechanicUpsert />
          </Route>

          <Route exact path="/list-mechanic">
            <AppNavBar />
            <MechanicList />
          </Route>
        </switch>
      </Router>
    </div>
  );
}

export default App;
