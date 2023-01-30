import { useEffect, useState } from 'react'
import * as C from './appStyles'
import { InfoArea } from './components/InfoArea'
import { InputArea } from './components/InputArea'
import { TableArea } from './components/TableArea'
import { categories } from './data/categories'
import { items } from './data/items'
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter'
import { Item } from './types/Item'


const App = () => {
  
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [expense, setExpense] = useState(0)
  const [income, setIncome] = useState(0)

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  console.log(filteredList)

  useEffect(() => {
    let incomeCount = 0
    let expenseCount = 0

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value
      } else {
        incomeCount += filteredList[i].value
      }
    }
    setExpense(expenseCount)
    setIncome(incomeCount)

  }, [filteredList])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list]
    newList.push(item)
    setList(newList)
    console.log(newList)
  }

  

  return (
    <C.container>
      <C.TitleApplication>
        <h1>Sistem ++</h1>
      </C.TitleApplication>


      <InfoArea
        currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
        income={income}
        expense={expense}
      />

      <InputArea onAdd={handleAddItem} />

      <C.AreaAdded>
        <TableArea list={filteredList} />
      </C.AreaAdded>
    </C.container >
  )
}

export default App
