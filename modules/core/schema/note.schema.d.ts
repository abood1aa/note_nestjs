import mongoose from "mongoose";
export declare class Note {
    title: string;
    description: string;
    user: string;
}
export declare const NoteSchema: mongoose.Schema<Note, mongoose.Model<Note, any, any, any, mongoose.Document<unknown, any, Note> & Note & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Note, mongoose.Document<unknown, {}, mongoose.FlatRecord<Note>> & mongoose.FlatRecord<Note> & {
    _id: mongoose.Types.ObjectId;
}>;
