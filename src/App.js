import React from "react";

//import Scss
import "./assets/scss/themes.scss";

//imoprt Route
import Route from "./Routes";

// Import Firebase Configuration file
// import { initFirebaseBackend } from "./helpers/firebase_helper";

// Fake Backend
// import fakeBackend from "./helpers/AuthType/fakeBackend";

// Activating fake backend
// fakeBackend();

// const firebaseConfig = {
//   apiKey: "AIzaSyDKMa8mzmTG4duMo7wWw6b2KeA6br2zkpw",
//   authDomain: "insolutionproducts-7c759.firebaseapp.com",
//   databaseURL: "https://insolutionproducts-7c759-default-rtdb.firebaseio.com",
//   projectId: "insolutionproducts-7c759",
//   storageBucket: "insolutionproducts-7c759.appspot.com",
//   messagingSenderId: "942546022142",
//   appId: "1:942546022142:web:629288c04e78ad55163faf",
//   measurementId: "G-TB3907LYSF"
// };

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASEURL,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID,
//   measurementId: process.env.REACT_APP_MEASUREMENTID,
// };

// init firebase backend
// initFirebaseBackend(firebaseConfig);

function App() {
  return (
    <React.Fragment>
      <Route />
    </React.Fragment>
  );
}

export default App;
