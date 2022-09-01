import './CreatersPage.scss'

function CreatersPage() {
    return (
        <>
        <div className='creators-page'> 
            <h1 className='creators-page__title'>Creators</h1>
            <div className='creators-page__person'>
                <image className='creators-page__image' src="#" />
                <h2 className='creators-page__name'>Chris Lee</h2>
            </div>
            <div className='creators-page__person'>
                <image className='creators-page__image' src="#" />
                <h2 className='creators-page__name'>Matthew Hawkins</h2>
            </div>
            <div className='creators-page__person'>
                <image className='creators-page__image' src="#" />
                <h2 className='creators-page__name'>Aarun Jassal</h2>
            </div>
        </div>
       
        </>
    )
}

export default CreatersPage