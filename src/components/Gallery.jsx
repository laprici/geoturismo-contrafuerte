import React, {useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button className="bg-white rounded-full px-4 lg:px-6 flex items-center gap-x-2 py-2 mtlg:py-2 mt-2 uppercase text-xs lg:text-xl" onClick={() => setOpen(true)}>Ver fotos erupción 2011
                <svg className="w-[18px] lg:w-[24px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 13L4 11L16 11L10.5 5.50004L11.92 4.08004L19.84 12L11.92 19.92L10.5 18.5L16 13L4 13Z" fill="black"/>
                </svg>
            </button>
            <button type="button" >
            </button>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: "/volcan1.jpeg" },
                    { src: "/volcan2.jpeg" },
                    { src: "/volcan3.jpeg" },
                    { src: "/volcan4.jpeg" },
                    { src: "/volcan5.jpeg" },
                ]}
            />
        </>
    );
}

export default Gallery;