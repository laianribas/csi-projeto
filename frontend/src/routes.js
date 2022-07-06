// import
import SignIn from 'views/Auth/SignIn'
import Funcionario from 'views/Dashboard/Funcionario'
import Dashboard from 'views/Dashboard/Dashboard'
import Chamado from 'views/Dashboard/Chamado'
import Setor from 'views/Dashboard/Setor'

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
        icon: < HomeIcon color = "inherit" / > ,
        component: Dashboard,
        layout: '/admin'
    },
    {
        path: '/setor',
        name: 'Setor',
        icon: < CreditIcon color = "inherit" / > ,
        component: Setor,
        layout: '/admin'
    },
    {
        path: '/funcionario',
        name: 'Funcionario',
        icon: < PersonIcon color = "inherit" / > ,
        component: Funcionario,
        layout: '/admin'
    },
    {
        path: '/chamado',
        name: 'Chamado',
        icon: < SupportIcon color = "inherit" / > ,
        component: Chamado,
        layout: '/admin'
    },
    {
        path: '/signin',
        icon: < DocumentIcon color = "inherit" / > ,
        component: SignIn,
        layout: '/auth'
    }
]
export default dashRoutes