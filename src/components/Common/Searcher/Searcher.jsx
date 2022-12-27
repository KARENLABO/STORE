import React, { useState, useContext } from 'react';
import { AutoComplete, Input } from 'antd';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Searcher = ({ setData }) => {

  const { products } = useContext(StoreContext);
  const [options, setOptions] = useState([]);
  let navigate = useNavigate();

  const searchResult = (query) => {
    const filterProducts = products.filter((product) => product.title.toLowerCase().startsWith(query.toLowerCase()));
    
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
        setOptions([])
        navigate('/')
    } else {
        setOptions(value ? searchResult(value) : []);
    }    
  };

  const onSelect = (value) => {
    const filterProducts = products.filter((product) => product.title === value);
    navigate(`/product/${value}`)
    setData(filterProducts);
  };

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
    >
      <Input.Search size="large" placeholder="Search Product"  />
    </AutoComplete>
  );
};

export default Searcher;