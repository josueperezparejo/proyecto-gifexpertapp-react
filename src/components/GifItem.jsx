
export const GifItem = ({ title, url, indice, category }) => {

  return (

    <>
      <div className="card h-100 bg-light hvr-grow text-center">
        <img loading="lazy" src={url} className="card-img-top img-fluid" style={{ width: 200 }} alt={title} />
        <div className="card-body">
          <p className="card-text text-center text-break word-wrap text-primary-emphasis fw-bold text-capitalize">{category} gifs #{indice}</p>
        </div>
      </div>
    </>
  )
}
