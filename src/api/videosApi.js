import  axios  from "axios";
import { Questrial } from "next/font/google";

const BASE_URL = 'http://localhost:3001'; // Update with your API URL




export const uploadVideo=async(videoData)=>{
    
    try {
        const response =await axios.post(`${BASE_URL}/videos/uploadvideo`,videoData);
    
    if(response){
        return response;
    }
    }
    catch(error){
        console.log(error)
    }

}

export const getVideos=async({pageParam})=>{
    
    try{
        console.log(pageParam)
        const pageSize=2;
        const response=await axios.get(`${BASE_URL}/videos/getVideos/?page=${pageParam}&pageSize=${pageSize}`)
        return response?.data

    }
        catch(error){
            console.log(error)
        }
}