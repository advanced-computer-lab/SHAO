import React from "react";
import { useTable } from 'react-table';
import ReactDOM from 'react-dom';
import Flight,{flightSchema} from '../../Models/Flight';

function tablecomp(){
    const data = React.useMemo(() =>
 [
     {
        FlightNumber:data.Flight.flightSchema.FlightNumber ,
        DepartureTime:data.Flight.flightSchema.DepartureTime,
        ArrivalTime:data.Flight.flightSchema.ArrivalTime,
        EconomySeats:data.Flight.flightSchema.EconomySeats,
        BusinessSeats:data.Flight.flightSchema.BusinessSeats,
        Airport:data.Flight.flightSchema.Airport

    
    }


 ])

 const columns = React.useMemo(
    () => [
         
            {
                Header: 'FlightNumber',
               
                accessor: 'FlightNumber',
                },
                {
                    Header: 'DepartureTime',
                   
                    accessor: 'DepartureTime',
                    },
                    {
                        Header: ' ArrivalTime',
                       
                        accessor: ' ArrivalTime',
                        },
                        {
                            Header: '  EconomySeats',
                           
                            accessor: '  EconomySeats',
                            },
                            {
                                Header: 'BusinessSeats ',
                               
                                accessor: ' BusinessSeats ',
                                },
                                {
                                    Header: '  Airport ',
                                   
                                    accessor: '   Airport ',
                                    },
        
    


                        




                
                      
          
    ])



//implement the the table

const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
   } = useTable({ columns, data })
   return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
   )}

   export default tablecomp