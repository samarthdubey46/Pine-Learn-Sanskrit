import { base_url } from "./config"

export const Login = async (Email, Password) => {
    try{
        const Data = {
            email:Email,
            password:Password
        }
        const url = `${base_url}login/`
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(Data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const json = await res.json()
        if(json !== null && json !== undefined){
            return json
        }
    }catch(e){
        console.log(`e ${e}`)
    }
}
export const Register = async (Email, username, Password,) => {
    try {
        const Data = {
            email: Email,
            username: username,
            password: Password,
        }
        const url = `${base_url}all/`
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(Data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const json = await res.json()
        if (json !== null && json !== undefined) {
            if (json['email'][0] === 'user with this email already exists.') {
                return { status: false, data: json, res: 'user with this email already exists' }
            }
            if (json['CurrentLevel'] !== null && json['CurrentLevel'] !== undefined) {
                return { status: true, data: json, res: 'User Created Now You Can Login' }
            }
            return { status: false, data: json, res: 'Please Enter Valid Values In All Fields' }

        } else {
            return { status: false, data: json, res: 'Please Enter Valid Values In All Fields' }
        }
    } catch (e) {
        console.log(`Error ${e}`)
    }

}