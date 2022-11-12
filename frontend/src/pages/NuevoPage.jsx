import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Combo, MapaPicker, TextInput, MultipleSelectChip, ListaImagenes } from '../components';
import { Departamentos, Municipios, Categorias } from '../data';
import { apiRoot, alertSuccess, alertError } from '../helpers';
import { useNavigate } from 'react-router-dom';

const defaultValues = {
	NombreLocal: 'Princess Hotel',
	Telefonos: '2240-2352, 88170000',
	DepartamentoId: null,
	MunicipioId: null,
	DescripcionLugar: null,
	Direccion: 'Plaza las Victorias',
	Latitud: null,
	Longitud: null,
	ImagenBaner: null, // NO VA
	Imagenes: [
		// {
		// 	Nombre: 'https://images.unsplash.com/photo-1665396697251.jpg',
		// },
		// {
		// 	Nombre: 'https://images.unsplash.com/photo-7896541123325.jpg',
		// },
	],
	Categorias: [],
	RedesSociales: [
		// {
		// 	RedSocialId: 'FB',
		// 	RedSocialURL: 'Facebook - log in or sign up',
		// },
	],
};

const MensajeSuccess =
	'Gracias por contribuir al Turismo Nicaraguense!! Validaremos algunos datos para este sitio y lo agregaremos a nuestros Registros. Gracias!!';

export const NuevoPage = () => {
	const navigate = useNavigate();

	const [catMunicipios, setCatMunicipios] = useState(Municipios);

	const { register, handleSubmit, setValue } = useForm({ defaultValues });

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

	const onSubmit = async (data) => {
		//console.log(data);
		let form = data;

		delete form.Facebook;
		delete form.Twitter;
		delete form.Youtube;
		delete form.Instagram;

		// Agregar las redes sociales
		data.Facebook && form.RedesSociales.push({ RedSocialId: 'FB', RedSocialURL: data.Facebook });
		data.Twitter && form.RedesSociales.push({ RedSocialId: 'TW', RedSocialURL: data.Twitter });
		data.Youtube && form.RedesSociales.push({ RedSocialId: 'YT', RedSocialURL: data.Youtube });
		data.Instagram && form.RedesSociales.push({ RedSocialId: 'IG', RedSocialURL: data.Instagram });

		console.log(form);

		const response = await apiRoot.post('location', form);
		console.log({ response });

		if (response.status !== 200) {
			console.log({ response });
			alertError(response.message);
			return;
		}

		alertSuccess(MensajeSuccess, 'NICAWIKI', () => navigate(-1)); // Página anterior
	};

	const onImagenesChange = (data) => setValue('Imagenes', data);

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="mt-5"
			>
				<div className="container mx-auto mt-6">
					{/* SECCIÓN DATOS GENERALES */}
					<div className="text-center bg-cyan-600 rounded text-white py-2 font-mono text-lg mb-5"> DATOS GENERALES</div>
					<div className="columns-2">
						{/* PRIMERA COLUMNA */}
						<div>
							<div className="flex flex-row">
								<div className="basis-1/2 p-2">
									<TextInput
										label="Nombre Sitio/Comercio"
										register={register('NombreLocal', {
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
							<div className="flex flex-row mt-4">
								<div className="basis-1/2 p-2">
									<TextInput
										label="Descripción del Sitio/Comercio"
										register={register('DescripcionLugar')}
										rows={4}
									/>
								</div>
								<div className="basis-1/2 p-2">
									<TextInput
										label="Dirección"
										register={register('Direccion')}
										required={true}
										rows={4}
									/>
								</div>
							</div>
							<div className="flex flex-row mt-4">
								<div className="basis-1/2 p-2">
									<Combo
										name="Departamentos"
										data={Departamentos}
										onComboChange={(value) => onDepartamentoChange(value)}
										required={true}
									/>
								</div>
								<div className="basis-1/2 p-2">
									<Combo
										name="Municipios"
										data={catMunicipios}
										onComboChange={(value) => setValue('MunicipioId', value)}
										required={true}
									/>
								</div>
							</div>
							<div className="flex flex-row mt-4">
								<div className="p-2 w-full pr-10">
									<MultipleSelectChip
										label="Categorías"
										data={Categorias}
										onMultiselectChange={(value) => setValue('Categorias', value)}
										required={true}
									/>
								</div>
							</div>
						</div>
						{/* SEGUNDA COLUMNA */}
						<div>
							<MapaPicker onMapaPickerChange={(value) => onMapaChage(value)} />
						</div>
					</div>

					{/* SECCIÓN REDES SOCIALES */}
					<div className="text-center bg-cyan-600 rounded text-white py-2 font-mono text-lg mb-5 mt-6">REDES SOCIALES</div>
					<div className="columns-2">
						<div className="flex flex-row">
							<div className="basis-1/2 p-2">
								<TextInput
									label="URL Facebook"
									register={register('Facebook')}
								/>
							</div>
							<div className="basis-1/2 p-2">
								<TextInput
									label="URL Twitter"
									register={register('Twitter')}
								/>
							</div>
						</div>
						<div className="flex flex-row">
							<div className="basis-1/2 p-2">
								<TextInput
									label="URL Youtube"
									register={register('Youtube')}
								/>
							</div>
							<div className="basis-1/2 p-2">
								<TextInput
									label="URL Intagram"
									register={register('Instagram')}
								/>
							</div>
						</div>
					</div>

					{/* SECCIÓN IMAGENES */}
					<div className="text-center bg-cyan-600 rounded text-white py-2 font-mono text-lg mb-5 mt-6">IMAGENES</div>

					<ListaImagenes onImagenesChange={onImagenesChange} />
				</div>

				<div className="text-center mt-10 mb-40">
					<Button
						type="submit"
						variant="contained"
						size="large"
						endIcon={<SendIcon />}
					>
						ENVIAR INFORMACIÓN
					</Button>
				</div>
			</form>
		</>
	);
};
