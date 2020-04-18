From node:13.12.0-alpine3.10
Expose 3000

WORKDIR /usr/src/app

COPY . .

RUN npm install && \
    npm run build

# Running the app
CMD [ "npm", "start" ]
