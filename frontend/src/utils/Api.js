class Api {
    constructor({ headers }) {
        this._headers = headers;
    }

    _renderRes(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res.status);
    }

    getPrediction(data) {
        return fetch('/predict', {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data)
        })
            .then(res => this._renderRes(res))
    }
}

const api = new Api({
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;