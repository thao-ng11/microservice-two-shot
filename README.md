## About The App:

Wardrobify is an app to keep track of the shoes and hats that you have. We broke the clothing article into microservices. And utilize RESTful APIs as therules and protocols to integrates the individual microservices so they function as a single application.

Team:

- Josh - microservice for shoes
- Thao - microservice for hats

## Design

Technologies

- Frontend frameworks- React
- Backend frameworks- Django
- DevOps- Docker
- API Testing- Insomnia

## Shoes microservice

We used Django to build out the model, views and incorporate some encoders to help incorporating the RESTful API
We then set up the frontend React and create a form for user to set up new shoes as well as a Delete button to remove data on screen

| Method | Path                 | Description                          |
| ------ | -------------------- | ------------------------------------ |
| POST   | /api/shoes/          | Create new shoe                      |
| GET    | /api/shoes/          | Get a list of all shoes              |
| DELETE | /api/shoes/<int:pk>/ | Get the details of one pair of shoes |

Shoes are stored inside of Bins which is part of the Wardrobe

## Hats microservice

We used Django to build out the model, views and incorporate some encoders to help incorporating the RESTful API
We then set up the frontend React and create a form for user to set up new hats as well as a Delete button to remove data on screen

| Method | Path                | Description              |
| ------ | ------------------- | ------------------------ |
| POST   | /api/hats/          | Create new hat           |
| GET    | /api/hats/          | Get a list of all hats   |
| DELETE | /api/hats/<int:pk>/ | Get the details of a hat |

Hats are stored inside of locations which is part of the Wardrobe
