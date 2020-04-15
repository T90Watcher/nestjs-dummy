import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.port);
  console.log('app listening on port: ' + process.env.port);
}
bootstrap();
