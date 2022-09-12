import { test, expect } from 'vitest'
import { Appointment } from './appointment'

test("create Appointment", () => {

    var appointment = new Appointment(
        new Date(),
        new Date(),
        "Jose Cumbe"
    )

    expect(appointment).toBeInstanceOf(Appointment)
})

test("get customer", () => {


    var appointment2 = new Appointment(
        new Date(),
        new Date(),
        "Jose Cumbe"
    )

    expect(appointment2.getCustomer()).toEqual("Jose Cumbe")
})