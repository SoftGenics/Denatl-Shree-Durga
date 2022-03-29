import React from 'react'
import Gallery from 'react-grid-gallery';
import { Container } from 'react-bootstrap';
function PhotoGallery() {
    const IMAGES =
[{
        src: "images/images/1.jpg",
        thumbnail: "images/images/1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
},
{
        src: "images/images/2.jpg",
        thumbnail: "images/images/2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Durga", title: "Clinic"}, {value: "Durga", title: "shree"}],
        
},

{
        src: "images/images/3.jpg",
        thumbnail: "images/images/3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Durga", title: "Clinic"}, {value: "Durga", title: "shree"}],
},
{
    src: "images/images/4.jpg",
    thumbnail: "images/images/4.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "Durga", title: "Clinic"}, {value: "Durga", title: "shree"}],
},
{
    src: "images/images/5.jpg",
    thumbnail: "images/images/5.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "shree", title: "Clinic"}, {value: "Durga", title: "shree"}],
    
},
{
    src: "images/images/6.jpg",
    thumbnail: "images/images/6.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "shree", title: "Clinic"}, {value: "Durga", title: "shree"}],
    
},
{
    src: "images/images/7.jpg",
    thumbnail: "images/images/7.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "shree", title: "Clinic"}, {value: "Durga", title: "shree"}],
    
},
{
    src: "images/images/8.jpg",
    thumbnail: "images/images/8.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "shree", title: "Clinic"}, {value: "Durga", title: "shree"}],
    
},
{
    src: "images/images/9.jpg",
    thumbnail: "images/images/9.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "shree", title: "Clinic"}, {value: "Durga", title: "shree"}],
    
}
]
  return (
    <div>
    <Container style={{marginTop:'15rem'}}>
    <h1 className='mt-3 mb-3 text-center'>OUR PHOTO GALLERY</h1>
    <Gallery images={IMAGES}/>,
    </Container>
    </div>
  )
}

export default PhotoGallery