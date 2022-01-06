const TYPES_ITRMS = {
    img: drawImage,
    audio: drawAudio,
    video: drawVideo
}

const drawImage = item =>{
    const imgElement = document.createElement('img')
    imgElement.classList = "gallery-item__img"
    imgElement.src = item.resouce

    return imgElement
}

const drawAudio = item =>{
    const audioElement = document.createElement('audio')
    audioElement.classList = "gallery-item__audio"
    audioElement.src = item.resouce
    audioElement.controls = true

    return audioElement
}

const drawVideo = item => {
    const videoElement = document.createElement('video')
    videoElement.classList = "gallery-item__video"
    videoElement.src = item.resouce
    videoElement.controls = true

    return videoElement
}

export const drawGalleryItem = item => {
    const itemElement = document.createElement('div')
    itemElement.classList = "gallery-item"

    const wrapElement = document.createElement('div')
    wrapElement.classList = "gallery-item__wrap"

    const drawFromType = TYPES_ITRMS[item.type]
    wrapElement.appendChild(drawFromType(item))

    const titleElement = document.createElement('span')
    titleElement.classList = "gallery-item__title"
    titleElement.textContent = item.title

    itemElement.appendChild(wrapElement)
    itemElement.appendChild(titleElement)

    return itemElement
} 