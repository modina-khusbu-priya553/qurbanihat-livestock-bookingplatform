export const allAnimalsData = async() =>{
    const res = await fetch("https://qurbanihat-livestock-bookingplatfor.vercel.app/data.json")
    const data = await res.json()
    return data;

}