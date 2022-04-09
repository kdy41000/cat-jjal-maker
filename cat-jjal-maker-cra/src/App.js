import logo from './logo.svg';
import './App.css';
import React from 'react';
import H1Tag from './components/H1Tag';
import FormTag from './components/FormTag';
import MainCard from './components/MainCard';
import Favorites from './components/Favorites';

const jsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
};

const fetchCat = async (text) => {
  const OPEN_API_DOMAIN = "https://cataas.com";
  const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
  const responseJson = await response.json();
  return `${OPEN_API_DOMAIN}/${responseJson.url}`;
};


const App = () => {
  const CAT1 = "https://cataas.com/cat/60b73094e04e18001194a309/says/react";
  const CAT2 = "https://cataas.com//cat/5e9970351b7a400011744233/says/inflearn";
  const CAT3 = "https://cataas.com/cat/595f280b557291a9750ebf65/says/JavaScript";

  const [counter, setCounter] = React.useState(() => {
    return Number(jsonLocalStorage.getItem("counter"));
  });
  const [defalutImg, setDefaultImg] = React.useState(CAT1);
  const [favorites, setFavorites] = React.useState(() => {
    return jsonLocalStorage.getItem("favorites") || [];   //undefined일 경우 OR연산자(||)로 빈배열로 초기값 설정(오류방지)
  });
  const alreadyFavorite = favorites.includes(defalutImg);

  async function setInitialCat() {
    const newCat = await fetchCat("First Cat");
    console.log(newCat);
    setDefaultImg(newCat);
  }
  
  //렌더링 될때마다 실행됨 (빈 배열은 조건없이 무조건 실행, 배열안 state이어주면 해당 state값이 변경될 때만 실행)
  React.useEffect(() => {
   setInitialCat();
  }, []);

  //함수 안에서 "await"사용시 function앞에 "async" 사용해야함
  async function updateMainCat(value) {
    const newCat = await fetchCat(value);

    setDefaultImg(newCat);
    
    setCounter((prev) => {
      const nextCounter = prev + 1;
      jsonLocalStorage.setItem("counter",nextCounter);
      return nextCounter;
    });
  }

  function handleHeartClick() {
    const nextFavorites = [...favorites, defalutImg];
    setFavorites(nextFavorites); 
    jsonLocalStorage.setItem("favorites", nextFavorites); 
  }

  return (
    <div>
      <H1Tag>{(counter == null || counter === 0) ? "고양이 가라사대"  : `${counter} 번째 고양이 가라사대`}</H1Tag>
      <FormTag updateMainCat={updateMainCat}/>
      <MainCard img={defalutImg} text="고양이" onHeartClick={handleHeartClick} alreadyFavorite={alreadyFavorite} />
      <Favorites favorites={favorites} />
    </div>
    );
 };

export default App;
