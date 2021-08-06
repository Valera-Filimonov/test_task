import * as React from 'react';
import style from "./warning.module.css";

const Warning = (): JSX.Element => {
    return (
        <p className={style.textError}>Неверно введён номер</p>
    );
}

export default Warning;