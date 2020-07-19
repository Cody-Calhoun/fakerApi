const express = require('express');
const faker = require('faker');



class User{
    constructor(num){
        this.id = num;
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        // this.email = faker.
        this.password = faker.random.word();
    }
}

class Company{
    constructor(num){
        this.id = num;
        this.name = faker.company.companyName(); 
        this.street = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();

    }
}

const app = express();
const port = 8000;

// app.get("/api/welcome", (req,res) => {
//     res.json({ message: "welcome"});
// })

// app.get("/api/hello/:name", (req,res) => {
//     let variablefromroute = req.params.name;
//     res.json({ message : `Hello, ${variablefromroute}`});
// })

app.get("/api/users/new", (req,res) => {
    var people = [];
    for(let i=0; i<10; i++){
        people.push(new User(i));
    }
    res.json({ message: "yeet", results: people })
});

app.get("/api/companies/new", (req,res) => {
    let company = [];
    for(let i =0; i < 10; i++){
        company.push(new Company(i));
    }
    res.json({message : "company", results: company })

});

app.get("/api/user/company", (req,res) =>{
    let combo = [];
    for( let i = 0; i < 10; i++){
        combo.push(new User(i));
        combo.push(new Company(i));
    }
    res.json({ message: "combo", results : combo })
});


app.listen(port, () => console.log("this is a log"));