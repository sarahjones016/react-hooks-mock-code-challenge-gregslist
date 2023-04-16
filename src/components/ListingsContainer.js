import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingInfo, onDeleteListing, listingSearched}) {

let filteredArrayOfListings = listingInfo.filter((listing) => {
    if (listingSearched === "") return true;
    return listing.description.toLowerCase().includes(listingSearched.toLowerCase());   
  })

const arrayOfListings = filteredArrayOfListings.map((listing) => {
  return (
    <ListingCard 
      listing={listing}
      key={listing.id}
      onDeleteListing={onDeleteListing}
    />
  )
})

  return (
    <main>
      <ul className="cards">
        {arrayOfListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
