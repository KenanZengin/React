import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";
import Masonry from "react-masonry-css";
import "./styles.css";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.items);
  const nextPage = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);
  console.log("data", characters);

  
  useEffect(() => {
    if(status === "idle"){
      
      dispatch(fetchCharacters());
    }
  }, [dispatch, status]); 


  if (status === "failed") {
    return <Error message={error} />;
  }

  return (
    <div>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((character) => (
          <div key={character.char_id}>
             <Link to={`/char/${character.char_id}`}>
            <img
              alt={character.name}
              src={character.img}
              className="character-img"
            />
            <div className="char_name">{character.name}</div>
            </Link>
          </div>
        ))}
        
      </Masonry>

      <div style={{ padding: "20px 0 40px 0", textAlign: "center" }}>
        {status === "loading" && <Loading />}

        
        {hasNextPage && status !== "loading" && (<button onClick={() => dispatch(fetchCharacters(nextPage))}>Load More ({nextPage})</button>)}

        {!hasNextPage && <div>There is nothing to be shown.</div>}    
      </div>
    </div>
  ); 
}

export default Home;
