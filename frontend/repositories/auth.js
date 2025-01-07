// TODO: login repository
export function loginAPI(username, password) {
    return useFetchAPI('/auth/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        // body: {
        //     username,
        //     password,
        // },
    });
}