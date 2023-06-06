import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Position from 'App/Models/Position'

export default class PermissionMiddleware {
  public async handle(
    { auth, response }: HttpContextContract,
    next: () => Promise<void>,
    allowedPermissions: string[]
  ) {
    const user = auth.user

    if (!user) {
      return response.unauthorized({ error: 'Unauthorized' })
    }

    const position = await Position.query()
      .where('id', user.positionId)
      .preload('permissions')
      .firstOrFail()

    const userPermissions = position.permissions.map((permission) => permission.description)

    const hasPermission = allowedPermissions.every((permission) => userPermissions.includes(permission))

    if (!hasPermission) {
      return response.unauthorized({ error: 'Insufficient permissions' })
    }

    await next()
  }
}
