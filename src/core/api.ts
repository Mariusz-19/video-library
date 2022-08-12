//https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDBYW8IrTR3_erHjdXFJxi83Sz8JGhmrmo&part=id,contentDetails,player&chart=mostPopular

import axios from "axios"
import { VideoResponse } from "./types/video-item";

export async function getVideos(pageToken: string){
    try {
        const response = await axios(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDBYW8IrTR3_erHjdXFJxi83Sz8JGhmrmo&part=id,snippet,contentDetails,player&chart=mostPopular&maxHeight=200&maxResults=20&pageToken=${pageToken}`)
        return response?.data as VideoResponse
    } catch (error) {
        console.error(error);
    }
}
export async function getVideoById(id: string) {
    try {
        const response = await axios(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDBYW8IrTR3_erHjdXFJxi83Sz8JGhmrmo&id=${id}&part=contentDetails,snippet,player&maxHeight=640&maxWidth=1024`)
        return response?.data
    } catch (error) {
        console.error(error);
    }
}

//https://www.googleapis.com/youtube/v3/search?key=AIzaSyDBYW8IrTR3_erHjdXFJxi83Sz8JGhmrmo&part=snippet&q=kickster
export async function getSearching(query: string) {
    try {
        const response = await axios(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDBYW8IrTR3_erHjdXFJxi83Sz8JGhmrmo&part=snippet&q=${query}`)
        return response?.data
    } catch (error) {
        console.error(error);
    }
}
