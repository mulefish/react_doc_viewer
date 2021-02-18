export const updateUserNames = name => ({
    type: "ADD_USER_NAME",
    payload: name
});

export const deleteUser = name => ({
    type: "DELETE_USER_NAME",
    payload: name
});
