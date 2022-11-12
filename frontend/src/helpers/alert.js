import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

export const alertSuccess = (text = '', title, despues) => {
	Swal.fire({
		title: title ?? 'GUARDADO',
		text: `${text}`,
		icon: 'success',
		confirmButtonText: 'Aceptar',
	}).then((result) => {
		if (result.isConfirmed) {
			despues();
		}
	});
};

export const alertError = (text) => {
	Swal.fire({
		title: '',
		text: text,
		icon: 'error',
		confirmButtonText: 'Aceptar',
	});
};

// export const confirmDelete = (after) => {
// 	Swal.fire({
// 		title: '¿Desea eliminar el registro?',
// 		text: '',
// 		icon: 'warning',
// 		showCancelButton: true,
// 		confirmButtonColor: '#3085d6',
// 		cancelButtonColor: '#d33',
// 		cancelButtonText: 'Cancelar',
// 		confirmButtonText: 'Si, eliminar',
// 	}).then((result) => {
// 		if (result.isConfirmed) {
// 			after();
// 		}
// 	});
// };

export const alertInfo = (text) => {
	Swal.fire({
		title: '',
		icon: 'info',
		html: text,
		showCloseButton: true,
		showCancelButton: false,
		focusConfirm: true,
		confirmButtonText: 'Aceptar',
	});
};
