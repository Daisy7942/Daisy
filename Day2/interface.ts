interface Employee {
  name: string;
  id: number;
  isManager: boolean;
  getUniqueId: () => string;
}

const linda: Employee = {
  name: "linda",
  id: 2,
  isManager: false,
  getUniqueId: (): string => {
    let getUniqueId = linda.id + " - " + linda.name;
    if (!linda.isManager) {
      return "emp-" + getUniqueId;
    }
    return getUniqueId;
  },
};

console.log(linda.getUniqueId());

const pam: Employee = {
  name: "pam",
  id: 1,
  isManager: true,
  getUniqueId: (): string => {
    let getUniqueId = pam.id + " - " + pam.name;
    if (pam.isManager) {
      return "mgr-" + getUniqueId;
    }
    return getUniqueId;
  },
};
console.log(pam.getUniqueId());

//출퇴근?
