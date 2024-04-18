const { About, Service, Testimonial, Work, Contact } = require('../model/portfolioModel');

// Controlador para obtener todos los datos del portafolio
const getPortfolioData = async (req, res) => {
    try {
        const about = await About.findOne();
        const service = await Service.find();
        const testimonial = await Testimonial.find();
        const work = await Work.find();
        const contact = await Contact.findOne();

        if (!about || !service || !testimonial || !work || !contact) {
            return res.status(404).json({ message: 'No se encontraron datos del portafolio' });
        }
        
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
};

module.exports = { getPortfolioData };
