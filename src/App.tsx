import { useState } from 'react'
import styles from './App.module.css'
import powered from './assets/img/powered.png'
import leftArrow from './assets/img/leftarrow.png'
import { levels, calculeteIMC, Level } from './helpers/imc'
import { GridItem } from './components/GridItem'


const App = () => {
  const [heightField, setHeigthField] = useState<number>(0)
  const [weigthField, setWeightField] = useState<number>(0)
  const [toShow, setToShow] = useState<Level | null>(null) 
  
  const handleCalculateButton = () => {
    if(heightField && weigthField) {
      setToShow(calculeteIMC(heightField, weigthField))
    } else {
      alert("Preencha todos os campos!")
    }
  }

  const handleBackButton = () => {
    setToShow(null)
    setHeigthField(0)
    setWeightField(0)
  }
  
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={powered} width={55}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o IMC.</h1>
          <p>O Índice de Massa Corporal (IMC) é uma medida utilizada para avaliar o peso corporal de uma pessoa em relação à sua altura. Ele é calculado dividindo o peso corporal em quilogramas pelo quadrado da altura em metros. </p>
          <input 
            type="number" 
            placeholder="Digite a sua altura. Ex: 1.70 (em metros)"
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeigthField(Number(e.target.value))}
            disabled={toShow ? true : false}
          />
          <input 
            type="number" 
            placeholder="Digite seu peso. Ex: 68.6 (em kg)"
            value={weigthField > 0 ? weigthField : ''}
            onChange={e => setWeightField(Number(e.target.value))}
            disabled={toShow ? true : false}
          />
          <button onClick={handleCalculateButton} disabled={toShow ? true : false}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
              {levels.map((item, index) => (
                <GridItem key={index} data={item} />
              ))}
            </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrow} width={25} />
              </div>
              <GridItem data={toShow} />
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default App