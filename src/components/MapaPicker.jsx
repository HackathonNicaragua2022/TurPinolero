import { useState } from 'react';
import MapPicker from 'react-google-map-picker';
import { Alert } from '@mui/material';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import { SwitchMU } from './SwitchMU';
import { DEFAULT_LOCATION, GOOGLE_MAP_KEY } from '../data';

const defaultLocation = DEFAULT_LOCATION;
const DefaultZoom = 8;
const LABEL_SIN_UBICACION = 'SIN UBICACIÓN EN MAPA';
const LABEL_UBICACION = 'UBICACIÓN EN MAPA';

export const MapaPicker = ({ onMapaPickerChange, height = '300px' }) => {
	const [location, setLocation] = useState(defaultLocation);
	const [zoom, setZoom] = useState(DefaultZoom);
	const [showMap, setShowMap] = useState(true);
	const [labelSwitch, setLabelSwitch] = useState(LABEL_UBICACION);

	const handleChangeLocation = (lat, lng) => {
		setLocation({ lat: lat, lng: lng });
		onMapaPickerChange({ lat, lng });
	};

	const handleChangeZoom = (newZoom) => {
		//console.log(`Zoom: ${newZoom}`);
		setZoom(newZoom);
	};

	//   function handleResetLocation() {
	//     setDefaultLocation({ ...DefaultLocation });
	//     setZoom(DefaultZoom);
	//   }

	const switchChanged = (value) => {
		value ? setLabelSwitch(LABEL_UBICACION) : setLabelSwitch(LABEL_SIN_UBICACION);
		setShowMap(value);
	};

	return (
		<>
			<SwitchMU
				label={labelSwitch}
				onChangeSwitch={(value) => switchChanged(value)}
			/>

			{showMap ? (
				<MapPicker
					defaultLocation={location}
					mapTypeId="roadmap"
					style={{ height: height }}
					onChangeLocation={handleChangeLocation}
					onChangeZoom={handleChangeZoom}
					zoom={zoom}
					apiKey={GOOGLE_MAP_KEY}
				/>
			) : (
				<Alert
					variant="outlined"
					severity="warning"
					sx={{ py: 14 }}
				>
					SIN UBICACIÓN EXACTA EN EL MAPA <SentimentDissatisfiedIcon sx={{ ml: 1 }} />
				</Alert>
			)}
		</>
	);
};
