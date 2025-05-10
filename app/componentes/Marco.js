"use client";
import React from "react";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Marco({
  title = "John Smith",
  subtitle = "@johnsmith",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
  imageCardSrc = "https://bulma.io/assets/images/placeholders/1280x960.png",
  imageContentSrc = "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
  datetime = "2016-1-1",
  downloadLink = "/path/to/article.pdf",
}) {
  return (
    <div style={{ margin: "0 10%" }}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <a href={downloadLink} download>
              <img src={imageCardSrc} alt="Card image" />
            </a>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={imageContentSrc} alt="Content image" />
              </figure>
            </div>
            <div className="media-content">
              <a href={downloadLink} download>
                <p className="title is-4 has-text-left">{title}</p>
              </a>
              <p className="subtitle is-6 has-text-left">{subtitle}</p>
            </div>
          </div>

          <div className="content has-text-left">
            {content}
            <br />
            <time dateTime={datetime}>{datetime}</time>
          </div>
        </div>
      </div>
    </div>
  );
}
