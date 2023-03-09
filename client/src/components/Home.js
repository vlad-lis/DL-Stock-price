function Home() {
    return (
        <div className='home'>
            <p className='info__text-paragraph'>
                <a className='info__link' href='https://www.stopbullying.gov/bullying/what-is-bullying' target='_blank'>
                    <span className='info__text-span'>
                        Bullying </span>
                </a>
                is unwanted, aggressive behavior among school aged children that involves a real or perceived power imbalance.
                The behavior is repeated, or has the potential to be repeated, over time.
                Both kids who are bullied and who bully others may have serious, lasting problems.
            </p>
            <p className='info__text-paragraph'>
                <a className='info__link' href='https://www.stopbullying.gov/bullying/at-risk' target='_blank'>
                    <span className='info__text-span'>
                        Who is at risk? </span>
                </a>
                No single factor puts a child at risk of being bullied or bullying others. 
                Bullying can happen anywhere — cities, suburbs, or rural towns. 
                Depending on the environment, some groups may be at an increased risk of being bullied. 
                Stigma can also spread false and harmful information that can lead to increasing rates of bullying, 
                harassment, and hate crimes against certain groups of people.
            </p>
            <p className='info__text-paragraph'>
                This project attemps to evaluate vulnerability to being bullied with the help of machine learning model.
                The model is trained on open data set from Kaggle. By taking values 

            </p>
        </div>
    )
}

export default Home;