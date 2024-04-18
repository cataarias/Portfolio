const mongoose = require('mongoose');

// Define el esquema del modelo de Portfolio
const aboutSchema = new mongoose.Schema({
    about: {
        skills: [
            {
                title: String,
                icons: [String] // Aquí puedes almacenar los nombres de las clases de los iconos
            }
        ],
        awards: [
            {
                title: String,
                stage: String
            }
        ],
        experience: [
            {
                title: String,
                stage: String
            }
        ],
        credentials: [
            {
                title: String,
                stage: String
            }
        ]
    }
});

// Define el esquema del modelo de Service
const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // Otros campos que puedas necesitar para cada servicio
});

// Define el esquema del modelo de Testimonial
const testimonialSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    clientName: String // Campo opcional para almacenar el nombre del cliente
});

// Define el esquema del modelo de Work
const workSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // Otros campos que puedas necesitar para cada trabajo, como imagen, categoría, etc.
});

// Define el esquema del modelo de Contact
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Crea y exporta los modelos
const About = mongoose.model('Abouts', aboutSchema);
const Service = mongoose.model('Services', serviceSchema);
const Testimonial = mongoose.model('Testimonials', testimonialSchema);
const Work = mongoose.model('Works', workSchema);
const Contact = mongoose.model('Contacts', contactSchema);

module.exports = { About, Service, Testimonial, Work, Contact };
