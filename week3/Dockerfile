FROM --platform=$BUILDPLATFORM node:20-slim
WORKDIR /app
COPY package*.json ./
RUN npm i 
COPY . .
# RUN npx sequelize-cli db:migrate
# RUN npx sequelize-cli db:seed:all
EXPOSE 80/tcp
CMD [ "node", "index.js" ]