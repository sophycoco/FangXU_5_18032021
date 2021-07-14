class  infoForm {
    constructor(famname, givname, email, address) {
        this.famname = famname;
        this.givname = givname;
        this.email = email;
        this.address = address;
    }
}

class orderInfo {
    constructor(formInfo, idOrder) {
        this.contact = formInfo;
        this.products = idOrder;
    }
}