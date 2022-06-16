import leftArr from "./images/navigation/chevron-left.svg";
import rightArr from "./images/navigation/chevron-right.svg";


export const LeftNavBtn = (props) => {
    const { onClick, activeImg, firstVisibleImgState, isEdgeImg, activeImgState } = props
    const clickHandler = () => {
        console.log('click');

        if (activeImg === firstVisibleImgState.get) {
            if (!isEdgeImg) {
                onClick()
                activeImgState.set(currentState => {
                    return currentState - 1
                })
            }
            firstVisibleImgState.set(currentState => currentState - 1)
        }

    }

    return (
        <div>
            <div onClick={clickHandler}>
                <img src={leftArr} alt="" />
            </div>
        </div>

    )
}
export const RightNavBtn = (props) => {
    const { onClick, activeImg, firstVisibleImgState, isEdgeImg, activeImgState } = props
    const numberOfVisibleImgs = 3
    const lastVisibleImg = firstVisibleImgState.get + numberOfVisibleImgs - 1
    const clickHandler = () => {
        console.log('click');

        if (activeImg === lastVisibleImg) {
            if (!isEdgeImg) {
                onClick()
                activeImgState.set(currentState => {
                    return currentState + 1
                })
            }
            firstVisibleImgState.set(currentState => currentState + 1)
        }
    }

    return (
        <div>
            <div onClick={clickHandler}>
                <img src={rightArr} alt="" />
            </div>
        </div>
    )
}