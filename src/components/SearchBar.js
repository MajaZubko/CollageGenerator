import React, { useState } from 'react';

const SearchBar = (props) => {
	const [ term, setTerm ] = useState('');

	const onFormSubmit = (event) => {
		event.preventDefault();
		props.onSubmit(term);
	};

	return (
		<div className="search-bar">
			<form onSubmit={onFormSubmit}>
				<div className="field">
					<label>Search for a collage theme</label>
					<input placeholder="clouds" type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
