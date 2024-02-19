export const getToken = () => {
    const token = JSON.parse(localStorage.getItem("SVR_CREDENTIALS"));
    return token
}