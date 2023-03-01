FROM node:18

# working dir on the image
WORKDIR /popular_shows_service

# copies the package.json and package.lock.json into the ./details_service 
COPY package.*json ./

RUN npm install

COPY . .

# remember I am using type script so I need to build the app
RUN npm run build

# environment variable
ENV PORT=8001

EXPOSE 8001

# start the app
CMD ["npm", "start"]