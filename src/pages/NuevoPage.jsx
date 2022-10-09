import { useForm } from "react-hook-form";
import { Button, Grid, TextField, Container, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Combo, MapaPicker } from "../components";
import { Departamentos, Municipios } from "../data";

export const NuevoPage = () => {
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
      <Container fixed style={{ backgroundColor: "" }} sx={{ mt: 5 }}>
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
                name="Departamentos"
                data={Departamentos}
                newChange={(v) => cambiaDepartamento(v)}
              />
            </Grid>
            <Grid item xs={4}>
              <Combo
                name="Municipios"
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

            <div style={{ height: "100vh", width: "100%" }}>
              {/* <MapaPicker /> */}
            </div>
          </div>
        </form>
      </Container>
    </>
  );
};
