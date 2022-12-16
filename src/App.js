import React from 'react';
import InputUrlForm from "./component/InputUrlForm";
import {Container} from "@mui/material";
import Loading from "./component/Loading";
import ErrorAlert from "./component/ErrorAlert";
import ShortCodeList from "./component/ShortCodeList";

const App = () => {
    return (
        <Container maxWidth="sm">
            <InputUrlForm/>
            <Loading/>
            <ErrorAlert/>
            <ShortCodeList/>
        </Container>
    );
}

export default App;
