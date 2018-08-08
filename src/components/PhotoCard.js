import React from 'react'

const PhotoCard = ({ photo }) => {
    return (
        <div className="col-lg-6 portfolio-item">
            <div className="card h-100">
                <a href="#"><img className="card-img-top" src={photo} /></a>
            </div>
        </div>
    )
}

export default PhotoCard