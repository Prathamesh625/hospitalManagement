import logo from "./logo.svg";
import "./App.css";
import Input from "./Components/Input";
import SignIn from "./Pages/SignIn";
import { Route, Routes } from "react-router";
import AddPatientPage from "./Pages/AddPatientPage";
import PatientManager from "./Pages/PatientManager";
import Patient from "./Pages/Patient";

function App() {
  return (
    <Routes>
      <Route index element={<SignIn />} />
      <Route path="/add/patient" element={<AddPatientPage />} />
      <Route path="/manage/patient" element={<PatientManager />} />
      <Route path="/patient" element={<Patient />} />
    </Routes>
  );
}

export default App;
