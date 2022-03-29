import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'
function FloatingWhatsappButton() {
  return (
    <div>
    <FloatingWhatsApp
        phoneNumber="+919891116408"
        accountName="Shree-Dental-Clinic"
        allowClickAway
        notification
        notificationDelay={60000} // 1 minute
      />
    </div>
  )
}


export default FloatingWhatsappButton