import {PRODUCT} from './type'

export const plusScore = (id) => {
    return {type: PRODUCT.PLUS, id: id}

}

export const minusScore = (id) => {
    return {type: PRODUCT.MINUS, id: id}
}
