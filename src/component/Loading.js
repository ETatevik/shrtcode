import React, {memo} from 'react';
import {Box, LinearProgress} from "@mui/material";
import {useSelector} from "react-redux";

const Loading = () => {
    const loading = useSelector(state => state.shrtcode.loading);

    return loading ? (
        <Box sx={{width: '100%', my: 5}}>
            <LinearProgress/>
        </Box>
    ) : null;
}

export default memo(Loading);