import {PRODUCT} from './type'

export const plusScore = (id) => {
    return {type: PRODUCT.PLUS, id: id}

}

export const minusScore = (id) => {
    return {type: PRODUCT.MINUS, id: id}
}

export const getAllAsync = () => {
    return (dispatch) => {
        setTimeout(() => {
            console.log('fetch data')
            dispatch(getAll())
        }, 5000)
    }
}

export const getAll = () => {
    //
    return {
        type: PRODUCT.GET_ALL,
        data: [
            { id: 1, name: 'demo' },
            { id: 2, name: 'yo' }
        ]
    }
    // const data = [
    //     {
    //         id: 1,
    //         name: 'facebook',
    //         score: 1
    //     }, {
    //         id: 2,
    //         name: 'google',
    //         score: 1
    //     }
    // ]
    // setTimeout(function () {

    //     return (d) {type: PRODUCT.GET_ALL, data: data}
    // }, 2000);
}
