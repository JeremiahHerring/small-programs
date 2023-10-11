// -------------------
// Cookies - small text file stored on computer
// Used to remember information about the user
// Saved in name=value pairs
// -------------------

// console.log(navigator.cookieEnabled);

// document.cookie = "firstName=Patrick; expires=Sun, 1 January 2030 12:00:00 UTC; path=/"
// document.cookie = "lastName=Star; expires=Sun, 1 January 2000 12:00:00 UTC; path=/"
// console.log(document.cookie)

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookiesBtn = document.querySelector("#cookiesBtn");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
});

cookiesBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
});

function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function deleteCookie(name) {
    setCookie(name, null, -1); // To delete a cookie, set a negative expiration time.
}

function getCookie(name) {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;

    cArray.forEach(element => {
        if (element.startsWith(name + "=")) {
            result = element.substring(name.length + 1);
        }
    });

    return result;
}