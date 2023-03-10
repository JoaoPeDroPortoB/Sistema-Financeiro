import { Item } from "../types/Item";

export const getCurrentMonth = () => {
    let now = new Date();
    console.log(`${now.getFullYear()}-${now.getMonth() + 1}`)
    return `${now.getFullYear()}-${now.getMonth() + 1}`

}


export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = []
    let [year, month] = date.split('-')

    for (let i in list) {
        if (
            list[i].date.getFullYear() === parseInt(year) &&
            list[i].date.getMonth() === parseInt(month)
        ) {
            newList.push(list[i]);
        }
    }
    console.log(newList)
    return newList
}

export const formatDate = (date: Date) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`

}

const addZeroToDate = (n: number) => n < 10 ? `0${n}` : n


export const formatCurrentMonth = (currentMonth: string) => {
    let [year, month] = currentMonth.split('-')
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return `${months[parseInt(month) - 1]} - ${year}`
}   