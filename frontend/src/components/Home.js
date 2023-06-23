function Home() {
    return (
        <div className='home'>
            <p className='info__text-paragraph'>
                <a className='info__link' href='https://www.stopbullying.gov/bullying/what-is-bullying' target='_blank' rel="noreferrer">
                    <span className='info__text-span'>
                        Bullying</span>
                </a>
                &nbsp;is unwanted, aggressive behavior among school aged children that involves a real or perceived
                power imbalance. The behavior is repeated, or has the potential to be repeated, over time.
                Both kids who are bullied and who bully others may have serious, lasting problems.
            </p>
            <p className='info__text-paragraph'>
                <a className='info__link' href='https://www.stopbullying.gov/bullying/at-risk' target='_blank' rel="noreferrer">
                    <span className='info__text-span'>
                        Who is at risk?</span>
                </a>
                &nbsp;No single factor puts a child at risk of being bullied or bullying others.
                Bullying can happen anywhere — cities, suburbs, or rural towns.
                Depending on the environment, some groups may be at an increased risk of being bullied.
                Stigma can also spread false and harmful information that can lead to increasing rates of bullying,
                harassment, and hate crimes against certain groups of people.
            </p>
            <p className='info__text-paragraph'>
                This project attempts to evaluate vulnerability to bullying with the help of a machine learning model.
                The model is trained on an open dataset from Kaggle.
                By providing information about a hypothetical person and inputting it into the model,
                it outputs the probabilities of four events: overall estimation of the risk of being bullied,
                the risk of being bullied in school, outside of school, and being cyberbullied.
            </p>
            <p className='info__text-paragraph'>
                To test the model with your own inputs, please visit the&nbsp;
                <a className='info__link' href='/evaluate'>
                    <span className='info__text-span info__text-span_local'>Evaluate</span>
                </a> section.
            </p>
            <p className='info__text-paragraph'>
                To learn more about the model and the dataset, please visit the&nbsp;
                <a className='info__link' href='/about'>
                    <span className='info__text-span info__text-span_local'>About</span>
                </a> section.
            </p>
        </div>
    )
}

export default Home;