import { Level } from '../../helpers/imc'
import styles from './GridItem.module.css'
import upImage from '../../assets/img/up.png'
import downImage from '../../assets/img/down.png'


type Props = {
  data: Level
}

export const GridItem = ({ data } : Props) => {
  return (
    <div className={styles.main} style={{backgroundColor: data.color}}>
      <div className={styles.gridIcon}>
        <img src={data.icon === 'up' ? upImage : downImage} width="30"/>
      </div>
      <div className={styles.gridTitle}>{data.title}</div>
      {data.yourImc &&
        <div className={styles.yourImc}>Seu IMC é de {data.yourImc.toFixed(2)} kg/m².</div>
      }
      <div className={styles.gridInfo}>
        <>
        O IMC está entre <strong>{data.imc[0]} e <strong>{data.imc[1]}</strong></strong>
        </>
      </div>

    </div>
  )
}