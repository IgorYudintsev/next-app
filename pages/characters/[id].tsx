import React from 'react';
import styles from '@/components/characterCard/characters.module.css';
import {CharacterCard} from "@/components/characterCard/CharacterCard";
import {MetaHead} from "@/components/metaHead/MetaHead";
import {getLayout} from "@/components/layOut/LayOut";
import {useCharacter} from "@/assets/hooks/useCharacter";


const CharacterPage = () => {
    const character = useCharacter() //TODO:вынесли запрос в отдельный кастомный хук

    //TODO: Догика проста: В этой компоненте тоже самое что в index.tsx(CharactersPage) только не массив, а одна штука.
    // Этой одной штуке нужно знать какую карточку загружать поэтому в useCharacter используем хук -который получает id со стороки
    // при помощи  const router = useRouter();-соответственно получем здесь результат запроса

    //Todo: для динамического импорта называем компоненту [id].tsx -т.к. будем использовать id
   //TODO создаем динамические роуты
    return (
        <>
            <MetaHead title={'CharactersPage'}/>
            <div className={styles.page}>
                <h3>CharactersPage</h3>
                <div>Experiment</div>
                {character &&
                    <CharacterCard
                        key={character.id}
                        name={character.name}
                        image={character.image}
                    />
                }
            </div>
        </>
    );
};

//Todo: вот так подключаем layout
CharacterPage.getLayout = getLayout
export default CharacterPage

