import { ApiInterface } from "../index";

export const aiWebUserApi: ApiInterface = {
    apiName: "WEB_USER",
    viewName: "AI_WEB_USER",
    project: null,
    accessUpdate: ["ACCESS_ADMIN"],
    accessInsert: ["ACCESS_ADMIN"],
    accessDelete: ["ACCESS_ADMIN"],
    modified: "MODIFIED",
    primaryKey: "ID",
    columns: [
        {
            name: "ID",
            type: "number",
            accessUpdate: []
        },
        {
            name: "USERNAME",
            type: "text"
        },
        {
            name: "FIRSTNAME",
            type: "text"
        },
        {
            name: "LASTNAME",
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
