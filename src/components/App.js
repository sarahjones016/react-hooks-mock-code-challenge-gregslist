import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

const [listingInfo, setListingInfo] = useState([]) 
const [listingSearched, setListingSearched] = useState("")

useEffect(() => {
  fetch("http://localhost:6001/listings")
  .then((res) => res.json())
  .then((data) => {
    setListingInfo(data)
  })
}, [])

function handleDeleteListing(deletedListing) {
  const updatedArrayOfListings = listingInfo.filter((listing) => listing.id !== deletedListing.id);
  setListingInfo(updatedArrayOfListings);
}

function handleSearch(newSearch) {
  setListingSearched(newSearch)
}
  
  return (
    <div className="app">
      <Header onSearch={handleSearch}/>
      <ListingsContainer listingInfo={listingInfo} listingSearched={listingSearched} onDeleteListing={handleDeleteListing} />
    </div>
  );
}

export default App;
