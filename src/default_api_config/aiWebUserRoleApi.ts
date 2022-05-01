import { ApiInterface } from "../index";

export const aiWebUserRoleApi: ApiInterface = {
    apiName: "WEB_USER_ROLE",
    viewName: "AI_WEB_USER_ROLE",
    project: null,
    accessUpdate: ["ACCESS_ADMIN"],
    accessInsert: ["ACCESS_ADMIN"],
    accessDelete: ["ACCESS_ADMIN"],
    modified: "MODIFIED",
    primaryKey: "ID",
    columns: [
        {
            name: "WEB_USER_ID",
            type: "number",
            accessUpdate: [],
            parentColumnsFromTo: [["_", "USERNAME"]]
        },
        {
            name: "NAME",
            label: "ROLE NAME",
            type: "text",
            // RELATED
            parentViewApi: "WEB_USER",
            parentTitle: "Select user",
            parentFrom: "ID",
            parentTo: "WEB_USER_ID",
            parentColumnsFromTo: [["USERNAME", "USERNAME"]]
        },
        {
            name: "WEB_ROLE_ID",
            type: "number",
            accessUpdate: [],
            parentColumnsFromTo: [["_", "CABLETYPE"]]
        },
        {
            name: "NAME",
            label: "ROLE NAME",
            type: "text",
            // RELATED
            parentViewApi: "WEB_ROLE",
            parentTitle: "Select role",
            parentFrom: "ID",
            parentTo: "WEB_ROLE_ID",
            parentColumnsFromTo: [["NAME", "NAME"]]
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
