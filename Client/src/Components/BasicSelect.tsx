import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// Interface for props
type prop = {
  name: string;
  option: string[];
  value: string;
  onChange: (value: string) => void;
};

// Baisc Select Function
export default function BasicSelect(props: prop) {
  //const [type, setType] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    props.onChange(event.target.value);
  };

  return (
    <Box sx={{ m: 1, minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.value}
          label={props.name}
          onChange={handleChange}
        >
          {props.option.map((e, index) => {
            return (
              <MenuItem value={e} key={index}>
                {e}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
