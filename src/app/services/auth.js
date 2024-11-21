import Http from "../../Http";


const appUrl = "http://api.multiTenant/api" 

console.log("lets check", appUrl)

export const userLogin = async (params) => {
return new Promise((resolve, reject) => {
    Http.post(`${appUrl}/login`, params).then((res)=>{
            console.log(res.data.data)
            // const userDetails = res.data.data.userdata
            // const accessToken = res.data.data.token

            // localStorage.setItem("userDetails", JSON.stringify(userDetails))
            // localStorage.setItem("accessToken", accessToken)

        return resolve(res.data)
    }).catch((error)=> {
        console.log(error)
        reject(error)

    })
});

}   