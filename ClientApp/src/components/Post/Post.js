import React, { Component } from "react";
import "./Post.css";

export class Post extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.logChange = this.logChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var data = {
      user: this.state.user,
      message: this.state.message,
      timePosted: new Date().toLocaleString()
    };

    console.log(data);
    fetch("http://localhost:5000/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(response => response);
  }

  logChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div id="postWrapper">
        <h1 id="header">Post</h1>
        <div id="postOuterContainer">
          <div id="postInnerContainer">
            <form onSubmit={this.handleSubmit} method="POST">
              <div class="row form">
                <div class="col-md-12">
                  <div class="form-group">
                    <label id="postUser" class="col-form-label">
                      User:
                    </label>
                    <input
                      type="text"
                      class="form-control col-sm"
                      placeholder="Who are you?"
                      name="user"
                      onChange={this.logChange}
                    />
                    <label id="postMessage" class="col-form-label">
                      Message:
                    </label>
                    <textarea
                      class="form-control col"
                      id="messageArea"
                      placeholder="What's on your mind?"
                      rows="6"
                      name="message"
                      onChange={this.logChange}
                    />
                  </div>
                  <input type="submit" value="Post!" class="btn btn-success" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
