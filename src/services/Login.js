import store from "../storage/store";

const login = (username, password, setVisible, setText) => {
    const details = {
        'username': username,
        'password': password,
    };
    let formBody = [];
    for (const property in details) {
        const encodedKey = encodeURIComponent(property);
        const encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = '?' + formBody.join("&");
    fetch("/auth/login" + formBody, {
        method: 'POST',
    }).then(response => response.text().then(text => {
            if (response.ok) {
                store.dispatch({type: "CHANGE_TOKEN", value: text})
            } else if (response.status === 403) {
                setVisible(true)
                setText(text)
            } else {
                setVisible(true)
            }
        })
    )
}
const logout = () =>{
    localStorage.clear()
    store.dispatch({type: "CHANGE_TOKEN", value: {token: null}})
    window.location.reload(false);
}
export {logout, login};
