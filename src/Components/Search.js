import React, { useState } from 'react'
import Coordinates from './coordinates';

export const Search = () => {
  const [city, setCity] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const createCity = () => {
    <form>
      <label>Enter a City:</label>
      <input
        type="text"
        required
        onChange={(e) => setCity(e.target.value)}/>
    </form>
  }

  const createCountryCode = () => {
    <form>
      <label>Enter a Country Code:</label>
      <input
        type="text"
        required
        onChange={(e) => setCountryCode(e.target.value)}/>
    </form>
  }

  //   return (
  //   <div>
  //       <Coordinates createCity={city}/>
  //       <Coordinates createCountryCode={countryCode}/>
  //       <div>
  //         <button onClick={() => createCity()}>Submit</button>
  //         <button onClick={() => createCountryCode()}>Submit</button>
  //       </div>
  //   </div>
  //   ); 
  //   }
  // }
    // <form>
    //   <label>Enter a City:</label>
    //     <input
    //     type="text"
    //     required
    //     onChange={(e) => setCity(e.target.value)}/>

    //   <label>Enter a Country Code:</label>
    //     <input
    //     type="text"
    //     required
    //     onChange={(e) => setCountryCode(e.target.value)}/>

    //   <button>
    //     Submit 
    //   </button>
    // </form>
  // )
}

export default Search