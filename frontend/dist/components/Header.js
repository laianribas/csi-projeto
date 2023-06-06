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
const AccountCircle_1 = __importDefault(require("@mui/icons-material/AccountCircle"));
const Brightness4_1 = __importDefault(require("@mui/icons-material/Brightness4"));
const Brightness7_1 = __importDefault(require("@mui/icons-material/Brightness7"));
const Menu_1 = __importDefault(require("@mui/icons-material/Menu"));
const Notifications_1 = __importDefault(require("@mui/icons-material/Notifications"));
const material_1 = require("@mui/material");
const AppBar_1 = __importDefault(require("@mui/material/AppBar"));
const Badge_1 = __importDefault(require("@mui/material/Badge"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const react_1 = __importStar(require("react"));
const SideMenu_1 = __importDefault(require("./SideMenu"));
const ScrollableList = (0, material_1.styled)(material_1.List)(({ theme }) => ({
    maxHeight: '250px',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
        width: '8px',
    },
    '&::-webkit-scrollbar-track': {
        background: theme.palette.background.default,
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[600] : theme.palette.primary.main,
        borderRadius: '8px',
    },
    scrollBehavior: 'smooth',
    '-webkit-overflow-scrolling': 'touch',
}));
const Header = ({ onToggleTheme, isDarkMode }) => {
    const anchorRef = (0, react_1.useRef)(null);
    const [showNotifications, setShowNotifications] = (0, react_1.useState)(false);
    const [openMenu, setOpenMenu] = (0, react_1.useState)(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
    const handleNotificationsClick = () => {
        setShowNotifications(true);
    };
    const ThemeIcon = isDarkMode ? Brightness7_1.default : Brightness4_1.default;
    const notifications = [
        'Notificação 1',
        'Notificação 2',
        'Notificação 3',
        'Notificação 4',
        'Notificação 4',
        'Notificação 4',
        'Notificação 4',
        'Notificação 4',
        'Notificação 4',
        // Adicione mais notificações aqui
    ];
    return (react_1.default.createElement(AppBar_1.default, { position: "static" },
        react_1.default.createElement(SideMenu_1.default, { open: openMenu, onClose: toggleMenu }),
        react_1.default.createElement(Toolbar_1.default, null,
            react_1.default.createElement(IconButton_1.default, { edge: "start", color: "inherit", "aria-label": "menu", onClick: toggleMenu },
                react_1.default.createElement(Menu_1.default, null)),
            react_1.default.createElement(Typography_1.default, { variant: "h6", component: "div", sx: { flexGrow: 1 } }, "Logo"),
            react_1.default.createElement(IconButton_1.default, { color: "inherit", onClick: onToggleTheme },
                react_1.default.createElement(ThemeIcon, null)),
            react_1.default.createElement(IconButton_1.default, { color: "inherit", onClick: handleNotificationsClick, ref: anchorRef },
                react_1.default.createElement(Badge_1.default, { badgeContent: notifications.length, color: "warning" },
                    react_1.default.createElement(Notifications_1.default, null))),
            react_1.default.createElement(material_1.Popover, { open: showNotifications, anchorEl: anchorRef.current, onClose: () => setShowNotifications(false), anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                }, transformOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                } },
                react_1.default.createElement(ScrollableList, null, notifications.map((notification, index) => (react_1.default.createElement(react_1.default.Fragment, { key: index },
                    react_1.default.createElement(material_1.ListItemButton, { component: material_1.Button }, notification),
                    index !== notifications.length - 1 && react_1.default.createElement(material_1.Divider, null)))))),
            react_1.default.createElement(IconButton_1.default, { color: "inherit" },
                react_1.default.createElement(AccountCircle_1.default, null)))));
};
exports.default = Header;
//# sourceMappingURL=Header.js.map