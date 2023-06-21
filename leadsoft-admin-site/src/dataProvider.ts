class WebSocketDataProvider {
    constructor() {
        this.apiUrl = `ws://127.0.0.1:8000/ws/send-data/`;
        this.socket = new WebSocket(this.apiUrl);
        this.socket.addEventListener('open', this.handleSocketOpen);
        this.socket.addEventListener('message', this.handleSocketMessage);
        this.socket.addEventListener('error', this.handleSocketError);
        this.socket.addEventListener('close', this.handleSocketClose);
    }

    handleSocketOpen = () => {
        console.log('WebSocket connection is open');
    };

    handleSocketMessage = (event) => {
        this.getList(event);
    };

    handleSocketError = (event) => {
        console.log('HandleSocketError', event)
    };

    handleSocketClose = (event) => {
        console.log('HandleSocketClose', event)
    };

    getList = (event) => {

        return new Promise((resolve, reject) => {
            const handleResponse = (event) => {
                const parsedResponse = JSON.parse(event.data);
                let response = {
                    data: [],
                    total: Object.keys(parsedResponse).length,
                }
                Object.entries(parsedResponse).forEach((key, value) => {
                    let obj = {
                        id: key[0],
                        urls: key[1],
                    }
                    response.data.push(obj);
                });
                resolve(response);
                this.socket.removeEventListener('message', handleResponse);
            }
            this.socket.addEventListener('message', handleResponse);
        });
    };

    getOne = (event) => {

        return new Promise((resolve, reject) => {
            const handleResponse = (event) => {
                const parsedResponse = JSON.parse(event.data);
                const href = location.href.split('/');
                const length = href.length
                const userId = href[length - 2]
                let response = {
                    data:
                    {
                        id: userId,
                        urls: parsedResponse.userId,
                    }
                }

                resolve(response);
                this.socket.removeEventListener('message', handleResponse);
            }
            this.socket.addEventListener('message', handleResponse);
        });
    };
}

const dataProvider = new WebSocketDataProvider;
export default dataProvider;
