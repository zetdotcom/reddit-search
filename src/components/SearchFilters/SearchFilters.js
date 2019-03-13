import React, { Component } from 'react';
import Button from '../Button/Button';
import Row from '../Row/Row';
import RowItem from '../Row/RowItem';

import './SearchFilters.scss';

const SearchFilters = props => {
  const {
    searchTerm,
    handleSearchTermChange,
    getReddits,
    limit,
    handleLimitChange,
    limits,
    handleSortByChange,
    sort,
  } = props;

  return (
    <Row>
      <form onSubmit={getReddits}>
        <RowItem>
          <input
            className="search-input"
            value={searchTerm}
            onChange={handleSearchTermChange}
            placeholder="search redit..."
          />
        </RowItem>
        <RowItem>
          <div className="search-filters__title">Show items:</div>
          <select value={limit} onChange={handleLimitChange}>
            {limits.map((item, i) => (
              <option value={item} key={i}>
                {item}
              </option>
            ))}
          </select>
        </RowItem>
        <RowItem>
          <div>Sort by: </div>
          <button
            data-sortby="relevance"
            onClick={handleSortByChange}
            className={`choose-button ${sort === 'relevance' ? 'choose-button--active' : ''}`}>
            Relevance
          </button>
          <button
            data-sortby="latest"
            onClick={handleSortByChange}
            className={`choose-button ${sort === 'latest' ? 'choose-button--active' : ''}`}>
            Latest
          </button>
        </RowItem>
        <RowItem>
          <Button onClick={getReddits} style={{ width: '100%' }} className="search-button">
            GET
          </Button>
        </RowItem>
      </form>
    </Row>
  );
};

export default SearchFilters;
