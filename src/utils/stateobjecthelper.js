export const getStateObject = (type, payload) => {
    return payload ? { type: type, payload: payload } : { type: type };
};

export const Actions = {
    UPDATE_WALLET: "UPDATE_WALLET",
};
