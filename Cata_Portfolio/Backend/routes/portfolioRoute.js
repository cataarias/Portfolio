const router = require('express').Router();
const { About, Service, Testimonial, Work, Contact } = require('../model/portfolioModel');

router.get('http://localhost:5000/api/portfolio/get-portfolio-data', async (req, res) => {
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

    
});



module.exports = router;
