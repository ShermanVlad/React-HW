const useStorage=(initialValue:string):[() => void]=>{
    const setToLS=()=>{
        localStorage.setItem("num", initialValue)
    }

    return [setToLS]
}

export default useStorage