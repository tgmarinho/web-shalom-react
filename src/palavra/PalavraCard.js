import React from 'react'

const PalavaCard = ({name, bio, photo}) => {

    return (
        <div className="col-lg-6 portfolio-item">
            <div className="card h-100">
                <a href="#">
                    <img className="card-img-top" src={photo} alt />
                </a>
                <div className="card-body">
                    <h4 className="card-title">
                        <a href="#">{name}</a>
                    </h4>
                    <p className="card-text">{bio}</p>
                </div>
            </div>
        </div>
    )

}

export default PalavaCard