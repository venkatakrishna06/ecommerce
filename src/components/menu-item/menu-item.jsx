import React from "react";
import './menu-item.scss';
import {withRouter} from "react-router-dom";

function MenuItem({title,imageUrl,size,history,match,linkUrl}){
    return(

        <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`) }

           style={{
            backgroundImage:`url(${imageUrl})`
        }}
             >
            <div className="content">
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>Shop now</span>
            </div>
        </div>




    )
}
export default withRouter(MenuItem);