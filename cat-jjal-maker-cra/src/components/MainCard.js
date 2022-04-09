const MainCard = ({img, alt, onHeartClick, alreadyFavorite}) => {
    const heartIcon = alreadyFavorite ? "💖" : "🤍";
  
    return(
      //리액트에서 클래스명은 "class"가 아니고 "className"으로 사용해야 함
      <div className="main-card">
        <img
          src={img}
          alt={alt}
          width="400"
        />
        <button onClick={onHeartClick}>{heartIcon}</button>
      </div>
    );
  }

  export default MainCard;