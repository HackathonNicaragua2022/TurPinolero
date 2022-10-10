import { TextField } from '@mui/material';

const inputTextSlytes = { width: '90%', backgroundColor: 'white' };

export const TextInput = ({ register, label, required = false, rows = 0, defaultStyle = inputTextSlytes }) => {
	if (rows > 0) {
		return (
			<TextField
				label={label}
				type="text"
				size="small"
				{...register}
				style={defaultStyle}
				required={required}
				multiline
				rows={rows}
			/>
		);
	}

	return (
		<TextField
			label={label}
			type="text"
			size="small"
			{...register}
			style={defaultStyle}
			required={required}
			autoComplete="off"
		/>
	);
};
