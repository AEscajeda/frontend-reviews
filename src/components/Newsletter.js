import { useState } from 'react'

const Newsletter = () => {
  const [data, setData] = useState({
    email: '',
  })

  const { name, email, message } = data

  let [success, setSuccess] = useState(false)

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await fetch(
        'https://v1.nocodeapi.com/aesca99/google_sheets/qHiOdkudtAeOTIVD?tabId=Sheet1',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify([[email]]),
        }
      )
      setData({ email: '' })
      setSuccess(true)
      console.log(success)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <div>
        <p class="text-xl mt-4 text-gray-400 text-center lg:text-left">
          ¿Quieres estar en contacto con nosotros para saber las últimas
          noticias y promociones?
        </p>
        <br></br>
      </div>
      <form className="m-4 flex" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="your@mail.com"
        />
        <button class="px-8 rounded-r-lg bg-indigo-600  text-gray-200 font-bold p-4 uppercase border-indigo-600 border-t border-b border-r">
          Unirme!
        </button>
        <br></br>
      </form>
      {success === true && (
        <div>
          <br></br>
          <p class="text-xl mt-4 text-gray-400 text-center lg:text-left">
            Gracias por registrarte, tendrás noticias sobre nosotros muy pronto!
          </p>
        </div>
      )}
    </div>
  )
}

export default Newsletter
