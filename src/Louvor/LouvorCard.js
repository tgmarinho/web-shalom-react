import React from 'react'

const LouvorCard = ({id, name, role, photo}) => {

    return (

        <div key={id} className="col-lg-4 col-sm-6 text-center mb-4">
            <img className="br-100 h6 w6 dib ba b--black-05 pa2" src={photo} />
            <h1 className="f2 mb2">{name}</h1>
            <h2 className="f3 fw4 gray mt0">{role}</h2>
        </div>

    )

}

export default LouvorCard