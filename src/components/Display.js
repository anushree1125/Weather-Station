import styled from "styled-components";

function Display({ data }) {
  console.log(data);
  return (
    <div className="inner-container">
      <p>Weather condition: {data?.current?.condition?.text}</p>
      <WeatherContainer>
        <div>
          Feels like
          <Field disabled value={`${data?.current?.feelslike_c} C`}></Field>
        </div>
        <div>
          Humidity <Field disabled value={data?.current?.humidity}></Field>
        </div>
        <div>
          Wind speed
          <Field disabled value={`${data?.current?.wind_kph} Kph`}></Field>
        </div>
        <div>
          Wind Direction{" "}
          <Field disabled value={data?.current?.wind_dir}></Field>
        </div>
        <div>
          Precipitation{" "}
          <Field disabled value={`${data?.current?.precip_mm} mm`}></Field>
        </div>
        <div>
          UV <Field disabled value={data?.current?.uv}></Field>
        </div>
        <div>
          Latitude
          <Field disabled value={data?.location?.lat}></Field>
        </div>
        <div>
          Longitude
          <Field disabled value={data?.location?.lon}></Field>
        </div>
      </WeatherContainer>
    </div>
  );
}
export default Display;
const Field = styled.input`
  margin-top: 10px;
  font-size: 25px;
  border: none;
  max-width: 150px;
  min-height: 100px;
  text-align: center;
  color: black;
  border-radius: 15px;
`;

const WeatherContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  /* background-color: white; */
  color: black;
  text-align: center;
  font-weight: 200;

  div {
    // margin-top: 2em;
    padding: 5px;
    max-width: 150px;
    min-height: 100px;
    border: 1px solid black;
    margin: 20px 10px 3px 3px;
    font-size: 18px;
    border-radius: 15px;
  }
`;
