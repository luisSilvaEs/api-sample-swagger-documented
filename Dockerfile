#Consider this file will rise a server (our container) with node in an new Alpine OS
#Use your computer node version, however it will run on Alpine Linux OS
FROM node:21-alpine 

#This folder is created when container is up and it will place our node app inside
WORKDIR /app

#Copy our app node dependencies file (but do depending what you are using) to the image
COPY package*.json ./

#To execute commands
RUN npm install

#Takes all of current directory and copy to the ./app
COPY . .

#Indicate port to use in the container, actually it is just informative since the real port our node app is using is indicated...
# in index.js file in line 16
#I had EXPOSE 3000 and either work it worked.
EXPOSE 8888

#Since this is going to be prod, is not necessary to watch the changes, therfore we are using node to run the app
CMD [ "node", "index.js" ]
