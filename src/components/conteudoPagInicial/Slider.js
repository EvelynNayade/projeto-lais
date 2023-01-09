import styles from "./Slider.module.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa';


function Slider({customClass, ant, prx}){
    return (
        <div className={styles[customClass]}> 
          <div className={styles.setaE}> <FaArrowAltCircleLeft onClick={ant}/> </div>
          <div className={styles.setaD}> <FaArrowAltCircleRight onClick={prx}/> </div>
        </div>
      )
}

export default Slider