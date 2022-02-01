
import { Box, Typography, TextField, FormControl, Select, MenuItem, Button, InputLabel } from "@mui/material";


const SearchForm = ({setValues, formVal, handleSubmit}) => {
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...formVal,
      [name]: value,
    });
  };


  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h1" variant="h5">
        Search For Treasures
      </Typography>

      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <FormControl variant="standard" fullWidth required sx={{ mt: 2 }}>
          <InputLabel id="search-kat1-label">kat</InputLabel>
          <Select
            name="kat1"
            labelId="search-kat1-label"
            label="kat"
            value={formVal.kat1}
            onChange={handleInputChange}
          >
            {formVal.kat1val.map((kat) => (
              <MenuItem key={kat} value={kat}>
                {kat}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="standard" fullWidth required sx={{ mt: 2 }}>
          <InputLabel id="search-kat2-label">kat2</InputLabel>
          <Select
            name="kat2"
            labelId="search-kat2-label"
            label="kat2"
            value={formVal.kat2}
            onChange={handleInputChange}
          >
             {formVal.kat2val.map((kat) => (
              <MenuItem key={kat} value={kat}>
                {kat}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          id="standard-basic"
          name="text"
          label="Search treasures"
          type="search"
          variant="standard"
          margin="normal"
          fullWidth
          value={formVal.text}
          onChange={handleInputChange}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default SearchForm;