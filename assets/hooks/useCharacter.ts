import { useEffect, useState } from "react";
import axios from "axios";
import { Nullable } from "@/assets/types";
import { CharactersType } from "@/assets/hooks/useCharacters";
import { useRouter } from "next/router";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useCharacter = (): Nullable<CharactersType> => {
    const [character, setCharacter] = useState<Nullable<CharactersType>>(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            axios.get(`${API_URL}/character/${id}`).then(res => setCharacter(res.data));
        }
    }, [id]);

    return character;
};

