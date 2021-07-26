import React from 'react'
import Statistic from './Statistic'

function Statistics({ reviewStatistics }) {
    return (
        <div>
            <h3>Statistics</h3>
            <table>
                <tbody>
                    {reviewStatistics.map(data => {
                        return <Statistic key={data.text} text={data.text} value={data.value} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Statistics
