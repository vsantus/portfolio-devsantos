import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [showPopup, setShowPopup] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
            .then(() => {
                setShowPopup(true);
                setTimeout(() => setShowPopup(false), 3000); // popup desaparece em 3s
            })
            .catch(() => {
                alert("Erro ao enviar, tente novamente.");
            });

        e.target.reset();
    };

    return (
        <div className="relative">
            {showPopup && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-md transition-all z-10">
                    ✅ Mensagem enviada com sucesso!
                </div>
            )}

            <form onSubmit={sendEmail} className="flex flex-col gap-4">
                <input type="text" name="user_name" placeholder="Seu Nome" required className="border p-2 rounded" />
                <input type="email" name="user_email" placeholder="Seu Email" required className="border p-2 rounded" />
                <textarea name="message" placeholder="Sua Mensagem" required className="border p-2 rounded" rows="5" />
                <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Enviar</button>
            </form>
        </div>
    );
};

export default ContactForm;
