import React from "react";

function Article({ title, date, preview, minutes }) {
  let minutesToRead = 0;

  if (minutes) {
    if (minutes < 30) {
      minutesToRead = Math.ceil(minutes / 5);
    } else {
      minutesToRead = Math.ceil(minutes / 10);
    }
  }
  const emojis = minutes < 30 ? "☕️" : "🍱";

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date ? date : "January 1, 1970"}.
        {emojis.repeat(minutesToRead)} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
