export function fetchUserDatas() {
    return fetch("http://localhost:4000/data").then((response) =>
        response.json()
    );
}