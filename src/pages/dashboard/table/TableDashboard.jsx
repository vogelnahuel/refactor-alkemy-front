import React from 'react'
import {TitleDashboard} from '../../../utils/constants'
import "./dashboardTable.scss"

export const TableDashboard = ({ dashboard }) => {

    return (
        <table className='table-admin'>
            <thead>
                <tr>
                    {
                        TitleDashboard.map(element =>
                            <th key={element}>
                                {element}
                            </th>
                        )
                    }
                </tr>
            </thead>
            <tbody>

                {
                   dashboard ? dashboard.map(element => (
                        <tr key={element._id}>
                            <td>{element.description} </td>
                            <td>{element.amount} </td>
                            <td>{element.date} </td>
                            <td>{element.incomeType} </td>
                            <td>{element.category} </td>
                        </tr>
                    ))
                    :
                    <tr>
                        <td className='no-result' colSpan={5}>No obtuvimos resultados  :(</td>
                    </tr>
                }


            </tbody>
        </table>

    )
}
