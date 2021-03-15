import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useState } from "react";

export default function TPaisNew(props) {
    const [err, setErr] = useState(0);

    const checkCategory = () => {
        let category = ''
        props.new.available != null ? category = 'courses' : props.new.category ? category = 'experiments' : category= 'events'
        return category;
    }



    return (
        <div className="feedItem">
            {
                props.pageSize && (props.pageSize.width < 1844 || props.pageSize.height < 738) && (props.pageSize.width > 601) &&
                <div>
                    <div className="laptop-header">{props.new.name}</div>
                    <div className='info'>
                        <img className="feedIcon" src={!err ? props.new.img : "https://elearningindustry.com/wp-content/uploads/2020/01/designing-effective-elearning-courses.jpg"} alt='img' onError={() => setErr(1)} ></img>
                        {props.pageSize.width > props.pageSize.height ?
                            <div style={{ width: '80%' }}>
                                <div className='laptop-subTitle'>{props.new.shortDescription}</div>
                                <div className='laptop-text'>{props.new.longDescription}</div>
                                <Link to={`/tpais/${checkCategory()}/${props.new._id}`}>
                                    <div className='readMore'>اقرا المزيد..</div>
                                </Link>
                            </div> :
                            <div>
                                <div className='laptop-subTitle'>{props.new.shortDescription}</div>
                                <div className='laptop-text'>{props.new.longDescription}</div>
                                <Link to={`/tpais/${checkCategory()}/${props.new._id}`}>
                                    <div className='readMore'>اقرا المزيد..</div>
                                </Link>
                            </div>}
                    </div>


                </div>
            }

            {
                props.pageSize && (props.pageSize.width < 640 || props.pageSize.height < 568) &&
                <>
                    <div className="mobile-header">{props.new.name}</div>
                    <div className='mobile-subtitle' style={{ margin: '2%' }}>{props.new.shortDescription}</div>
                    <center>
                        <img className="mobileImg" src={!err ? props.new.img : "https://elearningindustry.com/wp-content/uploads/2020/01/designing-effective-elearning-courses.jpg"} alt='img' onError={() => setErr(1)} ></img>
                    </center>
                    <Link to={`/tpais/${checkCategory()}/${props.new._id}`}>
                        <div className='readMore' style={{ margin: '2%' }}>اقرا المزيد..</div>
                    </Link>
                </>
            }
        </div >

    )
}