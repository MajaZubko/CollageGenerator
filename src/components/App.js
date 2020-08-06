import React, { useState } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ExportBtns from './ExportBtns';
import ImageList from './ImageList';

const App = () => {
	const [ images, setImages ] = useState([]);

	const onSearchSubmit = async (term) => {
		const response = await unsplash.get('search/photos', {
			params: {
				query: term
			}
		});
		setImages(response.data.results);
	};

	return (
		<div className="wrapper">
			<SearchBar onSubmit={onSearchSubmit} />
			<ExportBtns />
			<ImageList images={images} />
		</div>
	);
};

export default App;
