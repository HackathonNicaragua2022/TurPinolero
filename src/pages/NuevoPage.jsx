import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import { Municipios } from "../data";
import GoogleMapReact from "google-map-react";
import { Combo } from "../components";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const NuevoPage = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container mx-auto mt-2">
          <TextField
            label="Nombre Sitio/Comercio"
            type="text"
            size="small"
            {...register("nombre", {
              required: true,
            })}
            required={true}
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
          <Combo
            name="Municipios *"
            data={Municipios}
            newChange={(v) => setValue("Municipio", v)}
          />
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            ENVIAR INFORMACIÓN
          </Button>

          <div style={{ height: "100vh", width: "100%" }}>
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
          </div>
        </div>
      </form>
    </>
  );
};
