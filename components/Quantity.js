import { useState } from "react";
import { FormControl, InputLabel, Select } from "@material-ui/core";

const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Quantity({ width, quantity, handleChange }) {
  return (
    <div style={{ width: width }}>
      <FormControl variant="outlined" style={{ width: "100%" }}>
        <InputLabel htmlFor="outlined-age-native-simple">Тоо ширхэг</InputLabel>
        <Select
          native
          value={quantity}
          onChange={handleChange}
          label="Тоо ширхэг"
        >
          <option aria-label="None" value="" />
          {count.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Quantity;
