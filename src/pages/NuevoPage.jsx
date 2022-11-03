import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Grid, Container, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Combo, MapaPicker, TextInput, MultipleSelectChip, ListaImagenes } from '../components';
import { Departamentos, Municipios, Categorias } from '../data';

const defaultValues = {
	Nombre: null,
	Telefonos: null,
	DepartamentoId: null,
	MunicipioId: null,
	Descripcion: null,
	Direccion: null,
	Latitud: null,
	Longitud: null,
	ImagenBaner: null,
	Imagenes: [],
	Categorias: [],
	RedesSociales: [],
};

export const NuevoPage = () => {
	const [catMunicipios, setCatMunicipios] = useState(Municipios);

	const {
		register,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm({ defaultValues });

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
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="container mx-auto bg-slate-500 mt-6">
					<div className="columns-2">
						<div className="bg-orange-400">
							<div className="flex flex-row">
								<div className="basis-1/2 p-2">
									<TextInput
										label="Nombre Sitio/Comercio"
										register={register('Nombre', {
											required: true,
										})}
										required={true}
									/>
								</div>
								<div className="basis-1/2 p-2">
									<TextInput
										label="Teléfonos"
										register={register('Telefonos')}
									/>
								</div>
							</div>
							<div className="flex flex-row">
								<div className="basis-1/2 p-2">
									<Combo
										name="Departamentos"
										data={Departamentos}
										onComboChange={(value) => onDepartamentoChange(value)}
									/>
								</div>
								<div className="basis-1/2 p-2">
									<Combo
										name="Municipios"
										data={catMunicipios}
										onComboChange={(value) => setValue('MunicipioId', value)}
									/>
								</div>
							</div>
							<div className="flex flex-row">
								<div className="basis-1/2 p-2"></div>
								<div className="basis-1/2 p-2"></div>
							</div>
						</div>
						<div className="bg-green-400">
							<MapaPicker onMapaPickerChange={(value) => onMapaChage(value)} />
						</div>
					</div>
				</div>

				<button type="submit">ENVIAR</button>
				
			</form>

			<br />
			<br />
			<br />
			<br />

			<Container
				fixed
				style={{ backgroundColor: '#CFF5EE' }}
				sx={{ mt: 5, borderRadius: '16px' }}
			>
				<Box
					textAlign="center"
					sx={{ my: 5 }}
				>
					DATOS GENERALES
				</Box>

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
							<div className="basis-1/2"></div>
							<div className="basis-1/2"></div>
						</div>
						<br />
						<div className="flex flex-row">
							<div className="basis-1/2"></div>
							<div className="basis-1/2"></div>
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
					></Grid>
				</Grid>
			</Container>

			<Container
				fixed
				style={{ backgroundColor: '#CFF5EE' }}
				sx={{ mt: 5, borderRadius: '16px' }}
			>
				<Box
					textAlign="center"
					sx={{ my: 5 }}
				>
					<span className="bg-emerald-400 p-1 px-4 rounded-xl text-white ml-3 mt-6 w-28">IMAGENES</span>
				</Box>

				<ListaImagenes />
			</Container>
		</>
	);
};
