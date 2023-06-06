"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
const recharts_1 = require("recharts");
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const PieChartComponent = ({ data }) => {
    return (react_1.default.createElement(material_1.Paper, { sx: { p: 2, display: 'flex', justifyContent: 'center', marginBottom: '20px' } },
        react_1.default.createElement(recharts_1.PieChart, { width: 300, height: 300 },
            react_1.default.createElement(recharts_1.Pie, { data: data, dataKey: "chamados", nameKey: "setor", cx: "50%", cy: "50%", outerRadius: 80, fill: "#8884d8", label: true }, data.map((entry, index) => (react_1.default.createElement(recharts_1.Cell, { key: `cell-${index}`, fill: COLORS[index % COLORS.length] })))),
            react_1.default.createElement(recharts_1.Legend, { verticalAlign: "bottom", height: 36 }),
            react_1.default.createElement(recharts_1.Tooltip, null))));
};
exports.default = PieChartComponent;
//# sourceMappingURL=PieChartComponent.js.map