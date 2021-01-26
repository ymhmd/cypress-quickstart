/// <reference types="cypress" />

import { navigate, login } from "../page-objetcs/login-page";


describe('All tests..', () => {

    beforeEach(() => {
        navigate()
    })

    it('test 1', () => {
        login()
    })

    it('test 2', () => {
        login()
    })
});
