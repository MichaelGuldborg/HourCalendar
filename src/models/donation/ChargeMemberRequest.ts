import Customer from "./Customer";
import Charge from "./Charge";

export default interface ChargeMemberRequest {
    customer: Customer;
    charge: Charge;
}