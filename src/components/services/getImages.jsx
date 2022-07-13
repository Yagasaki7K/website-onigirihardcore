function getImages(data) {
    let images = ''
    const imageWithoutImage = data.replace('image-', '')

    if (imageWithoutImage.includes('png')) {
        var imageReplacePng = imageWithoutImage.replace('-png', '.png')
        var imageURLPNG = 'https://cdn.sanity.io/images/1y5aj0uu/production/' + imageReplacePng
        images = imageURLPNG
    } else {
        var imageReplaceJpg = imageWithoutImage.replace('-jpg', '.jpg')
        var imageURLJPG = 'https://cdn.sanity.io/images/1y5aj0uu/production/' + imageReplaceJpg
        images = imageURLJPG
    }

    return images
}

export default getImages