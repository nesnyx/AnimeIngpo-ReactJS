import React from "react";

const AnimeCard = ({animes})=>{
    return(
        <div className="movie">
                    <div>
                        <p>{animes.year}</p>
                    </div>

                    <div>
                        <a href={animes.url} target="_blank"><img src={animes.images.webp.large_image_url} alt="" /></a>
                    </div>
                    <div>
                        <span>{animes.title}</span> <br />
                        <span>{animes.title_japanese}</span>
                        
                    </div>
        </div>
    )
}

export default AnimeCard;