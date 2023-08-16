import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Observable, catchError, map, tap } from 'rxjs';
import { AUTH_SERVICE } from '../constants';
import { ClientProxy } from '@nestjs/microservices';
import { Reflector } from '@nestjs/core';
import { UserDto } from '../dto';

@Injectable()
// https://docs.nestjs.com/guards#authorization-guard
export class JwtAuthGuard implements CanActivate {
  // need to actually reach out to auth microservice to determine if this JWT is valid and get the associated user.
  // we're going to assume that any service that uses this JWT auth guard is also going to have a client proxy available to inject for this auth service, which is how we talk to other microservices in this nestjs architecture.
  constructor(
    @Inject(AUTH_SERVICE) private readonly authClient: ClientProxy,
    private readonly reflector: Reflector,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const jwt = context.switchToHttp().getRequest().cookies?.Authentication;
    if (!jwt) {
      return false;
    }
    return this.authClient
      .send<UserDto>('authenticate', {
        Authentication: jwt,
      })
      .pipe(
        tap((res) => {
          context.switchToHttp().getRequest().user = res;
        }),
        map(() => true),
        // catchError(() => of(false)),
      );
  }
}
