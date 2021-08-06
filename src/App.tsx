import styles from './app.module.css';
import * as React from 'react';
import video from "./image/video.png";
import scale from "./image/scale.png"
import qr from "./image/qr1.png";
import cross from "./image/Group1.svg";
import Panel from "./components/Panel/Panel";
import QrCode from "./components/QrCode/QrCode";


const App = (): JSX.Element => {
    const [panelActive, setPanelActive] = React.useState(false)

    const showPanel = () => {
        setPanelActive(!panelActive);
    };

    const closePanel = () => {
        setPanelActive(!panelActive);
    }

    return (
        <section className={styles.banner} style={{backgroundImage: `url(${panelActive ? scale : video})`}}>
            {
                !panelActive && (
                    <div className={styles.frame}>
                        <p className={styles.headingFrame}
                           style={{width: 255}}>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО <br/>МАЛЫША! <br/>ПОДАРИТЕ ЕМУ СОБАКУ!</p>
                        <img className={styles.qrCode} src={qr} alt="Qr code to go to the main site"/>
                        <p className={styles.textInvitation}
                           style={{width: 258}}>Сканируйте QR-код <br/>или нажмите ОК</p>
                        <button className={styles.button} onClick={showPanel}>ОК</button>
                    </div>
                )
            }
            {
                panelActive && (
                    <>
                        <Panel/>
                        <button className={styles.buttonClose} onClick={closePanel}>
                            <img className={styles.iconClose} src={cross} alt="The button to go to the main page"/>
                        </button>
                        <QrCode/>
                    </>
                )
            }
        </section>
    );
};

export default App;
