import { ApiInterface } from "../index";

export const aiWebRoleApi: ApiInterface = {
    apiName: "WEB_ROLE",
    viewName: "AI_WEB_ROLE",
    accessUpdate: ["ACCESS_ADMIN"],
    accessInsert: ["ACCESS_ADMIN"],
    accessDelete: ["ACCESS_ADMIN"],
    modified: "MODIFIED",
    primaryKey: "ID",
    columns: [
        {
            name: "NAME",
            type: "text"
        },
        {
            name: "DESCRIPTION",
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
