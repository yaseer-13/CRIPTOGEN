import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <>
      {/* Search Bar */}
      {!simplified && (
        <div className="flex justify-center ">

          <div className="input-group search-crypto ">
            <input type="search" onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search Cryptocurrency" aria-label=" Search Cryptocurrency " aria-describedby="button-addon3" />
          </div>

        </div>
      )}

      <div class=" crypto-card-container mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {cryptos?.map((currency) => (

          <div class="flex justify-center  ">
            <div className=" w-80 rounded-xl  shadow-lg bg-white  hover:bg-yellow-50   max-w-sm " key={currency.uuid}>
              < Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>

                <div className="card-header flex content-center justify-between px-5 pt-4  ">
                  <h1 className="text-gray-900 text-2xl font-bold  ">{currency.name}</h1>
                  <img className="crypto-image w-1/6 " src={currency.iconUrl} alt={currency.name} />
                </div>

                <div className="bg-slate-700  text-slate-100 py-6 text-lg rounded-t-xl rounded-b-xl text-center ">
                  <p>Price:<strong> $ {millify(currency.price)} / Coin</strong></p>
                  <p>Market Cap: $ {millify(currency.marketCap)}</p>
                  <p>Daily Change: {currency.change}%</p>
                </div>

              </Link >
            </div >
          </div >
        ))}
      </div >

    </>
  );
};

export default Cryptocurrencies;