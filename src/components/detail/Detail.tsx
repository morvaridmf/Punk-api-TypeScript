import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/Context";
import "./detail.scss"
import { AiOutlineRollback } from 'react-icons/ai';
import { IBeers } from "../../types/Tyepes";




function Details() {
    const beers: IBeers[] = useGlobalContext().beers
    const id: any = useParams().id;
    const selectedBeer: any = beers.find(beer => beer.id == id)
    // console.log(selectedBeer)

    return (
        <div className="detail">
            <nav className="detail-nav">
                <Link to={"/"}>
                    <AiOutlineRollback size="35" />
                </Link>
            </nav>
            <div className="detail-card">
                <h3> <span>Name: </span>{selectedBeer.name}</h3>
                <p> <span>Brewers_tips: </span>{selectedBeer.brewers_tips}</p>
                <p> <span>Contributed_by: </span>{selectedBeer.contributed_by}</p>
                <p> <span>Description: </span>{selectedBeer.description}</p>
                <p> <span>First_brewed: </span>{selectedBeer.first_brewed}</p>
                <p> <span>Volume: </span>{selectedBeer.boil_volume.value} {selectedBeer.boil_volume.unit}</p>
                <p> <span>brewers_tips: </span>{selectedBeer.brewers_tips}</p>
                <p> <span>ph: </span>{selectedBeer.ph}</p>
                <p> <span>contributed_by: </span>{selectedBeer.contributed_by} </p>

            </div>


        </div>
    )
}

export default Details