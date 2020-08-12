import React, { useState } from 'react';
import Filters from './Filters';
import SearchBar from './SearchBar';

const SearchArea = (props) => {
	const onFiltersSubmit = (term, perPage, orientation, page) => {
		props.onSubmit(term, perPage, orientation, page);
	};

	return (
		<div className="search-area">
			<SearchBar onSubmit={props.onSubmit} />
			<Filters onSubmit={onFiltersSubmit} />
		</div>
	);
};

export default SearchArea;
