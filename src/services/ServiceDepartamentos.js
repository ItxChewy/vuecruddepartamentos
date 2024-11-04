import Global from "@/Global";
import axios from "axios";

export default class ServiceDepartamentos {

    getDepartamentos() {
        return new Promise(function (resolve) {
            let departamentos = [];
            let request = "api/departamentos"

            axios.get(Global.urlDepartamento + request).then(response => {
                departamentos = response.data
                resolve(departamentos)
            })
        })
    }

    getDepartamentoId(iddepartamento) {
        return new Promise(function (resolve) {
            let departamento = [];
            let request = "api/departamentos/" + iddepartamento;
            axios.get(Global.urlDepartamento + request).then(response => {
                departamento = response.data
                resolve(departamento)
            })
        })
    }

    postDepartamentos(departamento) {
        return new Promise(function (resolve){
            let request = "api/departamentos"
            axios.post(Global.urlDepartamento + request, departamento).then(response =>{
                resolve(response);
            })
        })
    }

    putDepartamentos(departamento){
        return new Promise(function(resolve){
            let request = "api/departamentos"
            axios.put(Global.urlDepartamento + request,departamento).then(response=>{
                resolve(response)
            })
        })
    }

    deleteDepartamento(iddepartamento){
        return new Promise(function(resolve){
            let request = "api/departamentos/" + iddepartamento
            axios.delete(Global.urlDepartamento + request).then(()=>{
                resolve()
            })
        })
    }
}