export const logger = (store) => (next) => (action) =>{
    if (!action.type) {
        return next(action);
    }

    console.log("Action type is :",action.type);
    console.log("Action payload is : ",action.payload);
    console.log("Current state is : ",store.getState());

    next(action);

    console.log("Next state is : ",store.getState());
}