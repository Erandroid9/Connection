export const ZOOM=()=>{

    document.addEventListener('touchmove', function (e) {

        if (e.scale !== 1) {

            e.preventDefault();
            
        }

    }, { passive: false });

};