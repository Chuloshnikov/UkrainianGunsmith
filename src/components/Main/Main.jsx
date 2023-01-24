import { ButtonGroup, Box } from "@mui/material";
import Button from '@mui/material/Button';
import React from "react";
import AllGoods from "./../Goods/AllGoods";

const Main = () => {
    return (
        <>
        <Box sx={{display: "flex", justifyContent: "center"}}>
            <ButtonGroup variant="text" aria-label="outlined primary button group">
                <Button>All</Button>
                <Button>pistols</Button>
                <Button>revolvers</Button>
                <Button>shotguns</Button>
                <Button>rifles</Button>
                <Button>ammo</Button>
                <Button>accessories</Button>
            </ButtonGroup>
        </Box>
        <AllGoods/>    
        </>
    )
}

export default Main;