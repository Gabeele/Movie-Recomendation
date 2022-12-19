FROM node:14-slim
WORKDIR /user/src/app
COPY ./package.json ./
#COPY ./yarn.lock ./
RUN npm install 
COPY . .
EXPOSE 5002
ENTRYPOINT [ "npm" ]
CMD ["start"]