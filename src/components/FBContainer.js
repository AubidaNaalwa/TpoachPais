import React, { useEffect } from 'react';

export default function FBContainer() {
    useEffect(() => { if (window.FB) window.FB.XFBML.parse(); }, []);

    return (
        <div className="fb-page" data-href="https://www.facebook.com/&#x62a;&#x628;&#x648;&#x627;&#x62d;-&#x648;&#x645;&#x631;&#x643;&#x632;-&#x641;&#x636;&#x627;&#x621;-&#x627;&#x644;&#x637;&#x64a;&#x628;&#x629;-334755379982653" data-tabs="timeline,events,messages" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"></div>
    );
}