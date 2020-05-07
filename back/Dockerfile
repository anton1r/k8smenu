FROM node:alpine
WORKDIR /home/node

# using wildcard (*) to copy both package.json and package-lock.json
COPY package*.json /home/node/
RUN npm ci

# create and set app directory as current dir
WORKDIR /home/node/app
COPY src/ /home/node/app/
EXPOSE 3000
ENTRYPOINT [ "node" ]
CMD ["./server.js"]