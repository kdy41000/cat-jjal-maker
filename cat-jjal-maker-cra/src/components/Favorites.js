import CatItem from "./CatItem";

const Favorites = ({favorites}) => {
    //조건부 렌더링
    if(favorites.length === 0) {
      return (
        <div>
          사진 위 고양이 하트를 눌러 고양이 사진을 저장해보아요.
        </div>
      );
    }
    return (
      //인라인 스타일링
      <ul className="favorites">
        {favorites.map((cat, index) => (
          <CatItem img={cat} key={index} />
          )
        )}
      </ul>
    );
  }

  export default Favorites;