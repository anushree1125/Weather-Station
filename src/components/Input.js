import styled from "styled-components";
import Weather from "./Weather";
import { useState } from "react";
import Popup from "./Popup";
function Input({ cityName, setCityName, search, setSearch }) {
  const [data, setData] = useState("");
  const [received, setReceived] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [msg, setMsg] = useState(null);
  function display() {
    if (cityName == "") {
      setShowPopup(true);
      setMsg("Please enter city name!");
      return;
    } else if (cityName.length <= 2) {
      setShowPopup(true);
      setMsg("City name is too short!");
      return;
    }
    if (received) {
      setReceived(false);
      setData("");
    }
    setSearch(true);
  }

  return (
    <div className="container">
      <div className="input-container">
        <InputContainer
          type="text"
          placeholder="City Name, Country Name"
          onChange={(e) => {
            setSearch(false);
            setCityName(e.target.value);
          }}
        ></InputContainer>
        <button onClick={display}>Search</button>
      </div>
      {search ? (
        <Weather
          cityName={cityName}
          data={data}
          setData={setData}
          received={received}
          setReceived={setReceived}
          setMsg={setMsg}
          msg={msg}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      ) : null}
      {showPopup && (
        <Popup
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          msg={msg}
          setMsg={setMsg}
        />
      )}
    </div>
  );
}
export default Input;

const InputContainer = styled.input`
  padding: 10px;
  width: 178px;
  &:hover {
    cursor: pointer;
  }
  outline: 0cm;
  font-size: 14px;
  border-radius: 15px;
`;
