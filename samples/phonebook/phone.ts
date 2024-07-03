interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneType { //목록화
  Home = "home",
  Office = "office",
  Studio = "studio",
}

// api
function fetchContacts(): Promise<Contact[]> { // 비동기 함수-순서와 상관없이 실행완료될때까지 기다리지 않고 다음 작업 실행
  const contacts: Contact[] = [
    {
      name: "Tony",
      address: "Malibu",
      phones: {
        home: {
          num: 8201011112222,
        },
        office: {
          num: 8201033334444,
        },
      },
    },
    {
      name: "Banner",
      address: "New York",
      phones: {
        home: {
          num: 8201055556666,
        },
      },
    },
    {
      name: "마동석",
      address: "서울시 강남구",
      phones: {
        home: {
          num: 8201077778888,
        },
        office: {
          num: 8201099990000,
        },
      },
    },
  ];
  return new Promise((resolve) => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  contacts: Contact[] = [];

  constructor() {
    // this.fetchData();
  }

  async fetchData(): Promise<void> {
    await fetchContacts().then((response) => {
      this.contacts = response;
    });
  }

  findContactByName(name: string): Contact[] {
    // console.log(this.contacts);
    return this.contacts.filter((contact) => contact.name === name);
  }

  findContactByAddress(address: string): Contact[] {
    return this.contacts.filter((contact) => contact.address === address);
  }

  findContactByPhone(phoneNumber: number, phoneType: PhoneType): Contact[] {
    return this.contacts.filter(
      (contact) => contact.phones[phoneType].num === phoneNumber
    );
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  displayListByName(): string[] {
    return this.contacts.map((contact) => contact.name);
  }

  displayListByAddress(): string[] {
    return this.contacts.map((contact) => contact.address);
  }
}

async function test2() {
  let addressBook: AddressBook = new AddressBook();
  await addressBook.fetchData();
  let byName: Contact[] = addressBook.findContactByName("마동석");
  console.log(byName);
}

test2();



