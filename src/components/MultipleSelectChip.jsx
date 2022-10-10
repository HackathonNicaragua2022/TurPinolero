import { useState } from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const SELECTED = {
	fontWeight: 'bold',
	backgroundColor: '#D3D3D3',
};

const NO_SELECTED = {
	fontWeight: 'normal',
	backgroundColor: 'white',
};

const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

//console.log({name, personName});
const getStyles = (name, personName) => (personName.indexOf(name.id) === -1 ? NO_SELECTED : SELECTED);

export const MultipleSelectChip = ({ label, data }) => {
	const [personName, setPersonName] = useState([]);

	const handleChange = ({ target }) => {
		const { value } = target;
		setPersonName(typeof value === 'string' ? value.split(',') : value); // On autofill we get a stringified value.

		console.log(personName);
	};

	return (
		<div>
			<FormControl
				sx={{ m: 1, width: 300 }}
				size="small"
			>
				<InputLabel>{label}</InputLabel>
				<Select
					multiple
					value={personName}
					onChange={handleChange}
					input={<OutlinedInput label={label} />}
					renderValue={(selected) => (
						<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
							{selected.map((value) => {
								const label = data.find((item) => item.id === value);
								//console.log(label);
								return (
									<Chip
										key={label.value}
										label={label.text}
										size="small"
									/>
								);
							})}
						</Box>
					)}
					MenuProps={MenuProps}
					size="small"
				>
					{data.map((item) => {
						//console.log(item);

						return (
							<MenuItem
								key={item.id}
								value={item.id}
								style={getStyles(item, personName)}
								size="small"
							>
								{item.text}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</div>
	);
};
