formatData = (photo) => {
    let data = new FormData();

    data.append("photo",{
        name: "photo",
        uri: photo.uri.replace("file://", "")
    });

    return data;
}

export default uploadPhoto = photo => {
    return fetch(
        "http://51.136.23.175:3228/image",{
            method: "POST",
            body: formatData(photo)
        }
    ).then(
        response => response.json()
    ).catch(
        error => console.log(error)
    )
}