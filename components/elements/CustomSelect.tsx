'use client';

import { useState, useRef, useEffect } from 'react';

type Option = {
  value: string;
  label: string;
  element?: any;
};

type CustomSelectProps = {
  options: Option[];
  placeholder?: string;
  defaultValue?: any;
  onChange?: (value: string) => void;
};

export default function CustomSelect({
  options,
  placeholder,
  defaultValue = null,
  onChange,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const handleSelect = (option: Option) => {
    setSelected(option);
    setIsOpen(false);
    onChange?.(option.value);
  };

  useEffect(() => {
    setSelected(defaultValue);
  },[])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className={`nice-select ${isOpen ? 'open' : ''}`}>
      {/* Selected Box */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="select-inner cursor-pointer"
      >
        <span className="text-sm" style={{height: 25}}>
          {selected?.element} {selected ? selected.label : placeholder || 'Select an option'}
        </span>
        <i
          className={`icon far fa-angle-down transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        ></i>
      </div>

      {/* Dropdown Options — always visible but styled */}
      <ul
        className={`list ${isOpen ? 'open' : ''}`}
        style={{ display: 'block' }} // 👈 Always display block
      >
        {options.map((option) => (
          <li
            key={option.value}
            onClick={() => handleSelect(option)}
            className={`option ${
              selected?.value === option.value ? 'selected' : ''
            }`}
          >
            {option?.element} {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
