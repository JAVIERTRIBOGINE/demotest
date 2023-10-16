import { defineConfig } from 'cypress';
import { ChangeDetectorRef, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginComponent } from '../src/app/features/login/login.component'
import { MaterialModule } from 'src/app/core/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

describe('LoginComponent', () => {
  it('mounts', () => {
    // see: https://on.cypress.io/mounting-angular
    cy.mount(LoginComponent, {
      imports: [ ReactiveFormsModule, MaterialModule, BrowserModule, BrowserAnimationsModule ],
      componentProperties: {
        form : new FormGroup({
          name: new FormControl("", [ Validators.required]),
          password: new FormControl ("", [Validators.required, Validators.minLength(8)])
        })
      }

    });

  });

  it('login success', () => {

    // const spyTest = cy.spy().as("onChangeSpy");
    cy.mount(LoginComponent, {
      imports: [ ReactiveFormsModule, MaterialModule, BrowserModule, BrowserAnimationsModule ],
      componentProperties: {
        form : new FormGroup({
          // emit: spyTest as any,
          name: new FormControl("", [ Validators.required]),
          password: new FormControl ("", [Validators.required, Validators.minLength(8)])
        },
        )
      }

    });
    cy.get('[data-cy=input-nam]').type("javierTr")
    // .should('have.value', 'javierTr');
    cy.get('[data-cy=input-pass]').type("javiergmailcom")
    // .should('have.value', 'javiergmailcom');
    // cy.get('#login-submit').click();
    cy.should("not.have.attr", 'disabled');
    // cy.get("@onChangeSpy").should("have.been.calledWith", 1)

  })
})

