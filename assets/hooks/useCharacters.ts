import {useEffect, useState} from "react";
import axios from "axios";
import {Nullable} from "@/assets/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useCharacters = ():Nullable<CharactersType[]> => {
    const [characters, setCharacters] = useState<Nullable<CharactersType[]>>(null)
    useEffect(() => {
        axios.get(`${API_URL}/character`).then(res => setCharacters(res.data.results))
    }, [])

    return characters;
};

//types

export type CharactersType = {
    id: string,
    name: string,
    image: string,
}

//TODO: вынесли в отдельный дженерик