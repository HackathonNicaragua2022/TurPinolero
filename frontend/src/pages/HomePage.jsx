import { Button } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import LoginIcon from '@mui/icons-material/Login';
import { SearchButton } from '../components';
import { useNavigate } from 'react-router-dom';
import logoTexto from '../img/logoTexto.png';
import logoImagen from '../img/logoImagen.png';

export const HomePage = () => {
	const navigate = useNavigate();

	const btnNuevo = () => navigate({ pathname: 'nuevo' });
	const btnLogin = () => navigate({ pathname: 'login' });

	return (
		<>
			{/* HEAD */}
			<div className="flex justify-between">
				<div className="p-2">
					<img
						src={logoImagen}
						width={150}
						className="absolute"
					/>
				</div>
				<div className="p-2">
					<Button
						className="animate__animated animate__fadeInRight"
						startIcon={<LoginIcon />}
						size="small"
						variant="contained"
						onClick={btnLogin}
					>
						INICIAR SESIÓN
					</Button>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<Button
						className="animate__animated animate__fadeInRight"
						startIcon={<AddIcon />}
						size="small"
						variant="contained"
						onClick={btnNuevo}
					>
						PUBLICAR UN SITIO
					</Button>
				</div>
			</div>
			<div className="flex justify-center sm:px-10">
				<img
					src={logoTexto}
					alt="NICAWIKI"
					width={500}
				/>
			</div>

			{/* COMPONENTE BÚSQUEDA */}
			<SearchButton />
		</>
	);
};
