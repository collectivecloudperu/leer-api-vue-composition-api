export async function llamarAPI(endpoint :string, method :string){
    return await fetch(endpoint,{
        method:method,
        headers: {
                'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(async response => {
        const resData = await response.json()
        if (!response.ok) {
            // Hacemos algo
             resData.isSuccess = false
        }
        return resData
    }).catch(error => {
        console.log("API llamada correctamente")
        console.log(error)
        throw error
    })
}