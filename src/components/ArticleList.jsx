import React from "react";
import Article from "./Article";

function ArticleList({ articles = [] }) { // Default to an empty array
  return (
    <main>
      {articles.map((article) => (
        <Article
          key={article.id} // Make sure to provide a unique key
          title={article.title}
          date={article.date || "January 1, 1970"} // Default date if not provided
          preview={article.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;
