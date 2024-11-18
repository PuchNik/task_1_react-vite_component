import { useState } from 'react'
import styles from './App.module.css'

export default function App() {

  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [isValueValid, setIsValueValid] = useState(true)
  const [list, setList] = useState([])

  const onInputButtonClick = () => {
    const promptValue = prompt('Введите значение: ')

    if (promptValue.length < 3) {
      setIsValueValid(true)
      setError('Введенное значение должно содержать минимум 3 символа')
    } else {
      setValue(promptValue)
      setIsValueValid(false)
      setError('')
    }
  }

  const onAddButtonClick = () => {
    const updatedList = [...list, { id: Date.now(), value }]
    setList(updatedList)
    setValue('')
  }

  return (
    <>
      <div className={styles.app}>
    <h1 className={styles['page-heading']}>Ввод значения</h1>
    <p className={styles['no-margin-text']}>
      Текущее значение <code>value</code>: <output className={styles['current-value']}>{value}</output>
    </p>
    <div className={styles.error}>{error}</div>
    <div className={styles['buttons-container']}>
      
      <button 
      onClick={onInputButtonClick} 
      className={styles.button}
      >
        Ввести новое
      </button>

      <button 
      className={styles.button} 
      disabled={isValueValid}
      onClick={onAddButtonClick}
      >
        Добавить в список
      </button>

    </div>
    <div className={styles['list-container']}>
      <h2 className={styles['list-heading']}>Список:</h2>

      <p className={styles['no-margin-text']}>
        {list.length === 0 ? 'Нет добавленных элементов' : ''}
      </p>

      <ul className={styles.list}>
        {list.map(({id, value}) => <li className={styles['list-item']} key={id}>{value}</li>)}
      </ul>
    </div>
  </div>
    </>
  )
}

