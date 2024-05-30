const retrieveLSData=<T,> (key: string)=>{
    const pairJSON = localStorage.getItem(key) || "";

    if (!!pairJSON){
        return {} as T;
    }

    const pair = JSON.parse(pairJSON);
    return pair as T;
}

export {retrieveLSData}