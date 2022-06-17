import leftArr from "./images/navigation/chevron-left.svg";
import rightArr from "./images/navigation/chevron-right.svg";


const NavBtn = (props) => {
    const { onClick, dir } = props

    return (
        <div onClick={onClick}>
            <img src={dir === 'left' ? leftArr : rightArr} alt="" />
        </div>
    )
}

export default NavBtn