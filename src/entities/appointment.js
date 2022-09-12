

export class Appointment {
    // Private parameters
    #startedAt
    #endedAt
    #customer

    constructor(startedAt, endedAt, customer){

        this.#startedAt = startedAt
        this.#endedAt = endedAt
        this.#customer = customer

    }

    // create getters

    getStartedAt() {
        return this.#startedAt
    }

    getEndedAt() {
        return this.#endedAt
    }

    getCustomer() {
        return this.#customer
    }

    // create getters 

    setStartedAt(newStartedAt) {
        this.#startedAt = newStartedAt
    }

    setEndedAt(newEndedAt) {
        this.#endedAt = newEndedAt
    }

    setCustomer(newCustomer) {
        this.#customer = newCustomer
    }

    
}


// let appoitment1 = new Appoitment("10-20-2022", "10-20-2022", "Jose Cumbe")

// console.log(appoitment1.getCustomer())

