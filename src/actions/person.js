export const addPerson = (persons) => {
    return {
        type: 'ADD_PERSONS',
        payload: persons
    }
}