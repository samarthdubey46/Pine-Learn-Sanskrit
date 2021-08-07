import { base_url } from "./config"

export const Login = async (Email, Password) => {
    try {
        const Data = {
            email: Email,
            password: Password
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
        if (json !== null && json !== undefined) {
            return json
        }
    } catch (e) {
         console.log(`e ${e}`)
    }
}
export const Register = async (Email, username, Password,) => {
    try {
        const Data = {
            email: Email,
            username: username,
            password: Password,
            Profile_Pic: 'https://static.vecteezy.com/system/resources/previews/000/269/049/non_2x/funny-cartoon-tree-character-vector.jpg'
        }
         console.log(Data)
        const url = `${base_url}register/`
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
            return json
        } else {
            return { status: false, data: json, res: 'Please Enter Valid Values In All Fields' }
        }
    } catch (e) {
         console.log(`Error ${e}`)
    }

}