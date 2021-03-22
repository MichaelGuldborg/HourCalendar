import Customer from "./Customer";
import Subscription from "./Subscription";

export default interface SubscribeMemberRequest {
    customer: Customer;
    subscription: Subscription;
}