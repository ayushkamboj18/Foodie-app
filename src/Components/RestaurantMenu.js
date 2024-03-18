import { useParams } from "react-router-dom";

function RestaurantMenu(){

    // reading dynamic url id
    const {id} = useParams();

    return(
        <div>
            <h1>Restaurant menu page {id} </h1>
        </div>
    )
}

export default RestaurantMenu;