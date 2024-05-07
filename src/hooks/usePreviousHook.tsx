import {
    useRef,
    useState
} from "react";

const usePreviousHook = (initialValue: number): [number, number, () => void] => {

    const [newValue, setNewValue] = useState(initialValue)
    let prevValue= useRef(0);
    const newGenerator = () => {

        // console.log("Prev of previous " + prevValue.current)
        // console.log("Prev " + newValue);
        prevValue.current=newValue
        setNewValue(Math.floor(Math.random() * 10) + 1);
        return prevValue.current;
    }

    return [newValue, prevValue.current, newGenerator]
};

export default usePreviousHook