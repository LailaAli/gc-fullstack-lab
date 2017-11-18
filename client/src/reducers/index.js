const INITIAL_STATE = {
    items: [{ name: "cookies", price: "4.36" },
    { name: "cake", price: "3.25" }
]
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_ITEM":
            return addItem(state, action.item)

        default:
            return state;
    }
}

//This is the actual function that will add the itemss
function add(state, firstNumber, secondNumber) {
    const answer = firstNumber + secondNumber;
  
    return Object.assign({}, state, {
        answer: answer
    });
  }

//calculator reducer, contact card complete, cc fullstack