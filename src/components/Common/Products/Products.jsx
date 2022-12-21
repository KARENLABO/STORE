import {  useState } from 'react';
import { Avatar, Card} from 'antd';
import ModalProduct from '../Modal/Modal';

function Products(props) {
  const {items } = props;
  
  const [isShown, setIsShown] = useState(false);
  const [item, setItem] = useState();

  const { Meta } = Card;
  
  const handleOnClick = (item) =>{
    setIsShown(true);
    setItem(item);
  }
  
  return (
    <div className="Products-container">

      <ModalProduct item={item} isShown={isShown} setIsShown={setIsShown}/>


      {items && (
        <div className='items-container'>
        {items.map((item) => {
          const { id, image, title, price } = item;

          return(
            <div key={id}>
                <Card 
                onClick={() => handleOnClick(item) }
                style={{
                  width: 220,
                }}
                cover={
                  <img
                    alt="example"
                    src={image} 
                    className='item-img'
                  />
                }
              >
            <Meta
              avatar={<Avatar src={image}  />}
              title={title}
              description={`$ ${price}`}
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

export default Products;

