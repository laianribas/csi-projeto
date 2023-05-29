import { AuthContract } from '@ioc:Adonis/Addons/Auth';

export default class LogoutService {
  private auth: AuthContract;

  constructor(auth: AuthContract) {
    this.auth = auth;
  }

  /**
   * Realiza o logout do usuário autenticado.
   */
  public async execute() {
    // Executa o logout do usuário autenticado
    await this.auth.use('api').logout();
  }
}
