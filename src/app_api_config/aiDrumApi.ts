import { ApiInterface } from "../index";

export const aiDrumApi: ApiInterface = {
    apiName: "DRUM",
    viewName: "AI_DRUM",
    accessUpdate: ["API_ADMIN"],
    accessInsert: ["API_ADMIN"],
    accessDelete: ["API_ADMIN"],
    modified: "MODIFIED",
    primaryKey: "ID",
    columns: [
        {
            name: "TNAME",
            type: "text"
        },
        {
            name: "CABLETYPE_ID",
            type: "number"
        },
        {
            name: "DRUM_RECIVED",
            type: "date"
        },
        {
            name: "LENGTH_RECIVED",
            type: "number"
        },
        {
            name: "LENGTH_LOST",
            type: "number"
        },
        {
            name: "USE_METERMARKING",
            type: "text"
        },
        {
            name: "COMMENT_FOREMAN",
            type: "text"
        },
        {
            name: "COMMENT_STORAGE",
            type: "text"
        },
        {
            name: "LOCATION",
            type: "text"
        },
        {
            name: "LOCATION_COMMENT",
            type: "text"
        },
        {
            name: "MODIFIED",
            type: "date",
            accessUpdate: []
        },
        {
            name: "MODIFIED_BY",
            type: "text",
            accessUpdate: []
        },
        {
            name: "CREATED",
            type: "date",
            accessUpdate: []
        },
        {
            name: "CREATED_BY",
            type: "text",
            accessUpdate: []
        }
    ]
};
