import React from 'react'

const MapSection = () => {
    return (
        <div className="w-full p-4 text-center">

            <h2 className="text-[18px] font-normal mb-4 ">Our Location</h2>
            <div className="w-full overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.463609177736!2d80.78413587456089!3d6.713138093282647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae38b2354715279%3A0x9584cfcca475917d!2sDesha%20E-Mart!5e0!3m2!1sen!2slk!4v1740338028765!5m2!1sen!2slk"
            className="w-full max-w-full h-[300px] sm:h-[450px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>
        </div>
    );
}

export default MapSection