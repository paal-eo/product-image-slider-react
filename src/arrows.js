import leftArr from "./images/navigation/chevron-left.svg";
import rightArr from "./images/navigation/chevron-right.svg";


export const LeftNavBtn = (props) => {
    const { onClick, onNav, activeImg, firstVisibleImgState } = props
    const { get, set } = firstVisibleImgState
    const clickHandler = () => {
        console.log('click');
        onNav(-1)
        if (activeImg === get) {
            onClick()
            set(currentState => currentState - 1)
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
    const { onClick, onNav, activeImg, firstVisibleImgState } = props
    const numberOfVisibleImgs = 3
    const { get, set } = firstVisibleImgState
    const lastVisibleImg = get + numberOfVisibleImgs - 1
    const clickHandler = () => {
        console.log('click');
        onNav(1)

        if (activeImg === lastVisibleImg) {
            onClick()
            set(currentState => currentState + 1)
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