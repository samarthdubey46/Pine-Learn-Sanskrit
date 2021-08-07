// all/16/
import { base_url } from "./config"

export const Update = async (Token,pk,Level = -1,Profile_Pic = '',isProfile = false) => {
    try{
         console.log("Update Called ")
        const Data = {
        }
        if(Level !== -1){
            Data['CurrentLevel'] = Level
        }
        if(Profile_Pic.length > 0 && Profile_Pic !== "" && isProfile ){
            Data['Profile_Pic'] = Profile_Pic 
        }
        console.log(Data)
        const url = `${base_url}all/${pk}/`
        const res = await fetch(url, {
            method: 'PATCH',
            body: JSON.stringify(Data),
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
export const Delete = async (Token,pk) => {
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
        if(json !== null && json !== undefined){
            return {data:json,status:true}
        }
    }catch(e){
         console.log(`e ${e}`)
    }
}