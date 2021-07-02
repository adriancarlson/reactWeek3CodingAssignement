import React from 'react';

function Ship({ ship, onDelete, onEdit }) {
	return (
		<div className='row py-3'>
			<div href='#' className='list-group-item list-group-item-action'>
				<div className='d-flex w-100 justify-content-between'>
					<h5 className='mb-1'>{ship.title}</h5>
					<small>{ship.name}</small>
				</div>
				<p className='mb-1'>Pilot: {ship.pilot}</p>
				<small>{ship.faction}</small>
				<button className='btn btn-danger btn-sm float-end m-1' onClick={() => onDelete(ship)}>
					Delete
				</button>
				<button className='btn btn-primary btn-sm float-end m-1' onClick={() => onEdit(ship)}>
					Edit
				</button>
			</div>
		</div>
	);
}

export default function ShipList({ ships, onDelete, onEdit }) {
	const shipElements = ships.map((ship) => <Ship key={ship.id} ship={ship} onDelete={onDelete} onEdit={onEdit} />);
	const emptyElement = <p>No Ships to Display. :-(</p>;

	return <div class='container list-group'>{shipElements ? shipElements : emptyElement}</div>;
}
