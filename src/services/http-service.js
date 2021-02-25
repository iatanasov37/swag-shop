import 'whatwg-fetch';

class HttpService {
    getProducts = () => {
        var promise = new Promise((resolve, reject) => {
            fetch('http://localhost:3004/product')
            .then(res => {
                // console.log(res.json()); - no promise
                resolve(res.json());

            });
        });
        
        return promise;

    }
}

export default HttpService;