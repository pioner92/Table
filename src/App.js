import React, {useState, useEffect} from 'react';
import './App.css';
import Tables from './components/Tables/Tables';
import Header from './components/Header/Header';
import Filter_items from './utils/Filter_items';


const App = () => {

    const [pagination, setPagination] = useState({start: 0, end: 10})
    const [data, setData] = useState([])
    const [newData, setNewData] = useState([])
    const [value, setValue] = useState('')
    const [TableValue, setTableValue] = useState(1)
    const [TableNumber, setTableNumber] = useState(1)

    const onChangeHandler = (e) => {    // Track input
        setValue(e.target.value)
    }
    const SelectTableValue = (e) => {    // Selection of filter options
        setTableValue(+(e.target.value))
    }

    const SelectTableNumber = (e) => {   //  Table selection
        setTableNumber(+e.target.value)
    }

    const onSearch = () => {
        setNewData(Filter_items(TableNumber, TableValue, newData, value))   // call function Filter_items
        Pagination()

    }

    const Pagination = (index = 0) => {
        let end = 10 * (index + 1)
        let start = end - 10
        setPagination({start, end})

    }

    useEffect(() => {      // Connect and change data
        fetch('http://localhost:3012/table')
            .then((response) => {
                return response.json()
            })
            .then((data) => setData(data))
    }, [value, TableNumber, TableValue])

    useEffect(() => {             // initialization newData
        setNewData(data)
    }, [data])

    return (
        <div className='App'>
            <Header
                TableNumber={TableNumber}
                SelectTableNumber={SelectTableNumber}
                SelectTableValue={SelectTableValue}
                Search={onSearch}
                onChangeHandler={onChangeHandler}
                value={value}
            />
            <Tables
                Pagination={Pagination}
                dataAll={newData}
                dataFilter_Pagination={newData.slice(pagination.start, pagination.end)}
            />
        </div>
    );
}


export default App;
