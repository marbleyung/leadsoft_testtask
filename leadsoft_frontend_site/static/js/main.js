function getCurrentUrl() {
    return window.location.href
}

function generateUniqueIdentifier() {
    return 'user-' + Date.now();
}

function storeUniqueIdentifier(identifier) {
    localStorage.setItem('userIdentifier', identifier);
}

function getUniqueIdentifier() {
    let identifier = localStorage.getItem('userIdentifier');

    if (!identifier) {
        identifier = generateUniqueIdentifier();
        localStorage.setItem('userIdentifier', identifier);
        document.cookie = 'userIdentifier=' + encodeURIComponent(identifier) + '; path=/';

    }

    return identifier;
}

function parseCookies() {
    const cookieString = document.cookie;
    const cookieArray = cookieString.split(';');
    const cookies = {};

    for (let i = 0; i < cookieArray.length; i++) {
        const cookie = cookieArray[i].trim();
        const separatorIndex = cookie.indexOf('=');
        const name = cookie.substring(0, separatorIndex);
        const value = cookie.substring(separatorIndex + 1);
        cookies[name] = decodeURIComponent(value);
    }

    return cookies;
}

async function sendDataToServer(url, userIdentifier) {
    const data = {
        web_page_url: url,
        end_user_id: userIdentifier
    };
    try {
        const response = await axios.post(SERVER_URL, data);
        if (response.status === 200) {
            console.log('Data sent successfully');
        } else {
            console.log('Failed to send data');
        }
    } catch (error) {
        console.log('Error occurred while sending data:', error);
    }
}
const SERVER_URL = `http://127.0.0.1:8000/fetch-data/`
const url = getCurrentUrl()
const retrievedIdentifier = getUniqueIdentifier();
const allCookies = parseCookies();
const userIdentifier = allCookies['userIdentifier'];
sendDataToServer(url, userIdentifier)
