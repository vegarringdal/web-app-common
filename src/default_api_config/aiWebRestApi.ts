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
            name: "ID",
            type: "number",
            accessUpdate: []
        },
        {
            name: "NAME",
            type: "text",
            accessUpdate: []
        },
        {
            name: "DATA",
            type: "text",
            readOnlyGrid: true
            // we only want update to happen with verify, so we have less errors
        },
        {
            name: "ENABLED",
            type: "text",
            isCheckbox: true,
            checkboxChecked: "1",
            checkboxUnchecked: null
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
