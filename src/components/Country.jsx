import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function () {
  const { code } = useParams();

  const [country, setCountry] = useState();

  const fetchCountry = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${code}`
      );
      const result = await response.json();
      setCountry(result[0]);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  return (<>
    {!country ? <h3>Loading...</h3>
    :     
    <div>
      <h1>{country.name.common}</h1>
      <figure>
        <img src={country.flags.png}/>
      </figure>
      <p>Population: {country.population}</p>
    </div>}
    </>)
}
