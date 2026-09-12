/*
============================================
STRATEGY DESIGN PATTERN
============================================

Different payment strategies can be selected
without changing the checkout process.

Strategies:
1. Cash
2. GCash
3. Card
*/


/* ==========================================
   CASH STRATEGY
========================================== */

class CashPaymentStrategy {

    pay(amount) {

        return {

            method: "Cash",

            icon: "💵",

            message:
                `Please prepare ₱${amount.toFixed(2)} for cash payment.`

        };

    }

}


/* ==========================================
   GCASH STRATEGY
========================================== */

class GCashPaymentStrategy {

    pay(amount) {

        return {

            method: "GCash",

            icon: "📱",

            message:
                `Please pay ₱${amount.toFixed(2)} using GCash.`

        };

    }

}


/* ==========================================
   CARD STRATEGY
========================================== */

class CardPaymentStrategy {

    pay(amount) {

        return {

            method: "Card",

            icon: "💳",

            message:
                `₱${amount.toFixed(2)} will be charged to your card.`

        };

    }

}


/* ==========================================
   PAYMENT CONTEXT
========================================== */

class PaymentContext {

    constructor(strategy = null) {

        this.strategy = strategy;

    }


    setStrategy(strategy) {

        this.strategy = strategy;

    }


    executePayment(amount) {

        if (!this.strategy) {

            throw new Error(
                "Payment strategy is not selected."
            );

        }


        return this.strategy.pay(
            amount
        );

    }

}