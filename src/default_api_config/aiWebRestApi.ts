import { ApiInterface } from "../index";

export const aiWebRestApi: ApiInterface = {
    apiName: "WEB_REST_API",
    viewName: "AI_WEB_REST_API",
    accessUpdate: ["API_ADMIN"],
    accessInsert: ["API_ADMIN"],
    accessDelete: ["API_ADMIN"],
    primaryKey: "ID",
    primaryKeyType: "number",
    columns: [
        {
            name: "NAME"
        },
        {
            name: "DATA"
        },
        {
            name: "ENABLED"
        }
    ]
};
