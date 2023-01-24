import { Box, CardMedia } from "@mui/material";
import { margin } from "@mui/system";
import React from "react";
import img from "../../../assets/pictures/pexels-specna-arms-889709.jpg";


const HeaderSlider = () => {
    return (
        <Box sx={{margin: 2}}>
          <CardMedia
          image={img}
          component="img"
          alt="poster"
          title="poster"
          sx={{height: '500px'}}
        />  
        </Box>
    )
}

export default HeaderSlider;