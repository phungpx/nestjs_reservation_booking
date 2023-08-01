import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // tell the nest config module to load any ENVIRONMENT VARIABLES that we have in memory
    // and also to read in any dot m files we have in our directory.
    NestConfigModule.forRoot(),
  ],
})
export class ConfigModule {}
