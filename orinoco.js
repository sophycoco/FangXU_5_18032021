fetch("http://localhost:3000/api/cameras")
    .then( date => date.json())
    .then( jsonCameraList=> {
        console.log( jsonCameraList);
        for( let jsonCamera = jsonCameraList) {
            let camera = new Camera(jsonCamera);

        }
    })