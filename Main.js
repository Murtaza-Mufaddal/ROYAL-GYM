console.log("created by Murtaza");




  const scriptURL = 'https://script.google.com/macros/s/AKfycbxQdehlnBDATSXseNMLPeA0MtUCBuzvnIoaQ8vM4kC-L96ugBUTvZxvdKpzlgLvUACIfg/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .then(response => alert('Sucessfully Registerd'))
      .catch(error => console.error('Error!', error.message))
      .catch(error => alert('SomeThing Wrong Try Again'))
      form.reset();
  })

function myClick() {
        console.log("clicked");
}