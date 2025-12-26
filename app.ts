import { AdministrativeAccount } from './class/AdministrativeAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { DioAccount } from './class/DioAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
const admnistrativeAccount: AdministrativeAccount = new AdministrativeAccount('DIO', 20)


console.log(peopleAccount)
peopleAccount.deposit(10)
peopleAccount.getName()
peopleAccount.getBalance()
peopleAccount.withdraw(10)
console.log(companyAccount)
companyAccount.getName()
companyAccount.deposit(10)
companyAccount.getBalance()
companyAccount.withdraw(10)
console.log(admnistrativeAccount)
admnistrativeAccount.administrativeDepoosit(10)
admnistrativeAccount.getName()
admnistrativeAccount.getBalance()
admnistrativeAccount.withdraw(10)