import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({name, cuisines, lastMileTravelString, cloudinaryImageId, sla}) => {
    return (
      <div className="card"> 
        <img src={IMG_CDN_URL+ cloudinaryImageId} />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{sla?.lastMileTravelString ?? '2.0 Km'} minutes</h4>
  
      </div>
    )
  }

export default RestaurantCard;