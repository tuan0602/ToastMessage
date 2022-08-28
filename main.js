
function toast ( {
    title = '', message = '', type ='',duration = ''
}) {
    const main = document.getElementById('toast');
    const delay = (duration/1000).toFixed(2);
   

    if (main) {
        
        const toast = document.createElement('div');
        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-info',
            error: 'fa-solid fa-circle-exclamation'
        };
        const icon =icons[type];
        toast.classList.add('toast', `toast--${type}`);
        // auto remove 
        const autoRemoveId=setTimeout(function() {
            main.removeChild(toast)
    
            }, duration + 1000)

        //remove toast when click
        toast.onclick = function (e) {
            if(e.target.closest('.toast__close'))
            {
                main.removeChild(toast);
                clearTimeout(autoRemoveId)
            }
            
       }
        toast.style.animation = `slideInLeft  linear .4s, fadeOut  linear 1s ${delay}s forwards`
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        ` ;
        main.appendChild(toast)

        
       

    }


}
function showSuccessToast() {
    toast ({
        title : 'success' ,message : 'Anyone with access can  view your invited visistor',type: 'success', duration : 4000
    })
}

function showErrorToast() {
    toast ({
        title : 'Error' ,message : 'Anyone with access can  view your invited visistor',type: 'error', duration : 4000
    })
}
