export class CuentaBancaria {
    constructor(public titular: string, public saldo: number) {
        this.validarCuenta(titular, saldo)
    }

    private validarCuenta(titular: string, saldo: number): void {
        if (titular === '') { throw new Error('El titular no puede estar vacío') }
        if (saldo < 0) { throw new Error('El saldo no puede ser negativo') }
    }

    depositar(monto: number): void {
        if (monto <= 0) { throw new Error('El monto debe ser mayor a 0') }
        this.saldo += monto
    }

    retirar(monto: number): void {
        if (monto <= 0) { throw new Error('El monto debe ser mayor a 0') }
        if (this.saldo - monto < 0) { throw new Error('No se puede dejar saldo negativo') }
        this.saldo -= monto
    }
}

export class CuentaAhorro extends CuentaBancaria {
}

export class CuentaCorriente extends CuentaBancaria {
}