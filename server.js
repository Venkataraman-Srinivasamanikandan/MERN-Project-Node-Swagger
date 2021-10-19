require('dotenv').config();

const port = 8000;

const express = require('express'),
    logger = require('morgan'),
    cors = require('cors'),
    http = require('http'),
    fileUpload = require('express-fileupload');
(swaggerJsDoc = require('swagger-jsdoc')),
    (swaggerUi = require('swagger-ui-express'));


const app = express();

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        servers: [{
            url: 'http://localhost:8001/api/v1/',
            description: "Super admin"
        }],
        info: {
            title: "Chat Bot",
            description: "Chat bot",
            version: "1.0.0",
            contact: {
                name: "Venkataraman S",
                email: "aravindram.aravind@gmail.com"
            }
        },
        host: 'http://localhost:8000',
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        },
        security: [{
            bearerAuth: []
        }]
    },
    apis: ["./swaggerDoc/WEB/super_admin/*js"]
}

// view engine setup
app.use(logger('dev'));
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.enable('trust proxy')
app.use(cors());

var swaggerSpecification = swaggerJsDoc(swaggerOptions)
app.use('/api/v1/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpecification));

app.get("/", (req, res) => {
    return res.json({ msg: 'Hello' })
})

var server = http.createServer(app);
server.listen(port, () => console.log(`Express server running on port ` + port));

// error handler
app.use(function (err, req, res, next) {
    return res.status(err.status || 500).send(err.message);
});

module.exports = server;


