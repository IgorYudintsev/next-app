
import * as React from 'react';
import Image from "next/image";
import  styles from './characters.module.css'

type Props = {
    name:string
    image:string
};
export const CharacterCard = ({name,image}: Props) => {
    return (
        <div className={styles.card}>
            <div>{name}</div>
            <Image src={image} alt={`pict of ${image}`} width={180} height={180}/>
        </div>
    );
};