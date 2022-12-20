import axios from 'axios';
import { useEffect, useState } from 'react';
import { Avatar, Card, Rate } from 'antd';
import { Modal } from 'antd';

import './styles.css';


function Home() {
  const [data, Setdata] = useState();
  const [isShown, setIsShown] = useState(false);
  const [item, setItem] = useState();
  const { Meta } = Card;
  

  const onMouseOn = (item) =>{
    setIsShown(true);
    setItem(item);
  }



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
        <Modal
        title={`${item?.title} ${item?.id} `}
        centered
        open={isShown}
        onOk={() => setIsShown(false)}
        onCancel={() => setIsShown(false)}
        width={600}
      >


        <div className='modal-content'>
        <img
          alt="example"
          src={item?.image} 
          className='item-img'
          
        />
          <p className='item-price'>{`$ ${item?.price}`}</p>

          <p>{item?.description}</p>
          <Rate disabled value={item?.rating.rate} />
          <p>{item?.rating.rate}</p>
        </div>

      </Modal>


   

      {data && (
        <div className='items-container'>
        {data.map((item) => {
          return(
            <div key={item.id}>
                <Card 
                onClick={() => onMouseOn(item) }
                style={{
                  width: 220,
                }}
                cover={
                  <img
                    alt="example"
                    src={item.image} 
                    className='item-img'
                  />
                }
              >
            <Meta
              avatar={<Avatar src={item.image}  />}
              title={item.title}
              description={`$ ${item.price}`}
            />
            </Card>
            </div>
          );
        })}
        </div>
      )}
    </div>
  );
}

export default Home;

