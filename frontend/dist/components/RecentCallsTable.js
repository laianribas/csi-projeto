"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
const RecentCallsTable = ({ tickets }) => {
    return (react_1.default.createElement(material_1.TableContainer, { component: material_1.Paper },
        react_1.default.createElement(material_1.Table, null,
            react_1.default.createElement(material_1.TableHead, null,
                react_1.default.createElement(material_1.TableRow, null,
                    react_1.default.createElement(material_1.TableCell, null, "N\u00FAmero do Chamado"),
                    react_1.default.createElement(material_1.TableCell, null, "Data de Abertura"),
                    react_1.default.createElement(material_1.TableCell, null, "Status"),
                    react_1.default.createElement(material_1.TableCell, null, "Respons\u00E1vel"))),
            react_1.default.createElement(material_1.TableBody, null, tickets.map((ticket) => (react_1.default.createElement(material_1.TableRow, { key: ticket.id },
                react_1.default.createElement(material_1.TableCell, null, ticket.numero),
                react_1.default.createElement(material_1.TableCell, null, ticket.dataAbertura),
                react_1.default.createElement(material_1.TableCell, null, ticket.status),
                react_1.default.createElement(material_1.TableCell, null, ticket.responsavel))))))));
};
exports.default = RecentCallsTable;
//# sourceMappingURL=RecentCallsTable.js.map