import React, { useState } from 'react';
import Filters from './Filters';
import SearchBar from './SearchBar';

const SearchArea = (props) => {
	const [ searchTerm, setSearchTerm ] = useState('');
	const [ searchPerPage, setSearchPerPage ] = useState(9);
	const [ searchOrientation, setSearchOrientation ] = useState('portrait');
	const [ searchPage, setSearchPage ] = useState(1);

	const catchTerm = (term) => {
		setSearchTerm(term);
		props.onSubmit(term, searchPerPage, searchOrientation, searchPage);
	};

	const catchFilters = (perPage, orientation, page) => {
		setSearchPerPage(perPage);
		setSearchOrientation(orientation);
		setSearchPage(page);
		props.onSubmit(searchTerm, perPage, orientation, page);
	};

	return (
		<div className="search-area">
			<SearchBar catchTerm={catchTerm} />
			<Filters catchFilters={catchFilters} />
		</div>
	);
};

export default SearchArea;
