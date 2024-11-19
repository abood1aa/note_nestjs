import { NoteService } from './note.service';
import { notedto, paramdto } from './node.dto';
export declare class NoteController {
    private _NoteService;
    constructor(_NoteService: NoteService);
    addnote(body: notedto): Promise<{
        message: string;
        note: import("mongoose").MergeType<import("mongoose").Document<unknown, {}, import("../modules/core/schema/note.schema").Note> & import("../modules/core/schema/note.schema").Note & {
            _id: import("mongoose").Types.ObjectId;
        }, Omit<any, "_id">>[];
    }>;
    getnote(): Promise<{
        message: string;
        note: (import("mongoose").Document<unknown, {}, import("../modules/core/schema/note.schema").Note> & import("../modules/core/schema/note.schema").Note & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    update(param: paramdto, body: notedto): Promise<{
        message: string;
        note: import("mongoose").Document<unknown, {}, import("../modules/core/schema/note.schema").Note> & import("../modules/core/schema/note.schema").Note & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    delet(param: paramdto): Promise<{
        message: string;
        note: import("mongoose").Document<unknown, {}, import("../modules/core/schema/note.schema").Note> & import("../modules/core/schema/note.schema").Note & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
}
