# README

API documented using Swanggergit
This is a simple API app running on its own Docker container. The app run on Node Alpine and uses Express to start up the app and Mongo DB as data base to store data.
MongoDB runs in its own container and uses a volume to storage data

## Set Up

_You must have Docker Desktop already installed_

1. Clone this repo
2. Open this repo in a terminal and navigate inside API folder
3. Build the image typing `docker build -t api-node-container .`
4. After the image was built type: `docker compose up` to start up the container. In terminal you should see following output:
   **Mongo DB Connection Successful +**
5. Open your browser and paste the following URL [http://localhost:5001/api/todoapp/](http://localhost:5001/api/todoapp/). It should show a white screen with the message:
   **Cannot GET /api/todoapp**

## How to use

Integrate with your front end app, for example a React app. The app handles the verbs GET, POST and DELETE and use the following 3 endpoints:

> http://localhost:5001/api/todoapp/GetNotes

> http://localhost:5001/api/todoapp/AddNotes

> http://localhost:5001/api/todoapp/DeleteNotes

### Use for DEV

Repository uses _Dockerfile.dev_ and _docker-compose-dev.yml_ to work for development. The only difference is that _Dockerfile.dev_ download _nodemon_ dependency in the container and the uses _nodemon_ command to run the app. Also notice that _docker-compose-dev.yml_ indicates in line 10 to use the _Dockerfile.dev_ file.
_nodemon_ is used to watch the changes and any change made on the index.js file will be automatically reflected in the container app. With this, dev use is simulated avoiding to have to stop, delete the image, rebuilt it and then create and start a new container.
Having said this, to run for dev in terminal type:

`docker compose -f docker-compose-dev.yml up`

where:

- _-f_ indicates to docker to use a custom file
- _docker-compose-dev.yml_ is the name of custom file to start up the docker only for dev and
- _up_ to star up the container

### Use for PROD

Unlike DEV use now _Dockerfile_ and _docker-compose.yml_ are used to create start the container but for PROD. The only difference is that now is use _node_ to start up the applicacion, simulating to move to a PROD env where the app should not change.
Therefore to run the app:

1. Get the id of current images: `docker images`
2. Delete the image using the id `docker rmi idImage`
3. Start the new container (this will generate a new image): `docker compose up`

- To see Swagger documentation go to [http://localhost:5001/api-docs/](http://localhost:5001/api-docs/)
- To use the API, the endpoint in your front end app should address to:
  - [http://localhost:5001/api/todoapp/GetNotes](http://localhost:5001/api/todoapp/GetNotes)
  - [http://localhost:5001/api/todoapp/AddNotes](http://localhost:5001/api/todoapp/AddNotes)
  - [http://localhost:5001/api/todoapp/DeleteNotes](http://localhost:5001/api/todoapp/DeleteNotes)

### How to update

When making updates in Swagger, in order to validate in real time you can omit the use of Docker and:

1. Run the app `nodemon index.js`
2. Make the change and validate the chages are reflected correclty in [http://localhost:8888/api-docs/#/Notes/post_api_todoapp_AddNotes](http://localhost:8888/api-docs/#/Notes/post_api_todoapp_AddNotes)
3. Reload or restar the app.

After changes are done on the node app and to validate before a new release to Prod you should:

1. Save the changes
2. Stop all container `docker compose down`
3. Delete the image _api-sample-documented-sample-node-api_ by `docker rmi idImage`
4. Re start up the container with `docker compose up`, this will create a new image having the changes made on Node

### Important notes

- The app listens internally port 8888 but is mapped the use the 5001 port of Docker.

### How to stop the container

Open a new tab in terminal and type:
`docker compose down`

## References

- [Learn Docker](https://www.youtube.com/watch?v=CV_Uf3Dq-EU)
- [Images used to learn about images](https://www.youtube.com/watch?v=pg19Z8LL06w&t=2912s)
- [Watch and reflect changes in app in docker](https://youtu.be/4Dko5W96WHg?si=Z-HCOucrObvj_mLo&t=4959)
