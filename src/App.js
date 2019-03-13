import React, { Component, Suspense } from 'react';
import Header from './components/Header/Header';
import SearchFilters from './components/SearchFilters/SearchFilters';
import * as redditApi from './api/redditApi';

import './App.scss';

const RedditsList = React.lazy(() => import('./components/RedditsList/RedditsList'));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      jokes: [],
      searchTerm: 'Scotland',
      selectedCategory: null,
      sortBy: 'relevance',
      limit: 20,
      data: [],
    };

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.handleLimitChange = this.handleLimitChange.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.getReddits = this.getReddits.bind(this);
  }

  async componentDidMount() {
    this.getReddits();
    // console.log('state', this.state.data)
  }

  async getReddits(e) {
    e && e.preventDefault();
    const { searchTerm, limit, sortBy } = this.state;
    console.log(searchTerm, limit, sortBy);
    const data = await redditApi.getReddits(searchTerm, limit, sortBy);
    this.setState({ data });
  }

  handleSearchTermChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  handleSortByChange(event) {
    console.log(event.target.dataset.sortby);
    this.setState({ sortBy: event.target.dataset.sortby });
  }

  handleLimitChange(event) {
    this.setState({ limit: event.target.value });
  }

  render() {
    const limits = [ 10, 20, 30, 50 ];
    const { searchTerm, data, limit, sortBy } = this.state;
    console.log('data from render', data);
    return (
      <div className="App">
        <Header />
        <SearchFilters
          searchTerm={searchTerm}
          handleSearchTermChange={this.handleSearchTermChange}
          getReddits={this.getReddits}
          limit={limit}
          handleLimitChange={this.handleLimitChange}
          limits={limits}
          handleSortByChange={this.handleSortByChange}
          sort={sortBy}
        />
        <Suspense fallback={<div>Loading ...</div>}>
          <RedditsList data={data} />
        </Suspense>
      </div>
    );
  }
}

export default App;
