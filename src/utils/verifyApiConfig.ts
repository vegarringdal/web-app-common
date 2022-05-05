import { ApiColumnError, ApiInterface, ApiInterfaceError } from "./ApiInterface";

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

    if (!config.project) {
        config.project = null;
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

    if (config.childViewApi) {
        if (!config.childTo) {
            errorLog.childTo = "Missing, needed when childViewApi is used ";
            errorCount++;
        }
        if (!config.childFrom) {
            errorLog.childFrom = "Missing, needed when childViewApi is used ";
            errorCount++;
        }
    }

    errorLog.columns = [];
    config.columns.forEach((col) => {
        const errorCol = {} as ApiColumnError;
        errorLog.columns.push(errorCol);

        if (!col.name) {
            errorCol.name = "Missing";
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

            if (!col.parentTo) {
                errorCol.parentTo = "Needed when setting parentViewApi ";
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
    });

    return [config, errorLog, errorCount];
}
