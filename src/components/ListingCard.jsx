function ListingCard({ id, description, image, location, favorite, updateListing }) {

  const handleFavorite = () => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({favorite: !favorite})
    })
      .then(r => {
        if(!r.ok) {throw new Error("failed to favorite listing")}
        return r.json()
      })
      .then(updateListing)
      .catch(error => console.log(error.message))
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={handleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
