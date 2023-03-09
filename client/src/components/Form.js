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
                <label>
                    <input
                        name='age'
                        type='number'
                        onChange={handleAgeChange}
                        placeholder='Age'
                        value={age || ''}>
                    </input>
                </label>
                <label>
                    <input
                        name='sex'
                        type='number'
                        onChange={handleSexChange}
                        placeholder='Sex'
                        value={sex || ''}>
                    </input>
                </label>
                <label>
                    <input
                        name='attacked'
                        type='number'
                        onChange={handleAttackedChange}
                        placeholder='Was attacked'
                        value={attacked || ''}>
                    </input>
                </label>
                <label>
                    <input
                        name='fighting'
                        type='number'
                        onChange={handleFightingChange}
                        placeholder='Initiated fights'
                        value={fighting || ''}>
                    </input>
                </label>
                <label>
                    <input
                        name='lonely'
                        type='number'
                        onChange={handleLonelyChange}
                        placeholder='Felt lonely'
                        value={lonely || ''}>
                    </input>
                </label>
                <label>
                    <input
                        name='friends'
                        type='number'
                        onChange={handleFriendsChange}
                        placeholder='Number of friends'
                        value={friends || ''}>
                    </input>
                </label>
                <label>
                    <input
                        name='absence'
                        type='number'
                        onChange={handleAbsenceChange}
                        placeholder='Skipped classes without permission'
                        value={absence || ''}>
                    </input>
                </label>
                <label>
                    <input
                        name='studentCompassion'
                        type='number'
                        onChange={handleStudentCompassionChange}
                        placeholder='Found peers supportive'
                        value={studentCompassion || ''}>
                    </input>
                </label>
                <label>
                    <input
                        name='parentCompassion'
                        type='number'
                        onChange={handleParentCompassionChange}
                        placeholder='Found parents supportive'
                        value={parentCompassion || ''}>
                    </input>
                </label>
                <label>
                    <input
                        name='underweight'
                        type='number'
                        onChange={handleUnderweightChange}
                        placeholder='Was underweight'
                        value={underweight || ''}>
                    </input>
                </label>
                <label>
                    <input
                        name='overweight'
                        type='number'
                        onChange={handleOverweightChange}
                        placeholder='Was overweight'
                        value={overweight || ''}>
                    </input>
                </label>
                <label>
                    <input
                        name='obese'
                        type='number'
                        onChange={handleObesityChange}
                        placeholder='Suffered from obesity'
                        value={obese || ''}>
                    </input>
                </label>
                <button type='submit'>Go</button>
            </form>
        </div>
    )
}

export default Form;