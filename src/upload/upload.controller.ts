import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("upload")
export class UploadController {
  @Post("/uploadImage")
  @UseInterceptors(FileInterceptor("file"))
  async uploadImage(@UploadedFile() file) {
    // const fileUrl = `http://localhost:3000/uploads/${file.filename}`;
    const fileId = file.filename;
    console.log({ fileId });

    return {
      fileName: file.filename
    };
  }
}
