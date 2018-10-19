# build-time args
FROM node:8-alpine
ARG NODE_ENV=production
ARG EXPOSED_PORTS=3010

# run -time args
ARG app_name=blue-ice
ARG config=development
# create root directory
RUN mkdir -p /opt/${app_name}
WORKDIR /opt/${app_name}/

# add package.json
COPY yarn.lock ./
COPY package.json ./
RUN yarn install --frozen-lockfile --no-progress --production

# add compiled source
RUN mkdir ./app
COPY app ./app/

#add config
COPY .${app_name}rc ./

# set env
ENV NODE_ENV=${NODE_ENV}
ENV APP_CONFIG=${config}

EXPOSE ${EXPOSED_PORTS}

# start app
CMD yarn start
