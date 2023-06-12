import Errors from './Error';
import axios from 'axios';

const token = localStorage.getItem('token');

const header = {
    headers : {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
    }
}

const API_URL = process.env.REACT_APP_SERVER_URI;

class Form {

    constructor(data) {

        this.originalData = data;

        for(let field in data){

            this[field] = data[field];

        }
        this.errors = new Errors();
    }

    data(){

        let data = {};

        for(let property in this.originalData){
            data[property] = this[property];
        }

        return data;
    }

    reset(){
        for (let field in this.originalData){
            this[field] = '';
        }
        this.errors.clear();
    }

    get(uri){
        return this.submit('get', uri, header)
    }

    post(uri, data){
        return this.submit('post', uri, data, header)
    }

    put(uri, data){
        return this.submit('put', uri, data, header)
    }

    delete(uri){
        return this.submit('delete', uri, header)
    }

    async submit(requestType, url, data, header){
        return await new Promise((resolve, reject) =>{
            axios[requestType](API_URL+url, data, header)
            .then(response => {
                this.onSuccess(response.data);
                resolve(response.data);
            })
            .catch(error => {
                this.onFail(error.response.data);
                reject(error.response.data);
            })
        })
    }

    onSuccess(response){
        // alert(response.data.message);

        this.reset();
    }

    onFail(errors){
        this.errors.record(errors);
    }

}

export default Form;
