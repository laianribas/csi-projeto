"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
const StatisticsCard = ({ title, count }) => {
    return (react_1.default.createElement(material_1.Card, { sx: { minWidth: 200 } },
        react_1.default.createElement(material_1.CardContent, null,
            react_1.default.createElement(material_1.Typography, { variant: "h6", component: "div" }, title),
            react_1.default.createElement(material_1.Typography, { variant: "h4", component: "div" }, count)),
        react_1.default.createElement(material_1.CardActions, null,
            react_1.default.createElement(material_1.Button, { size: "small" }, "Learn More"))));
};
exports.default = StatisticsCard;
//# sourceMappingURL=StatisticsCard.js.map