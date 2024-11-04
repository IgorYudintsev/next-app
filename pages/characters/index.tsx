import React from 'react';
import styles from '@/components/characterCard/characters.module.css';
import {useCharacters} from "@/assets/hooks/useCharacters";
import {CharacterCard} from "@/components/characterCard/CharacterCard";
import {MetaHead} from "@/components/metaHead/MetaHead";
import {getLayout} from "@/components/layOut/LayOut";
import Link from "next/link";


const CharactersPage = () => {
    const characters = useCharacters() //TODO:вынесли запрос в отдельный кастомный хук


    return (
        <>
            <MetaHead title={'CharactersPage'}/>
            <div className={styles.page}>
                <h3 className={styles.title}>CharactersPage</h3>
                {characters && characters.map(character => {
                    console.log(character)
                    return (
                        <Link href={`/characters/${character.id}`} key={character.id}>
                            <CharacterCard
                                name={character.name}
                                image={character.image}
                            />
                        </Link>

                    )
                })}
            </div>
        </>
    );
};

//Todo: вот так подключаем layout
CharactersPage.getLayout = getLayout
export default CharactersPage


//TODO в папке pages хранятся наши страницы, а для компонент создаем папку components
//TODO: для работы с картинками нужно отредактировать next.config.ts
// TODO: metaHead дублируется на каждой транице, поэтому вынесли в отдельную компоненту