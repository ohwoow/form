function stepForm() {

  const steps = document.querySelectorAll('.form__step'),
    prevBtn = document.querySelector('.prev__step'),
    nextBtn = document.querySelector('.next__step'),
    form = document.querySelector('.steps__form'),
    stepNumbers = document.querySelectorAll('.step__number'),
    progressSuccess = document.querySelector('.progress__success'),
    progressSteps = document.querySelector('.step__numbers');


    form.addEventListener('submit', (e) => e.preventDefault())

    let formStepIndex = 0

    prevBtn.addEventListener('click', (e) => {
      formStepIndex--
      stepNumbers[formStepIndex + 1].classList.remove('active')
      updateFormStep()
    })
    nextBtn.addEventListener('click', (e) => {
      formStepIndex++
      updateFormStep()
    })

    function updateFormStep() {
      steps.forEach(step => {
        step.classList.contains('active') && step.classList.remove('active')
      })
      steps[formStepIndex].classList.add('active')
      stepNumbers[formStepIndex].classList.add('active')

      if (formStepIndex === 0) {
        prevBtn.style.display = 'none'
      } else {
        prevBtn.style.display = 'block'
      }

      if (formStepIndex === steps.length - 1) {
        nextBtn.style.display = 'none'
        prevBtn.style.display = 'none'
        progressSteps.style.display = 'none'
      }

      const actives = document.querySelectorAll('.step__number.active')
      const percent = ((actives.length - 1) /(stepNumbers.length - 1)) * 100 + '%'
      progressSuccess.style.width = percent
    }
    updateFormStep()
}

stepForm()