import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './comp/header';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import getData from "./comp/getData";
// import postData from "./comp/postData";
// import putData2 from "./comp/putData2";




function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <Header />
        {/* <Switch>
          <Route path="/getData" comp={getData} ></Route>
          <Route path="/postData" comp={postData} ></Route>
          <Route path="/put2Data" comp={putData2} ></Route>
        </Switch>
      </BrowserRouter> */}
    </div>
  );
}

export default App;

