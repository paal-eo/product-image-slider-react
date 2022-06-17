// import PropTypes from 'prop-types';
import leftArr from "./images/navigation/chevron-left.svg";
import rightArr from "./images/navigation/chevron-right.svg";


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