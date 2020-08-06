import React from 'react';
import * as jsPDF from 'jspdf';

const ExportBtns = () => {
	const doc = new jsPDF();
	const specialElementHandlers = {
		'#editor': (element, renderer) => {
			return true;
		}
	};

	const download = () => {
		doc.fromHTML(document.querySelector('.image-list'), 15, 15, {
			width: 170,
			elementHandlers: specialElementHandlers
		});
		doc.save('sample-file.pdf');
	};

	return (
		<div className="export-btns">
			<button onClick={window.print} id="printBtn" title="Print collage">
				<i className="fas fa-print" />
			</button>
			<button onClick={download} id="printBtn" title="Download collage">
				<i className="fas fa-download" />
			</button>
		</div>
	);
};

export default ExportBtns;
