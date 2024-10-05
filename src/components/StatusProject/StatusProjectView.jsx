import React from 'react'

function StatusProjectView({ status, bgColor,icon }) {
    return (
        <>
            <button className="fixed-start"
                style={{ backgroundColor: bgColor }} disabled
            >
                <div>
                    <div className="w-100 d-flex justify-content-center">
                        {icon}
                    </div>
                    <div className="d-flex justify-content-center fw-bold">{status}</div>
                </div>
            </button>
        </>
    )
}

export default StatusProjectView