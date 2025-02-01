export function getProfileAPI() {
    return useFetchAPI('/profile', {
        transform: (response) => response.data,
    });
}

// method: 'patch' คือการ update บางส่วน
export function saveProfileAPI(profile, token) {
    return useFetchAPI('/profile', {
        method: 'patch',
        headers: {
            authorization: `Bearer ${token}`,
        },
        body: profile,
    });
}