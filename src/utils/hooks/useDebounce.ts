import { useState, useEffect } from "react";

interface DebounceProps {
    value: any;
    delay: number;
}

export const useDebounce = (props: DebounceProps) => {
    const [debouncedValue, setDebouncedValue] = useState(props.value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(props.value);
        }, props.delay);
        return () => {
            clearTimeout(handler);
        };
    }, [props.value]);

    return debouncedValue;
};

export default useDebounce;
