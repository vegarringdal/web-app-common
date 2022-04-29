import { ApiInterface } from "../index";

export const aiWebRestApi: ApiInterface = {
    apiName: "WEB_REST_API",
    viewName: "AI_WEB_REST_API",
    project: null,
    accessUpdate: ["API_ADMIN"],
    accessInsert: ["API_ADMIN"],
    accessDelete: ["API_ADMIN"],
    modified: "MODIFIED",
    primaryKey: "ID",
    columns: [
        {
            name: "NAME",
            type: "text"
        },
        {
            name: "DATA",
            type: "text"
        },
        {
            name: "ENABLED",
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
