/// <reference types="cypress" />

describe('HTTP - REST API automation', function(){

    beforeEach('Load data from fixture file', function(){
        cy.fixture('sampleData').then(function(data){
            //To make available to fixture data for out of this block
            this.data = data
            cy.log(this.data.CdcOutboundEnvelope.CdcTenant.GlobalId)
            cy.log('Sumit')
        })
    })

    it('TC-02 POST API', function(){
        cy.request({
                method : 'POST',
                url : 'http://httpbin.org/post',
                body : {
                    'GlobalId' : this.data.CdcOutboundEnvelope.CdcTenant.GlobalId,
                    'SiteId' : this.data.CdcOutboundEnvelope.CdcTenant.SiteId
                },
        
                headers : {
                    'content-type' : 'application/json',
                }        

        }).then(function(response){
            expect(response.body).have.property('json')
            expect(response.body.json).deep.equal({
                "GlobalId": "1058430126",
                "SiteId": "134998"
            })

        })

        
    })




})