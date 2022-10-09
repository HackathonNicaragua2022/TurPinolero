/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import Select from '@mui/material/Select';

export const Combo = ({ name, data, newChange, defaultValue = '' }) => {
	const [value, setValue] = useState(defaultValue);

	const handleChange = (event) => {
		const selected = event.target.value;
		setValue(selected);
		newChange(selected);
	};

	return (
		<FormControl
			sx={{ m: 0, minWidth: 200 }}
			size="small"
		>
			<InputLabel>{name}</InputLabel>
			<Select
				value={value}
				label={name}
				onChange={handleChange}
				required={true}
			>
				{data.map((item) => (
					<MenuItem
						key={item.id + item.text}
						value={item.id}
					>
						{item.text}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};
