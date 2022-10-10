import { useState } from 'react';
import { Box, OutlinedInput, InputLabel, MenuItem, FormControl, Chip } from '@mui/material';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const inputTextSlytes = { width: '95%', backgroundColor: 'white' };

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

//console.log({name, itemArray});
const getStyles = (name, itemArray) => (itemArray.indexOf(name.id) === -1 ? NO_SELECTED : SELECTED);

export const MultipleSelectChip = ({ label, data, onMultiselectChange, defaultStyle = inputTextSlytes }) => {
	const [itemArray, setItemArray] = useState([]);

	const handleChange = ({ target }) => {
		const { value } = target;

		const valArray = typeof value === 'string' ? value.split(',') : value; // On autofill we get a stringified value.

		setItemArray(valArray);

		onMultiselectChange(valArray);
	};

	return (
		<>
			<FormControl
				sx={{ width: '100%' }}
				size="small"
			>
				<InputLabel>{label}</InputLabel>
				<Select
					multiple
					value={itemArray}
					onChange={handleChange}
					style={defaultStyle}
					input={<OutlinedInput label={label} />}
					renderValue={(selected) => (
						<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
							{selected.map((value) => {
								const label = data.find((item) => item.id === value);
								//console.log(label);
								return (
									<Chip
										key={label.text} // Tiene que ser igual que label porque daría un warning
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
					{data.map((item) => (
						<MenuItem
							key={item.id}
							value={item.id}
							style={getStyles(item, itemArray)}
							size="small"
						>
							{item.text}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</>
	);
};
