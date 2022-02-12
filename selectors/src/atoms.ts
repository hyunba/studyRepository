import { atom, selector } from "recoil";

export const minuteState = atom({
    key: "minutes",
    default: 0,
});

// selector에는 get 함수가 있다.
export const hourSelector = selector<number>({
    key: "hour",
    get: ({get}) => {
        const minutes = get(minuteState);
        return minutes / 60;
    },
    set: ({set}, newValue) => {
        const minutes = Number(newValue) * 60;
        set(minuteState, minutes);
    },
});