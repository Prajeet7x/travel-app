import React from 'react'

function Card() {
    return (
        <div>
            <div className='card-container-flex'>
                <div className="flex-left-cont">
                    <img src="../public/images/mount-fuji.png" alt="" className='destination-image' />
                </div>
                <div className="flex-right-cont">
                    <div className='country-cont'>
                        <div className='country-flex-cont'>
                            <img src="" alt="" className='gps-image' />
                            <p className='country-title'>JAPAN</p>
                            <p className='google-maps-link'>View on Google Maps</p>
                        </div>
                    </div>
                    <div className='destination-title-cont'>Mount Fuji</div>
                    <div className='date-cont'>12 Jan, 2021 - 24 Jan, 2021</div>
                    <div className='description-cont'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</div>

                </div>

            </div>
            <div className='horizontal-line'> </div>
        </div>
    )
}

export default Card