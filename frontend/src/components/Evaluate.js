import Form from "./Form";
import Predictions from "./Predictions";

function Evaluate({ onFormSubmit, predictions, isPredictionsPopupOpen, closePredictions, isLoading }) {
    return (
        <div className='evaluate'>
            <Form
                onFormSubmit={onFormSubmit}
                isLoading={isLoading} />
            <Predictions
                predictions={predictions}
                isOpen={isPredictionsPopupOpen}
                onClose={closePredictions} />
        </div>

    )
}

export default Evaluate;