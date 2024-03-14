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
import Pagination from './Pagination';
import ColorPicker from './ColorPicker';
import ResponsiveNavigation from './ResponsiveNavigation';
import LightDark from './LightDark';
import LightDarkComp from './LightDarkComp';
import { ThemeProvider } from './LightDarkThemeContext';

const App = () => {
  //const items = ['Alpha','Beta','Gama','Delta','Fifa'];
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
        {/*<FilterList items = {items}/>*/}
        {/*<Pagination items={items} itemsPerPage={2}/>*/}
        {/*<ColorPicker/>*/}
        {/*<ResponsiveNavigation/>*/}
        <ThemeProvider>
           <LightDark />
           <LightDarkComp />
        </ThemeProvider>
    </div>
  )
}

export default App
