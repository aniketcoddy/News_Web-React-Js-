import React, { useEffect, useState } from "react";

import NewsItem from "./NewsItem";
import NewsItems1 from "./NewsItems1";
import PropTypes from 'prop-types'


export default function News(props) {
   
  const [article, setArticle] = useState([]);
  // const [loading, setLoading] = useState(false);

  const updateNews = async()=>{
    const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4e6c00c121b34c53a7a6bc2f419570cf`;
 
    let data = await fetch(url);
    console.log(data)
    let parsedData = await data.json()
    setArticle(parsedData.articles==undefined?[]:parsedData.articles)
   
    }
    
    useEffect(()=>{
      updateNews();
    },[]);

    if(article.length!==0){
  return( 

   

    <div>
    
      <NewsItem
              urlToImage={article[0].urlToImage}
              title={article[0].title?article[0].title.slice(0,68):""}
              description={article[0].description?article[0].description.slice(0,208):""}
              publishedAt={article[0].publishedAt}
              source={article[0].source.name}
            />
        

      <div className="flex flex-row flex-wrap w-[1107px]">
        {article.map((element, index) => (
           index!==0 &&
            <NewsItems1
              key={index}
              urlToImage={element.urlToImage}
              title={element.title?element.title.slice(0,35):""}
              description={element.description?element.description.slice(0,71):"Click to read the full story(No description Available)"}
              publishedAt={element.publishedAt}
              source={element.source.name?element.source.name.slice(0,18):"Unknown"}
            />
         
        ))}
      </div>
        
    </div>
        
  );
        }
}

