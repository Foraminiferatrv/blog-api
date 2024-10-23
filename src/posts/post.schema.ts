import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Post extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  shortDescription: string;

  @Prop({ required: false })
  image?: string;

  @Prop({ required: true })
  content: string; // WYSIWYG content
}
export const PostSchema = SchemaFactory.createForClass(Post);
