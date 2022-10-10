import { useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import Select from '@mui/material/Select';

export const Combo = ({
	name,
	data,
	onComboChange,
	defaultValue = '',
	required = false,
	width = '90%',
	backgroundColor = 'white',
}) => {
	const [value, setValue] = useState(defaultValue);

	useEffect(() => {
		setValue('');
	}, [data]);

	const handleChange = ({ target }) => {
		const selected = target.value;
		setValue(selected);
		onComboChange(selected);
	};

	return (
		<FormControl
			sx={{ m: 0, minWidth: 200 }}
			size="small"
			style={{ width: width, backgroundColor: backgroundColor }}
		>
			<InputLabel>{name}</InputLabel>
			<Select
				value={value}
				label={name}
				onChange={handleChange}
				required={required}
			>
				{data.map((item) => (
					<MenuItem
						key={item.id + item.text} // Puede darse el caso.
						value={item.id}
					>
						{item.text}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};
