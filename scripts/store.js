import item from './item.js';
const items = [];
let hideCheckedItems = false;

const findById = function (id) {
    return items.find(itemid => itemid.id === id);
};

const addItem = function (name) {
    try {
        item.validateName(name);
        this.items.push(item.create(name));
    } catch (error) {
        console.log(error);
    }
};

const findAndToggleChecked = function (id) {
    let changedItem = findById(id);
    changedItem.checked = !changedItem.checked;
};

const findAndUpdateName = function (id, newName) {
    try {
        item.validateName(newName);
        let changedItem = this.findById(id);
        changedItem.name = newName;
    } catch (error) {
        console.log(error);
    }
};

const findAndDelete = function (id) {
    let changedItem = findById(id);
    let i = items.findIndex(findItem => findItem === changedItem);
    this.items.splice(i, 1);
};

const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
    items,
    hideCheckedItems,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter
};
