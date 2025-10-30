interface Response {
  answer: string
  forced: boolean
  image: string
}

const getResponse = async (): Promise<Response | undefined> => {
  try {
    const response = await fetch('https://yesno.wtf/api')

    if (response.ok) {
      return response.json()
    }
  } catch (error) {
    console.log(error)
  }
}

export { getResponse }
