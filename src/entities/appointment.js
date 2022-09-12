

export class Appoitment{
    // Private parameters
    #startedAt
    #endedAt
    #customer

    constructor(startedAt, endedAt, customer){

        this.#staterdAt = startedAt
        this.#endedAt = endedAt
        this.#customer = customer

    }

    // set getters

    getStartedAt() {
        return this.#startedAt
    }

    getEndedAt() {
        return this.#endedAt
    }

    getCustomer() {
        return this.#customer
    }
}


