import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import './modal.css';

/**
 * 
 * @param {Boolean} props.isVisible 
 * @param {Function} props.setIsVisible
 * @param {String} props.title
 * @param {React} props.content 
 */
const Modal = (props) => {
    return (
        <>
            {(props.isVisible)
                ? <div className="modalContainer">
                    <div className="modalHeader">
                        <button className="modalButton" onClick={() => props.previous()}><FontAwesomeIcon icon={faArrowCircleLeft} /></button>
                        <h6>{props.title}</h6>
                        <button className="modalButton" onClick={() => props.next()}><FontAwesomeIcon icon={faArrowCircleRight} /></button>
                    </div>
                    <div className="modalData">
                        {props.content}
                    </div>
                    <button className="modalButton" onClick={() => props.setIsVisible(false)}><FontAwesomeIcon icon={faTimesCircle} /></button>
                </div>
                : null
            }
        </>
    )
}

export {
    Modal
};