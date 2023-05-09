import React from 'react';
import styles from './DromDown.module.css'
const DropDown = ({label, options, value, onChange, from, to}) => {
    const numbers = []
    for (let i = from; i <= to; i++) {
        numbers.push(i)
    }

    return (
        from ?
            <div>
                <label htmlFor="numbers">{label}</label>
                <select
                    className={styles.select}
                    value={value}
                    onChange={event => onChange(event.target.value)}
                >
                    <option value="" disabled> </option>
                    {numbers.map(number =>
                        <option key={number.toString()} value={number.value}>
                            {number}
                        </option>
                    )}
                </select>
            </div>
            :
            <div>
                <label htmlFor="usual-dropdown">{label}</label>
                <select
                    className={styles.select}
                    value={value}
                    onChange={event => onChange(event.target.value)}
                >
                    <option value="" disabled> </option>
                    {options.map(option =>
                        <option key={option.value} value={option.value}>
                            {option.name}
                        </option>
                    )}
                </select>
            </div>
    );
};

export default DropDown;