###### Poc typeScript:  
# CarSearch
## An api to search for cars and store their characteristics.

**Contact :** </br>
<a href="https://www.linkedin.com/in/dev-tadeuvelloso/" target="_blank">
    <img src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" height="35" alt="linkedin logo"  />
</a>

### To start the project follow the commands:
> 1- npm i 
> 2- configure the connection to the database and run the dump file on your terminal.
> 3- use the "npm run dev" command to power on the server.

##### Route documentation:

##### Route to pick up all cars.
>get("/cars")

##### Route to pick up the car you want.
>get("/cars/:carId")

##### Route to insert a new car to the list.
>post("/cars")
```
{
  "model": "ferrari 100",
  "plate": "50u-R1c00",
  "category": "sportive",
  "year": "2019",
  "brand": "ferrari",
  "price": "1000000",
  "color": "blue"
}
```

##### The update route, where the user sends the object with the new characteristics of the car via body and the id via params.
>put("/cars/:carId")
```
{
  "model": "ferrari f2",
  "plate": "50u-R1c0",
  "category": "sportive",
  "year": "2023",
  "brand": "ferrari",
  "price": "1000000",
  "color": "red"
}
```

##### Route to delete an item from the list with the id of the item sent via params
>delete("/cars/:carId")
