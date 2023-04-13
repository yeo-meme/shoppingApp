import React, {useState, useEffect, ReactElement} from 'react';
import { TrendingDummyData } from '../data/TrendingDummyData';
import { API_CLOTHES, API_AVAILABLE_CLOTHES, API_SETTING } from '../../constants/constants'
import {TrendingType} from '../types/DataTypes';

const ClothesContext = React.createContext({});

interface Props {
  children: ReactElement;
}

const ClothesProvider: React.FC<Props> = (props) => {
  //Dummy
  const [trending, setTrending] = useState<TrendingType[]>(TrendingDummyData);
  // const [trendingClothes, setTrendingClothes] = useState<TrendingType[]>([]);
  // const [recentlyViewed, setRecentlyViewed] = useState<TrendingType[]>([]);

  // const fetchClothesList = async () => {
  //   const response = await fetch(API_CLOTHES, API_SETTING)
  //     .then(response => response.json())
  //     .catch(error => {
  //       console.error(error);
  //     });
  //   setTrendingClothes(response);
  // };

  // const fetchAvailClothesList = async () => {
  //   const response = await fetch(API_AVAILABLE_CLOTHES, API_SETTING)
  //     .then(response => response.json())
  //     .catch(error => {
  //       console.error(Error);
  //     });
  //   setRecentlyViewed(response);
  // };

  // useEffect(() => {
  //   fetchClothesList();
  //   fetchAvailClothesList();
  // }, []);

  return (
    <ClothesContext.Provider
      value={{
        // recentlyViewed,
        trending,
        // trendingClothes,
      }}>
       {props.children}
    </ClothesContext.Provider>
  )
}

const ClothesConsumer = ClothesContext.Consumer;
export {ClothesContext, ClothesConsumer, ClothesProvider};
