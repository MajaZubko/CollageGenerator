import React from 'react';
import Masonry from 'react-masonry-css';

import ImageCard from './ImageCard';

const ImageList = (props) => {
	const images = props.images.map((image) => {
		return <ImageCard key={image.id} image={image} />;
	});

	return (
		<Masonry breakpointCols={3} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
			{images}
		</Masonry>
	);
};

export default ImageList;
