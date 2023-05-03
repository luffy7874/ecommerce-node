import Errors from './Errors';

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

    async submit(requestType, url, data, token){
        return await new Promise((resolve, reject) =>{
            axios[requestType](url, data, token)
            .then(response => {
                this.onSuccess(response.data);
                resolve(response.data);
            })
            .catch(error => {
                this.onFail(error.response.data.errors);
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
