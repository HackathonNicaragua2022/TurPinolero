import Button from "@mui/material/Button";
import {
  Add as AddIcon,
  LocationOnOutlined as LocationIcon,
  PoolOutlined as PoolIcon,
} from "@mui/icons-material";
import { SearchButton } from "./components";

function PinoleroApp() {
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
          >
            PUBLICAR UN SITIO
          </Button>
        </div>
      </div>

      {/* BOTON BÚSQUEDA */}
      <div className="flex justify-center sm:px-10 mt-5">
        <SearchButton />
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
}

export default PinoleroApp;
