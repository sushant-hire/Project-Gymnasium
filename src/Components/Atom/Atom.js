import { atom } from "recoil";

export const Data = atom({
    key: 'Data',
    default: false
})

export const Data2 = atom({
    key: "sub",  //20
    default: false

})

export const Data3 = atom({
    key: "sub1",
    default: false

})

export const Data4 = atom({
    key: "subscribeData",
    default: {
        isSubScribe20: false,
        isSubScribe50: false,
        plan: 0
    }

})
