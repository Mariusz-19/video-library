export type ContentDetailsType = {
    "duration": string,
    "dimension": string,
    "definition": string,
    "caption": boolean,
    "licensedContent": boolean,
    "contentRating": {},
    "projection": string
}

export type PlayerType = {
    "embedHtml": string,
    "embedHeight": string,
    "embedWidth": string
}

export type Snippet = {
    "categoryId": number,
    "channelId": string,
    "channelTitle": string,
    "defaultAudioLanguage": string,
    "description": string,
    "liveBroadcastContent": string,
    "localized": Localized, 
    "publishedAt": string,
    "thumbnails": Thumbnails,
    "title": string
}


export type VideoItemType = {
    "kind": string,
    "etag": string,
    "id": string,
    "contentDetails": ContentDetailsType,
    "player": PlayerType;
    "snippet":Snippet
}

export type Localized = {
    "description": string,
    "title": string
}

export type Thumbnails = {
    "default":ThumbnailsImgProps
    "medium":ThumbnailsImgProps
    "high":ThumbnailsImgProps
}


export type ThumbnailsImgProps = {
    "height": number,
    "url": string,
    "width": number
}

export type SearchItems = {
    "kind": string,
    "etag": string,
    "id": SearchItemsId
}

export type SearchItemsId = {
        "kind": string,
        "videoId": string
}
    
export type VideoResponse = {
    "kind": string,
    "etag": string,
    "items":VideoItemType[],
    "nextPageToken": string,
    "prevPageToken": string,
    "pageInfo": {
        "totalResults": number,
        "resultsPerPage": number
    }
}
