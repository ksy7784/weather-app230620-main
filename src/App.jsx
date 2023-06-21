import { useState } from 'react'
import './App.css'
import Search from './components/search';
import Weather from './components/Weather';

function App() {
  const [location, setLocation] = useState(''); // 검색어
  const [weather, setWeather] = useState(null); // 날씨 데이터 null 값이 비었음을 명시적 선언
  const [wrong, setWrong] = useState(false);

  // 날씨 요청 함수
  const fetchWeather = () => {
    
    const apiKey = '929e85c7ac8af57e00dd06b2bb662cf0';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&lang=kr`;

    //ajax요청
    fetch(url)
      .then(res => res.json())  // json포맷으로 변환
      .then(data => {
        //검색결과 없을 때
        if(data.cod === '404'){
          setWeather(null);
          setWrong(true);
          return;
        }
        setWeather(data);
        setWrong(false);
        console.log(data);
      })
      //에러처리
      .catch(()=>{
        console.log('에러');
      })
  }


  //입력함수 
  const handleLocationChange = (e) => {
    console.log(e.target.value);
    setLocation(e.target.value);
  }

  //검색버튼 눌렀을 때
  const handleWeatherSearch = (e) =>{
    //전송이벤트 취소(기본 이벤트)
    e.preventDefault();
    fetchWeather();
    console.log('검색호출');
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      {/*해당파일로 키·밸류로 보내기*/}
      <Search
        handleWeatherSearch ={handleWeatherSearch}
        handleLocationChange ={handleLocationChange}
        location = {location}
        wrong = {wrong}
      />
      <Weather weather={weather}/>
  
      
    </div>
  )
}

export default App
