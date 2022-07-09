FROM node


WORKDIR /home/caiquemoa/app

COPY package.json ./

RUN yarn

COPY . .

RUN ["chmod", "+x", "./initialize.sh"]

ENTRYPOINT [ "./initialize.sh" ]
