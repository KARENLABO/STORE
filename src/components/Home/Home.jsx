import axios from 'axios';
import { useEffect, useState } from 'react';
import './styles.css';


function Home() {
  const [data, Setdata] = useState();



  useEffect(()=>{
    const bringData = async() => {
      try{
        const data = await axios.get('https://fakestoreapi.com/products/');
        Setdata(data.data);
      }catch (e) {
        console.log(e);
      }
    }

    bringData();
  },[]);

  return (
    <div className="Home">

      {data && (
        <>
        {data.map((item) => {
          return(
            <>
              <p>{item.title}</p>
              <p> $ {item.price}</p>
            </>
          );
        })}
        </>
      )}
    </div>
  );
}

export default Home;

