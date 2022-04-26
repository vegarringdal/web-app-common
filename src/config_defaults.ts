/**
 * This is the default settings,you should overide some of these with .env file
 * Important to override SESSION_PRIVATE_KEY
 * Never add passwords to this file
 */

// web nodejs server
export const DEFAULT_SERVER_PORT: number = 1080;
export const DEFAULT_SERVER_HOST: string = "localhost";
export const DEFAULT_SERVER_COMPRESSION: boolean = true;
export const DEFAULT_SERVER_API_ROOT: string = "/api";

// for express session
export const DEFAULT_SESSION_MAX_AGE: number = 3600 * 60 * 60 * 24 * 14; //1 sec * 60sec * 60min * 24hours * 14 days
export const DEFAULT_SESSION_DOMAIN: string = DEFAULT_SERVER_HOST;
export const DEFAULT_SESSION_PRIVATE_KEY: string = "change_me";
export const DEFAULT_SESSION_NAME: string = "session_name";
export const DEFAULT_SESSION_HTTP_ONLY: boolean = true;
export const DEFAULT_SESSION_SAME_SITE: boolean = true;

// for develpment only
export const DEFAULT_PORT_API: number = 1081;
export const DEFAULT_PORT_WEB: number = 1080;

// for this project application-server
export const DEFAULT_CONSOLE_INFO: boolean = false;
export const DEFAULT_CONSOLE_SELECT: boolean = false;
export const DEFAULT_DB_FETCH_SIZE: number = 150;
export const DEFAULT_DB_PREFETCH_SIZE: number = 150;
export const DEFAULT_DB_POOL_MAX: number = 5;
export const DEFAULT_DB_POOL_MIN: number = 2;
export const DEFAULT_DB_POOL_PING_INTERVAL: number = 60;
export const DEFAULT_DB_POOL_TIMEOUT: number = 120;

// connection info sent to database
export const DEFAULT_DB_CONNECTION_CLIENT_ID: string = "PUBLIC-USER"; // if login is added we will use username here
export const DEFAULT_DB_CONNECTION_CLIENT_INFO: string = "WWW.SAMPLE.COM";
export const DEFAULT_DB_CONNECTION_MODULE: string = "WWW.SAMPLE.COM"; // use host name?
export const DEFAULT_DB_CONNECTION_DB_OP: string = "WEB-REPORTS";
export const DEFAULT_DB_CONNECTION_ACTION: string = "NA - NOT IN USE -> SENDING REPORT NAME";

export const DEFAULT_DB_USERNAME: string = "TESTDB";
export const DEFAULT_DB_PASSWORD: string = "TESTDB";
export const DEFAULT_DB_CONNECTION_STRING: string =
    "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1522))(CONNECT_DATA=(SERVICE_NAME=xe)))";

// redis
export const DEFAULT_REDIS_URL: string = "redis://localhost:6379";

// azure
export const DEFAULT_AZURE_CLIENT_ID: string = "SEE PORTAL AZURE";
export const DEFAULT_AZURE_TENDANT_ID: string = "SEE PORTALT AZURE";
export const DEFAULT_AZURE_SECRET: string = "SUPER SECRET";
export const DEFAULT_AZURE_SCOPES: string[] = ["SET API:: see expose API in azure appservice"];
export const DEFAULT_ACTIVATE_AZURE_FAKE_SUCCESS: boolean = false;
export const DEFAULT_AZURE_FAKE_ROLES: string[] = [];

/********************************************************************
 * Next part is just helpers for env variables so we get correct type from strings
 *
 */

/**
 * Helper for returning number or 0
 */
export function toNumber(x: string | null | undefined, defaultValue: number): number {
    const number = parseInt(x as any);
    if (isNaN(number)) {
        return defaultValue;
    } else {
        return number;
    }
}

/**
 * Helper for returning number or 0
 */
export function toBool(x: string | null | undefined, defaultValue: boolean): boolean {
    if (typeof x !== "string") {
        return defaultValue;
    }
    if (x.trim() === "") {
        return defaultValue;
    }
    if (x.toLowerCase() === "true") {
        return true;
    }
    return false;
}

/**
 * Helper for returning array, splitter is comma
 */
export function toArray(x: string | null | undefined, defaultValue: string[]): string[] {
    if (typeof x !== "string") {
        return defaultValue;
    }
    if (x.trim() === "") {
        return defaultValue;
    }
    return x.split(",");
}

/**
 * Helper for returning string
 */
export function toString(x: string | null | undefined, defaultValue: string): string {
    if (typeof x !== "string") {
        return defaultValue;
    }
    if (x.trim() === "") {
        return defaultValue;
    }
    return x;
}
