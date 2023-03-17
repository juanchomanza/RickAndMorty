

export const getRandomNum = (min, max) => {
    return Math.floor((Math.random()*max) + min)
}

// export const getApiData = async() => {
//     try{
//         const res = await axios.get(`https://rickandmortyapi.com/api/location/${getRandomNum(1,126)}`)
//         return res
//     } catch(error){
//         console.log(error)
//     }
// }