"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const connection_1 = require("./connection/connection");
const routes_1 = require("./routes");
class Server {
    constructor() {
        this.router = new routes_1.Routes();
        this.app = (0, express_1.default)(); // init the application
        this.configuration();
        this.routes();
        this.router.routes(this.app);
        connection_1.AppDataSource.initialize()
            .then(() => {
            // db initialized
            // console.log("DB Connected!!");
        })
            .catch((err) => {
            throw new Error(`'Database connection error: ${err}`);
        });
    }
    configuration() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.set("port", process.env.PORT || 8080);
            this.app.use(express_1.default.json());
        });
    }
    /**
     * Method to configure the routes
     */
    routes() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.get("/", (req, res) => {
                res.send("Hello world!");
            });
            this.app.use(bodyParser.urlencoded({ extended: false }));
            this.app.use(bodyParser.json());
        });
    }
    /**
     * Used to start the server
     */
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.listen(this.app.get("port"), () => {
                // console.log(`Server is listening ${this.app.get("port")} port.`);
            });
        });
    }
}
const server = new Server(); // Create server instance
server.start(); // Execute the server
