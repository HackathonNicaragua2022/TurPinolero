import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
	const navigate = useNavigate();

	const salir = () => {
		localStorage.removeItem('token');
		navigate('/');
	};

	return (
		<>
			<nav className="flex items-center justify-between flex-wrap bg-cyan-600 p-3">
				<div className="flex items-center flex-shrink-0 text-white mr-6">
					<path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
					<span className="font-semibold text-xl tracking-tight">NicaWiki</span>
				</div>
				<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
					<div className="text-sm lg:flex-grow">
						<a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">INICIO</a>
						<a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">PROMOCIONES</a>
						<a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">PAQUETES TURÍSTICOS</a>
					</div>
					<div>
						<a
							style={{ cursor: 'pointer' }}
							onClick={salir}
							className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
						>
							SALIR
						</a>
					</div>
				</div>
			</nav>
		</>
	);
};
