import React from 'react'
import ReactDOM from 'react-dom/client'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider  store={store}>
  <App/>
  <AddTodo/>
  <Todos />

 </Provider>
)
