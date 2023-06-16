import { NestFactory } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const appController = app.select(AppModule).get(AppController);
  appController.parseDiseaseFile();
}
bootstrap();
