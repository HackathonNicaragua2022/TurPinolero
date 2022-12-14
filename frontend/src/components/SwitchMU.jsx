import { FormControlLabel, Switch } from '@mui/material';
import { useState } from 'react';

export const SwitchMU = ({ label, onChangeSwitch, estado = true }) => {
	const [state, setState] = useState(estado);

	const onChange = () => {
		const newState = !state;
		setState(newState);
		onChangeSwitch(newState);
	};

	return (
		<>
			<FormControlLabel
				sx={{
					display: 'block',
				}}
				control={
					<Switch
						checked={state}
						onChange={onChange}
						name={label}
						color="primary"
					/>
				}
				label={label}
			/>
		</>
	);
};
