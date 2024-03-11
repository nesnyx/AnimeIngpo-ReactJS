import React from "react";
import { useEffect, useState } from "react";
import './App.css'
import AnimeCard from "./AnimeCard";
// const API_KEY = "716e3087"
// const API_URL = 'http://www.omdbapi.com?apikey=716e3087'
const ANIME_URL = "https://api.jikan.moe/v4/anime"
const App = ()=>{

    const [animes, setAnimes] = useState([])
    const [searchTerm , setSearchTerm] = useState('');
    const getAnime = async ()=>{
        const response = await fetch(`${ANIME_URL}`)
        const data = await response.json()
        return data
    }
    const searchAnime = async (q) => {
        const response = await fetch(`${ANIME_URL}?q=${q}&limit=15&page=1`)
        const data = await response.json()
        setAnimes(data['data'])
        console.log(animes)
    }

    useEffect(()=> {
        searchAnime('Shokugeki')
    }, [])
    
    return (
        <div className="app">
            
            
            <h1>Anime ingpo</h1>
            
            <div className="search">
                <input type="text" placeholder="Search Anime" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
                <button type="button" onClick={()=> searchAnime(searchTerm)}>Search</button>
            </div>
            <div>
                <p style={{color:"white", backgroundColor:"red"}}>Warning! Still Develop by Aris Bara</p>
                
            </div>
            {
                animes?.length > 0 ? (
                <div className="container">
                    {animes.map((anime)=> (
                        <AnimeCard animes={anime}/>
                    ))}
                </div>
                ) : (
                    <div className="empty">
                        <h2>No Anime Found!</h2>
                    </div>
                )
            }
            
            
        </div>
    )
}

export default App;