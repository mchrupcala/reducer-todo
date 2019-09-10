// import React, { useReduce } from 'react';

export const initialState = [
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
]

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {...state, 
                newTodo: {
                    item: action.payload,
                    completed: false,
                    id: 124983753
                }};
        default: 
            return state;
    }
}

