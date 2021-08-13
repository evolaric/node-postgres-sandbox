## Basic Node and Postgres Sandbox

This repository is something I cooked up for personal use while learning typescript and unit testing to allow for quick prototyping and experimentation. It implements a few key libraries:

1. Express.js
2. Typescript
3. Jasmine (with Supertest for endpoint testing)
4. Prettier
5. Eslint

All of the libraries and tools have a basic configuration and should be ready to roll. Just clone this repository, install the dependencies with `npm install`, run the docker-compose file with `docker-compose -f "docker-compose.yml" up -d --build`, and then run `npm start` to get experimenting right away.

**Scripts**

- `npm start` (or `npm run start`) - as mentioned above, starts the app via nodemon for hot reloading.
- `npm run build` - runs the Typescript compiler on all .ts files in the `/src` directory, as well as the test spec files. If a build folder does not exist, it will be created at `/build` in the project root.
- `npm run test` - builds the Typescript files and runs Jasmine on the compiled files. The template contains one test, which uses Supertest to make sure the very basic express.js server is listening.
- `npm run prettier` - formats your `/src` files using a simple configuration found in `.prettierrc`.
- `npm run lint` - runs `eslint` on all the .ts files and fixes non-compliant code as defined in `.eslintrc`.

**Contributing**

If you notice anything incorrect, or a cleaner way to accomplish something in this repo, please feel free to offer feedback or issue a pull request. Any help would be appreciated.
