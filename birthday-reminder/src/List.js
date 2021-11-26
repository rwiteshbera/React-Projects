import React from 'react'

export default function List(props) {
    const {
        people
    } = props;
    return (
        <div className="list">
            {people.map((person) => {
                const {id, name,age, image} = person;
                return (
                    <article key={id} className={people}>
                        <img src={image} alt={image} />
                        <div>
                            <h4 className="name">{name}</h4>
                            <p className="age">{age} years</p>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}
