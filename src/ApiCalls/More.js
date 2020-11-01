// all/16/
import { base_url } from "./config"

export const Update = async (Email,username,Password,Level,Token,pk,streak,Profile_Pic) => {
    try{
        console.log("Update Called ")
        console.log(Level)
        const Data = {
            email:Email,
            password:Password,
            username:username,
            CurrentLevel:Level,
            streak:streak,
            Profile_Pic:Profile_Pic
        }
        const url = `${base_url}all/${pk}/`
        const res = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(Data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization':`Token ${String(Token)}`
            }
        })
        const json = await res.json()
        // console.log(json)
        if(json !== null && json !== undefined){
            return {data:json,status:true}
        }
    }catch(e){
        console.log(`e ${e}`)
    }
}
export const GetLeaderBoard = async (Token) => {
    try{
        const url = `${base_url}leaderboard/?ordering=-CurrentLevel`
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization':`Token ${String(Token)}`
            }
        })
        const json = await res.json()
        if(json !== null && json !== undefined){
            return {data:json,status:true}
        }
    }catch(e){
        console.log(`e ${e}`)
    }
}
export const Search = async (Token,Search) => {
    try{
        const url = `${base_url}leaderboard/?search=${Search}&&ordering=-CurrentLevel`
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization':`Token ${String(Token)}`
            }
        })
        const json = await res.json()
        console.log(json)
        if(json !== null && json !== undefined){
            return {data:json,status:true}
        }
    }catch(e){
        console.log(`e ${e}`)
    }
}