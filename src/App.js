import React from 'react';
import Counter from './Counter';
import Form from './Form';
import Itemlist from './Itemlist';
import Toggle from './Toggle';
import FetchapiData from './FetchapiData';
import Timer from './Timer';
import TodoList from './TodoList';
import Changecolor from './Changecolor';
import Routing from './Routing';
import FileUploader from './FileUploader';
import Authentication from './Authentication';
import Weather from './Weather';
import FilterList from './FilterList';

const App = () => {
  //for FilterList 
  const items = ['Alpha','Beta','Gama','Delta','Fifa'];
  return (
    <div>
        {/*<Counter />*/}
        {/*<Form />*/}
        {/*<Itemlist />*/}
        {/*<Toggle />*/}
        {/*<FetchapiData />*/}
        {/*<Timer/>*/}
        {/*<TodoList />*/}
        {/*<Changecolor />*/}
        {/*<Routing />*/}
        {/*<FileUploader />*/}
        {/*<Authentication />*/}
        {/*<Weather />*/}
        // using props here
        <FilterList items = {items}/>
    </div>
  )
}

export default App
