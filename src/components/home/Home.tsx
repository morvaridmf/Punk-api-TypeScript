import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Pagination from '../pagination/Pagination';
import { useGlobalContext } from '../../context/Context';
import { IBeers } from '../../types/Tyepes';
import "./home.scss"


function Home() {
    const loading = useGlobalContext().loading
    const currentBeers: IBeers[] = useGlobalContext().currentBeers
    const [search, setSearch] = useState("")


    return (
        <div className='container'>
            <nav className='navbar'>
                <h2>Home</h2>
            </nav>
            <div className='top'>
                <h1>Beer Selection</h1>
                <div className='top-form'>
                    <input type="text"
                        placeholder='Find your favourite beer!'
                        value={search}
                        onChange={e => setSearch(e.target.value)} />
                </div>
            </div>
            <div className='middle'>

                {loading ? (<h1>Loading....</h1>) : (
                    <div className='section'>

                        {currentBeers.length > 0 && currentBeers.filter(beer => beer.name.toLowerCase().includes(search)).map(beer => (
                            <Link to={`/detail/${beer.id}`}>
                                <div key={beer.id} className="card">
                                    <div className='card-text'>
                                        <h4>{beer.name}</h4>
                                        <p>{beer.tagline}</p>
                                        <p>ABV: {beer.abv}</p>
                                    </div>
                                    <div className='card-image'>
                                        <img src={beer.image_url} />
                                    </div>

                                </div>
                            </Link>
                        ))
                        }
                    </div>
                )}
            </div>

            <div className='bottom'>
                <Pagination />
            </div>

        </div>
    )
}

export default Home