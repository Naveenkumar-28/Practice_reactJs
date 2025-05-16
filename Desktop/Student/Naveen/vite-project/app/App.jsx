
import { Router } from '../src/Componets/Router';
import {  RouterProvider} from "react-router-dom";
import { CounterProvider } from './CounterProvider';
import { RegisterProvider } from './FormProvider';

function App() {

  return (
    // <CounterProvider>
    //   <RouterProvider router={Router}/>
    // </CounterProvider>
    <RegisterProvider>
      <RouterProvider router={Router}/>  
    </RegisterProvider>
  )
}

export default App
