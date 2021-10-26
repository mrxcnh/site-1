import React from 'react'
import './DetailInfo.css'

function DetailInfo(props) {
    return (
        <div className="detail-info-container">
            <div className="detail-info-title">
                <h1>{props.title}</h1>
            </div>

            <div className="detail-info-wrap">
                <div className="detail-info-text">

                    <p>{props.text_1}</p>
                    <div className="detail-info-img-desc">
                        <img src="../images/img-3.jpg" alt="detail-info-img-desc-1" className="img-desc" />
                    </div>
                </div>

                <div className="detail-info-text-full-width">
                    <p>{props.text_2}</p>
                </div>

                <div className="detail-info-text">
                    <div className="detail-info-img-desc">
                        <img src="../images/img-4.jpg" alt="detail-info-img-desc-1" className="img-desc" />
                    </div>
                    <p>{props.text_1}</p>
                </div>
            </div>
        </div>
    )
}

export default DetailInfo
