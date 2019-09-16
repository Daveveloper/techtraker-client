export const loadState = () => {
  try {
    const serializedData = localStorage.getItem('state');
    if (serializedData === null) {
      // Si no existe el state en el local storage devolvemos undefined para que cargue el state initial.
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    let serializedData = JSON.stringify(state);
    localStorage.setItem('state', serializedData);
  } catch(error) {
    // Ignore errors.
  }
}
