import { ApiColumnError, ApiInterface, ApiInterfaceError } from "./ApiInterface";
import { validateColumnTableName } from "./validateColumnTableName";

/**
 * helps validate/fix issues/set defaults on config
 * @param configInput
 * @returns
 */
export function verifyApiConfig(configInput: ApiInterface): [ApiInterface, ApiInterfaceError, number] {
    const config = configInput || ({} as ApiInterface);

    const errorLog = {} as ApiInterfaceError;

    let errorCount: number = 0;

    if (!config.apiName) {
        errorLog.apiName = "Missing";
        errorCount++;
    }

    if (!config.viewName) {
        errorLog.viewName = "Missing";
        errorCount++;
    }

    try {
        config.viewName = validateColumnTableName(config.viewName, true);
    } catch (e) {
        errorLog.viewName = e as string as string;
        errorCount++;
    }

    if (!config.project) {
        config.project = null;
        if (!config.projectHardCoded) {
            errorLog.projectHardCoded = "not allowed when project column is not set";
            errorCount++;
        }
    } else {
        if (!config.projectHardCoded) {
            config.projectHardCoded = null;
        }
    }

    if (config.accessUpdate && !Array.isArray(config.accessUpdate)) {
        errorLog.accessInsert = "need to be array";
    }

    if (config.accessDelete && !Array.isArray(config.accessDelete)) {
        errorLog.accessInsert = "need to be array";
    }

    if (config.accessInsert && !Array.isArray(config.accessInsert)) {
        errorLog.accessInsert = "need to be array";
    }

    if (!config.primaryKey) {
        errorLog.primaryKey = "Missing";
        errorCount++;
    }

    try {
        config.primaryKey = validateColumnTableName(config.primaryKey);
    } catch (e) {
        errorLog.primaryKey = e as string;
        errorCount++;
    }

    if (config.childViewApi) {
        if (!config.childTo) {
            errorLog.childTo = "Missing, needed when childViewApi is used ";
            errorCount++;
        }

        try {
            config.childTo = validateColumnTableName(config.childTo);
        } catch (e) {
            errorLog.childTo = e as string;
            errorCount++;
        }

        if (!config.childFrom) {
            errorLog.childFrom = "Missing, needed when childViewApi is used ";
            errorCount++;
        }

        try {
            config.childFrom = validateColumnTableName(config.childFrom);
        } catch (e) {
            errorLog.childFrom = e as string;
            errorCount++;
        }
    }

    if (config.modified) {
        try {
            config.modified = validateColumnTableName(config.modified);
        } catch (e) {
            errorLog.modified = e as string;
            errorCount++;
        }
    }

    if (config.project) {
        try {
            config.project = validateColumnTableName(config.project);
        } catch (e) {
            errorLog.project = e as string;
            errorCount++;
        }
    }

    errorLog.columns = [];
    config.columns.forEach((col) => {
        const errorCol = {} as ApiColumnError;
        const oldCount = errorCount;

        if (!col.name) {
            errorCol.name = "Missing";
            errorCount++;
        }

        try {
            col.name = validateColumnTableName(col.name);
        } catch (e) {
            errorCol.name = e as string;
            errorCount++;
        }

        // todo, fix label?

        if (!col.type) {
            col.type = "text";
        }

        if (col.removeFromGrid) {
            col.removeFromGrid = true;
        }

        if (col.setAsOptionalInGrid) {
            col.setAsOptionalInGrid = true;
        }

        if (col.readOnlyGrid) {
            col.readOnlyGrid = true;
        }

        if (col.accessUpdate && !Array.isArray(col.accessUpdate)) {
            errorCol.accessUpdate = "need to be array";
            errorCount++;
        }

        if (col.isCheckbox) {
            col.isCheckbox = true;

            if (!col.checkboxChecked) {
                errorCol.checkboxChecked = "Needed when setting isCheckbox ";
                errorCount++;
            }
        } else {
            if (col.checkboxChecked) {
                delete col.checkboxChecked;
            }
        }

        if (col.parentViewApi) {
            if (!col.parentViewType) {
                col.parentViewType = "DIALOG-WITH-OVERLAY";
            }

            if (!col.parentTitle) {
                col.parentTitle = "Add parent";
            }

            if (!col.parentFrom) {
                errorCol.parentFrom = "Needed when setting parentViewApi ";
                errorCount++;
            }

            try {
                col.parentFrom = validateColumnTableName(col.parentFrom);
            } catch (e) {
                errorCol.parentFrom = e as string;
                errorCount++;
            }

            if (!col.parentTo) {
                errorCol.parentTo = "Needed when setting parentViewApi ";
                errorCount++;
            }

            try {
                col.parentTo = validateColumnTableName(col.parentTo);
            } catch (e) {
                errorCol.parentTo = e as string;
                errorCount++;
            }
        } else {
            if (col.parentViewType) {
                delete col.parentViewType;
            }

            if (col.parentTitle) {
                delete col.parentTitle;
            }

            if (col.parentFrom) {
                delete col.parentViewType;
            }

            if (col.parentTo) {
                delete col.parentTitle;
            }
        }

        if (col.parentColumnsFromTo && !Array.isArray(col.parentColumnsFromTo)) {
            errorCol.parentColumnsFromTo = "needs to be array of array [[string, string], [string, string]] ";
            errorCount++;
            // todo, check inner
        }
        if (oldCount !== errorCount) {
            errorLog.columns.push(errorCol);
        }
    });

    return [config, errorLog, errorCount];
}
