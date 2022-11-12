import { useEffect, useRef, useState } from 'react';
import { Alert, Button, InputAdornment, TextField } from '@mui/material';
import { Clear, Search } from '@mui/icons-material';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { TravelExploreOutlined as TravelIcon } from '@mui/icons-material';
const phrases = ['Restaurantes en Managua', 'Hoteles en Granada', 'Hospedajes en San Juan del Sur', 'Reservas Naturales'];

const ramdomNumber = Math.floor(Math.random() * phrases.length);

export const SearchButton = () => {
	const [errorMessage, setErrorMessage] = useState(false);
	const [searchText, setSearchText] = useState('');
	const [showClearIcon, setShowClearIcon] = useState('none');
	const fileInputRef = useRef();

	const navigate = useNavigate();

	const handleChange = ({ target }) => {
		const { value } = target;
		setShowClearIcon(value === '' ? 'none' : 'flex');
		setSearchText(value);
	};

	useEffect(() => {
		const randomPhrase = phrases[ramdomNumber];
		const randomPhraseLegth = randomPhrase.length;
		let charPosition = 0;
		let newPlaceHolder = '';

		const interval = setInterval(() => {
			if (charPosition < randomPhraseLegth) {
				newPlaceHolder += randomPhrase.charAt(charPosition);
				charPosition++;
				fileInputRef.current.children[0].children[1].placeholder = newPlaceHolder;
			} else {
				fileInputRef.current.children[0].children[1].focus();
			}
		}, 40);

		return () => clearInterval(interval);
	}, []);

	const handleClearButton = () => setSearchText('');

	const submitSearch = (e) => {
		e.preventDefault();

		setErrorMessage(false);

		if (searchText.trim().length < 2) {
			setErrorMessage(true);
			return;
		}

		navigate({
			pathname: 'resultado',
			search: createSearchParams({
				texto: searchText,
				ubicacion: '',
				tipo: '',
			}).toString(),
		});
	};

	return (
		<>
			<div className="flex justify-center sm:px-10 mt-8">
				<form onSubmit={submitSearch}>
					<TextField
						autoComplete="off"
						ref={fileInputRef}
						style={{ width: '430px' }}
						variant="outlined"
						onChange={handleChange}
						value={searchText}
						className="inputRounded animate__animated animate__fadeIn"
						placeholder=""
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<Search />
								</InputAdornment>
							),
							endAdornment: (
								<InputAdornment
									className="mano"
									position="end"
									style={{ display: showClearIcon }}
									onClick={handleClearButton}
								>
									<Clear />
								</InputAdornment>
							),
						}}
					/>
					<br />
					<div className="text-center mt-2 text-gray-600">{/* <i className="">Tu Wiki Turística Nicaragüense</i> */}</div>
				</form>
			</div>

			<div className="flex justify-center sm:px-10 mt-10">
				<Button
					variant="contained"
					color="success"
					endIcon={<TravelIcon />}
					onClick={submitSearch}
				>
					BUSCAR
				</Button>
			</div>

			{errorMessage && (
				<div className="flex justify-center sm:px-10 mt-10">
					<Alert severity="warning">Digita una frase o selecciona una categorías</Alert>
				</div>
			)}
		</>
	);
};
