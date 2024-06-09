import React, { useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";
import Newsitem from "./Newsitem";
import Loader from "./Loader";

const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the news articles:", error);
        setLoading(false);
      });
  }, [category]);

  return (
    <>
      <h2>
        {loading ? (
          <Loader />
        ) : (
          <>
            Latest <Badge bg="danger">News</Badge>
          </>
        )}
      </h2>

      <div>
        {articles.map((news, index) => (
          <Newsitem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </>
  );
};

export default Newsboard;
