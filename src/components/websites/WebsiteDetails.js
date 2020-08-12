import React from 'react';

const WebsiteDetails = ({website}) => {
    return(
      <div class="container">
      {console.log(website.url)}
      <div className="card"><span className="card-content">{website.url}</span></div>
      </div>
    )
}

export default WebsiteDetails;