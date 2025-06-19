import { useState } from "react"
import { useEffect } from "react"
import service from "../services/service.config"
import FavoriteCard from "../components/FavoriteCard"

function FavoritePage() {

const [allFavorites, setAllFavorites] = useState(null)
  
useEffect(()=> {
getFavorites()

  }, [])

  const getFavorites = async () => {
    try {
      const favorites = await service.get(`user/favorite`)
      console.log(favorites.data.favorites)
      setAllFavorites(favorites.data.favorites) // almacenamos la data en setAllFavorites
    } catch (error) {
      console.log(error)
    }
  }

       if (allFavorites === null) {
    return <p>Loading your data... ⏳</p>;
  }

  return (
  
<div>
    
<div className="favorite-main">
  <div className="title-favorite">
      <h2>My Favorites ❤️</h2> 
        </div>
          {allFavorites.length === 0 ? (
        <p>You don’t have any favorite tournaments saved yet 🎾</p>
      ) : (
     allFavorites.map((eachFavorite) => (
         <FavoriteCard key={eachFavorite._id} eachFavorite={eachFavorite}/>
        )))} 
        </div>
        </div>
  )
}

export default FavoritePage