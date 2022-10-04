import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import { Municipios } from "../data";
import { Combo } from "../components";

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

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container mx-auto mt-2">
          <TextField
            id="outlined-password-input"
            label="Nombre Sitio/Comercio"
            type="text"
            autoComplete="current-password"
            size="small"
            {...register("nombre", {
              required: true,
            })}
            required={true}
          />

          <Combo
            name="Municipios *"
            data={Municipios}
            newChange={(v) => setValue("Municipio", v)}
          />

          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            ENVIAR INFORMACIÓN
          </Button>
        </div>
      </form>
    </>
  );
};
