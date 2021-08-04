import * as React from 'react';
import style from './panel.module.css';

const Panel = (): JSX.Element => {
    return(
        <div className={style.panel}>
         <p className={style.headingPanel}>Введите ваш номер мобильного телефона</p>
        </div>
    );
}

export default Panel;