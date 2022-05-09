type normal = {
    name: string;
    type: "normal";
};

type checkbox = {
    name: string;
    type: "checkbox";
    checked: string;
    notChecked: string;
};

type dropdown = {
    name: string;
    type: "dropdown";
    drope: string;
    notdrop: string;
};

type xx = normal | checkbox | dropdown;

const x: xx = {
    name: "wow",
    type: "checkbox"
};
