/*import React , { createContext, useContext,useEffect,useState } from "react";
import { useWindowDimensions ,Dimensions as dim,Dimensions} from "react-native";

export const DimensionContext= createContext();
export const useDimensionContext= () => useContext(DimensionContext);

export const DimensionContextProvider = ({children}) =>{//contextp
const dimentions = useWindowDimensions();
const initHeight =dim.get('window').height;
const initWidth =dim.get('window').width;

const [windowWidth,setwindowWidth] = useState(initWidth);
const [windowHeight,setwindowHeight] = useState(initHeight);

useEffect(() => {
    setItem();
}, [dimentions]);


const setItem =() =>{
    const {Height,Width}=dimentions;
    setwindowWidth(Width);
    setwindowHeight(Height)
};
    return (
    <DimensionContext.Provider values={{
        windowWidth,
        windowHeight,
    }}>
        {children}
    </DimensionContext.Provider>
);
};*/
import {useWindowDimensions, Dimensions as dim, Dimensions} from 'react-native';
import {useContext, createContext, useState, useEffect} from 'react';

export const DimensionContext = createContext();
export const useDimensionContext = () => useContext(DimensionContext);

export const DimensionContextProvider = ({children}) => {
  const dimensions = useWindowDimensions();
  const initHeight = dim.get('window').height;
  const initWidth = dim.get('window').width;

  const [windowWidth, setWindowWidth] = useState(initWidth);
  const [windowHeight, setWindowHeight] = useState(initHeight);
  const [isPortrait, setIsPortrait] = useState(false)

  const checkIsPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

useEffect(() => {
  setIsPortrait(checkIsPortrait());
   Dimensions.addEventListener('change', () => {});
   setIsPortrait(checkIsPortrait());
},[]);

  useEffect(() => {
    setItem();
  }, [dimensions]);

  const setItem = () => {
    const {height, width} = dimensions;
    setWindowHeight(height);
    setWindowWidth(width);
  };

  return (
    <DimensionContext.Provider
      value={{
        windowHeight,
        windowWidth,
        isPortrait,
      }}>
      {children}
    </DimensionContext.Provider>
  );
};