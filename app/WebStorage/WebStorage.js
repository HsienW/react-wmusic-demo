export default class WebStorage {
    static setLocalStorage(key, value) {
        if (WebStorage.isBrowserSupport()) {
            localStorage.setItem(key, value);
        } else {
            throw new TypeError('Browser not support storage.');
        }
    }

    static getLocalStorage(key) {
        if (WebStorage.isBrowserSupport()) {
            return localStorage.getItem(key);
        }
        return null;
    }

    static removeLocalStorage(key) {
        if (WebStorage.isBrowserSupport()) {
            localStorage.removeItem(key);
        } else {
            throw new TypeError('Browser not support storage.');
        }
    }

    static clearLocalStorage() {
        if (WebStorage.isBrowserSupport()) {
            localStorage.clear();
        } else {
            throw new TypeError('Browser not support storage.');
        }
    }

    static setSessionStorage(key, value) {
        if (WebStorage.isBrowserSupport()) {
            sessionStorage.setItem(key, value);
        } else {
            throw new TypeError('Browser not support storage.');
        }
    }

    static getSessionStorage(key) {
        if (WebStorage.isBrowserSupport()) {
            return sessionStorage.getItem(key);
        }
        return null;
    }

    static removeSessionStorage(key) {
        if (WebStorage.isBrowserSupport()) {
            sessionStorage.removeItem(key);
        } else {
            throw new TypeError('Browser not support storage.');
        }
    }

    static clearSessionStorage() {
        if (WebStorage.isBrowserSupport()) {
            sessionStorage.clear();
        } else {
            throw new TypeError('Browser not support storage.');
        }
    }

    static isBrowserSupport() {
        return typeof (Storage) !== 'undefined';
    }
}
