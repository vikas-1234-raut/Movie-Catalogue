import React, {useState} from 'react'
import backgroundimg from './../images/Feature4.png';
import Navbar from './Navbar';
import Footer from './../footer';


const SearchBar = () => {

 const [searchInput, setSearchInput] = useState("");

 const countries = [

  { name: "Belgium", continent: "Europe" },
  { name: "India", continent: "Asia" },
  { name: "Bolivia", continent: "South America" },
  { name: "Ghana", continent: "Africa" },
  { name: "Japan", continent: "Asia" },
  { name: "Canada", continent: "North America" },
  { name: "New Zealand", continent: "Australasia" },
  { name: "Pakistan", continent:"Asia" },

];

const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

if (searchInput.length > 0) {
    countries.filter((country) => {
    return country.name.match(searchInput);
});
}

return (
<>
  <Navbar/>
<div className="bg-img-container" style={{
  backgroundImage:`linear-gradient(rgba(0,0,0,0), #151515),url(${backgroundimg})`,
  // backgroundPosition: 'center',
  // backgroundSize: 'cover',
  // backgroundRepeat: 'no-repeat'
  }}>
  
<div className='searchbar-container'>
  

<input className='search-box'
   type="search"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} />
<button className="search-button">SEARCH</button>   

{/* <table>
  <tr>
  <th>Country</th>
  <th>Continent</th>
</tr> */}

{/* {countries.map((country, *index*) => {
  
  <div>
  <tr>
  <td>{country.name}</td>
  <td>{country.continent}</td>
  </tr>
  </div>
  
})} */}
{/* </table> */}

</div>
</div>
<Footer/>
</>
)


};

export default SearchBar;