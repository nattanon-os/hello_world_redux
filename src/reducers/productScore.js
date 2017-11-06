import {PRODUCT} from '../actions/type'
let productScore = {
    datas: []
}

export function reducers(state = productScore, action) {
    var newState = Object.assign({}, state);
    switch (action.type) {
        case PRODUCT.PLUS:
            newState.datas = newState
                .datas
                .map((data) => {
                    if (data.id === action.id) {
                        return {
                            id: data.id,
                            name: data.name,
                            score: data.score + 1
                        };
                    }
                    return data;
                });
            return newState;

        case PRODUCT.MINUS:
            newState.datas = newState
                .datas
                .map((data) => {
                    if (data.id === action.id) {
                        return {
                            id: data.id,
                            name: data.name,
                            score: data.score - 1
                        };
                    }
                    return data;
                });
            return newState;
        case PRODUCT.GET_ALL:
            newState.datas = action.data
            return newState;
        default:
            return newState;
    }
}
