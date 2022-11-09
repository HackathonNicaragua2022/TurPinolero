import { Navigate, Route, Routes } from 'react-router-dom';
import { ResultadoPage, HomePage, NuevoPage, LoginPage, RegisterPage, Dashboard } from '../pages';

export const NicaWikiRouter = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<HomePage />}
			/>

			<Route
				path="/dashboard"
				element={<Dashboard />}
			/>

			<Route
				path="/resultado"
				element={<ResultadoPage />}
			/>
			<Route
				path="/nuevo"
				element={<NuevoPage />}
			/>

			<Route
				path="/login"
				element={<LoginPage />}
			/>
			<Route
				path="/register"
				element={<RegisterPage />}
			/>

			<Route
				path="/*"
				element={<Navigate to="/" />}
			/>
		</Routes>
	);
};
