"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseParser = void 0;
const typedi_1 = require("typedi");
let ResponseParser = class ResponseParser {
    constructor() {
        this.resHttpCode = 200;
        this.resMessage = "";
        this.resCode = "SUC10000";
        this.resBody = {};
        this.resHeader = {};
    }
    /**
     * Method to set and send response back
     *
     * @param res
     */
    static parseAndSend(httpCode, status, message, code, data, res) {
        res.status(httpCode).json({
            status,
            message,
            code,
            data,
        });
    }
    /**
     * Setter for httpCode for response
     *
     * @param httpCode
     */
    setHttpCode(httpCode) {
        this.resHttpCode = httpCode;
        return this;
    }
    /**
     * Setter for message of response
     *
     * @param message
     */
    setMessage(message) {
        this.resMessage = message;
        return this;
    }
    /**
     * Setter for code of response
     *
     * @param message
     */
    setResponseCode(code) {
        this.resCode = code;
        return this;
    }
    /**
     * Setter for body of response
     *
     * @param body
     */
    setBody(body) {
        this.resBody = body;
        return this;
    }
    setResponseHeader(header) {
        this.resHeader = header;
        return this;
    }
    /**
     * Method to send response back
     *
     * @param res
     */
    send(res) {
        const headersToSet = Object.entries(this.resHeader);
        headersToSet.forEach((element) => {
            res.setHeader(element[0], element[1]);
        });
        return res.status(this.resHttpCode).json({
            message: this.resMessage,
            code: this.resCode,
            data: this.resBody,
        });
    }
};
ResponseParser = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [])
], ResponseParser);
exports.ResponseParser = ResponseParser;
