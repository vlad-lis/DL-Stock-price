const { useState } = require("react")

function Form({ onFormSubmit, isLoading }) {
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

    function handleReset(evt) {
        evt.preventDefault();
        setAge(null);
        setSex(null);
        setAttacked(null);
        setFighting(null);
        setLonely(null);
        setFriends(null);
        setAbsence(null);
        setStudentCompassion(null);
        setParentCompassion(null);
        setUnderweight(null);
        setOverweight(null);
        setObese(null);
    };

    function handleFormSubmit(evt) {
        evt.preventDefault();
        onFormSubmit({
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
                        Age:
                    </p>
                    <select
                        className='form__input'
                        name='age'
                        onChange={handleAgeChange}
                        value={age || ''}
                        required>
                        <option value='' disabled>Choose an option</option>
                        <option>11 years old or younger</option>
                        <option>12 years old</option>
                        <option>13 years old</option>
                        <option>14 years old</option>
                        <option>15 years old</option>
                        <option>16 years old</option>
                        <option>17 years old</option>
                        <option>18 years old or older</option>
                    </select>
                </label>
                <label className='form__label'>
                    <p className='form__input-title'>
                        Gender:
                    </p>
                    <select
                        className='form__input'
                        name='sex'
                        onChange={handleSexChange}
                        value={sex || ''}
                        required>
                        <option value='' disabled>Choose an option</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </label>
                <label className='form__label'>
                    <p className='form__input-title'>
                        How frequently does the person experience physical attacks?
                    </p>
                    <select
                        className='form__input'
                        name='attacked'
                        onChange={handleAttackedChange}
                        value={attacked || ''}
                        required>
                        <option value='' disabled>Choose an option</option>
                        <option>0 times</option>
                        <option>1 time</option>
                        <option>2 or 3 times</option>
                        <option>4 or 5 times</option>
                        <option>6 or 7 times</option>
                        <option>8 or 9 times</option>
                        <option>10 or 11 times</option>
                        <option>12 or more times</option>
                    </select>
                </label>
                <label className='form__label'>
                    <p className='form__input-title'>
                        How frequently does the person initiate physical altercations?
                    </p>
                    <select
                        className='form__input'
                        name='fighting'
                        onChange={handleFightingChange}
                        value={fighting || ''}
                        required>
                        <option value='' disabled>Choose an option</option>
                        <option>0 times</option>
                        <option>1 time</option>
                        <option>2 or 3 times</option>
                        <option>4 or 5 times</option>
                        <option>6 or 7 times</option>
                        <option>8 or 9 times</option>
                        <option>10 or 11 times</option>
                        <option>12 or more times</option>
                    </select>
                </label>
                <label className='form__label'>
                    <p className='form__input-title'>
                        How often does the person feel lonely?
                    </p>
                    <select
                        className='form__input'
                        name='lonely'
                        onChange={handleLonelyChange}
                        value={lonely || ''}
                        required>
                        <option value='' disabled>Choose an option</option>
                        <option>Never</option>
                        <option>Rarely</option>
                        <option>Sometimes</option>
                        <option>Most of the time</option>
                        <option>Always</option>
                    </select>
                </label>
                <label className='form__label'>
                    <p className='form__input-title'>
                        How many close friends does the person have?
                    </p>
                    <select
                        className='form__input'
                        name='friends'
                        onChange={handleFriendsChange}
                        value={friends || ''}
                        required>
                        <option value='' disabled>Choose an option</option>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3 or more</option>
                    </select>
                </label>
                <label className='form__label'>
                    <p className='form__input-title'>
                        How often does the person skip classes without permission?
                    </p>
                    <select
                        className='form__input'
                        name='absence'
                        onChange={handleAbsenceChange}
                        value={absence || ''}
                        required>
                        <option value='' disabled>Choose an option</option>
                        <option>0 days</option>
                        <option>1 or 2 days</option>
                        <option>3 to 5 days</option>
                        <option>6 to 9 days</option>
                        <option>10 or more days</option>
                    </select>
                </label>
                <label className='form__label'>
                    <p className='form__input-title'>
                        Does the person feel that their peers are friendly and supportive?
                    </p>
                    <select
                        className='form__input'
                        name='studentCompassion'
                        onChange={handleStudentCompassionChange}
                        value={studentCompassion || ''}
                        required>
                        <option value='' disabled>Choose an option</option>
                        <option>Never</option>
                        <option>Rarely</option>
                        <option>Sometimes</option>
                        <option>Most of the time</option>
                        <option>Always</option>
                    </select>
                </label>
                <label className='form__label'>
                    <p className='form__input-title'>
                        Does the person feel that their parents are friendly and supportive?
                    </p>
                    <select
                        className='form__input'
                        name='parentCompassion'
                        onChange={handleParentCompassionChange}
                        value={parentCompassion || ''}
                        required>
                        <option value='' disabled>Choose an option</option>
                        <option>Never</option>
                        <option>Rarely</option>
                        <option>Sometimes</option>
                        <option>Most of the time</option>
                        <option>Always</option>
                    </select>
                </label>
                <label className='form__label'>
                    <p className='form__input-title'>
                        Does the person consider themselves to be underweight?
                    </p>
                    <select
                        className='form__input'
                        name='underweight'
                        onChange={handleUnderweightChange}
                        value={underweight || ''}
                        required>
                        <option value='' disabled>Choose an option</option>
                        <option>No</option>
                        <option>Yes</option>
                    </select>
                </label>
                <label className='form__label'>
                    <p className='form__input-title'>
                        Does the person consider themselves to be overweight?
                    </p>
                    <select
                        className='form__input'
                        name='overweight'
                        onChange={handleOverweightChange}
                        value={overweight || ''}
                        required>
                        <option value='' disabled>Choose an option</option>
                        <option>No</option>
                        <option>Yes</option>
                    </select>
                </label>
                <label className='form__label'>
                    <p className='form__input-title'>
                        Has the person ever been diagnosed with obesity?
                    </p>
                    <select
                        className='form__input'
                        name='obese'
                        onChange={handleObesityChange}
                        value={obese || ''}
                        required>
                        <option value='' disabled>Choose an option</option>
                        <option>No</option>
                        <option>Yes</option>
                    </select>
                </label>
                <div className='form__controls'>
                    <button
                        className={`form__button form__button_reset ${isLoading && 'form__button_disabled'}`}
                        type='reset'
                        onClick={handleReset}
                        disabled={isLoading}>Reset</button>
                    <button
                        className={`form__button ${isLoading && 'form__button_disabled'}`}
                        type='submit'
                        disabled={isLoading}>{isLoading ? 'Skynet loading...' : 'Evaluate'}</button>
                </div>
            </form>
        </div>
    )
}

export default Form;