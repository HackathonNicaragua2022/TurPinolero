import { Grid } from '@mui/material';

export const ItemImagen = ({ imagenes }) => {
	//console.log('Se renderiza ItemImagen');

	//console.log(imagenes);

	return (
		<>
			{imagenes.map((item) => (
				<Grid
					item
					xs={1}
					key={item.img}
				>
					<img
						src={item.img}
						alt=""
					/>
				</Grid>
			))}
		</>
	);
};
