import Button from "@mui/material/Button";
import {
  Add as AddIcon,
  LocationOnOutlined as LocationIcon,
  PoolOutlined as PoolIcon,
  TravelExploreOutlined as TravelIcon,
} from "@mui/icons-material";
import { SearchButton } from "../components";
import { createSearchParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const arrayImagenes = [
  {
    url: 'https://media.gettyimages.com/photos/volcano-conception-picture-id164981155?k=20&m=164981155&s=612x612&w=0&h=byw2xJdrjerHg-QJ--s2z8KH6U9Gxu7kBpnA5NO6pkU=',
    texto: 'Volcán Concepción'
  },
  {
    url: 'https://media.gettyimages.com/photos/masaya-volcano-crater-lake-in-nicaragua-picture-id157637899?k=20&m=157637899&s=612x612&w=0&h=pojhEzlEaOY7YaTo90E68ykQxJFHknemM9vMOOlzws4=',
    texto: 'Lago Cráter Volcán Masaya'
  },
  {
    url: 'https://media.gettyimages.com/photos/cathedral-of-granada-nicaragua-picture-id155350183?k=20&m=155350183&s=612x612&w=0&h=2mPnt-gIEy4LSFHYTEi3S0-Y_b3dhD0x9RBeTm2NpXU=',
    texto: 'Catedral de Granada'
  }
];

export const HomePage = () => {
  const navigate = useNavigate();

  const iniciarBusqueda = (searchText = "") => {
    // TODO: Crear filtros para búsqueda
    navigate({
      pathname: "resultado",
      search: createSearchParams({
        texto: searchText,
        ubicacion: "",
        tipo: "",
      }).toString(),
    });
  };

  const btnNuevo = () => {
    navigate({
      pathname: "nuevo",
    });
  };

  return (
    <>
      {/* HEAD */}
      <div className="flex justify-between ">
        <div className="p-2">
          <img src="https://img.freepik.com/premium-vector/travel-logo-images-illustration_600494-1145.jpg?w=100" className="absolute" />
        </div>
        <div className="p-2">
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
        {arrayImagenes.map((card) => (
          <Card sx={{ maxWidth: 200 }} className="sm:mx-1 animate__animated animate__fadeIn" key={card}>
            <CardMedia
              component="img"
              height="100"
              image={card.url}
            />
            <Typography
              className="text-center"
              variant="body2"
              color="text.secondary"
            >
              { card.texto }
            </Typography>
          </Card>
        ))}
      </div>

      {/* BOTON BÚSQUEDA */}
      <div className="flex justify-center sm:px-10 mt-8">
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

      <div className="flex justify-center sm:px-10 mt-10">
        <Button
          variant="contained"
          color="success"
          endIcon={<TravelIcon />}
          onClick={() => iniciarBusqueda()}
        >
          BUSCAR
        </Button>
      </div>
    </>
  );
};
