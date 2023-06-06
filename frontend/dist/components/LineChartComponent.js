"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
const recharts_1 = require("recharts");
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const LineChartComponent = ({ data }) => {
    return (react_1.default.createElement(material_1.Paper, { sx: { p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' } },
        react_1.default.createElement("div", { style: { width: '100%', height: 300 } },
            react_1.default.createElement(recharts_1.ResponsiveContainer, { width: "90%", height: 300 },
                react_1.default.createElement(recharts_1.LineChart, { width: 700, height: 300, data: data },
                    react_1.default.createElement(recharts_1.CartesianGrid, { strokeDasharray: "3 3" }),
                    react_1.default.createElement(recharts_1.XAxis, { dataKey: "mes" }),
                    react_1.default.createElement(recharts_1.YAxis, null),
                    react_1.default.createElement(recharts_1.Tooltip, null),
                    react_1.default.createElement(recharts_1.Legend, null),
                    Object.keys(data[0])
                        .filter((key) => key !== 'mes')
                        .map((setor, index) => (react_1.default.createElement(recharts_1.Line, { key: `line-${index}`, type: "monotone", dataKey: setor, stroke: COLORS[index % COLORS.length] }))))))));
};
exports.default = LineChartComponent;
//# sourceMappingURL=LineChartComponent.js.map