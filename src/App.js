import "./App.css";
import { useState } from "react";
import Input from "./components/Input";

function App() {
  const [cityName, setCityName] = useState("");
  const [search, setSearch] = useState(false);
  return (
    <div className="main-container">
      <h2>Weather Station</h2>
      <div className="container">
        <Input
          cityName={cityName}
          setCityName={setCityName}
          search={search}
          setSearch={setSearch}
        ></Input>
      </div>
    </div>
  );
}

export default App;
