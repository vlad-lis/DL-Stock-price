import Form from "./Form";
import Predictions from "./Predictions";

function Evaluate({ onFormSubmit, predictions, isPredictionsPopupOpen }) {
    return (
        <div className='main'>
            <Form
                onFormSubmit={onFormSubmit} />
            <Predictions
                predictions={predictions}
                isOpen={isPredictionsPopupOpen} />
        </div>

    )
}

export default Evaluate;