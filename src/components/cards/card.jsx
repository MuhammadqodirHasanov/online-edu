import './card.css'

const Card = function () {
    return (
        <div className='card'>
            <div className='item'>
                <a href='#'>
                    <h2>1400+</h2>
                    <p className='txt'>Online Courses</p>
                </a>
            </div>
            <div className='item'>
                <a href='#'>
                    <h2>1100+</h2>
                    <p className='txt'>Expert Instructors</p>
                </a>
            </div>
            <div className='item'>
                <a href='#'>
                    <h2>800+</h2>
                    <p className='txt'>Success Stories</p>
                </a>
            </div>
        </div>
    )
}

export default Card