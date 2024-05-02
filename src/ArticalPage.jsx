import { useEffect, useState } from "react";
import { GrShare } from "react-icons/gr";
import Loading from "./Loading";

function News() {
  const apiKey = "Your APi Key";

  const maxResults = 10;
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    chrome.history.search({ text: "", maxResults }, function (data) {
      const queries = data.map((element) => element.title.slice(0, -16));
      console.log(queries);
      queries.forEach((query) => {
        const apiUrl = new URL(
          `https://gnews.io/api/v4/search?q=${query}&lang=en&apikey=${apiKey}`
        );
        fetch(apiUrl)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            const articlesa = data.articles;
            console.log("art", articlesa);
            const newsItems = articlesa.map((article) => (
              ////start

              <div
                key={article.source.name}
                className="overflow-hidden bg-gray-200 border-2 border-black rounded-lg shadow-lg"
              >
                <div className="flex flex-col justify-between px-6 py-3 bg-gray-300 sm:px-16 sm:flex-row">
                  <p className="mb-2 text-xl font-bold text-gray-700 sm:mb-0">
                    {article.source.name}
                  </p>
                  <p className="text-base text-gray-700">
                    {article.publishedAt}
                  </p>
                </div>
                <div className="flex flex-col mx-auto sm:flex-row">
                  <img
                    className={`w-full h-52  object-cover object-center sm:w-1/3 sm:h-auto`}
                    src={article.image}
                    alt="Pixel Fold Image"
                  />
                  <div className="absolute flex items-center justify-center px-2 space-x-2 bg-white hover:underline">
                    <a target="_blank" rel="noreferrer" href={article.url}>
                      Read More
                    </a>
                    <span>
                      <GrShare />
                    </span>
                  </div>

                  <div className="flex flex-col w-full sm:w-2/3">
                    <div className="flex flex-col justify-between h-full px-6 py-4">
                      <div>
                        <a target="_blank" rel="noreferrer" href={article.url}>
                          <h2 className="mb-2 text-xl font-bold sm:mb-4 hover:underline">
                            {article.title}
                          </h2>
                        </a>
                        <p className="mb-4 overflow-hidden text-base leading-6 text-gray-700">
                          {article.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ));
            setNewsItems((prevNewsItems) => [...prevNewsItems, ...newsItems]);
          })
          .catch((error) => console.log(error))
          .finally(() => setLoading(false));
      });
    });
  }, []);
  console.log("length", newsItems.length);
  return (
    <div className="px-6 mt-16 space-y-8 ">
      {loading ? <Loading /> : newsItems.map((newsItem) => newsItem)}
    </div>
  );
}

export default News;

// https://gnews.io/api/v4/search?q=mobile&lang=en&apikey=ApIKEY

// signup in gnews.io and get your API key
