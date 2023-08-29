"use strict";
exports.__esModule = true;
exports.AllowedUrlsMiddleware = void 0;
var common_1 = require("@nestjs/common");
var AllowedUrlsMiddleware = /** @class */ (function () {
    function AllowedUrlsMiddleware() {
        this.allowedUrls = ['http://localhost:3001'];
    }
    AllowedUrlsMiddleware.prototype.use = function (req, res, next) {
        var origin = req.headers.origin;
        var referer = req.headers.referer;
        console.log(origin, referer);
        if (!this.allowedUrls.includes(origin) &&
            !this.allowedUrls.includes(referer)) {
            throw new common_1.ForbiddenException('Access denied.');
        }
        next();
    };
    return AllowedUrlsMiddleware;
}());
exports.AllowedUrlsMiddleware = AllowedUrlsMiddleware;
