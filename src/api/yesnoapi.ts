import type { YesNoResponse } from '@/interfaces/yes-no-response-interface'

const getResponse = async (): Promise<YesNoResponse> => {
  const DEFAULT_REPONSE: YesNoResponse = {
    answer: 'No sé que decir',
    forced: false
  }

  try {
    const response = await fetch('https://yesno.wtf/api')

    if (response.ok) {
      return response.json()
    }

    return DEFAULT_REPONSE
  } catch (error) {
    console.log(error)
    return DEFAULT_REPONSE
  }
}

export { getResponse }
