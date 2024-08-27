import React from 'react'

function BadgeCountryView({data}) {
  return (
    <>
            <span class="badge badge-info">
                {data.country}
            </span>
        </>
  )
}

export default BadgeCountryView