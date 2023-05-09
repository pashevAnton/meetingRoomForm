import React, {useState} from 'react';
import styles from "./Form.module.css"
import DropDown from "../DropDown/DropDown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
    const [tower, setTower] = useState('')
    const [floor, setFloor] = useState('')
    const [meetRoom, setMeetRoom] = useState('')
    const [startDate, setStartDate] = useState('')
    const [comment, setComment] = useState('')
    const emptyFields = []

    const clear = () => {
        setTower('')
        setFloor('')
        setMeetRoom('')
        setStartDate('')
        setComment('')
    }

    const send = () => {
        if (tower && floor && meetRoom && startDate) {
            const answer = {}
            answer.tower = tower
            answer.floor = floor
            answer.meetRoom = meetRoom
            answer.dateTime = startDate.toString()
            answer.comment = comment
            console.log(answer)
            clear()
        } else {
            if (!tower) emptyFields.push('башню')
            if (!floor) emptyFields.push('этаж')
            if (!meetRoom) emptyFields.push('переговорку')
            if (!startDate) emptyFields.push('дату и время')
            alert(`Введите ${emptyFields.join(', ')}!`)
            emptyFields.length = 0
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <h1>Форма бронирования переговорной</h1>
                <DropDown
                    label="1. Выберите башню: "
                    value={tower}
                    onChange={value => setTower(value)}
                    defaultValue={''}
                    options={[
                        {value: 'A', name: 'А'},
                        {value: 'Б', name: 'Б'},
                    ]}
                />
                <DropDown
                    label="2. Выберите этаж: "
                    value={floor}
                    onChange={value => setFloor(value)}
                    from={3}
                    to={27}
                />
                <DropDown
                    label="3. Выберите переговорку: "
                    value={meetRoom}
                    onChange={value => setMeetRoom(value)}
                    from={1}
                    to={10}
                />
                <div className={styles.block}>
                    <p className={styles.title}>4. Выберите дату и время: </p>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showTimeSelect
                        dateFormat="Pp"
                    />
                </div>
                <div className={styles.block}>
                    <p className="title">5. Комментарии: </p>
                    <textarea
                        className={styles.comment}
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                    />
                </div>
                <div className={styles.buttons}>
                    <button className={`${styles.button} ${styles.red}`} onClick={clear}>Очистить</button>
                    <button className={`${styles.button} ${styles.green}`} onClick={send}>Отправить</button>
                </div>
            </div>
        </div>
    );
};

export default Form;