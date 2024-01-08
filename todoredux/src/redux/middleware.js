const localStorageMiddleware = (store) => ((next) => ((action) => {
    const result = next(action);
 
    localStorage.setItem('todos', JSON.stringify(store.getState().todos));
  
    return result;
  }))
  
  export default localStorageMiddleware;