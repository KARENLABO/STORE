import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { StoreContext } from '../Context/StoreContext';
import TagsCategories from '../Common/TagsCategories/TagsCategories';
import Products from '../Common/Products/Products';
import {  Spin } from 'antd';
import Searcher from '../Common/Searcher/Searcher'
import './styles.css';

const PRODUCTS_URL = 'https://fakestoreapi.com/products/';

function Home() {
  const [data, setData] = useState();
  const [categories, setCategories] = useState();
  const { products, setProducts } = useContext(StoreContext);

  const getCategories = (data) => {
    const categories = new Set();
    for(let item of data){
      categories.add(item.category)
    }
    return [...categories];
  }

  const filterbyCategory = (category) => {
    if (category === 'All') {
      setData(products)
    } else {
      setData(products.filter((product) => product.category === category))
    }
  }

  useEffect(()=>{
    const bringData = async() => {
      try{
        const data = await axios.get(PRODUCTS_URL);
        setProducts(data.data);
        setData(data.data);
        setCategories(getCategories(data.data))
      } catch (e) {
        console.log(e);
      }
    }
    bringData();

  },[setProducts]);

  
  return (
    <div className="Home">

      {!data &&       
        <Spin tip="Loading..." size="large" className='Spin'>
          <div className="content" />
        </Spin>
      }

      {data && (
        <>
          <Searcher setData={setData}/>
          {categories && <TagsCategories categories={categories} filterbyCategory={filterbyCategory}/>}
          <Products items={data}/>
        </>
      )}

    </div>
  );
}
 
export default Home;

