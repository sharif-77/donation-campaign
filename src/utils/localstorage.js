const getDataFromLS = () =>{
    const data=localStorage.getItem('donated-id')
    if (data) {
        return JSON.parse(data)
    }
    return []
}

const setDataToLS = (id) =>{
    console.log(id);
    const prevData=getDataFromLS()
    const exist=prevData.find(data=>data===id)
    console.log(exist);
    if (!exist) {
        prevData.push(id) 
    }
    const newData=JSON.stringify(prevData)
    localStorage.setItem('donated-id',newData)
}
export {getDataFromLS,setDataToLS}