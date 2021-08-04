import * as React from 'react';
import style from './panel.module.css';
import vector from "./../../image/Vector.svg";
import {ChangeEvent} from "react";

const Panel = (): JSX.Element => {
    const [sendNumber, setSendNumber] = React.useState(false)
    const [personalData, setPersonalData] = React.useState(false);
    const [input, setInput] = React.useState('');

    const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInput(`+7${value.substr(2)}`);
    }

    const confirmationNumber = () => {
        setSendNumber(!sendNumber);
    };

    const acceptPersonalData = () => {
        setPersonalData(!personalData);
    }

    return (
        <article className={style.panel}>
            {!sendNumber && (
                <>
                    <p className={style.headingPanel}>Введите ваш номер мобильного телефона</p>
                    <input className={style.inputPhone} onChange={inputHandler} value={input} placeholder="+7(_ _ _)_ _ _-_ _-_ _"></input>
                    <p className={style.textManager}>и с Вами свяжется наш менеждер для<br/> дальнейшей консультации</p>

                    <div style={{paddingTop: 36}}>
                        <div className={style.gridContainer}>
                            <button className={style.buttonPhone}>1</button>
                            <button className={style.buttonPhone} >2</button>
                            <button className={style.buttonPhone}>3</button>
                            <button className={style.buttonPhone}>4</button>
                            <button className={style.buttonPhone}>5</button>
                            <button className={style.buttonPhone}>6</button>
                            <button className={style.buttonPhone}>7</button>
                            <button className={style.buttonPhone}>8</button>
                            <button className={style.buttonPhone}>9</button>
                        </div>
                        <div style={{marginTop: 10}}>
                            <button className={style.buttonPhone} style={{width: 186, height: 52}}>стереть</button>
                            <button className={style.buttonPhone} style={{marginLeft: 10}}>0</button>
                        </div>
                    </div>

                    <div style={{display: "flex", paddingTop: 36}}>
                        <button className={style.checkboxButton} onClick={acceptPersonalData}>
                            {
                                personalData && <img src={vector}/>
                            }
                        </button>
                        <p className={style.textPersonalData}>Согласие на обработку<br/> персональных данных</p>
                    </div>
                    <button disabled={!personalData} className={style.buttonConfirmation} onClick={confirmationNumber}>ПОДТВЕРДИТЬ НОМЕР</button>
                </>
            )
            }
            {/*=====================================================================================================*/}
            {
                (sendNumber && personalData) &&(
                <>
                <p className={style.applicationComplete}>ЗАЯВКА<br/>ПРИНЯТА</p>
                <p className={style.textManagerCall}>Держите телефон под рукой.<br/> Скоро с Вами свяжется наш менеджер.</p>
                </>
                )
            }
        </article>
    );
};

export default Panel;