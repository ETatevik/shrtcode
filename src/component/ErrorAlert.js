import React, {memo} from 'react';
import {Alert} from "@mui/material";
import {useSelector} from "react-redux";

const ErrorAlert = () => {
    const {error, error_code} = useSelector(state => state.shrtcode.error);

    return error ? (
        <Alert severity="error">Error Code: {error_code}<br/> {error}</Alert>
    ) : null;
}

export default memo(ErrorAlert);