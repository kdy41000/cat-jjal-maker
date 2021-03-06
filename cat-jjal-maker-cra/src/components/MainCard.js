const MainCard = ({img, alt, onHeartClick, alreadyFavorite}) => {
    const heartIcon = alreadyFavorite ? "π" : "π€";
  
    return(
      //λ¦¬μ‘νΈμμ ν΄λμ€λͺμ "class"κ° μλκ³  "className"μΌλ‘ μ¬μ©ν΄μΌ ν¨
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