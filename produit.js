// get id from Url
function getId() {
    const param = window.location.search;
    console.log(window.location)
    const id = param.replace("?id=", "");
    return id;
};