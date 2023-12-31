import { Logger } from 'nestjs-pino';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { ReservationsModule } from './reservations.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(ReservationsModule);
  const configService = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true })); // app validation
  app.useLogger(app.get(Logger)); // app logger
  app.use(cookieParser());
  await app.listen(configService.get('HTTP_PORT'));
}
bootstrap();
