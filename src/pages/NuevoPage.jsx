import { Button, Grid, TextField, Container, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import { Departamentos, Municipios } from "../data";
import GoogleMapReact from "google-map-react";
import { Combo } from "../components";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const NuevoPage = () => {
  /*   const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  }; */

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const cambiaDepartamento = (valor) => {
    setValue("Departamento", valor);
  };

  return (
    <>
      <Container fixed style={{ backgroundColor: "red" }} sx={{ mt: 5 }}>
        <Box textAlign="center" sx={{ my: 5 }}>
          AGREGAR NUEVO SITIO
        </Box>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <TextField
                label="Nombre Sitio/Comercio"
                type="text"
                size="small"
                {...register("nombre", {
                  required: true,
                })}
                required={true}
              />
            </Grid>
            <Grid item xs={4}>
              <Combo
                name="Departamentos *"
                data={Departamentos}
                newChange={(v) => cambiaDepartamento(v)}
              />
            </Grid>
            <Grid item xs={4}>
              <Combo
                name="Municipios *"
                data={Municipios}
                newChange={(v) => setValue("Municipio", v)}
              />
            </Grid>
            <Grid item xs={8}>
              xs=8
            </Grid>
          </Grid>

          <div className="container mx-auto mt-2">
            <TextField
              label="Descripción"
              type="text"
              size="small"
              multiline
              rows={4}
              {...register("descripcion")}
            />

            <TextField
              label="Teléfono"
              type="text"
              size="small"
              {...register("telefono")}
            />
            <TextField
              label="Dirección"
              type="text"
              size="small"
              multiline
              rows={4}
              {...register("direccion")}
            />

            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              ENVIAR INFORMACIÓN
            </Button>

            {/* <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyArCDx3fBJxlJJMMgbLGQm4Id_FWl8YME8",
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div> */}
          </div>
        </form>
      </Container>
    </>
  );
};
