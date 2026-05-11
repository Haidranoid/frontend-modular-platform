function selectDayFromCurrent(day) {
  let date = new Date()
  date.setDate(date.getDate() + day)
  let futureDay = date.getDate()
  let futureMonth = date.toLocaleDateString('default', { month: 'short' })
  let dateAssert = futureMonth + ' ' + futureDay + ', ' + date.getFullYear()

  cy.get('nb-calendar-navigation')
    .invoke('attr', 'ng-reflect-date')
    .then((dateAttribute) => {
      if (!dateAttribute.includes(futureMonth)) {
        cy.get('[data-name="chevron-right"]').click()

        /*cy.get('nb-calendar-day-picker')
          .contains(futureDay)
          .click()
         */

        selectDayFromCurrent(day)
      } else {
        cy.get('.day-cell').not('.bounding-month').contains(futureDay).click()
      }
    })

  return dateAssert
}

export class DatepickerPage {
  selectCommonDatepickerFromToday(dayFromToday) {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Datepicker').click()

    cy.contains('nb-card', 'Common Datepicker')
      .find('input')
      .then((input) => {
        cy.wrap(input).click()
        const dateAssert = selectDayFromCurrent(dayFromToday)

        //cy.wrap(input).invoke('prop','value')
        cy.wrap(input).invoke('val').should('equal', dateAssert)
      })
  }

  selectDatepickerWithRangeFromToday(firstDay, secondDate) {
    cy.contains('nb-card', 'Datepicker With Range')
      .find('input')
      .then((input) => {
        cy.wrap(input).click()

        let dateAssertFirst = selectDayFromCurrent(firstDay)
        let dateAssertSecond = selectDayFromCurrent(secondDate)

        const finalDate = dateAssertFirst + ' - ' + dateAssertSecond

        cy.wrap(input).invoke('prop', 'value').should('contain', finalDate)
      })
  }
}

export const datepickerPage = new DatepickerPage()
