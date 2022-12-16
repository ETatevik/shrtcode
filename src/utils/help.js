import {translations, uniqueKey} from "./config";

export const isEmptyObject = (object) => {
    return Object.keys(object).length === 0;
}

export  const makeShortCodeModel = (shortCode) => {
    return [
        {
            id: uniqueKey(),
            title: `${translations.ORIGIN_LINK} `,
            text: shortCode.original_link,
            url: shortCode.original_link
        },
        {
            id: uniqueKey(),
            title: translations.SHORT_LINK,
            text: shortCode.short_link,
            url: shortCode.full_short_link
        },
        {
            id: uniqueKey(),
            title: `${translations.SHORT_LINK} 2`,
            text: shortCode.short_link2,
            url: shortCode.full_short_link2
        },
        {
            id: uniqueKey(),
            title: `${translations.SHORT_LINK} 3`,
            text: shortCode.short_link3,
            url: shortCode.full_short_link3
        },
        {
            id: uniqueKey(),
            title: `${translations.SHARE_LINK} `,
            text: shortCode.share_link,
            url: shortCode.full_share_link
        }
    ];
}