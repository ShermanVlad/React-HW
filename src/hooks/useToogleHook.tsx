import { useState } from "react";

const useToggleHook = (initialValue: number): [number, () => void] => {
    const [value, setValue] = useState<number>(initialValue);

    const toggle = () => {
        if (value) {
            setValue(0)
        } else if (!value) {
            setValue(1)
        }
        // setValue(prevValue => (prevValue === 0 ? 1 : 0));
    };

    return [value, toggle];
};

export default useToggleHook;