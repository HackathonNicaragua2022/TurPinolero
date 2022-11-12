import { Button, Rating } from '@mui/material';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { SearchButton } from '../components';

export const ResultadoPage = () => {
	const [texto, setTexto] = useState('');

	const location = useLocation();

	useEffect(() => {
		//console.log({ location });
		const query = queryString.parse(location.search); // {texto: 'hola mundo ejemplo', tipo: 'Piscina', ubicacion: 'Managua'}
		setTexto(query.texto);
	}, []);

	return (
		<>
			<div className="">
				<div className="ml-20 mr-20 mt-4">
					<SearchButton texto={texto} />
				</div>

				{/* PRINCIPAL RESULTADOS DE BUSQUEDA */}
				<div className="ml-20 mr-20 mt-5">
					{/* UN LOCAL */}
					<div className="bg-white border-solid border-2 rounded-lg drop-shadow-lg flex items-stretch p-2">
						<div className="relative">
							<img
								className="rounded-lg"
								src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/73/49/67.jpg"
								alt=""
								width={280}
							/>
						</div>
						<div className="w-full ml-4">
							<div className="grid grid-cols-2 gap-4 place-content-end">
								<div className=" py-2">
									<b>Tree Casa Resort</b>
								</div>
								<div>otro boton</div>
							</div>
							<p className="h-16">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat facilisis eros porta fermentum. Ut eu sem a sem mattis
								fermentum nec nec lorem. Nam volutpat libero erat.
							</p>
							<div className="grid grid-cols-2 place-content-end">
								<div className="py-2">
									<Button
										variant="contained"
										color="success"
										size="small"
									>
										VER PERFIL
									</Button>
								</div>
								<div>
									<Rating
										className="mt-2"
										name="half-rating"
										defaultValue={3.5}
										precision={0.5}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* 			<div className="flex flex-row mt-10 justify-center">
				<div className="basis-1/3">
					<Card sx={{ maxWidth: 345 }}>
						<CardMedia
							component="img"
							height="140"
							image="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/73/49/67.jpg"
							alt="green iguana"
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="div"
							>
								Excursión con tirolina en el volcán Mombacho
							</Typography>
							<Typography
								variant="body2"
								color="text.secondary"
							>
								Baje una tirolesa a través de un bosque nuboso durante este recorrido de 5 horas desde Managua. Visite el Volcán Mombacho de 4,410
								pies (1,344 metros)
							</Typography>
						</CardContent>
						<CardActions>
							<Button
								variant="outlined"
								color="primary"
								size="small"
							>
								Ver más
							</Button>
							<Button
								variant="outlined"
								color="success"
								size="small"
							>
								Compartir
							</Button>
						</CardActions>
					</Card>
				</div>
				<div className="basis-1/3">
					<Card sx={{ maxWidth: 345 }}>
						<CardMedia
							component="img"
							height="140"
							image="https://images.squarespace-cdn.com/content/v1/5a87961cbe42d637c54cab93/1553611391367-X2CP16IHWUA9D9SE6I0V/san-juan-del-sur-nicaragua-guide%2B%2Bthings-to-do-see?format=1000w"
							alt="green iguana"
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="div"
							>
								Playa San Juan del Sur
							</Typography>
							<Typography
								variant="body2"
								color="text.secondary"
							>
								Rodeada por dos cerros de mediana elevación, la Bahía de San Juan del Sur alberga la ciudad playera más visitada por surfistas. Su
								casco urbano ofrece una completa y variada oferta turística,
							</Typography>
						</CardContent>
						<CardActions>
							<Button
								variant="outlined"
								color="primary"
								size="small"
							>
								Ver más
							</Button>
							<Button
								variant="outlined"
								color="success"
								size="small"
							>
								Compartir
							</Button>
						</CardActions>
					</Card>
				</div>
				<div>
					<Card sx={{ maxWidth: 345 }}>
						<CardMedia
							component="img"
							height="140"
							image="https://i.pinimg.com/550x/e8/d3/ee/e8d3ee4d6c3c3e75b01c4e795f78d4ca.jpg"
							alt="green iguana"
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="div"
							>
								Cabañas Lobolira
							</Typography>
							<Typography
								variant="body2"
								color="text.secondary"
							>
								Cabañas Lobolira es un residencial íntimo de 8 diferentes cabañas rústicas y apartamentos a solo 5 minutos a pie de la zona de
								restaurantes del centro de San Juan.
							</Typography>
						</CardContent>
						<CardActions>
							<Button
								variant="outlined"
								color="primary"
								size="small"
							>
								Ver más
							</Button>
							<Button
								variant="outlined"
								color="success"
								size="small"
							>
								Compartir
							</Button>
						</CardActions>
					</Card>
				</div>
			</div> */}
		</>
	);
};
