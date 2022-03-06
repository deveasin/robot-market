import { Spin } from "antd"

const Spiner = ({size = "large"}) => {
    return (
        <div className="robot-spiner"><Spin size={size} /></div>
    )
}

export default Spiner;