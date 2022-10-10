import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Grid, Container, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Combo, MapaPicker, TextInput, MultipleSelectChip } from '../components';
import { Departamentos, Municipios, Categorias } from '../data';

export const NuevoPage = () => {
	const [catMunicipios, setCatMunicipios] = useState(Municipios);

	const {
		register,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm();

	const onDepartamentoChange = (DepartamentoId) => {
		if (DepartamentoId) {
			const FiltroMunicipios = Municipios.filter((municipio) => municipio.departamento === DepartamentoId);
			setCatMunicipios(FiltroMunicipios);
		}

		setValue('DepartamentoId', DepartamentoId); // Guardar En UseForm
	};

	const onMapaChage = ({ lat, lng }) => {
		setValue('Latitud', lat);
		setValue('Longitud', lng);
	};

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<>
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
										register={register('Nombre', {
											required: true,
										})}
										required={true}
									/>
								</div>
								<div className="basis-1/2">
									<TextInput
										label="Teléfonos"
										register={register('Telefonos')}
									/>
								</div>
							</div>
							<br />
							<div className="flex flex-row">
								<div className="basis-1/2">
									<Combo
										name="Departamentos"
										data={Departamentos}
										onComboChange={(value) => onDepartamentoChange(value)}
									/>
								</div>
								<div className="basis-1/2">
									<Combo
										name="Municipios"
										//defaultValue="0106"
										data={catMunicipios}
										onComboChange={(value) => setValue('MunicipioId', value)}
									/>
								</div>
							</div>
							<br />
							<div className="flex flex-row">
								<div className="basis-1/2">
									<TextInput
										label="Descripción del Sitio/Comercio"
										register={register('Descripcion')}
										rows={4}
									/>
								</div>
								<div className="basis-1/2">
									<TextInput
										label="Dirección"
										register={register('Direccion')}
										rows={4}
									/>
								</div>
							</div>
							<br />
							<div className="flex flex-row">
								<MultipleSelectChip
									label="Categorías"
									data={Categorias}
									onMultiselectChange={(value) => setValue('Categorias', value)}
								/>
							</div>
							<br />
							<div className="flex flex-row">
								<div className="basis-1/2">
									<Button
										type="submit"
										variant="contained"
										endIcon={<SendIcon />}
									>
										ENVIAR INFORMACIÓN
									</Button>
								</div>
								<div className="basis-1/2"></div>
							</div>
						</Grid>
						<Grid
							item
							xs={8}
						>
							<MapaPicker onMapaPickerChange={(value) => onMapaChage(value)} />
						</Grid>
					</Grid>
				</form>
			</Container>
		</>
	);
};
