const validateName = function(name) {
    if(name === undefined || name === '') {
        throw TypeError('Name must not be blank.');
    }
};
const create = function(name) {
    return {
        id: cuid(),
        name,
        checked: false
    };
};

export default {
    validateName,
    create
};