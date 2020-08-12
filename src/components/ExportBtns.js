import React from 'react';

const ExportBtns = () => {
	return (
		<div className="export-btns">
			<button onClick={window.print} id="printBtn" title="Print collage">
				<i className="fas fa-print" />
			</button>
			<button id="printBtn" title="Download collage">
				<i className="fas fa-download" />
			</button>
		</div>
	);
};

export default ExportBtns;
