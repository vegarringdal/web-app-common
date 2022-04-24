import { ApiInterface } from "../index";

export const aiWebUserRoleApi: ApiInterface = {
    apiName: "WEB_USER_ROLE",
    viewName: "AI_WEB_USER_ROLE",
    accessUpdate: ["ACCESS_ADMIN"],
    accessInsert: ["ACCESS_ADMIN"],
    accessDelete: ["ACCESS_ADMIN"],
    primaryKey: "ID",
    columns: [
        {
            name: "WEB_USER_ID",
            type: "number",
            hiddenByDefault: true
        },
        {
            name: "WEB_ROLE_ID",
            type: "number",
            hiddenByDefault: true
        },
        {
            name: "NAME",
            label: "ROLE NAME",
            type: "text"
        }
    ]
};
