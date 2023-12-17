export default function
    ({   
        id,
        title, 
        overview, 
        poster_path, 
        vote_average,
        release_date, 
        original_language,

    }) {

    return (

        <div key={id} className="card">
            <h3>{title} {release_date && <span>({release_date.substr(0, 4)})</span>}</h3>
            <figure className="poster">
                <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'https://templatelab.com/wp-content/uploads/2019/06/movie-poster-template-03.jpg?w=395'}/>
            </figure>
            <ul>
                <li className="rating">Rating: {vote_average === 0 ? 'none' : vote_average}</li>
                <li className="country">Language: {original_language && original_language.toUpperCase()}</li>
                <li className="desc">{overview}</li>
            </ul>
        </div>
    )
}