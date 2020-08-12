import React from 'react';

const ImageCard = (props) => {
	const { description, urls } = props.image;
	return (
		<div className="grid-item">
			<img alt={description} src={urls.regular} />
		</div>
	);
};

export default ImageCard;
