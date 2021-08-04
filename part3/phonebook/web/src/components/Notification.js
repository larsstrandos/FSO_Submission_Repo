import React from 'react'

function Notification({ errorMessage }) {
    return (
        <>
            {errorMessage.errif ? (
                <div className={errorMessage.errTyp}>
                    {errorMessage.errMsg}
                </div>            
            ) : (
                <></>
            )}
        </>
    )
}

export default Notification
