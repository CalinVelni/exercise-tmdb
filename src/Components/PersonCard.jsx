export default function
    ({   
        id,
        name,
        popularity,
        profile_path,
        known_for_department,
        known_for, // movies array
    }) {
        
        return (
            
            
            <div key={id} className="card personCard">
            <h3>{name}</h3>
            <figure className="poster personPoster">
                <img src={profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : 'https://loganfuneralchapel.com/wp-content/uploads/2017/01/xgeneric-profile-avatar_352864.jpg.pagespeed.ic.tKiXzscPKc.jpg'}/>
            </figure>
            <p>{known_for_department} | {popularity} daily views</p>
            <p>Known For:</p>
            <section className="personMovies">
                {known_for && known_for.map(movie => {
                    const {id:mId, title, poster_path} = movie;
                    return (
                        <div key={mId} className="miniMovie">
                            <p><strong>{title}</strong></p>
                            <figure>
                                <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'https://templatelab.com/wp-content/uploads/2019/06/movie-poster-template-03.jpg?w=395'}/>
                            </figure>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}