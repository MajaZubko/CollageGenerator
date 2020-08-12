import React, { useState } from 'react';

const Filters = (props) => {
	const [ open, setOpen ] = useState(false);
	const [ perPage, setPerPage ] = useState(9);
	const [ orientation, setOrientation ] = useState('portrait');
	const [ page, setPage ] = useState(1);

	const openFilters = () => {
		setOpen(!open);
	};

	const onFormSubmit = (event) => {
		event.preventDefault();
		props.onSubmit(perPage, orientation, page);
	};

	const hideOrShow = open ? 'dropdowns' : 'dropdowns hidden';

	return (
		<div className="filters">
			<button onClick={openFilters}>Filters</button>
			<div className={hideOrShow}>
				<form onSubmit={onFormSubmit}>
					Now I'm open
					<div>{/* dropdown: + do wpisania */}</div>
					<div>{/* dropdown portrait, landscape, squarish, mixed */}</div>
					<div>{/* next batch jako przycisk refresh, zmienia stronę wyszukiwania  */}</div>
					<button type="submit">Apply</button>
				</form>
			</div>
		</div>
	);
};

export default Filters;
