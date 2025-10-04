import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("https://news-application-lsrg.onrender.com/api/getnews")
      .then((res) => {
        console.log(res.data);
        setNews(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Request completed");
      });
  }, []);
  

  return (
    <div className="container mt-5">
      <div className="row">
        {news.map((article) => (
          <div className="col-md-3 mb-4" key={article._id}>
            <div className="card h-100 shadow-sm">
              <img
                src={article.img}
                className="card-img-top"
                alt={article.headline || "News"}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{article.headline}</h5>
                <p className="card-text">{article.description}</p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Know More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
