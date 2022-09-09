import queryString from 'query-string';
import { useLocation, useParams } from "react-router-dom";

export const BuscarPage = () => {
  
  const location = useLocation();

  console.log(location);

  //const query = queryString.parse(location.search); // {texto: 'hola mundo ejemplo', tipo: 'Piscina', ubicacion: 'Managua'}

  //console.log(query);

  return (
    <>
      <h1>Buscar Page</h1>

      <hr />
    </>
  );
};
