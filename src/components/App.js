import React, { useState } from 'react';

import unsplash from '../api/unsplash';
import SearchArea from './SearchArea';
import ExportBtns from './ExportBtns';
import ImageList from './ImageList';

const App = () => {
	const [ images, setImages ] = useState([]);

	const onSearchSubmit = async (term, per_page = 9, orientation = 'portrait', page = 1) => {
		const response = await unsplash.get('search/photos', {
			params: {
				query: term,
				per_page,
				orientation,
				page
			}
		});
		setImages(response.data.results);
	};

	return (
		<React.Fragment>
			<div className="wrapper">
				<SearchArea onSubmit={onSearchSubmit} />
				<ExportBtns />
				<ImageList images={images} />
			</div>
		</React.Fragment>
	);
};

export default App;
