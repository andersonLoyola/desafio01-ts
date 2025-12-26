import { DioAccount } from "./DioAccount";

export class AdministrativeAccount extends DioAccount {

    public administrativeDepoosit(amount: number): void {
        this.deposit(amount + 10)
    }
};