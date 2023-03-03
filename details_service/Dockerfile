# specifies the base image to use
FROM node:18

# cd into this directory in the docker image (basically create it)
WORKDIR /details_service

# copies the package.json and package.lock.json into the ./details_service 
COPY package.*json ./

RUN npm install

# copies everything from our folder into the details_service folder on the image
COPY . .

# remember I am using type script so I need to build the app
RUN npm run build

# environment variable
ENV PORT=8000
ENV DB_URL=mongodb+srv://adminUser:adminPassword@todo-db.az8gh.mongodb.net/admin

EXPOSE 8000

# this actually starts the app, you can have a max of one CMD per file and it is recommended to put the commands in an array
CMD ["npm", "start"]