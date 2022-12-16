import React from 'react';
import {useSelector} from "react-redux";
import {Box, List, Typography} from "@mui/material";
import {isEmptyObject, makeShortCodeModel} from "../utils/help";
import ShortCodeItem from "./ShortCodeItem";
import {translations} from "../utils/config";

const ShortCodeList = () => {
    const shortLinks = useSelector(state => state.shrtcode.shortLinks);
    const shortLinksList = isEmptyObject(shortLinks) ? [] : makeShortCodeModel(shortLinks);
    return shortLinksList.length > 0 ? (
        <Box>
            <Typography variant="h4" align="center" >{translations.RESULT}</Typography>
            <List>
                {shortLinksList.map(({
                                         id,
                                         title,
                                         text,
                                         url
                                     }) => <ShortCodeItem key={`${id}_${title}`}
                                                          title={title}
                                                          text={text}
                                                          url={url}/>)
                }
            </List>
        </Box>
    ) : null
}

export default ShortCodeList;