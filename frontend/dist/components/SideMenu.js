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
const ChevronLeft_1 = __importDefault(require("@mui/icons-material/ChevronLeft"));
const material_1 = require("@mui/material");
const Drawer_1 = __importDefault(require("@mui/material/Drawer"));
const List_1 = __importDefault(require("@mui/material/List"));
const react_1 = __importStar(require("react"));
const listItems_1 = require("./listItems");
const SideMenu = ({ open, onClose }) => {
    const [openDrawer, setOpenDrawer] = (0, react_1.useState)(false);
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpenDrawer(open);
    };
    return (react_1.default.createElement(Drawer_1.default, { anchor: "left", open: open, onClose: toggleDrawer(false) },
        react_1.default.createElement(material_1.Toolbar, { sx: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
            } },
            react_1.default.createElement(material_1.IconButton, { onClick: onClose },
                react_1.default.createElement(ChevronLeft_1.default, null))),
        react_1.default.createElement(material_1.Divider, null),
        react_1.default.createElement(List_1.default, { component: "nav" },
            listItems_1.mainListItems,
            react_1.default.createElement(material_1.Divider, { sx: { my: 1 } }),
            listItems_1.secondaryListItems)));
};
exports.default = SideMenu;
//# sourceMappingURL=SideMenu.js.map