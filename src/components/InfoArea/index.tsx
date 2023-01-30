import * as C from './style'
import NextArrow from '../../assets/next.png'
import PrevArrow from '../../assets/back.png'
import { formatCurrentMonth } from '../../helpers/dateFilter'
import { ResumeItem } from '../ResumeItem'
type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {


    const handleClickPrevMonth = () => {
        let [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        console.log(currentDate)
        currentDate.setMonth(currentDate.getMonth() - 1)
        console.log(currentDate)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }


    const handleClickNextMonth = () => {
        let [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        console.log(currentDate)
        currentDate.setMonth(currentDate.getMonth() + 1)
        console.log(currentDate)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handleClickPrevMonth}>
                    <img src={PrevArrow} alt="" />
                </C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={handleClickNextMonth}>
                    <img src={NextArrow} alt="" />
                </C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem title='Receita' value={income} />
                <ResumeItem title='Despesas' value={expense} />
                <ResumeItem
                    title='Balanço'
                    value={income - expense}
                    color={(income - expense) < 0 ? 'red' : 'green'}
                />
            </C.ResumeArea>
        </C.Container>
    )
}





