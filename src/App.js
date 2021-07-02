import React, { useEffect, useState } from 'react';
import ShipList from './components/ShipList';
import ShipFormModal from './components/ShipFormModal';
import { getShips, createShip, updateShip, deleteShip } from './services/ShipService';

let tempID;

function App() {
	const [ships, setShips] = useState([]);
	const [editShip, setEditShip] = useState(null);
	const [isShipFormModalOpen, setIsShipFormModalOpen] = useState(false);

	const refreshShips = async () => {
		const freshShips = await getShips();
		setShips(freshShips ? freshShips : []);
	};

	useEffect(() => {
		refreshShips();
	}, []);

	const handelDelete = async (ship) => {
		await deleteShip(ship);
		refreshShips();
	};

	const handelEditStart = (ship) => {
		if (ship === null) {
			tempID = Math.random();
		}
		setEditShip(ship);
		setIsShipFormModalOpen(true);
	};

	const handelEditSave = async (shipData) => {
		if (editShip) await updateShip({ ...editShip, title: shipData.title, name: shipData.name, pilot: shipData.pilot, faction: shipData.faction });
		else await createShip(shipData);
		await refreshShips();
		handelCloseShipFromModal();
	};

	const handelCloseShipFromModal = () => setIsShipFormModalOpen(false);

	return (
		<React.Fragment>
			<div className='container mt-3'>
				<div className='row mb-3'>
					<div className='col'>
						<h2>Star Wars Ships</h2>
					</div>
					<div className='col'>
						<button className='btn btn-success float-end' onClick={() => handelEditStart(null)}>
							New Ship
						</button>
					</div>
				</div>
			</div>
			<ShipList ships={ships} onDelete={handelDelete} onEdit={handelEditStart} />
			<ShipFormModal key={editShip ? editShip._id : tempID} ship={editShip} isOpen={isShipFormModalOpen} onSave={handelEditSave} onClose={handelCloseShipFromModal} />
		</React.Fragment>
	);
}

export default App;
