import React, { useState, useContext } from 'react';
import { AutoComplete, Input } from 'antd';
import { StoreContext } from '../../Context/StoreContext';

const Searcher = ({ setData }) => {

  const { products } = useContext(StoreContext);
  const [options, setOptions] = useState([]);
  const [items, setItems] = useState(""); 

  const searchResult = (query) => {
    const filterProducts = products.filter((product) => product.title.toLowerCase().startsWith(query.toLowerCase()));
    setItems(filterProducts);
    return filterProducts
    .map((product) => {
      const category = product.title;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span> {category}</span>
          </div>
        ),
      };
    });
  }

  const handleSearch = (value) => {
    if (value.length === 0) {
        setData(products) 
    } else {
        setOptions(value ? searchResult(value) : []);
    }    
  };

  const onSelect = (value) => {
    const filterProducts = products.filter((product) => product.title.toLowerCase().startsWith(value.toLowerCase()));
    setData(filterProducts);
  };

  const handleOnClick = () => {
    if (items.length > 0) {
        setData(items);
    }
  }

  return (
    <AutoComplete
      dropdownMatchSelectWidth={300}
      style={{
        width: 300,
      }}
      notFoundContent="Product not found"
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
      onClick={handleOnClick}
    >
      <Input.Search size="large" placeholder="Search Product" enterButton />
    </AutoComplete>
  );
};

export default Searcher;