import React from 'react'
import MapSection from './MapSection';
import ReviewSection from './ReviewSection';

const MapReview = () => {
    return (
        <div className='flex flex-row gap-3'>
          <MapSection />
          {/* <ReviewSection /> */}
        </div>
    );
}

export default MapReview