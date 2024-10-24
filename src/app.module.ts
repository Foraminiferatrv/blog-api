import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PostsModule } from "./posts/posts.module";
import { MongooseModule } from "@nestjs/mongoose";
import * as dotenv from "dotenv";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { UploadModule } from "./upload/upload.module";

dotenv.config({ path: process.cwd() + "/.env.development" });

const apiModules = [PostsModule, UploadModule];
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule, ...apiModules],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>("MONGODB_URI"),
        onConnectionCreate: () => console.log("🍃 MongoDB connected")
      })
    })
  ],

  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
