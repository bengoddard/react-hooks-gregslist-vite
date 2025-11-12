// import ListingCard from "./ListingCard";

import ListingCard from "./ListingCard";

function ListingsContainer({ listings, updateListing }) {
  return (
    <main>
      <ul className="cards">
        {listings.map(listing => <ListingCard
          key={listing.id}
          {...listing}
          updateListing={updateListing}
        />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
