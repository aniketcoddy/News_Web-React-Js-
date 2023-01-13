import React, { useEffect, useState } from "react";

import NewsItem from "./NewsItem";
import NewsItems1 from "./NewsItems1";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalresults] = useState(0);

  const updateNews = async () => {
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4e6c00c121b34c53a7a6bc2f419570cf&page=${props.page}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    setLoading(true);
    let parsedData = await data.json();
    setArticle(parsedData.articles == undefined ? [] : parsedData.articles);
    setTotalresults(parsedData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    updateNews();
    setLoading(true);
  }, []);

  let fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4e6c00c121b34c53a7a6bc2f419570cf&page=${props.page}&pageSize=${props.pageSize}`;

    setPage(page + 1);

    let data = await fetch(url);
    console.log(data);
    let parsedData = await data.json();

    setArticle(article.concat(parsedData.articles));
    setTotalresults(parsedData.totalResults);
  };

  if (article.length !== 0) {
    return (
      <div className="flex w-[1519px] h-fit bg-[#F4F9F8] ">
        {loading && <Spinner />}
        <NewsItem
          urlToImage={article[0].urlToImage}
          title={article[0].title ? article[0].title.slice(0, 68) : ""}
          description={
            article[0].description ? article[0].description.slice(0, 190) : ""
          }
          publishedAt={article[0].publishedAt}
          source={
            article[0].source.name ? article[0].source.name.slice(0, 8) : ""
          }
        />
        

        <div className="flex flex-row flex-wrap w-[1107px]">
          <InfiniteScroll
            dataLength={article.length}
            next={fetchMoreData}
            hasMore={article.length !== totalResults}
            loader={<Spinner />}
          >
            <div className="flex flex-wrap overflow-hidden">
              {article.map(
                (element, index) =>
                  index !== 0 && (
                    <NewsItems1
                      key={index}
                      urlToImage={element.urlToImage}
                      title={element.title ? element.title.slice(0, 30) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 70)
                          : "Click to read the full story(No description Available)"
                      }
                      publishedAt={element.publishedAt}
                      source={
                        element.source.name
                          ? element.source.name.slice(0, 18)
                          : "Unknown"
                      }
                    />
                  )
              )}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}
