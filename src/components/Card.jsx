import React from 'react';

export const Card = ({imageUrl, firstName, lastName, birthday}) => {
    return (
        <div className="card">
            <div className="card">
                <img src={imageUrl} alt="Some image ..."/>
                <div className="card-body">
                    <h5 className="card-title">{firstName + lastName}</h5>
                    <p className="card-text">
                        Birthday: {birthday.toLocaleDateString('en-US')}
                    </p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};
