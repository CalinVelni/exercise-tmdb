export default function
    ({   
        id,
        name, 
        overview, 
        poster_path, 
        vote_average,
        first_air_date,
        origin_country, 
        
    }) {

    return (

        <div key={id} className="card">
            <h3>{name} {first_air_date && <span>({first_air_date.substr(0, 4)})</span>}</h3>
            <figure className="poster">
                <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'https://templatelab.com/wp-content/uploads/2019/06/movie-poster-template-03.jpg?w=395'}/>
            </figure>
            <ul>
                <li className="rating"><span>Rating: </span>{vote_average === 0 ? 'none' : vote_average}</li>
                <li className="country"><span>Country: </span>{origin_country}</li>
                <li className="desc">{overview}</li>
            </ul>
        </div>
    )
}