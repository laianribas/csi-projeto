// import
import SignIn from 'views/Auth/SignIn.js'
import Billing from 'views/Dashboard/Billing'
import Dashboard from 'views/Dashboard/Dashboard'
import RTLPage from 'views/Dashboard/RTL'
import Tables from 'views/Dashboard/Tables'

import {
    CreditIcon,
    DocumentIcon,
    HomeIcon,
    PersonIcon,
    SupportIcon
} from 'components/Icons/Icons'

var dashRoutes = [{
        path: '/dashboard',
        name: 'Deshboard',
        rtlName: 'لوحة القيادة',
        icon: < HomeIcon color = "inherit" / > ,
        component: Dashboard,
        layout: '/admin'
    },
    {
        path: '/setor',
        name: 'Setor',
        rtlName: 'لوحة القيادة',
        icon: < CreditIcon color = "inherit" / > ,
        component: Tables,
        layout: '/admin'
    },
    {
        path: '/funcionario',
        name: 'Funcionario',
        rtlName: 'لوحة القيادة',
        icon: < PersonIcon color = "inherit" / > ,
        component: Billing,
        layout: '/admin'
    },
    {
        path: '/chamado',
        name: 'Chamado',
        rtlName: 'آرتيإل',
        icon: < SupportIcon color = "inherit" / > ,
        component: RTLPage,
        layout: '/admin'
    },
    {
        path: '/signin',
        rtlName: 'لوحة القيادة',
        icon: < DocumentIcon color = "inherit" / > ,
        component: SignIn,
        layout: '/auth'
    }
]
export default dashRoutes