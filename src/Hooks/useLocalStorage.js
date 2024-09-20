import { useState, useEffect } from "react";

function UselocalStorage(key, firstValue = null) {
    const initVal = localStorage.getItem(key) || firstValue;
    const [item, setItem] = useState(initVal);

    useEffect(function setKeyInLocalStorage() {
        console.debug("hooks useLocalStorage useEffect", "item=", item)
        if (item === null) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, item);
        }
    }, [key, item]);

    return [item, setItem];
}

export default UselocalStorage;