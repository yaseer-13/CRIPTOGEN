import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
      <div>
        <h1 className="font-extrabold py-4 text-center text-transparent text-4xl bg-clip-text bg-gradient-to-r from-slate-700 to-pink-600 home-title">Global Cryptocurrencies Statistics</h1>

        <div className="grid xs:grid-cols-1 pl-3  sm:grid-cols-2 md:grid-cols-3 gap-4">

          <div className="flex  justify-center">
            <div className="block text-6xl p-5 w-full  hover:bg-slate-100 hover:transition-all rounded-lg shadow-lg bg-white  ">
              <h1 className="text-gray-900  text-center    leading-tight font-medium mb-2">
                {globalStats.total}
              </h1>
              <p className="text-gray-700 text-center   text-sm mb-4">
                Total Cryptocurrencies
              </p>
              {/* </div> */}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="block text-6xl p-5 w-full  hover:bg-slate-100 hover:transition-all  rounded-lg shadow-lg bg-white  ">
              <h1 className="text-gray-900  text-center leading-tight font-medium mb-2">
                {`$${millify(globalStats.totalMarketCap)}`}
              </h1>
              <p className="text-gray-700 text-center text-sm mb-4">
                Total Market Cap:
              </p>
              {/* </div> */}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="block text-6xl p-5 w-full  hover:bg-slate-100 hover:transition-all   rounded-lg shadow-lg bg-white  ">
              <h1 className="text-gray-900  text-center leading-tight font-medium mb-2">
                {`$${millify(globalStats.total24hVolume)}`}
              </h1>
              <p className="text-gray-700 text-center text-sm mb-4">
                Total  24Hrs Volume
              </p>
              {/* </div> */}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="block text-6xl p-5 w-full  hover:bg-slate-100 hover:transition-all  rounded-lg shadow-lg bg-white  ">
              <h1 className="text-gray-900  text-center leading-tight font-medium mb-2">
                {(globalStats.totalMarkets)}
              </h1>
              <p className="text-gray-700 text-center text-sm mb-4">
                Total Markets
              </p>
              {/* </div> */}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="block text-6xl p-5 w-full  hover:bg-slate-100 hover:transition-all  rounded-lg shadow-lg bg-white  ">
              <h1 className="text-gray-900  text-center  leading-tight font-medium mb-2">
                {millify(globalStats.totalExchanges)}
              </h1>
              <p className="text-gray-700 text-center text-sm  mb-4">
                Total Exchanges
              </p>
              {/* </div> */}
            </div>
          </div>

        </div>

      </div>

      <div>

        <div className="home-heading-container mt-20 ">
          <h1 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-slate-700 to-pink-600 home-title">Top Cryptocurrencies</h1>
          <a className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ">
            <Link to="/cryptocurrencies" className=" text-slate-50 hover:text-slate-400">Show More</Link>
          </a>
        </div>
        <Cryptocurrencies simplified />

        <div className="home-heading-container mt-20 ">
          <h1 className="font-extrabold  text-transparent text-2xl bg-clip-text bg-gradient-to-r from-slate-700 to-pink-600 home-title"> Cryptocurrencies News</h1>
          <a className="bg-pink-500 text-white hover:bg-slate-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ">
            <Link to="/news" className=" text-slate-50 hover:text-slate-400">Show More</Link>
          </a>
        </div>
        <News simplified />
      </div >
    </>
  );
};

export default Homepage;