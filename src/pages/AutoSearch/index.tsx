import { useEffect, useState } from 'react';
import QuestionLayout from '../../layouts/QuestionLayout';
import './index.css'; // Make sure this file path is correct and accessible.

const searchList = ['Dhirendra Kumar', 'Dharam', 'Kiran', 'Raj Kumar', 'hsk'];

const AutoSearch = () => {
    const [searchItem, setSearchItem] = useState('');
    const [options, setOptions] = useState<string[]>([]);
    const [selected,setSelected]=useState(false)

    useEffect(() => {
        const filteredOptions = searchList.filter(item =>
            item.toLowerCase().includes(searchItem.toLowerCase())
        );
        if (searchItem&&!selected) {
            setOptions(filteredOptions);
        } else {
            setOptions([]);
            setSelected(false)
        }
    }, [searchItem]);

    const handleSelect = (value: string) => {
        setSearchItem(value);
        setOptions([]);
        setSelected(true)
    };

    return (
        <QuestionLayout title="Auto Search">
            <div className='search-container'>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={({ target }) => setSearchItem(target.value)}
                    className='search-input'
                    value={searchItem}
                />
                {options.length > 0 && (
                    <div className='options-container'>
                        {options.map(item => (
                            <div
                                key={item}
                                onClick={() => handleSelect(item)}
                                className="option"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </QuestionLayout>
    );
};

export { AutoSearch };
