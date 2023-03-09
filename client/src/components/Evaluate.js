import Form from "./Form";
import Predictions from "./Predictions";

function Evaluate({ onFormSubmit, predictions, isPredictionsPopupOpen, closePredictions }) {
    return (
        <div className='evaluate'>
            <Form
                onFormSubmit={onFormSubmit} />
            <Predictions
                predictions={predictions}
                isOpen={isPredictionsPopupOpen}
                onClose={closePredictions} />
        </div>

    )
}

export default Evaluate;