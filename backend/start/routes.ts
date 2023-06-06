import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
  // Rotas de autenticação
  Route.post('/login', 'EmployeesController.login');
  Route.post('/logout', 'AuthController.logout');

  Route.group(() => {
    // Rotas do funcionário
    Route.resource('employees', 'EmployeesController').apiOnly();

    // Rotas do setor
    Route.resource('departments', 'DepartmentsController').apiOnly();

    // Rotas de chamados
    Route.group(() => {
      Route.get('/', 'CallsController.index').middleware('permission:Resgatar todos chamados');
      Route.post('/', 'CallsController.store').middleware('permission:Cadastrar chamado');
      Route.get('/:id', 'CallsController.show');
      Route.put('/:id', 'CallsController.update');
      Route.patch('/:id', 'CallsController.update');
      Route.delete('/:id', 'CallsController.destroy');

      // Rotas específicas para chamados por campus
      Route.get('/by-campus', 'CallsController.indexByCampus');

      // Rotas específicas para chamados por funcionário
      Route.get('/by-employee', 'CallsController.indexByEmployee');

      // Rotas específicas para chamados por setor
      Route.get('/by-department', 'CallsController.indexByDepartment');
    }).prefix('calls');

    // Rotas para Position
    Route.get('/positions', 'PositionsController.index');
    Route.get('/positions/:id', 'PositionsController.show');
    Route.put('/positions/:id', 'PositionsController.update');
    Route.patch('/positions/:id', 'PositionsController.update');
  }).middleware('auth');
}).prefix('/api/v1');
