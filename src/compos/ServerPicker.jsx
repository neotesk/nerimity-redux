/* @refresh reload */

/*
    Nerimity Redux, Cutting-edge client for https://github.com/Nerimity
    Open-Source, MIT License. Copyright (C) 2025-20xx Nerimity Team
*/

import { createSignal } from "solid-js";
import style from '../styles/ServerPicker.mo.scss';

style.iconGuildHome = [ style.iconGuild, style.home ].join( ' ' );

const servers = [
    {
        icon: "https://cdn3.iconfinder.com/data/icons/inficons/512/github.png",
        id: 1
    },
    {
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvqbvToPxG7_Ut50AtpLbyuYFYcUCT0yZBQ&s",
        id: 2
    }
]

function ServerIcon ( { picked, id, icon, set } ) {
    return (
        <div on:click={ set } classList={ {
            [ style.iconGuild ]: true,
            [ style.selected ]: picked() == id
        } }>
            <img src={ icon } alt="" />
        </div>
    )
}

function HomeIcon ( { picked, set } ) {
    return (
        <div classList={ {
            [ style.iconGuildHome ]: true,
            [ style.selected ]: picked() == -1
        } } onClick={ set }>
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3">
                <path d="M226.67-186.67h140v-246.66h226.66v246.66h140v-380L480-756.67l-253.33 190v380ZM160-120v-480l320-240 320 240v480H526.67v-246.67h-93.34V-120H160Zm320-352Z"/>
            </svg>
        </div>
    )
}

export default function ServerPicker () {
    const [ picked, setPicked ] = createSignal( -1 );

    return (
        <div class={ style.guildBar }>
            <HomeIcon picked={ picked } set={ () => setPicked( -1 ) } />
            <div class={ style.sep }></div>
            <For each={ servers } fallback={ <div>Loading...</div> }>
                { e => <ServerIcon icon={ e.icon } picked={ picked } id={ e.id } set={ () => { setPicked( e.id ); } } /> }
            </For>
        </div>
    );
}