import { useState } from 'react';
import MapPicker from 'react-google-map-picker';
import { GoogleMapKey } from '../data';

const DefaultLocation = { lat: 12.12805, lng: -86.26499 }; // Metrocentro Managua
const DefaultZoom = 10;

export const MapaPicker = () => {
	const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

	const [location, setLocation] = useState(defaultLocation);
	const [zoom, setZoom] = useState(DefaultZoom);

	function handleChangeLocation(lat, lng) {
		setLocation({ lat: lat, lng: lng });
		console.log({ lat, lng });
	}

	function handleChangeZoom(newZoom) {
		console.log(`Zoom: ${newZoom}`);
		setZoom(newZoom);
	}

	//   function handleResetLocation() {
	//     setDefaultLocation({ ...DefaultLocation });
	//     setZoom(DefaultZoom);
	//   }

	return (
		<>
			{/* <button onClick={handleResetLocation}>Reset Location</button>
      <label>Latitute:</label>
      <input type="text" value={location.lat} disabled />
      <label>Longitute:</label>
      <input type="text" value={location.lng} disabled />
      <label>Zoom:</label>
      <input type="text" value={zoom} disabled /> */}

			<MapPicker
				defaultLocation={defaultLocation}
				mapTypeId="roadmap"
				//style={{ height: "700px" }}
				onChangeLocation={handleChangeLocation}
				onChangeZoom={handleChangeZoom}
				zoom={zoom}
				apiKey={GoogleMapKey}
			/>
		</>
	);
};
