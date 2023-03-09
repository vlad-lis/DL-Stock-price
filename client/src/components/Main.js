import Form from "./Form";

function Main({ onFormSubmit, predictions }) {
    return (
        <div className='main'>
            <Form
                onFormSubmit={onFormSubmit} />
            <p>combined:</p>
            <p>{predictions.combined}</p>
            <p>inside:</p>
            <p>{predictions.inside}</p>
            <p>outside:</p>
            <p>{predictions.outside}</p>
            <p>cyber:</p>
            <p>{predictions.cyber}</p>
        </div>

    )
}

export default Main;