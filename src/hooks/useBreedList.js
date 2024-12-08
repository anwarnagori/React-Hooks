import { useState, useEffect } from "react";
import React from 'react'
const localCache = {};

const useBreedList = (animal) => {
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState("unloaded");
    useEffect(() => {
        requestBreedList();
    }, [])
    async function requestBreedList() {
        setBreedList([]);
        setStatus("loading");
        const res = await fetch(
            `http://pets-v2.dev-apis.com/breeds?animal=dog`
        );
        const json = await res.json();
        localCache[animal] = json.breeds || [];
        setBreedList(localCache[animal]);
        setStatus("loaded");
    }
    console.log(breedList, status)
    return [breedList, status];
}

export default useBreedList;
