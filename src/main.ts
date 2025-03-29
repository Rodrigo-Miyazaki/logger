import { setupApm } from './infra/apm/apm.agent';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

if (process.env.ELASTIC_APM_ACTIVE === 'true') {
  setupApm();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
