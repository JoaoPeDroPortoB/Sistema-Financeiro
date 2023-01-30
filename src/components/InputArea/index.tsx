import { useState } from 'react'
import { Item } from '../../types/Item'
import { Category } from '../TableItem/style'
import { categories } from '../../data/categories'
import * as C from './style'
import { v4 as uuidv4 } from 'uuid'


type Props = {
    onAdd: (item: Item) => void
}
export const InputArea = ({ onAdd }: Props) => {


    let categoryKeys: string[] = Object.keys(categories)

    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(data),
            category: categoria,
            title: titulo,
            value: valor,
            id: uuidv4()
        }
        onAdd(newItem)

    }


    const [data, setData] = useState('')
    const [categoria, setCategoria] = useState('')
    const [titulo, setTitulo] = useState('')
    const [valor, setValor] = useState(0)

    console.log(categoryKeys)
    return (
        <C.Container>
            <C.Infos>
                <div>Data</div>
                <input type="date" value={data} onChange={e => setData(e.target.value)} />
            </C.Infos>
            <C.Infos>
                <div>Categoria</div>
                <select value={categoria} onChange={e => setCategoria(e.target.value)}>
                    <>
                        <option></option>
                        {categoryKeys.map((key, index) => (
                            <option key={index} value={key}>{categories[key].title}</option>
                        ))}
                    </>
                </select>
            </C.Infos>
            <C.Infos>
                <div>Titulo</div>
                <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} />
            </C.Infos>
            <div> Valor</div>
            <input type="number" value={valor} onChange={e => setValor(parseInt(e.target.value))} />
            <C.Infos>

            </C.Infos>
            <button onClick={handleAddEvent}>Adicionar</button>
        </C.Container>
    )
}



/*  Criar os campos e colocar os values deles em um state, 
criamos um Onchange para conseguir pegar os dados atualizados, 
depois setamos esses dados para nossos states.

*/

