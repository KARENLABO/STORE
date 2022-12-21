import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Avatar, Card, Rate, Tag } from 'antd';
import { Modal } from 'antd';
import { StoreContext } from '../Context/StoreContext';
import './styles.css';


function Home() {
  const [data, Setdata] = useState();
  const [categories, setCategories] = useState();
  const [isShown, setIsShown] = useState(false);
  const [item, setItem] = useState();

  const { products, setProducts } = useContext(StoreContext);
  const { Meta } = Card;
  
console.log(products);
  const onMouseOn = (item) =>{
    setIsShown(true);
    setItem(item);
  }


  const filterCategories = (data) => {
    const categories = new Set();
    for(let i= 0; i<data.length; i++){
      if(!categories.has(data[i].category)){
        categories.add(data[i].category)
      }
    }
    return [...categories];
  }

  const filterbyCategory = (category) => {
    
  }

  useEffect(()=>{
    const bringData = async() => {
      try{
        const data = await axios.get('https://fakestoreapi.com/products/');
        Setdata(data.data);
        setCategories(filterCategories(data.data))
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

      <div className='Tags'>
       <Tag  className='category-tag' onClick = {filterbyCategory('All')}key='All' color="cyan">All</Tag>

        {categories && (categories.map((category) => {
          return (
            <Tag className='category-tag' onClick = {() => filterbyCategory(category)} key={category} color="cyan">{category}</Tag>
          );
        }))}
      </div>

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

