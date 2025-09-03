/* @refresh reload */

/*
    Nerimity Redux, Cutting-edge client for https://github.com/Nerimity
    Open-Source, MIT License. Copyright (C) 2025-20xx Nerimity Team
*/

import style from '../styles/HomeLayout.mo.scss';

import ServerPicker from './ServerPicker';

export default function HomeLayout () {
    return (
        <div class={ style.homeLayout }>
            <ServerPicker />
        </div>
    );
}