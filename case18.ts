
// DEPENDENCY INJECTION IN TYPESCRIPT



// INTERFACE (contract)

interface PaymentGateway {
  processPayment(amount: number): Promise<boolean>;
}

// REAL GATEWAYS

class StripeGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Stripe processing ₹${amount}`);
    return true;
  }
}

class PaypalGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`PayPal processing ₹${amount}`);
    return true;
  }
}

class BankTransferGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Bank transfer processing ₹${amount}`);
    return true;
  }
}

// MOCK GATEWAYS (for testing)

class MockSuccessGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Mock success payment ₹${amount}`);
    return true;
  }
}

class MockFailGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Mock FAILED payment ₹${amount}`);
    return false;
  }
}


// PAYMENT PROCESSOR

class PaymentProcessor {
  constructor(private gateway: PaymentGateway) {}

  async pay(amount: number): Promise<void> {
    const success = await this.gateway.processPayment(amount);

    if (success) console.log("Payment success");
    else console.log("Payment failed");
  }
}


// USAGE


const stripe = new PaymentProcessor(new StripeGateway());
stripe.pay(100);

const paypal = new PaymentProcessor(new PaypalGateway());
paypal.pay(200);

const bank = new PaymentProcessor(new BankTransferGateway());
bank.pay(300);

// testing
const testSuccess = new PaymentProcessor(new MockSuccessGateway());
testSuccess.pay(50);

const testFail = new PaymentProcessor(new MockFailGateway());
testFail.pay(75);
