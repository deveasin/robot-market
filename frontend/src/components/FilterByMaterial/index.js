import { Select } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { GetStateValues } from '../../services/contexts/RobotContextProvider';
import './index.css';
const { Option } = Select;

const FilterByMaterial = () => {
    const { products, materialType, setMaterialType } = GetStateValues();
    const [options, setOptions] = useState([]);
    useEffect(() => {
        let getOptions = products.map(product => product.material);
        setOptions([...(new Set(getOptions))]); // new Set function is used for unique value
    }, [products])

    const handleChange = useCallback((currentValue) => {
        if(materialType === currentValue) { return; } // if the current value and the already selected value is same, then doing nothing.
        setMaterialType(currentValue);
    }, []);

    if(!options.length) {
        return '';
    }

    return (
        <div className="filter-by-material">
            <label>
                <span className='filter-by-material-label'>Filter by material type: </span>
                <Select defaultValue={materialType} style={{ width: "25%" }} onChange={handleChange}>
                    <Option value="">None</Option>
                    {options.map((option, index) => <Option key={index} value={option}>{option}</Option>)}
                </Select>
            </label>
        </div>
    )
}

export default FilterByMaterial;