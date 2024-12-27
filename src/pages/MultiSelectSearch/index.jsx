
import { useEffect, useState } from 'react'
import QuestionLayout from '../../layouts/QuestionLayout';
import { X } from 'lucide-react';
import './index.css'

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

const MultiSelectSearch = () => {
    const [options, setOption] = useState([]);
    const [query, setQuery] = useState('');
    const [focus, setFocus] = useState(false);
    const [list, setList] = useState([]);

    const handleFocus = () => {
        setFocus(true);
    }

    const handleSelect = (id) => {
        const filtered = list[id];
        setOption([...options, filtered]);
        let fl = list.filter((_, index) => index != id)
        setList(fl);
    }

    const handleSearch = (e) => {
        setQuery(e.target.value);
    }

    useEffect(() => {
        const filteredOptions = products.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        );
        setList(filteredOptions);
    }, [query])

    const handleDeSelect = (item) => {
        const filtered = options.filter((option) => option != item);
        setOption(filtered)
    }


    return (
        <QuestionLayout title="Multi Select Search">
            <div className="multiSearch">
                <div className="options">
                    {options.map((option, index) => {
                        return (
                            <span className='option' key={`${index}${option}`} >
                                {option}
                                <span onClick={() => handleDeSelect(option)}><X /></span></span>)
                    })}
                    <input value={query} onChange={handleSearch} onFocus={handleFocus} placeholder='Search...' />
                </div>
            </div>
            {(focus && query) && (<div className="list">
                {list.map((item, index) => {
                    return (
                        <div className='listItem' key={`${index + item}`} onClick={() => handleSelect(index)}>{item}</div>
                    )
                })}
            </div>)}
        </QuestionLayout>

    )
}

export { MultiSelectSearch }