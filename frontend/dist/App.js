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
const CssBaseline_1 = __importDefault(require("@mui/material/CssBaseline"));
const styles_1 = require("@mui/material/styles");
const useMediaQuery_1 = __importDefault(require("@mui/material/useMediaQuery"));
const React = __importStar(require("react"));
const Header_1 = __importDefault(require("./components/Header"));
const HomePage_1 = __importDefault(require("./components/HomePage"));
function App() {
    const prefersDarkMode = (0, useMediaQuery_1.default)('(prefers-color-scheme: dark)');
    const [isDarkMode, setIsDarkMode] = React.useState(prefersDarkMode);
    const handleThemeToggle = () => {
        setIsDarkMode(!isDarkMode);
    };
    const theme = React.useMemo(() => (0, styles_1.createTheme)({
        palette: {
            mode: isDarkMode ? 'dark' : 'light',
        },
    }), [isDarkMode]);
    React.useEffect(() => {
        setIsDarkMode(theme.palette.mode === 'dark');
    }, [theme.palette.mode]);
    return (React.createElement(styles_1.ThemeProvider, { theme: theme },
        React.createElement(CssBaseline_1.default, null),
        React.createElement(Header_1.default, { onToggleTheme: handleThemeToggle, isDarkMode: isDarkMode }),
        React.createElement(HomePage_1.default, null)));
}
exports.default = App;
//# sourceMappingURL=App.js.map