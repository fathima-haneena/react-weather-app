import styled from "styled-components";

const WeatherLogo = styled.img`
width: 140px;
height: 140px;
margin: 40px auto;
`;
const ChooseCityLabel = styled.div`
color: black;
font-size: 18px; 
font-weight: bold;
margin: 20px auto;
`;
const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: black solid 1px;
  border-radius: 2px;
  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-family: Montserrat;
    font-weight: bold;
  }
  & button {
    background-color: black;
    font-size: 14px;
    padding: 0 10px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: bold;
  }

`;
const CityComponent = (props) => {
    const {updateCity, fetchWeather} = props;
    return (<>
    <WeatherLogo src="/icons/perfect-day.svg" />
    <ChooseCityLabel>Choose your city</ChooseCityLabel>
    <SearchBox onSubmit={fetchWeather}>
    <input  type="text" onChange={(e) => updateCity(e.target.value)}
           placeholder="Enter city name" />
    <button type={"submit"}>Search</button>
    </SearchBox>
    </>);
  };
  export default CityComponent;

