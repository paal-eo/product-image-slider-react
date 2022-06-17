// import PropTypes from 'prop-types';
import { useState } from "react";
import leftArr from "./images/navigation/chevron-left.svg";
import rightArr from "./images/navigation/chevron-right.svg";




const NavBtn = props => {
    const { onClick, dir, activeImg, onSetActive, images } = props
    const [firstVisibleImg, setFirstVisibleImg] = useState(0)
    const lastVisibleImg = firstVisibleImg + 2

    const clickHandler = () => {
        console.log('click');
        const isActiveFirstImg = activeImg === 0
        const isActiveLastImg = activeImg === images.length - 1

        if ((!isActiveFirstImg || dir === 'right') && (!isActiveLastImg || dir === 'left')) {
            // make sure we don't navigate past the first or last image
            
            onSetActive(currState => {
                if (dir === 'left') return currState - 1
                if (dir === 'right') return currState + 1
            })
        }

    }

    return (
        <div onClick={clickHandler}>
            <img src={dir === 'left' ? leftArr : rightArr} alt="" />
        </div>
    )
}

export default NavBtn









export const Arrow = (props) => {
    const { direction, onClick, activeImg, firstVisibleImgState } = props
    const numberOfVisibleImgs = 3
    const lastVisibleImg = firstVisibleImgState.get + numberOfVisibleImgs - 1
    const clickHandler = () => {
        console.log('click');
        if ((activeImg === firstVisibleImgState.get && direction === 'left') || (activeImg === lastVisibleImg && direction === 'right')) {
            onClick()
            firstVisibleImgState.set(currentState => {
                if (direction === 'left') return currentState - 1
                else return currentState + 1
            })
        }
    }

    return (
        <div onClick={clickHandler}>
            <img src={direction === 'left' ? leftArr : rightArr} alt="" />
        </div>
    )
}