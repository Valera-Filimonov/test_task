import styles from './app.module.css';
import * as React from 'react';
import video from "./image/video.png";
import scale from "./image/scale.png"
import qr from "./image/qr1.png";
import Line1 from "./image/Line1.svg";
import Line2 from "./image/Line2.svg";
import Panel from "./components/Panel/Panel";

const App = (): JSX.Element => {
    const [panelActive, setPanelActive] = React.useState(false)

    const showPanel = () => {
        setPanelActive(!panelActive);
    };

    const closePanel = () => {
        setPanelActive(panelActive === false);
    }

    return (
        <section className={styles.banner} style={{backgroundImage: `url(${panelActive ? scale : video})`}}>
            {
                !panelActive && (
                    <div className={styles.frame}>
                        <p className={styles.headingFrame}
                           style={{width: 255}}>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО <br/>МАЛЫША! <br/>ПОДАРИТЕ ЕМУ СОБАКУ!</p>
                        <img className={styles.qrCode} src={qr}/>
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
                            {/*<img src={Line1} style={{paddingTop: 16, paddingLeft: 33, paddingRight: 33}}/>*/}
                            {/*<img src={Line2} style={{paddingTop: 16, paddingLeft: 33, paddingRight: 33}}/>*/}
                        </button>
                    </>
                )
            }
        </section>
    );
};

export default App;
