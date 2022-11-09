import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { alertError, apiRoot } from '../helpers';
import logoImagen from '../img/logoImagen.png';

const defaultValues = {
	email: 'ebarquero@gmail.com',
	password: '123',
};

export const LoginPage = () => {
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm({ defaultValues });

	const onSubmit = async (data) => {
		console.log(data);
		const response = await apiRoot.post('user/signIn', data);

		console.log(response);

		if (response.codeStatus !== 200) {
			console.log({ response });
			alertError(error.message);
			return;
		}

		//alertSuccess(MensajeSuccess, 'NICAWIKI', () => navigate(-1)); // Página anterior

		navigate('/dashboard');
	};

	const registro = () => navigate('/register');

	return (
		<>
			<div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
				<div className="w-full max-w-md space-y-8">
					<div>
						<img
							src={logoImagen}
							width={150}
							className="mx-auto h-28 w-auto"
						/>
					</div>
					<form
						className="mt-8 space-y-6"
						onSubmit={handleSubmit(onSubmit)}
					>
						<div className="-space-y-px rounded-md shadow-sm">
							<div>
								<input
									{...register('email')}
									type="email"
									required
									className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									placeholder="Correo electrónico"
								/>
							</div>
							<div>
								<input
									{...register('password')}
									type="password"
									required
									className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									placeholder="Contraseña"
								/>
							</div>
						</div>
						<div>
							<button
								type="submit"
								className="group relative flex w-full justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>
								<span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
								INGRESAR
							</button>
						</div>
						<div className="flex items-right">
							<div className="text-sm">
								<a
									onClick={registro}
									className="font-medium text-cyan-800 hover:text-indigo-500"
								>
									¿Aún no tenés cuenta?
								</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
