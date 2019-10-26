formatData = (photo) => {
    let data = new FormData();

    data.append("photo",{
        name: "photo",
        uri: photo.uri.replace("file://", "")
    });

    return data;
}

export default uploadPhoto = photo => {
    fetch(
        "http://172.31.19.224:3228/image",{
            method: "POST",
            body: this.formatData(photo)
        }
    ).then(
        response => response.json()
    ).then(
        response => {
            console.log(response);
        }
    ).catch(
        error => console.log(error)
    )
}