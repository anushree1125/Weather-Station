import Display from "./Display";
import { useEffect } from "react";
import Popup from "./Popup";
function Weather({
  cityName,
  data,
  setData,
  received,
  setReceived,
  msg,
  setMsg,
  showPopup,
  setShowPopup,
}) {
  const input = cityName.split(",");
  const city = input[0];
  const country = input[1];

  const getData = async (url, options) => {
    try {
      const resp = await fetch(url, options);
      if (!resp.ok) {
        setMsg("No result found");
        setShowPopup(true);

        return;
      }

      const weather = await resp.json();
      setReceived(true);
      setData(weather);
      if (!weather) {
        setShowPopup(true);
        return;
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}%2C%20${country}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b3683168d5msh565dc41aa019aecp1c95c9jsncb69f32b0898",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };
    getData(url, options);
  }, []);

  return (
    <>
      {received && data ? (
        <Display data={data} />
      ) : showPopup ? (
        <Popup
          setShowPopup={setShowPopup}
          msg={msg}
          setMsg={setMsg}
          showPopup={showPopup}
        />
      ) : null}
    </>
  );
}

export default Weather;
