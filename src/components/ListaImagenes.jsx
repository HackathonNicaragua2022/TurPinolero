import { FileUploadOutlined } from '@mui/icons-material';
import { Button, CircularProgress, Grid } from '@mui/material';
import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_URL_BUCKET_S3 } from '../data';
import AWS from 'aws-sdk';
import { ItemImagen } from './ItemImagen';

const S3_BUCKET = 'nicawiki-imagenes';
const REGION = 'us-east-1';

AWS.config.update({
	accessKeyId: AWS_ACCESS_KEY_ID,
	secretAccessKey: AWS_SECRET_ACCESS_KEY,
});

const myBucket = new AWS.S3({
	params: { Bucket: S3_BUCKET },
	region: REGION,
});

export const ListaImagenes = ({ data }) => {
	const [imagenesArray, setImagenesArray] = useState([
		/* 		{
			img: AWS_URL_BUCKET_S3 + '17c0d870-ada4-4333-b5fa-ae43c1f28a97.jpg',
			title: 'Test 1',
		}, */
	]);

	const [progress, setProgress] = useState(0);

	const fileInputRef = useRef();

	const onFileInputChange = ({ target }) => {
		if (target.files === 0) return;

		let file = target.files;

		//console.log(target.files);

		for (let i = 0; i < file.length; i++) {
			//this.files.push(file[i]);
			//console.log(file[i].name);
			//uploadFile(file[i]);
			if (file[i].type === 'image/png' || file[i].type === 'image/jpeg') {
				uploadFile(file[i]);
			}
		}
	};

	const uploadFile = (file) => {
		const fileName = file.name;

		const uuid = uuidv4() + '.' + fileName.split('.').pop();

		const params = {
			ACL: 'public-read',
			Body: file,
			Bucket: S3_BUCKET,
			Key: uuid, //file.name,
		};

		var putObjectPromise = myBucket.putObject(params).promise();

		putObjectPromise
			.then(function (data) {
				console.log(data);
				console.log('Success');

				const imagen = {
					img: AWS_URL_BUCKET_S3 + uuid,
					title: null,
				};

				setImagenesArray([...imagenesArray, imagen]);
			})
			.catch(function (err) {
				console.log(err);
			});
	};

	return (
		<>
			<input
				type="file"
				accept="image/png,image/jpeg"
				onChange={onFileInputChange}
				style={{ display: 'none' }}
				ref={fileInputRef}
			/>

			<CircularProgress color="success" />

			<Button
				type="button"
				variant="contained"
				startIcon={<FileUploadOutlined />}
				onClick={() => fileInputRef.current.click()}
			>
				Seleccionar Imagenes
			</Button>
			<br />
			<br />
			<Grid
				container
				spacing={{ xs: 2 }}
				columns={{ xs: 6 }}
			>
				<ItemImagen imagenes={imagenesArray} />
			</Grid>
		</>
	);
};
