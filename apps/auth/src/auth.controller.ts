import { Response } from 'express';
import { Controller, Post, Res, UseGuards } from '@nestjs/common';

import { CurrentUser } from '@app/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { UserDocument } from './users/models/users.schema';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard) // which will actually execute a given guard, so we want to pass in our STRATEGY here to make sure that our STRATEGY we just created runs before we actually execute this LOGIN route.
  @Post('login')
  async login(
    @CurrentUser() user: UserDocument,
    @Res({ passthrough: true }) response: Response,
  ) {
    const jwt = await this.authService.login(user, response);
    response.send(jwt);
  }

  // add a new route in this controller and it's going to use the MESSAGE PATTERN decorator
  //, which is going to allow us to accept incoming RPC calls on our chosen transport layer.
  // @payload will extract the current payload for this message pattern.
  @UseGuards(JwtAuthGuard)
  @MessagePattern('authenticate')
  async authenticate(@Payload() data: any) {
    // console.log(data);
    return data.user;
  }
}
