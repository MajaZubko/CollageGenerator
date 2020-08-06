import React, { useState, useEffect } from 'react';

const ImageCard = (props) => {
	const [ spans, setSpans ] = useState(0);
	const imageRef = React.createRef();

	useEffect(
		() => {
			const setSpansNum = () => {
				const height = imageRef.current.clientHeight;
				const spansNum = Math.ceil(height);
				setSpans(spansNum);
			};

			imageRef.current.addEventListener('load', setSpansNum);
		},
		[ imageRef ]
	);

	const { description, urls } = props.image;
	return (
		<div style={{ gridRowEnd: `span ${spans}` }}>
			<img ref={imageRef} alt={description} src={urls.regular} />
		</div>
	);
};

export default ImageCard;
