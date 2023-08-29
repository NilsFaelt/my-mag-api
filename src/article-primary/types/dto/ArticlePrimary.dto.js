"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ArticlePrimaryDto = void 0;
var class_validator_1 = require("class-validator");
var ArticlePrimaryDto = /** @class */ (function () {
    function ArticlePrimaryDto() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], ArticlePrimaryDto.prototype, "title");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], ArticlePrimaryDto.prototype, "text");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], ArticlePrimaryDto.prototype, "content");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], ArticlePrimaryDto.prototype, "image");
    __decorate([
        (0, class_validator_1.IsUUID)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], ArticlePrimaryDto.prototype, "authorId");
    __decorate([
        (0, class_validator_1.IsIn)(['travel', 'allaround', 'lifestyle', 'food']),
        (0, class_validator_1.IsNotEmpty)()
    ], ArticlePrimaryDto.prototype, "category");
    return ArticlePrimaryDto;
}());
exports.ArticlePrimaryDto = ArticlePrimaryDto;
