"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
const LineChartComponent_1 = __importDefault(require("./LineChartComponent"));
const PieChartComponent_1 = __importDefault(require("./PieChartComponent"));
const RecentCallsTable_1 = __importDefault(require("./RecentCallsTable"));
const StatisticsCard_1 = __importDefault(require("./StatisticsCard"));
const cardData = [
    { title: 'Em Aberto', count: 12 },
    { title: 'Em Andamento', count: 8 },
    { title: 'Concluídos', count: 20 },
    { title: 'Cancelados', count: 5 },
];
const dataPieChart = [
    { setor: 'Setor A', chamados: 50 },
    { setor: 'Setor B', chamados: 30 },
    { setor: 'Setor C', chamados: 20 },
    { setor: 'Setor D', chamados: 10 },
];
const dataLineChart = [
    { mes: 'jan', 'Setor A': 50, 'Setor B': 30, 'Setor C': 20, 'Setor D': 10 },
    { mes: 'fev', 'Setor A': 40, 'Setor B': 20, 'Setor C': 10, 'Setor D': 5 },
    { mes: 'mar', 'Setor A': 30, 'Setor B': 10, 'Setor C': 5, 'Setor D': 2 },
    { mes: 'abr', 'Setor A': 20, 'Setor B': 5, 'Setor C': 2, 'Setor D': 1 },
];
const dataTickets = [
    {
        id: 1,
        numero: 'CHM-001',
        dataAbertura: '01/06/2023',
        status: 'Em Aberto',
        responsavel: 'João Silva',
    },
    {
        id: 2,
        numero: 'CHM-002',
        dataAbertura: '02/06/2023',
        status: 'Em Andamento',
        responsavel: 'Maria Santos',
    },
    {
        id: 3,
        numero: 'CHM-003',
        dataAbertura: '03/06/2023',
        status: 'Concluído',
        responsavel: 'Pedro Oliveira',
    },
    // Adicione mais objetos de chamados aqui
];
const HomeContent = () => {
    const isMediumScreen = (0, material_1.useMediaQuery)('(min-width: 960px)');
    return (react_1.default.createElement(material_1.Container, { maxWidth: "lg", sx: { mt: 3, mb: 4 } },
        react_1.default.createElement(material_1.Typography, { variant: "h6", gutterBottom: true, display: isMediumScreen ? 'initial' : 'flex', justifyContent: "center" }, "Chamados"),
        react_1.default.createElement(material_1.Grid, { container: true, spacing: { xs: 1, md: 2 }, columns: { xs: 4, sm: 8, md: 12 }, justifyContent: "center" }, cardData.map((data, index) => (react_1.default.createElement(material_1.Grid, { item: true, xs: 3, key: index },
            react_1.default.createElement(material_1.Box, null,
                react_1.default.createElement(StatisticsCard_1.default, { title: data.title, count: data.count })))))),
        react_1.default.createElement(material_1.Grid, { container: true, spacing: { xs: 1, md: 2 }, sx: { pt: 3 }, columns: { xs: 4, sm: 8, md: 12 }, justifyContent: "center" },
            react_1.default.createElement(material_1.Grid, { item: true, xs: 4 },
                react_1.default.createElement(material_1.Typography, { variant: "h6", gutterBottom: true, display: isMediumScreen ? 'initial' : 'flex', justifyContent: "center" }, "Chamados por Setor"),
                react_1.default.createElement(PieChartComponent_1.default, { data: dataPieChart })),
            react_1.default.createElement(material_1.Grid, { item: true, xs: 8 },
                react_1.default.createElement(material_1.Typography, { variant: "h6", gutterBottom: true, display: isMediumScreen ? 'initial' : 'flex', justifyContent: "center" }, "Evolu\u00E7\u00E3o dos Chamados por Setor"),
                react_1.default.createElement(LineChartComponent_1.default, { data: dataLineChart }))),
        react_1.default.createElement(material_1.Grid, { sx: { pt: 3 }, justifyContent: "center" },
            react_1.default.createElement(material_1.Typography, { variant: "h6", gutterBottom: true, display: isMediumScreen ? 'initial' : 'flex', justifyContent: "center" }, "Chamados Recentes"),
            react_1.default.createElement(RecentCallsTable_1.default, { tickets: dataTickets }))));
};
exports.default = HomeContent;
//# sourceMappingURL=HomeContent.js.map