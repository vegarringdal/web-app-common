/**
 * IMPORTANT
 * DO NOT IMPORT ANY MODULES IN rad-common CODE
 * ALL IMPORTS NEED TO BE INTERNAL ONLY
 * SO IT CAN BE USED BY BROWSER AND NODEJS
 */
import { getDefaultConfig } from "./default_api_config/getDefaultConfig";
import { getAppConfig } from "../../rad-frontend/src/api/index";

export function getApiConfigs() {
    return getDefaultConfig().concat(getAppConfig());
}
export * from "./config_defaults";
export * from "./utils/log";
export { NumberFormater } from "./utils/numberFormater";
export type { ApiInterface, ApiColumn } from "./utils/ApiInterface";
export { verifyApiConfig } from "./utils/verifyApiConfig";
export type { UserRolesInterface } from "./utils/UserRolesInterface";
