// TODO: 1. import dotenv เพื่อ import .env มาเป็น process.env
import 'dotenv/config';
import useServers from '#app/di/servers';
console.log("env port",process.env.APP_PORT);

const servers = useServers({}, {
    http: {
        port: process.env.APP_PORT,
        jwt: {
            secret: process.env.JWT_SECRET,
            algorithms: process.env.JWT_ALGORITHMS.split(','),
        },
        cors: {
            origin: process.env.CORS_ORIGIN,
        },
    },
});

servers.run();