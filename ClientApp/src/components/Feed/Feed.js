import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import './Feed.css';

export class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = [];
  }

  componentDidMount() {
    fetch("http://localhost:5000/posts")
      .then(response => response.json())
      .then(posts => {
        this.setState({ posts: posts });
      });
  }

  render() {
    // Change to this.state
    const posts = [
      {
        user: "One",
        message: "Hello From One, this is random text to buffer out the message. #Don't do it!",
        timePosted: "Posted First"
      },
      {
        user: "Two",
        message: "Hello From Two, this is random text to buffer out the message. #Don't do it!",
        timePosted: "Posted Second"
      },
      {
        user: "Three",
        message: "Hello From Three, this is random text to buffer out the message. #Don't do it!",
        timePosted: "Posted Third"
      },
      {
        user: "Four",
        message: "Hello From Four, this is random text to buffer out the message. #Don't do it!",
        timePosted: "Posted Fourth"
      },
      {
        user: "Five",
        message: "Hello From Five, this is random text to buffer out the message. #Don't do it!",
        timePosted: "Posted Five"
      },
    ];
    return (
      <div>
        <h1 id="header">Feed</h1>
        {posts.map(eachPost => {
          return (
            <div id="eachPost">
              <div id id="innerPost">
              <h1 id="userFeed">{eachPost.user}</h1>
              <p id="message">{eachPost.message}</p>
              <div>
              <p id="postedAt">Posted at: {eachPost.timePosted}</p>
            <button id="like">Like</button>
                <button id="edit">Edit</button>
            </div>
</div>
</div>
          );
        })}
      </div>
    );
  }
}