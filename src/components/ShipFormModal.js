import React, { useState } from 'react';
import Modal from './Modal';

export default function ShipFormModal({ ship, isOpen, onSave, onClose }) {
	const [titleValue, setTitleValue] = useState(ship ? ship.title : '');
	const [nameValue, setNameValue] = useState(ship ? ship.name : '');
	const [pilotValue, setPilotValue] = useState(ship ? ship.pilot : '');
	const [factionValue, setFactionValue] = useState(ship ? ship.faction : '');

	const handleSave = () => {
		onSave({
			title: titleValue,
			name: nameValue,
			pilot: pilotValue,
			faction: factionValue,
		});
	};

	return (
		<Modal isOpen={isOpen} title={ship ? 'Edit ' + ship.title : 'New Ship'} actionButtonText='Save' onActionButtonClick={handleSave} onClose={onClose}>
			<form>
				<label for='inputTitle' class='form-label'>
					Title:
				</label>
				<input className='form-control' id='inputTitle' value={titleValue} onChange={(e) => setTitleValue(e.target.value)} />
				<label for='inputName' class='form-label'>
					Name:
				</label>
				<input className='form-control' id='inputName' value={nameValue} onChange={(e) => setNameValue(e.target.value)} />
				<label for='inputPilot' class='form-label'>
					Pilot:
				</label>
				<input className='form-control' id='inputPilot' value={pilotValue} onChange={(e) => setPilotValue(e.target.value)} />
				<label for='inputFaction' class='form-label'>
					Faction:
				</label>
				<input className='form-control' id='inputFaction' value={factionValue} onChange={(e) => setFactionValue(e.target.value)} />
			</form>
		</Modal>
	);
}
