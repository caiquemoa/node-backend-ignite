FROM node


WORKDIR /home/caiquemoa/app

COPY package.json ./

RUN npm install

COPY . .

RUN ["chmod", "+x", "./initialize.sh"]

ENTRYPOINT [ "./initialize.sh" ]