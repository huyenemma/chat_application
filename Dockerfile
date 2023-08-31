FROM denoland/deno:alpine-1.29.2

EXPOSE 7777

WORKDIR /app

COPY . .

RUN deno cache app.js

CMD [ "run", "--allow-net", "--allow-env", "--allow-read" ,"--watch", "--unstable", "app.js" ]