import React, { useRef, useState } from 'react'
import * as S from './styles'

function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null)
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('')
  const [messageButton, setMessageButton] = useState('')

  const subscribe = async (e) => {
    e.preventDefault()

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const { error } = await res.json()

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error)

      return
    }

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessageButton(error)

      return
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = ''
    setMessage(
      'Seu e-mail foi cadastrado com sucesso! Verifique a caixa de entrada do seu e-mail'
    )
    inputEl.current.value = ''
    setMessageButton('Inscrito')
  }

  return (
    <form onSubmit={subscribe}>
      <S.InputContainer>
        <S.NewInput
          id="email-input"
          name="email"
          placeholder="seu@email.com"
          ref={inputEl}
          required
          type="email"
        />
        <S.NewInputLabel htmlFor="email-input" className="form__label">
          {'E-mail'}
        </S.NewInputLabel>
      </S.InputContainer>
      <S.Message style={{ color: 'white' }}>
        {message
          ? message
          : `Cheque a sua caixa de entrada, o e-mail pode estar em "Promoções". Enviaremos e-mails a você apenas quando novos cursos forem lançados. Sem spam.`}
      </S.Message>
      <S.SubscribeButton type="submit">
        {messageButton ? messageButton : `INSCREVER-SE`}
      </S.SubscribeButton>
    </form>
  )
}

export default Subscribe
