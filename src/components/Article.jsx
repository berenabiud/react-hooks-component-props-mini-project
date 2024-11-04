import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutesToRead }) {
  const renderMinutesToRead = () => {
    if (minutesToRead < 30) {
      return "☕️".repeat(Math.ceil(minutesToRead / 5));
    } else {
      return "🍱".repeat(Math.ceil(minutesToRead / 10));
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{renderMinutesToRead()} {minutesToRead} min read</p>
    </article>
  );
}

export default Article;
