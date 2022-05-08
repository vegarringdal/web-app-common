import { aiWebRestApi } from "./aiWebRestApi";
import { aiWebRoleApi } from "./aiWebRoleApi";
import { aiWebUserApi } from "./aiWebUserApi";
import { aiWebUserRoleApi } from "./aiWebUserRoleApi";
// I have no good way to do this without full path.. else typescript/vites complains
import { getAppConfig } from "../../../rad-frontend/src/api/index";

export function getDefaultConfig() {
    return [aiWebRestApi, aiWebRoleApi, aiWebUserApi, aiWebUserRoleApi];
}

export function getApiConfigs() {
    return getDefaultConfig().concat(getAppConfig());
}
