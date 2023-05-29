import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
  // Rotas de autenticação
  Route.post('/login', 'EmployeesController.login');
  Route.post('/logout', 'AuthController.logout');

  Route.group(() => {
    // Rotas do funcionário
    Route.resource('employees', 'EmployeesController').apiOnly();

    // Rotas do setor
    Route.resource('department', 'DepartmentsController').apiOnly();

    // Rotas de chamados
    Route.group(() => {
      Route.get('/', 'CallsController.index');
      Route.post('/', 'CallsController.store');
      Route.get('/:id', 'CallsController.show');
      Route.put('/:id', 'CallsController.update');
      Route.delete('/:id', 'CallsController.destroy');

      // Rotas específicas para chamados por campus
      Route.get('/by-campus', 'CallsController.indexByCampus');

      // Rotas específicas para chamados por funcionário
      Route.get('/by-employee', 'CallsController.indexByEmployee');

      // Rotas específicas para chamados por setor
      Route.get('/by-department', 'CallsController.indexByDepartment');
    }).prefix('calls');
  }).middleware('auth');
}).prefix('/api/v1');
