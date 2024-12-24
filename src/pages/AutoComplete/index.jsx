import { useEffect, useState } from 'react';
import QuestionLayout from '../../layouts/QuestionLayout';
import './index.css'; 

const products = [
    "Smartphone", "Laptop", "Sneakers", "Backpack", "Watch",
    "Sofa", "Coffee Table", "Desk Lamp", "Area Rug", "Wall Art",
    "Dress", "Suit", "Jeans", "Blouse", "T-shirt",
    "Cookware Set", "Dinner Plates", "Wine Glasses", "Knife Set", "Blender",
    "Vacuum Cleaner", "Hair Dryer", "Shampoo", "Body Lotion", "Toothpaste",
    "Nail Polish", "Lipstick", "Eau de Toilette", "Sunscreen", "Fitness Tracker",
    "Yoga Mat", "Dumbbells", "Bicycle", "Skateboard", "Camping Tent",
    "Sleeping Bag", "Novel", "Cookbook", "Board Game", "Jigsaw Puzzle",
    "Acoustic Guitar", "Piano Keyboard", "Sketchbook", "Watercolor Paint Set", "Digital Camera",
    "Drone", "LED TV", "Gaming Console", "Bluetooth Speaker", "Wireless Earbuds"
];


const AutoComplete = () => {
    const [searchItem, setSearchItem] = useState('');
    const [options, setOptions] = useState([]);
    const [selected,setSelected]=useState(false)

    useEffect(() => {
        const filteredOptions = products.filter(item =>
            item.toLowerCase().includes(searchItem.toLowerCase())
        );
        if (searchItem&&!selected) {
            setOptions(filteredOptions);
        } else {
            setOptions([]);
            setSelected(false)
        }
    }, [searchItem]);

    const handleSelect = (value) => {
        setSearchItem(value);
        setOptions([]);
        setSelected(true)
    };

    return (
        <QuestionLayout title="Auto Complete">
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

export { AutoComplete };
