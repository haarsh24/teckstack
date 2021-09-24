import { useState } from "react";
import "./styles.css";

const teckStack = {
  Frontend: [
    {
      name: "React Js",
      Creator: "Facebook",
      BasedOn: "JavaScript"
    },
    {
      name: "Angular Js",
      Creator: "Google ",
      BasedOn: "Typescript"
    },
    {
      name: "Vue Js",
      Creator: "Evan You",
      BasedOn: "JavaScript/Typescript"
    }
  ],

  Backend: [
    {
      name: "Flask",
      Creator: "Armin ronacher",
      BasedOn: "Python"
    },
    {
      name: "Spring Boot",
      Creator: "Spring Foundation",
      BasedOn: "Java"
    },
    {
      name: "Node Js",
      Creator: "Ryan dahl",
      BasedOn: "JavaScript"
    }
  ],

  Databases: [
    {
      name: "MongoDB",
      Creator: "MongoDB Foundation",
      BasedOn: "No SQL"
    },
    {
      name: "SQL Server",
      Creator: "Microsoft",
      BasedOn: "SQL"
    },
    {
      name: "MySQL",
      Creator: "My SQL AB",
      BasedOn: "SQL"
    }
  ]
};

var TeckStackList = Object.keys(teckStack);

export default function App() {
  const [techList, setTechList] = useState("Frontend");
  function formatClickHandler(form) {
    setTechList(form);
  }

  return (
    <div className="App">
      <h1>My Favourite Tech Stack </h1>
      <p>Checkout my Favourite Teck Stack according to the domain</p>
      <div>
        {TeckStackList.map((form) => {
          return (
            <button onClick={() => formatClickHandler(form)} key={form}>
              {form}
            </button>
          );
        })}
      </div>
      <hr />
      <ul>
        {teckStack[techList].map((tech) => (
          <li key={tech.name}>
            <div style={{ fontSize: "1.5rem", color: "white" }}>
              {tech.name}
            </div>
            <div style={{ fontSize: "1.1rem" }}> Creator: {tech.Creator} </div>
            <div style={{ fontSize: "1.1rem" }}>Based On: {tech.BasedOn} </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
