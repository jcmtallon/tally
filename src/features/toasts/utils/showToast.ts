import { toast, ToastOptions } from '../toastify'

function showErrorToast(msg: string, options: ToastOptions = {}) {
  toast.error(msg, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    ...options,
  })
}

export { showErrorToast }
