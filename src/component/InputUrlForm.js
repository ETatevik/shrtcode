import React, {memo, useState} from 'react';
import {translations} from "../utils/config";
import {useDispatch} from "react-redux";
import {getShrtCode} from "../features/shrtCode/shrtcodeSlice";
import {Button, Grid, TextField} from "@mui/material";

const InputUrlForm =  () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const onHandleChanges = (e) => {
        setValue(e.target.value);
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        dispatch(getShrtCode(value));
        setValue('');
    }

    return (
        <Grid sx={{my: 5}} container spacing={2}>
            <Grid xs={12} md={8} item >
                <TextField
                    label={translations.PLACEHOLDER_INPUT}
                    variant="outlined"
                    sx={{width: '100%'}}
                    required
                    value={value}
                    onChange={onHandleChanges}
                    id="urlInput"
                />
            </Grid>
            <Grid xs={12} md={4} item >
                <Button sx={{width: '100%', height:'100%'}}
                        color="success"
                        variant="contained"
                        onClick={onHandleSubmit}>
                    {translations.SUBMIT_BUTTON}
                </Button>
            </Grid>
        </Grid>
    )
};

export default memo(InputUrlForm);