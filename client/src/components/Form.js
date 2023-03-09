const { useState } = require("react")

function Form(props) {
    const [age, setAge] = useState(null);
    const [sex, setSex] = useState(null);
    const [attacked, setAttacked] = useState(null);
    const [fighting, setFighting] = useState(null);
    const [lonely, setLonely] = useState(null);
    const [friends, setFriends] = useState(null);
    const [absence, setAbsence] = useState(null);
    const [studentCompassion, setStudentCompassion] = useState(null);
    const [parentCompassion, setParentCompassion] = useState(null);
    const [underweight, setUnderweight] = useState(null);
    const [overweight, setOverweight] = useState(null);
    const [obese, setObese] = useState(null);

    function handleFormSubmit(evt) {
        evt.preventDefault();
        props.onFormSubmit({
            age: age,
            sex: sex,
            attacked: attacked,
            fighting: fighting,
            lonely: lonely,
            friends: friends,
            absence: absence,
            student_compassion: studentCompassion,
            parent_compassion: parentCompassion,
            underweight: underweight,
            overweight: overweight,
            obese: obese,
        });
    };

    function handleAgeChange(evt) {
        setAge(evt.target.value);
    };

    function handleSexChange(evt) {
        setSex(evt.target.value);
    };

    function handleAttackedChange(evt) {
        setAttacked(evt.target.value);
    };

    function handleFightingChange(evt) {
        setFighting(evt.target.value);
    };

    function handleLonelyChange(evt) {
        setLonely(evt.target.value);
    };

    function handleFriendsChange(evt) {
        setFriends(evt.target.value);
    };

    function handleAbsenceChange(evt) {
        setAbsence(evt.target.value);
    };

    function handleStudentCompassionChange(evt) {
        setStudentCompassion(evt.target.value);
    };

    function handleParentCompassionChange(evt) {
        setParentCompassion(evt.target.value);
    };

    function handleUnderweightChange(evt) {
        setUnderweight(evt.target.value);
    };

    function handleOverweightChange(evt) {
        setOverweight(evt.target.value);
    };

    function handleObesityChange(evt) {
        setObese(evt.target.value);
    };


    return (
        <div>
            <form
                className="form"
                onSubmit={handleFormSubmit}>
                <label className='form__label'>
                    <p className='form__input-title'>
                        Age <span className='form__input-span'>(11-18)</span>:
                    </p>
                    <input
                        className='form__input'
                        name='age'
                        type='number'
                        min='11'
                        max='18'
                        onChange={handleAgeChange}
                        placeholder='11-18'
                        value={age || ''}>
                    </input>
                </label>
                <label className='form__label'>
                    <p className='form__input-title'>
                        Sex <span className='form__input-span'>(0-Male, 1-Female)</span>:
                    </p>
                    <input
                        className='form__input'
                        name='sex'
                        type='number'
                        min='0'
                        max='1'
                        onChange={handleSexChange}
                        placeholder='0/1'
                        value={sex || ''}>
                    </input>
                </label>
                <label className='form__label'>
                    <p className='form__input-title'>
                        Was physically attacked <span className='form__input-span'>(frequency, scale 0-7)</span>:
                    </p>
                    <input
                        className='form__input'
                        name='attacked'
                        type='number'
                        min='0'
                        max='7'
                        onChange={handleAttackedChange}
                        placeholder='0-7'
                        value={attacked || ''}>
                    </input>
                </label>
                <label className='form__label'>
                    <p className='form__input-title'>
                        Started fights <span className='form__input-span'>(frequency, scale 0-7)</span>:
                    </p>
                    <input
                        className='form__input'
                        name='fighting'
                        type='number'
                        min='0'
                        max='7'
                        onChange={handleFightingChange}
                        placeholder='0-7'
                        value={fighting || ''}>
                    </input>
                </label>
                <label className='form__label'>
                    <p className='form__input-title'>
                        Felt lonely <span className='form__input-span'>(scale 0-4, where 0-never)</span>:
                    </p>
                    <input
                        className='form__input'
                        name='lonely'
                        type='number'
                        min='0'
                        max='4'
                        onChange={handleLonelyChange}
                        placeholder='0-4'
                        value={lonely || ''}>
                    </input>
                </label>
                <label className='form__label'>
                    <p className='form__input-title'>
                        Friends <span className='form__input-span'>(number 0-3, for 3+ use 3)</span>:
                    </p>
                    <input
                        className='form__input'
                        name='friends'
                        type='number'
                        min='0'
                        max='3'
                        onChange={handleFriendsChange}
                        placeholder='0-3'
                        value={friends || ''}>
                    </input>
                </label>
                <label className='form__label'>
                    <p className='form__input-title'>
                        Skipped classes without permission <span className='form__input-span'>(frequency, scale 0-4)</span>:
                    </p>
                    <input
                        className='form__input'
                        name='absence'
                        type='number'
                        min='0'
                        max='4'
                        onChange={handleAbsenceChange}
                        placeholder='0-4'
                        value={absence || ''}>
                    </input>
                </label>
                <label className='form__label'>
                    <p className='form__input-title'>
                        Finds peers supportive <span className='form__input-span'>(scale 0-4)</span>:
                    </p>
                    <input
                        className='form__input'
                        name='studentCompassion'
                        type='number'
                        min='0'
                        max='4'
                        onChange={handleStudentCompassionChange}
                        placeholder='0-4'
                        value={studentCompassion || ''}>
                    </input>
                </label>
                <label className='form__label'>
                    <p className='form__input-title'>
                        Finds parents supportive <span className='form__input-span'>(scale 0-4)</span>:
                    </p>
                    <input
                        className='form__input'
                        name='parentCompassion'
                        type='number'
                        min='0'
                        max='4'
                        onChange={handleParentCompassionChange}
                        placeholder='0-4'
                        value={parentCompassion || ''}>
                    </input>
                </label>
                <label className='form__label'>
                    <p className='form__input-title'>
                        Was underweight <span className='form__input-span'>(0-no, 1-yes)</span>:
                    </p>
                    <input
                        className='form__input'
                        name='underweight'
                        type='number'
                        min='0'
                        max='1'
                        onChange={handleUnderweightChange}
                        placeholder='0/1'
                        value={underweight || ''}>
                    </input>
                </label>
                <label className='form__label'>
                    <p className='form__input-title'>
                        Was overweight <span className='form__input-span'>(0-no, 1-yes)</span>:
                    </p>
                    <input
                        className='form__input'
                        name='overweight'
                        type='number'
                        min='0'
                        max='1'
                        onChange={handleOverweightChange}
                        placeholder='0/1'
                        value={overweight || ''}>
                    </input>
                </label>
                <label className='form__label'>
                    <p className='form__input-title'>
                        Suffered from obesity <span className='form__input-span'>(0-no, 1-yes)</span>:
                    </p>
                    <input
                        className='form__input'
                        name='obese'
                        type='number'
                        min='0'
                        max='1'
                        onChange={handleObesityChange}
                        placeholder='0/1'
                        value={obese || ''}>
                    </input>
                </label>
                <button className='form__button' type='submit'>Evaluate</button>
            </form>
        </div>
    )
}

export default Form;