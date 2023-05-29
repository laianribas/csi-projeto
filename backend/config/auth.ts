import Env from '@ioc:Adonis/Core/Env';

export default {
  guard: 'api',
  guards: {
    api: {
      driver: 'oat',
      provider: {
        driver: 'lucid',
        identifierKey: 'id',
        uids: ['login'],
        model: () => import('App/Models/Employee'),
      },
      tokenProvider: {
        type: 'api',
        driver: 'database',
        table: 'api_tokens',
        foreignKey: 'employee_id',
      },
    }
  }

};
