import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
	const [ open, setOpen ] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const onBodyClick = (event) => {
			if (ref.current.contains(event.target)) {
				return;
			}
			setOpen(false);
		};

		document.body.addEventListener('click', onBodyClick);

		return () => {
			document.body.removeEventListener('click', onBodyClick);
		};
	}, []);

	const renderedOptions = options.map((option) => {
		if (option.value === selected.value) {
			return null;
		}

		return (
			<div key={option.value} className="item" onClick={() => onSelectedChange(option)}>
				{option.label}
			</div>
		);
	});

	return (
		<div className="dropdown-all" ref={ref}>
			<label className="label">{label}</label>
			<div onClick={() => setOpen(!open)} className={`dropdown-bar`}>
				<div className="text">{selected.label}</div>
				<i className="fas fa-caret-down" />
				<div className={`menu ${open ? '' : 'hidden'}`}>{renderedOptions}</div>
			</div>
		</div>
	);
};

export default Dropdown;
