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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.secondaryListItems = exports.mainListItems = void 0;
const Assignment_1 = __importDefault(require("@mui/icons-material/Assignment"));
const BarChart_1 = __importDefault(require("@mui/icons-material/BarChart"));
const Dashboard_1 = __importDefault(require("@mui/icons-material/Dashboard"));
const Layers_1 = __importDefault(require("@mui/icons-material/Layers"));
const People_1 = __importDefault(require("@mui/icons-material/People"));
const ShoppingCart_1 = __importDefault(require("@mui/icons-material/ShoppingCart"));
const ListItemButton_1 = __importDefault(require("@mui/material/ListItemButton"));
const ListItemIcon_1 = __importDefault(require("@mui/material/ListItemIcon"));
const ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
const ListSubheader_1 = __importDefault(require("@mui/material/ListSubheader"));
const React = __importStar(require("react"));
exports.mainListItems = (React.createElement(React.Fragment, null,
    React.createElement(ListItemButton_1.default, null,
        React.createElement(ListItemIcon_1.default, null,
            React.createElement(Dashboard_1.default, null)),
        React.createElement(ListItemText_1.default, { primary: "Dashboard" })),
    React.createElement(ListItemButton_1.default, null,
        React.createElement(ListItemIcon_1.default, null,
            React.createElement(ShoppingCart_1.default, null)),
        React.createElement(ListItemText_1.default, { primary: "Orders" })),
    React.createElement(ListItemButton_1.default, null,
        React.createElement(ListItemIcon_1.default, null,
            React.createElement(People_1.default, null)),
        React.createElement(ListItemText_1.default, { primary: "Customers" })),
    React.createElement(ListItemButton_1.default, null,
        React.createElement(ListItemIcon_1.default, null,
            React.createElement(BarChart_1.default, null)),
        React.createElement(ListItemText_1.default, { primary: "Reports" })),
    React.createElement(ListItemButton_1.default, null,
        React.createElement(ListItemIcon_1.default, null,
            React.createElement(Layers_1.default, null)),
        React.createElement(ListItemText_1.default, { primary: "Integrations" }))));
exports.secondaryListItems = (React.createElement(React.Fragment, null,
    React.createElement(ListSubheader_1.default, { component: "div", inset: true }, "Saved reports"),
    React.createElement(ListItemButton_1.default, null,
        React.createElement(ListItemIcon_1.default, null,
            React.createElement(Assignment_1.default, null)),
        React.createElement(ListItemText_1.default, { primary: "Current month" })),
    React.createElement(ListItemButton_1.default, null,
        React.createElement(ListItemIcon_1.default, null,
            React.createElement(Assignment_1.default, null)),
        React.createElement(ListItemText_1.default, { primary: "Last quarter" })),
    React.createElement(ListItemButton_1.default, null,
        React.createElement(ListItemIcon_1.default, null,
            React.createElement(Assignment_1.default, null)),
        React.createElement(ListItemText_1.default, { primary: "Year-end sale" }))));
//# sourceMappingURL=listItems.js.map