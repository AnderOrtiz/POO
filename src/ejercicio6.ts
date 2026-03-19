/**
 * Crear una clase abstracta Notificación con el método enviar(). El sistema debe permitir
enviar notificaciones por Email, SMS o WhatsApp. Cada clase implementará su forma de
envío.
 */

abstract class Notificación {
    constructor(public mensaje: string) { }
    abstract enviar(): void;
}

class Email extends Notificación {
    constructor(mensaje: string) {
        super(mensaje);
        this.enviar();
    }
    enviar(): void {
        console.log(`el mensaje: ${this.mensaje}, fue enviado exitosamente por Email`);
    }
}

class SMS extends Notificación {
    constructor(mensaje: string) {
        super(mensaje);
        this.enviar();
    }
    enviar(): void {
        console.log(`el mensaje: ${this.mensaje}, fue enviado exitosamente por SMS`);
    }
}

class WhatsApp extends Notificación {
    constructor(mensaje: string) {
        super(mensaje);
        this.enviar();
    }
    enviar(): void {
        console.log(`el mensaje: ${this.mensaje}, fue enviado exitosamente por WhatsApp`);
    }
}

const email = new Email('Hola que hace?')
const sms = new SMS('Hola que hace?')
const whats = new WhatsApp('Hola que hace?')