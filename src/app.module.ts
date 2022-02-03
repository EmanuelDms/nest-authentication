import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { EnvModule } from './env/env.module';

@Module({
  imports: [AuthModule, EnvModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
