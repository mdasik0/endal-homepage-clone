import React from "react";
import PageGenTitle from "../PageGenTitle";

const EndelStreamingSec = () => {
  return (
    <div>
      <PageGenTitle
        title_part_one="Endel on streaming platforms"
        description="Listen to albums, singles, and playlists from Endel on your favorite streaming platform, including collaborations with top artists like James Blake and Ta-ku. Created using Endel’s patented technology, these releases might not be personalized or adaptive, but are a great way to enjoy the science-backed sound of Endel wherever you are."
      />
      <div className='w-full h-[284px] bg-[url("/endel-streaming/endel-dsp-covers.avif")] bg-cover bg-center bg-no-repeat'></div>
    </div>
  );
};

export default EndelStreamingSec;
