import { ApiInterface } from "../index";

export const aiWebRoleApi: ApiInterface = {
    apiName: "WEB_ROLE",
    viewName: "AI_WEB_ROLE",
    accessUpdate: ["ACCESS_ADMIN"],
    accessInsert: ["ACCESS_ADMIN"],
    accessDelete: ["ACCESS_ADMIN"],
    primaryKey: "ID",
    columns: [
        {
            name: "NAME",
            type: "text"
        },
        {
            name: "DESCRIPTION",
            type: "text"
        }
    ]
};
