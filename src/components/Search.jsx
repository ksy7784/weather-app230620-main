import React from 'react'

function Search(props) {

  const {
    handleWeatherSearch,
    handleLocationChange,
    location,
    wrong,
  
  } = props;
  console.log(props);
  return (
    <form onSubmit={handleWeatherSearch}>
    <div className="input-group">
      <input 
      type="search" 
      value={location}
      placeholder='위치를 입력해주세요'
      required
      onChange={handleLocationChange}
      />
      
      {  wrong ?
        <div style={{color:'red'}}>올바른 지역이 아닙니다.</div> : null
        }
      <button 
      className='btn' 
      type='submit'
      >검색</button>
    </div>
  </form>
  )
}

export default Search