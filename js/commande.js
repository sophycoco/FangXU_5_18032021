class  infoForm {
    constructor(lastName, firstName, email, address, city) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.email = email;
        this.address = address;
        this.city = city;
    }
}

class orderInfo {
    constructor(formInfo, idOrder) {
        this.contact = formInfo;
        this.products = idOrder;
    }
}