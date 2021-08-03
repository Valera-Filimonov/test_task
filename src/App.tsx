import styles from './app.module.css';
import * as React from 'react';
import video from "./image/video.png";
import scale from "./image/scale.png"
import qr from "./image/qr1.png";

const App = (): JSX.Element => {
    const [panelActive, setPanelActive] = React.useState(true)

    const showPanel = () => {
        setPanelActive(!panelActive);
    };

    return (
        <section className={styles.banner} style={{backgroundImage: `url(${panelActive ? video : scale})`}}>
            {
                panelActive && (
                    <div className={styles.frame}>
                        <p className={styles.heading_frame}
                           style={{width: 255}}>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО <br/>МАЛЫША! <br/>ПОДАРИТЕ ЕМУ СОБАКУ!</p>
                        <img className={styles.qr_code} src={qr}/>
                        <p className={styles.text_invitation}
                           style={{width: 258}}>Сканируйте QR-код <br/>или нажмите ОК</p>
                        <button className={styles.button} onClick={showPanel}>ОК</button>
                    </div>
                )
            }
        </section>
    );
};

export default App;
