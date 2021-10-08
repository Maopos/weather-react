import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Show from "./components/Show";
import Error from "./components/Error";

function App() {
  const [search, saveSearch] = useState({
    city: "",
    country: "",
  });

  const [consult, saveConsult] = useState(false);
  const [result, saveResult] = useState({});
  const [error, saveError] = useState(false);

  const { city, country } = search;

  useEffect(() => {
    const apiResult = async () => {
      if (consult) {
        const myApiKey = "3d0737d044da2b27a6c6b046fe944271";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${myApiKey}`;
        const res = await fetch(url);
        const resultApi = await res.json();

        saveResult(resultApi);
        saveConsult(false);

        if (resultApi.cod === "404") {
          saveError(true);
        } else {
          saveError(false);
        }
      }
    };
    apiResult();
    // eslint-disable-next-line
  }, [consult]);

  let component;
  if (error){
    component = <Error message="City not found..." />
  }else {
    component = <Show result={result}></Show>
  }

  return (
    <div>
      <div className="App">
        <Header title="React Weather"></Header>
        <div className="form-container">
          <div className="container">
            <div className="row">
              <div className="col m6 s12">
                <Form
                  search={search}
                  saveSearch={saveSearch}
                  saveConsult={saveConsult}
                ></Form>
              </div>
              <div className="col m6 s12">
                {component}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
