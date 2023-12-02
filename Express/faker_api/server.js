const express = require("express");
const app = express();
const port = 5000;


const { faker } = require('@faker-js/faker');
const createUserObject = () => ({
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.person.lastName(),
    firstName: faker.person.firstName(), 
    _id: faker.string.uuid(),   
    });
const createCompanyObject = () => ({
    _id: faker.string.uuid(),
    name: faker.company.name(),
    address: {
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipcode: faker.location.zipCode(),
        country: faker.location.country(),        
        }});

        const newFakeUser = createUserObject();
        app.get("/api/users/new", (req, res) => {
            res.json(newFakeUser);
        });
        const newFakeCompany = createCompanyObject();
        app.get("/api/companies/new", (req, res) => {
            res.json(newFakeCompany);
        });
        const newFake = {
            user : newFakeUser,
            company: newFakeCompany,
        };
        app.get("/api/user/company", (req,res)=>{
            res.json(newFake);
        });

app.listen( port, () => console.log(`Listening on port: ${port}`) );
