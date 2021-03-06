import { useState } from "react";

export default function useLocalStorage(key, initalValue) {
    const [storedValue, setStoredValue] = useState(() => {
        let item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initalValue;
    })

    const setValue = value => {
		setStoredValue(value);
		window.localStorage.setItem(key, JSON.stringify(value));
	};
	return [storedValue, setValue];
}