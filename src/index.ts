class CuentaBancaria {
    constructor(private _saldo: number) { }

    get saldo(): number {
        return this._saldo;
    }


    set saldo(v: number) {
        if (v < 0) {
            console.log(`No se permite saldo negativo`);
            return;
        }
        this._saldo = v;
    }

    depositar(monto: number) {
        if (monto > 0) {
            this._saldo = monto;
        }
    }
}

const cuenta = new CuentaBancaria(1500);
cuenta.saldo = 5000;
cuenta.depositar(100);
console.log(cuenta.saldo);
