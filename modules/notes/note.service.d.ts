import { Note } from '../modules/core/schema/note.schema';
import { Model } from 'mongoose';
export declare class NoteService {
    private noteModel;
    constructor(noteModel: Model<Note>);
    Addnote: (notes: any) => Promise<{
        message: string;
        note: import("mongoose").MergeType<import("mongoose").Document<unknown, {}, Note> & Note & {
            _id: import("mongoose").Types.ObjectId;
        }, Omit<any, "_id">>[];
    }>;
    getAllnote: () => Promise<{
        message: string;
        note: (import("mongoose").Document<unknown, {}, Note> & Note & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    deletenote: (id: any) => Promise<{
        message: string;
        note: import("mongoose").Document<unknown, {}, Note> & Note & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    updateNote: (id: any, notse: any) => Promise<{
        message: string;
        note: import("mongoose").Document<unknown, {}, Note> & Note & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
}
