import React, { useState } from 'react';
import moment from 'moment';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import Loader from './Loader';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ simplified }) => {
  const [newsCategory] = useState('Cryptocurrency');
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });

  if (!cryptoNews?.value) return <Loader />;

  return (

    <div className="px-8 grid grid-cols-1 sm:grid-cols-1 mt-9  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
      {cryptoNews.value.map((news, i) => (

        <a href={news.url} target="_blank" rel="noreferrer">

          <div className="rounded overflow-hidden shadow-xl hover:bg-slate-200 text-white  rounded-t-xl rounded-b-xl ">
            <img className=" w-full" src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" />

            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs uppercase font-semibold justify-center text-gray-900 mb-2">{news.provider[0]?.name}</span>
              <h1 className=" font-bold text-gray-900 text-xl mb-2">{news.name.length > 35 ? `${news.name.substring(0, 35)}...` : news.name} </h1>
              <p className="text-gray-500 text-base">
                {news.description.length > 80 ? `${news.description.substring(0, 80)}...` : news.description}
              </p>
            </div>

            <div className="px-6 pt-4 pb-2 flex justify-center content-center ">
              <span className="inline-block  bg-gray-500 text-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mb-2">{moment(news.datePublished).startOf('ss').fromNow()}</span>
            </div>

          </div>
        </a>
      ))}
    </div>


  );
};

export default News;

