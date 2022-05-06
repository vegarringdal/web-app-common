export const validateColumnTableName = function (value: string, allowDot = false) {
    if (typeof value !== "string") {
        throw "value needs to be string";
    }

    let values = [value];
    if (allowDot) {
        values = value.split(".");
    }

    values.forEach((val) => {
        if (!/^[A-Za-z_]+$/.test(val)) {
            //check value
            throw "illiegal characters in column name, only allowed [A-Za-z_]";
        }
    });

    return values.join(".");
};
