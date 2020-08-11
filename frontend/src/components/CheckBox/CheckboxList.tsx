import React, { useState } from 'react'

import styles from './CheckboxList.module.css'
import Checkbox from './Checkbox'

interface Props {
  title: string
  checkboxList: { [key: string]: number }
}
const CheckboxList: React.FC<Props> = ({ title, checkboxList }: Props) => {
  const [checkList, setCheckList] = useState(checkboxList)
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className={styles.checkboxListContainer}>
      <label className={styles.title}>{title}s</label>
      <input
        value={searchTerm}
        className={styles.input}
        type="search"
        placeholder={`Search ${title}`}
        aria-label={`search in ${title}s`}
        onChange={e => setSearchTerm(e.currentTarget.value)}
      ></input>
      <div className={styles.list}>
        {Object.keys(checkboxList).map((e: string) => {
          if (e.toLowerCase().includes(searchTerm.toLowerCase())) {
            return <Checkbox key={e} value={e} count={checkList[e]}></Checkbox>
          } else null
        })}
      </div>
    </div>
  )
}

export default CheckboxList
