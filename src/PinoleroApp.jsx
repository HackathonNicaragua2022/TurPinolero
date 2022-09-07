import { Button, Grid } from "@mui/material";
import { Add, LocationOnOutlined, PoolOutlined } from "@mui/icons-material";
import { SearchButton } from "./components";

function PinoleroApp() {
  return (
    <>
      {/* HEAD */}
      <div className="flex justify-between">
        <div className="p-2">
          <img
            style={{ height: "100px" }}
            src="https://img.freepik.com/premium-vector/travel-logo-images-illustration_600494-1145.jpg?w=360"
          />
        </div>
        <div className="p-2">
          <Button startIcon={<Add />} size="small" variant="contained">
            PUBLICAR UN SITIO
          </Button>
        </div>
      </div>

      {/* BOTON BÚSQUEDA */}
      <div className="flex justify-center bg-slate-500 sm:px-10">
        <SearchButton />
      </div>

      {/* BOTONES DE FILTRO */}
      <div className="flex justify-center space-x-8 mt-5">
        <div>
          <Button
            startIcon={<LocationOnOutlined />}
            size="small"
            style={{ width: "130px" }}
            variant="outlined"
          >
            UBICACIÓN
          </Button>
        </div>
        <div>
          <Button
            startIcon={<PoolOutlined />}
            size="small"
            style={{ width: "130px" }}
            variant="outlined"
          >
            TIPO
          </Button>
        </div>
      </div>
    </>
  );
}

export default PinoleroApp;
