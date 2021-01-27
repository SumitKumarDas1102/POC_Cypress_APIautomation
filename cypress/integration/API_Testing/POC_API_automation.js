/// <reference types="cypress" />

describe('HTTP - REST API automation', function(){

    beforeEach('Load data from fixture file', function(){
        cy.fixture('example').then(function(data){
            //To make available to fixture data for out of this block
            this.data = data
            cy.log(this.data.id)
        })
    })

    it('TC-01 GET API', function(){
        cy.request({
            method : 'GET',
            url : 'http://httpbin.org/get'
        }).then(function(response){
            expect(response.body).have.property('url')
        })
    })

    it('TC-02 POST API', function(){
        cy.request({
                method : 'POST',
                url : 'http://httpbin.org/post',
                body : {
                    'id' : this.data.id,
                    'age' : this.data.age
                },
                headers : {
                    'content-type' : 'application/json',
                }

        }).then(function(response){
            expect(response.body).have.property('json')
            expect(response.body.json).to.deep.equal({
                'age': 27,    
                'id': 'Sumit1102'
                })

        })
    })




})