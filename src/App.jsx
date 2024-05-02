import Navbar from "./Navbar";
import News from "./ArticalPage";
import { useState } from "react";
import Article from "./Artical";
import About from "./About";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [searchNewsItem, setSearchNewsItem] = useState([]);
  const [aboutShow, setAboutShow] = useState(false);
  const apiKey = "Your APi Key";

  const handleSearch = () => {
    
    const api = `https://gnews.io/api/v4/search?q=${searchValue}&lang=en&apikey=${apiKey}`;
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSearchNewsItem(data.articles);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="font-serif ">
      <Navbar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setAboutShow={setAboutShow}
        handleSearch={handleSearch}
      />
      <div> {aboutShow && <About />}</div>
      <div className="px-6 mt-16 space-y-8">
        {searchNewsItem.map((newsItem, i) => {
          return <Article key={i} newsItem={newsItem} />;
        })}
      </div>
      <News />
    </div>
  );
}

export default App;
