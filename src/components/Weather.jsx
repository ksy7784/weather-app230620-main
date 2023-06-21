import React from 'react'

function Weather(props) {
  const {weather} = props;
  return (
    <>
      {
        weather && (
          <div>
            <h2>{weather.name}</h2>
            <p>현재온도 : {((weather.main.temp)/13.22694717994628).toFixed(1)+'℃'}</p>
            <p>설명 : {weather.weather[0].description}</p>
          </div>
          )
      }
      </>
  )
}

export default Weather