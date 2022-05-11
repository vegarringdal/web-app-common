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
            name: "ID",
            type: "number",
            accessUpdate: []
        },
        {
            name: "WEB_USER_ID",
            type: "number",
            parentColumnsFromTo: [["_", "USERNAME"]],
            setAsOptionalInGrid: true
        },
        {
            name: "USERNAME",
            label: "USERNAME",
            type: "text",
            // RELATED
            parentViewApi: "WEB_USER",
            parentTitle: "Select user",
            parentFrom: "ID",
            parentTo: "WEB_USER_ID",
            parentColumnsFromTo: [
                ["USERNAME", "USERNAME"],
                [, "WEB_USER_ID"] // todo, this should not be needed when its defined under ParentTo
            ]
        },
        {
            name: "WEB_ROLE_ID",
            type: "number",
            parentColumnsFromTo: [["_", "CABLETYPE"]],
            setAsOptionalInGrid: true
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
            parentColumnsFromTo: [
                ["NAME", "NAME"],
                [, "WEB_ROLE_ID"] // todo, this should not be needed when its defined under ParentTo
            ]
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
