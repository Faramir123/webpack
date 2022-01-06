import "./main.scss"
import items from "./items.js"
import { drawGalleryItem } from "./itemCard"


const galleryRootElement = document.getElementById('gallery')

items.map(item => galleryRootElement.appendChild(drawGalleryItem(item)))
