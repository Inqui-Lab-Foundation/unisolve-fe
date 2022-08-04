FROM node:16.15

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json package-lock.json ./

# Update npm to avoid warnings during build times
RUN npm install -g npm@8.15.1
# Do this to deprecate older versions of react, used by an airbnb lib
RUN npm config set legacy-peer-deps true
# Need this dependency to serve assets
RUN npm install -g serve


RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Build the app for production
RUN npm run build

EXPOSE 3000
CMD [ "serve","-s", "build" ]
