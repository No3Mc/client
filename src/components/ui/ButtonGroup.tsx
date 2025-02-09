import { useState } from 'react';

interface ButtonGroupProps {
    options: string[]; // List of options for the buttons
    defaultValue?: string; // Default selected option
    onChange?: (selected: string) => void; // Callback for selection change
}

function ButtonGroup({ options, defaultValue, onChange, }: ButtonGroupProps) {
    const [selected, setSelected] = useState(defaultValue || options[0]);

    const handleSelect = (option: string) => {
        setSelected(option); // Update local state
        if (onChange) {
            onChange(option); // Trigger the callback
        }
    };

    return (
        <div className="flex flex-col space-y-2">
            {options.map((option) => (
                <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    className={`w-full px-4 py-2 text-center rounded-[10px] text-[14px] border-[1px] border-black transition ${selected === option
                        ? 'bg-[#00AAFF] text-white'
                        : 'bg-white text-black '
                        }`}
                >
                    {option}
                </button>
            ))}
        </div>
    );
};

export default ButtonGroup;
