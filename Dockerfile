FROM node:14.15.5-alpine3.13

RUN mkdir -p /home/app

# set default dir so that next commands executes in /home/app dir
WORKDIR /home/app

# Copy only the package*.json files -> Docker's layer concepts
COPY ./package*.json ./

# will execute npm install in /home/app because of WORKDIR
RUN npm install --production

# Upload the data -> changes more often than versions
COPY ./dist ./

EXPOSE 8096

# no need for /home/app/server.js because of WORKDIR
CMD ["node", "./server.js"]
