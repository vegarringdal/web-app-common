import { ApiInterface } from "../index";

export const aiWebUserApi: ApiInterface = {
    apiName: "WEB_USER",
    viewName: "AI_WEB_USER",
    accessUpdate: ["ACCESS_ADMIN"],
    accessInsert: ["ACCESS_ADMIN"],
    accessDelete: ["ACCESS_ADMIN"],
    primaryKey: "ID",
    columns: [
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
        }
    ]
};
