const getStoredBook = () => {

    const storedBookSTR = localStorage.getItem('readList');
    if(storedBookSTR){
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }

    return [];

}


const addToStoredDB = (id) =>{

    const storedBookData = getStoredBook();

    if(storedBookData.includes(id)){
        alert('Book Already Exists !!');
        return;
    }

    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem('readList',data);


}

export {addToStoredDB,getStoredBook};