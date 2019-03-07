import React, { Component } from 'react';
import { Post } from '../../components/Post/Post';
import { Feed } from '../../components/Feed/Feed';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            <Post/>
            <Feed/>
      </div>
    );
  }
}
