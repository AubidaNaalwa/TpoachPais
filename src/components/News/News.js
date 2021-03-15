import React from 'react';
import NewsForLargeScreen from './NewsForLargeScreen';

export default function News() {
    return (
        <div className="marq_font news_container">
            <div className="news_header">أحدث الأخبار لموقع مركز العلوم والفضاء</div>
            <div className="marquee">
                <div className="marquee_content">
                    <p>
                        <NewsForLargeScreen/>
                    </p>
                </div>
            </div>
        </div>
    );
}
