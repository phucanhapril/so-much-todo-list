export const compareByID = (a, b) => a.id - b.id;
export const getMaxID = (maxID, curr) => curr.id > maxID ? curr.id : maxID;
