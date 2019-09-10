// import React, { useReduce } from 'react';

export const initialState = { 
    dataSet: [
    {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
},
{
    item: `Finish today's homework assignment`,
    completed: false,
    id: 3892987590
},
{
    item: 'Hit all the stretch goals',
    completed: false,
    id: 3892987591
    }
] }

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {...state, 
                newTodo: [...state.dataSet,
                    {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                } ] };
        default: 
            return state;
    }
}

