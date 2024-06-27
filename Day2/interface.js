var linda = {
    name: "linda",
    id: 2,
    isManager: false,
    getUniqueId: function () {
        var getUniqueId = linda.id + " - " + linda.name;
        if (!linda.isManager) {
            return "emp-" + getUniqueId;
        }
        return getUniqueId;
    },
};
console.log(linda.getUniqueId());
var pam = {
    name: "pam",
    id: 1,
    isManager: true,
    getUniqueId: function () {
        var getUniqueId = pam.id + " - " + pam.name;
        if (pam.isManager) {
            return "mgr-" + getUniqueId;
        }
        return getUniqueId;
    },
};
console.log(pam.getUniqueId());
