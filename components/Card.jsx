import React from 'react'

function Card(props) {
    return (
        <div>
            <div className='card-container-flex'>
                <div className="flex-left-cont">
                    <img src={props.imageUrl} alt="" className='destination-image' />
                </div>
                <div className="flex-right-cont">
                    <div className='country-cont'>
                        <div className='country-flex-cont'>
                            <img src="" alt="" className='gps-image' />
                            <p className='country-title'>{props.location}</p>
                            <p className='google-maps-link'><a href={props.googleMapsUrl}>View on Google Maps</a> </p>
                        </div>
                    </div>
                    <div className='destination-title-cont'>{props.title}</div>
                    <div className='date-cont'>{props.startDate} - {props.endDate}</div>
                    <div className='description-cont'>{props.description}</div>

                </div>

            </div>
            <div className='horizontal-line'> </div>
        </div>
    )
}

export default Card