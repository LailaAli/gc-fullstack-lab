const INITIAL_STATE = {
    loading: true,
    buyItems: [
        { name: "Froot Loops", price: 4 },
        { name: "Crunch", price: 2 }
    ]
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        default:
            return state;
    }
}
