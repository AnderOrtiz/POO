class CuentaBancaria {
    constructor(public titular: string, private saldo: number) { }

    getSaldo(user: { nombre: string, rol: string }) {
        if (user.rol == 'cliente') {
            throw new Error('Los clientes no puede ver el saldo')
        }

        return this.saldo
    }

    setSaldo(
        user: { nombre: string, rol: string },
        saldo: number
    ) {
        if (user.rol == 'cliente') {
            throw new Error('Los clientes no puede modificar el saldo')
        }


        if (saldo <= 0) {
            throw new Error('Es saldo no puede ser menor a cero')
        }
        this.saldo = saldo
    }
}


const userAdmin = {
    nombre: 'admin',
    rol: 'admin'
}

const user = {
    nombre: 'usuario',
    rol: 'cliente'
}

const cuentaBancaria = new CuentaBancaria('Ander', 1000)
console.log(cuentaBancaria.titular);
console.log(cuentaBancaria.getSaldo(userAdmin));
cuentaBancaria.setSaldo(userAdmin, 1500);
console.log(cuentaBancaria.getSaldo(userAdmin));
// cuentaBancaria.setSaldo(user, 100);
// console.log(cuentaBancaria.getSaldo(user));