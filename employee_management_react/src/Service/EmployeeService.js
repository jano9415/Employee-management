import axios from 'axios';

class EmployeeService{

    //Összes alkalmazott lekérése
    getEmployees(){
        return axios.get("http://localhost:8080/employees");
    }

    //Új alkalmazott hozzáadása
    addNewEmployee(actualEmployee){
        return axios.post("http://localhost:8080/addnewemployee" , actualEmployee);

    }

    //Keresés id szerint
    findById(id){
        return axios.get("http://localhost:8080/findbyid/" + id);
    }

    //Alkalmazott valamely adatának módosítása
    updateEmployee(id , modifiedEmployee){
        return axios.put("http://localhost:8080/updateemployee/" + id , modifiedEmployee);

    }

    //Alkalmazott törlése
    deleteEmployee(id){
        return axios.delete("http://localhost:8080/deleteemployee/" + id);
    }

}

export default new EmployeeService()