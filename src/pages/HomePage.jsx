import Button from "@mui/material/Button";
import {
  Add as AddIcon,
  LocationOnOutlined as LocationIcon,
  PoolOutlined as PoolIcon,
} from "@mui/icons-material";
import { SearchButton } from "../components";
import { createSearchParams, useNavigate } from "react-router-dom";

export const HomePage = () => {

  const navigate =  useNavigate();

  

  const iniciarBusqueda = (searchText) => {

    // TODO: Crear filtros para búsqueda
    navigate({
        pathname: "buscar",
        search: createSearchParams({
            texto: searchText,
            ubicacion: 'Managua',
            tipo: 'Piscina'
        }).toString()
    });

  };

  return (
    <>
      {/* HEAD */}
      <div className="flex justify-between">
        <div className="p-2">
          <img src="https://img.freepik.com/premium-vector/travel-logo-images-illustration_600494-1145.jpg?w=100" />
        </div>
        <div className="p-2">
          <Button
            className="animate__animated animate__fadeInRight"
            startIcon={<AddIcon />}
            size="small"
            variant="contained"
            onClick={() => <Navigate to="/nuevo" />}
          >
            PUBLICAR UN SITIO
          </Button>
        </div>
      </div>

      {/* BOTON BÚSQUEDA */}
      <div className="flex justify-center sm:px-10 mt-5">
        <SearchButton iniciarBusqueda={iniciarBusqueda} />
      </div>

      {/* BOTONES DE FILTRO */}
      <div className="flex justify-center space-x-8 mt-5">
        <div>
          <Button
            startIcon={<LocationIcon />}
            size="small"
            style={{ width: "130px" }}
            variant="outlined"
          >
            UBICACIONES
          </Button>
        </div>
        <div>
          <Button
            startIcon={<PoolIcon />}
            size="small"
            style={{ width: "130px" }}
            variant="outlined"
          >
            TIPOS
          </Button>
        </div>
      </div>
    </>
  );
};
