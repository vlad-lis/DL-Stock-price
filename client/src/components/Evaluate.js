import Form from "./Form";
import Predictions from "./Predictions";

function Evaluate({ onFormSubmit, predictions }) {
    return (
        <div className='main'>
            <Form
                onFormSubmit={onFormSubmit} />
            <Predictions
                predictions={predictions} />
        </div>

    )
}

export default Evaluate;