import leftArr from "./images/navigation/chevron-left.svg";
import rightArr from "./images/navigation/chevron-right.svg";


export const LeftNavBtn = (props) => {
    const { className, style, onClick } = props

    return (
        <div
            // className={classes.btn}
            onClick={onClick}
        >
            <img src={leftArr} alt="" />
        </div>

    )
}
export const RightNavBtn = (props) => {
    const { className, style, onClick } = props

    return (
        <div
            // className={classes.btn}
            onClick={onClick}
        >
                        <img src={rightArr} alt="" />

        </div>
    )
}