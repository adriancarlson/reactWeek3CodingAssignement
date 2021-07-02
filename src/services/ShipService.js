const SHIP_ENDPOINT = 'https://crudcrud.com/api/6405f9157706431a9bd65f6021cb615b/ships';
// const SHIP_ENDPOINT = 'https://crudcrud.com/api/60160ea878fe4ae4b53ed215f2fd8b64/ships';

const getFetchOptions = (method, data) => ({
	method: method,
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify(data),
});

export const getShips = async () => {
	try {
		const resp = await fetch(SHIP_ENDPOINT);
		return await resp.json();
	} catch (e) {
		console.log(e);
		return null;
	}
};

export const createShip = async (ship) => {
	try {
		const resp = await fetch(SHIP_ENDPOINT, getFetchOptions('POST', ship));
		return await resp.json();
	} catch (e) {
		console.log(e);
		return null;
	}
};

export const updateShip = async (ship) => {
	try {
		const resp = await fetch(SHIP_ENDPOINT + '/' + ship._id, getFetchOptions('PUT', { name: ship.name, title: ship.title, faction: ship.faction, pilot: ship.pilot }));
		return resp;
	} catch (e) {
		console.log(e);
		return null;
	}
};

export const deleteShip = async (ship) => {
	try {
		const resp = await fetch(SHIP_ENDPOINT + '/' + ship._id, { method: 'DELETE' });
		return resp;
	} catch (e) {
		console.log(e);
		return null;
	}
};
