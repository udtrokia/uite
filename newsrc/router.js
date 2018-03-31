"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const react_navigation_1 = require("react-navigation");
const entrance_1 = __importDefault(require("./entrance"));
exports.default = react_navigation_1.StackNavigator({
    EntranceScreen: { screen: entrance_1.default }
});
