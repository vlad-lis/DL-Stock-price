function About() {
    return (
        <div className='about'>
            <p className='info__text-paragraph'>
                DISCLAIMER: this model was created for demonstration purposes and does not claim to provide
                a comprehensive representation of all factors that contribute to the occurrence of bullying,
                nor is it intended to be used as a basis for
                taking any action based solely on the output results.
            </p>
            <p className='info__text-paragraph'>
                Dataset from Kaggle used in this project:&nbsp;
                <a
                    className='info__link'
                    href='https://www.kaggle.com/datasets/leomartinelli/bullying-in-schools'
                    target='_blank'
                    rel="noreferrer">
                    <span className='info__text-span info__text-span_local'>Link</span>
                </a>.
            </p>
            <p className='info__text-paragraph'>
                The machine learning model used in this project:&nbsp;
                <a
                    className='info__link'
                    href='https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html'
                    target='_blank'
                    rel="noreferrer">
                    <span className='info__text-span info__text-span_local'>Scikit-learn RandomForestClassifier</span>
                </a>.
            </p>
            <p className='info__text-paragraph'>
                The initial dataset contained almost 57 thousand observations and 18 features.
                After data cleaning (including dropping duplicates and applying downsampling),
                and depending on the approach used (with various target variables as output),
                the data used to train the model varied from 12 to 30 thousand observations and had 12 features.
            </p>
            <p className='info__text-paragraph'>
                The output contains four values:<br />
                &emsp;&emsp;&emsp;1. "Overall probability" - which combines the probabilities of
                three possible target variables into one.<br />
                &emsp;&emsp;&emsp;2. "Inside school" - the probability of the target variable
                corresponding to the risk of being bullied inside school.<br />
                &emsp;&emsp;&emsp;3. "Outside school" - the probability of the target variable
                corresponding to the risk of being bullied outside school.<br />
                &emsp;&emsp;&emsp;4. "Cyberbullying" - the probability of the target variable
                corresponding to the risk of being cyberbullied.
            </p>
        </div>
    )
}

export default About;