import { About, Service, Testimonial, Work, Contact } from '../../Backend/controllers/portfolioController.js';

export default async function handler(req, res) {
    console.log('GET request received');
    try {
        const about = await About.findOne();
        const service = await Service.findOne();
        const testimonial = await Testimonial.findOne();
        const work = await Work.findOne();
        const contact = await Contact.findOne();

        res.status(200).json({
            about,
            service,
            testimonial,
            work,
            contact
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los datos del portafolio' });
    }
}
