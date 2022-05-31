import { Request } from "express";

function obterToken(request: Request) {
  const bearerToken = request.headers.authorization
  const token = bearerToken?.split(' ')[1]
  return token
}

export { obterToken };

