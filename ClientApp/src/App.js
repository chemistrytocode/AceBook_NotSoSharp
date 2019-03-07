import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home/Home';
import { Post } from './components/Post/Post';
import { FetchData } from './components/FetchData';


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/post' component={Post} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>
    );
  }
}
