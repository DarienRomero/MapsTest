const uploadFileToCloudinary = (file) => {
    var formdata = new FormData();
    formdata.append("archivo", file);

    var requestOptions = {
    method: 'PUT',
    body: formdata,
    redirect: 'follow'
    };

    fetch("http://localhost:8080/api/uploads/usuarios/607840620f68de3968571ed5", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
export default uploadFileToCloudinary;