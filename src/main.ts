import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { join } from "path";
import { existsSync, mkdirSync } from "fs";
import * as express from "express";

import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const uploadDir = join(process.cwd(), "uploads");
  if (!existsSync(uploadDir)) {
    mkdirSync(uploadDir);
  }

  const config = new DocumentBuilder()
    .setTitle("Blog API")
    .setDescription("Blog API description")
    .setVersion("1.0")
    .addTag("blog")
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, documentFactory);

  app.use("/uploads", express.static(join(process.cwd(), "uploads")));

  app.enableCors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: false
  });

  await app.listen(4000);
}
bootstrap();
