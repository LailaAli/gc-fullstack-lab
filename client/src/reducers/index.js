const INITIAL_STATE = {
    items: [{ name: "cookies", price: "4.36" },
    { name: "cake", price: "3.25" }
]
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        default:
            return state;
    }
}
