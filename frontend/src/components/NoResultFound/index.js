import { Alert } from 'antd';

const NoResultFound = ({message = "No results are found.", description = ""}) => {
    return (
        <Alert
            message={message}
            description={description}
            type="error"
        />
    )
}

export default NoResultFound;