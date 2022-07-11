import React, { useState, useEffect } from 'react';
import stockIcon from '../Assets/img/ready-stock.png';
import ratingIcon from '../Assets/img/favorite.png';

function Home() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const loadPost = async (val) => {
    const params = val ? `/search?q=${val}` : '';
    setLoading(true);
    const response = await fetch(`https://dummyjson.com/products${params}`);
    const respJSON = await response.json();
    setProducts(respJSON.products);
    setLoading(false);
  };

  const handleChange = (e) => {
    const { target } = e;
    setSearchInput(target.value);
    loadPost(searchInput);
  };

  useEffect(() => {
    loadPost();
  }, []);

  console.log(products);

  const getListProduct = () => {
    if (loading) return <p>Get Data...</p>;
    if (!loading && products.length === 0) return <p>data not found</p>;

    return products.map((data, i) => {
      return (
        <div id={i.toString()} className="card-products">
          <ul>
            <li>
              <img src={data.images[0]} className="size-image"></img>
            </li>
            <div className="data-content">
              <li className="title-data">{data.title}</li>
              <li>{data.brand}</li>
              <div className="data-content2">
                <li>
                  <img src={stockIcon} />
                  {data.stock}
                </li>
                <li>${data.price}</li>
                <li>
                  <img src={ratingIcon} />
                  {data.rating}
                </li>
              </div>
              <li>{data.description}</li>
            </div>
          </ul>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <h4>List Products</h4>
      <div className="search-flex">
        <a href="https://dummyjson.com/products" className="link-api">
          View Real Data API
        </a>
        <input icon="search" placeholder="Search..." onChange={handleChange} className="search-style" />
      </div>
      <div className="card-flex"> {getListProduct()}</div>
    </div>
  );
}

export default Home;
