import { aiWebRestApi } from "./aiWebRestApi";
import { aiWebRoleApi } from "./aiWebRoleApi";
import { aiWebUserApi } from "./aiWebUserApi";
import { aiWebUserRoleApi } from "./aiWebUserRoleApi";

export function getDefaultConfig() {
    return [aiWebRestApi, aiWebRoleApi, aiWebUserApi, aiWebUserRoleApi];
}
