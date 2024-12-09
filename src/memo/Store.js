import { configureStore } from '@reduxjs/toolkit';
import { format } from 'date-fns';

// 初期データ
const initData = {
    data: [{ memo: 'default memo', createTime: format(new Date(), 'yyyy/MM/dd HH:mm:ss') }],
    information: 'Please add your memo.',
    mode: 'default',
    fdata: []
};

// reducer
export function memoReducer(state = initData, action) {
    switch (action.type) {
        case 'ADD':
            return addReduce(state, action);
        case 'DELETE':
            return deleteReduce(state, action);
        case 'SEARCH':
            return searchReduce(state, action);
        default:
            return state;
    }
}

function addReduce(state, action) {
    let data = {
        memo: action.text,
        createTime: format(new Date(), 'yyyy/MM/dd HH:mm:ss')
    };
    let newdata = state.data.slice();
    newdata.unshift(data);
    return {
        data: newdata,
        information: 'Add memo successfully!',
        mode: 'default',
        fdata: []
    };
}

function searchReduce(state, action) {
    let text = action.text;
    let fdata = [];
    let flg = false;
    let resultInfo = '';
    state.data.forEach(element => {
        if (element.memo.indexOf(text) >= 0) {
            fdata.push(element);
            flg = true;
        }
    });
    if (text === '') {
        resultInfo = 'Clear sucessfully.'
    } else {
        if (flg === true) {
            resultInfo = 'Find memo successfully. word : ' + text;
        } else {
            resultInfo = 'Failed to find memo. word : ' + text;
        }
    }

    return {
        data: state.data,
        information: resultInfo,
        mode: 'search',
        fdata: fdata
    };
}

function deleteReduce(state, action) {
    let newdata = state.data.slice();
    newdata.splice(action.index, 1);
    return {
        data: newdata,
        information: 'Delete memo successfully!',
        mode: 'delete',
        fdata: []
    };
}

// Action creators
export function addMemo(ptext) {
    return {
        type: 'ADD',
        text: ptext
    };
}

export function deleteMemo(pindex) {
    return {
        type: 'DELETE',
        index: pindex
    };
}

export function searchMemo(ptext) {
    return {
        type: 'SEARCH',
        text: ptext
    };
}

// configureStoreでRedux storeを作る
const store = configureStore({
    reducer: memoReducer
});

export default store;
