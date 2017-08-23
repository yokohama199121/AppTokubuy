
import {DataNews} from "../model/DataNews";

const defaultState = {
    dataNews: [
        new DataNews(1, require('../../res/img/girl1.jpg'),
            'ローマ',
            'わたしは',
            'わたしは、あなたを愛しています'
            , require('../../res/img/status1.jpg'),
            '08-15 05:31',0,10)
    ]
};

export const NewsReducer = (state = defaultState, action) => {
    if (action.type === 'LIKE') {
        let stateLike =  {
            ...state,
            dataNews: state.dataNews.map((item) => {
                if (item.id === action.id) {
                    return {...item, like: item.like + 1};
                } else {
                    return item;
                }
            })
        };
        return stateLike;
    }
    if (action.type === 'COMMENT') {
        let stateComment =  {
            ...state,
            dataNews: state.dataNews.map((item) => {
                if (item.id === action.id) {
                    return {...item, comment: item.comment + 1};
                } else {
                    return item;
                }
            })
        };
        return stateComment;
    }
    return state;
};