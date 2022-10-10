import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Grid, Container, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Combo, MapaPicker } from '../components';
import { Departamentos, Municipios } from '../data';
import { TextInput } from '../components/TextInput';
import MultipleSelectChip from '../components/MultipleSelectChip';

export const NuevoPage = () => {
	const [catMunicipios, setCatMunicipios] = useState(Municipios);
	//const [valueMunicipio, setValueMunicipio] = useState('');

	const {
		register,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	const cambiaDepartamento = (DepartamentoId) => {
		const FiltroMunicipios = Municipios.filter((municipio) => municipio.departamento === DepartamentoId);

		setCatMunicipios(FiltroMunicipios);
		//setValueMunicipio('');

		setValue('Departamento', DepartamentoId); // En UseForm
	};

	return (
		<>
			<MultipleSelectChip />

			<Container
				fixed
				style={{ backgroundColor: '#CFF5EE' }}
				sx={{ mt: 5, borderRadius: '16px' }}
			>
				<Box
					textAlign="center"
					sx={{ my: 5 }}
				>
					AGREGAR NUEVO SITIO
				</Box>

				<form onSubmit={handleSubmit(onSubmit)}>
					<Grid
						container
						spacing={2}
						columns={16}
					>
						<Grid
							item
							xs={8}
						>
							<div className="flex flex-row">
								<div className="basis-1/2">
									<TextInput
										label="Nombre Sitio/Comercio"
										register={register('nombre', {
											required: true,
										})}
										required={true}
									/>
								</div>
								<div className="basis-1/2">
									<TextInput
										label="Teléfonos"
										register={register('telefono')}
									/>
								</div>
							</div>
							<br />
							<div className="flex flex-row">
								<div className="basis-1/2">
									<Combo
										name="Departamentos"
										data={Departamentos}
										newChange={(value) => cambiaDepartamento(value)}
									/>
								</div>
								<div className="basis-1/2">
									<Combo
										name="Municipios"
										//defaultValue={valueMunicipio}
										data={catMunicipios}
										newChange={(value) => setValue('Municipio', value)}
									/>
								</div>
							</div>
							<br />
							<div className="flex flex-row">
								<div className="basis-1/2">
									<TextInput
										label="Descripción del Sitio/Comercio"
										register={register('descripcion')}
										rows={4}
									/>
								</div>
								<div className="basis-1/2">
									<TextInput
										label="Dirección"
										register={register('direccion')}
										rows={4}
									/>
								</div>
							</div>
						</Grid>
						<Grid
							item
							xs={8}
						>
							{/* <MapaPicker /> */}
						</Grid>

						<Button
							type="submit"
							variant="contained"
							endIcon={<SendIcon />}
						>
							ENVIAR INFORMACIÓN
						</Button>
					</Grid>
				</form>
			</Container>
		</>
	);
};
