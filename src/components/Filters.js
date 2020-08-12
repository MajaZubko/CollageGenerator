import React, { useState } from 'react';
import Dropdown from './Dropdown';

const Filters = (props) => {
	const [ open, setOpen ] = useState(false);
	const [ page, setPage ] = useState(1);

	const perPageOptions = [
		{
			label: '6',
			value: 6
		},
		{
			label: '9',
			value: 9
		},
		{
			label: '12',
			value: 12
		},
		{
			label: '15',
			value: 15
		}
	];

	const orientationOptions = [
		{
			label: 'portrait',
			value: 'portrait'
		},
		{
			label: 'landscape',
			value: 'landscape'
		},
		{
			label: 'squarish',
			value: 'squarish'
		},
		{
			label: 'all',
			value: ''
		}
	];

	const [ perPageSelected, setPerPageSelected ] = useState(perPageOptions[1]);
	const [ orientationSelected, setOrientationSelected ] = useState(orientationOptions[0]);

	const onFormSubmit = (event) => {
		event.preventDefault();
		props.catchFilters(perPageSelected.value, orientationSelected.value, page);
	};

	const fetchNextBatch = () => {
		setPage(page + 1);
	};

	return (
		<div className="filters-all">
			<button onClick={() => setOpen(!open)}>
				<i className="fas fa-sliders-h" />
				Filters
			</button>
			<div className={`filters-form ${open ? '' : 'hidden'}`}>
				<form onSubmit={onFormSubmit}>
					<Dropdown
						label="Quantity per collage"
						options={perPageOptions}
						selected={perPageSelected}
						onSelectedChange={setPerPageSelected}
					/>
					<Dropdown
						label="Photos orientation"
						options={orientationOptions}
						selected={orientationSelected}
						onSelectedChange={setOrientationSelected}
					/>
					<button onClick={fetchNextBatch} className="fetch-btn">
						<i className="fas fa-sync-alt" /> Fetch next batch
					</button>
					<button className="submit-btn" type="submit">
						<i className="fas fa-check" />
						Apply
					</button>
				</form>
			</div>
		</div>
	);
};

export default Filters;
