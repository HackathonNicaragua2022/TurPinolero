import { Button, TextField } from "@mui/material";
import { Add, LocationOnOutlined, PoolOutlined } from "@mui/icons-material";

function PinoleroApp() {
  return (
    <>
      <div className="grid justify-items-end m-2">
        <Button startIcon={<Add />} size="small" variant="contained">
          PUBLICAR UN SITIO
        </Button>
      </div>

      <div className="grid justify-items-center mt-15">
        <img
          style={{ height: "160px" }}
          src="https://img.freepik.com/premium-vector/travel-logo-images-illustration_600494-1145.jpg?w=360"
        />
        <TextField
          style={{ width: "400px" }}
          label="Buscar"
          variant="outlined"
        />
        <div className="mt-5">
          <div class="flex ">
            <div class="flex-auto">
              <Button
                startIcon={<LocationOnOutlined />}
                size="small"
                style={{ width: "130px" }}
                variant="outlined"
              >
                UBICACIÓN
              </Button>
            </div>
            <div class="flex-auto w-8"></div>
            <div class="flex-auto">
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
        </div>
      </div>
    </>
  );
}

export default PinoleroApp;
