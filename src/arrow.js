// import PropTypes from 'prop-types';
import leftArr from "./images/navigation/chevron-left.svg";
import rightArr from "./images/navigation/chevron-right.svg";

const NavBtn = props => {
    const {
        onClick,
        direction,
        activeImg,
        onSetActive,
        leftVisibleImg,
        onSetLeftVisibleImg,
        images
    } = props
    
    const lastVisibleImg = leftVisibleImg + 2

    const clickHandler = () => {
        const isActiveImgFarLeft = activeImg === 0
        const isActiveImgFarRight = activeImg === images.length - 1

        // only proceed if we're not about to navigate outside of image list
        if ((!isActiveImgFarLeft || direction === 'right') && (!isActiveImgFarRight || direction === 'left')) {
            // navigate
            onSetActive(currState => {
                if (direction === 'left') return currState - 1
                if (direction === 'right') return currState + 1
            })

            if (activeImg === leftVisibleImg && direction === 'left') {
                onSetLeftVisibleImg(currState => currState - 1)
                onClick()
            }
            else if (activeImg === lastVisibleImg && direction === 'right') {
                onSetLeftVisibleImg(currState => currState + 1)
                onClick()
            }
        }

    }

    return (
        <div onClick={clickHandler}>
            <img src={direction === 'left' ? leftArr : rightArr} alt="" />
        </div>
    )
}

export default NavBtn